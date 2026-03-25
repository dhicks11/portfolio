"use server";

import { Resend } from "resend";
import {
  validateName,
  validateEmail,
  validateTimeSlot,
  validateMeetingType,
  validateBookingDate,
  validateMessage,
  checkRateLimit,
} from "@/lib/validation";
import {
  createCalendarEvent,
  buildGoogleCalendarUrl,
} from "@/lib/google-calendar";
import { captureError } from "@/lib/sentry";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT = process.env.CONTACT_EMAIL || "daylenhicks10@gmail.com";

const DURATION_MAP: Record<string, number> = {
  Consultation: 30,
  "Project Discussion": 45,
  "Coffee Chat": 15,
  Interview: 60,
};

interface BookingForm {
  name: string;
  email: string;
  note: string;
  date: string;
  time: string;
  meetingType: string;
  duration: string;
}

function parseTime(timeStr: string): { hour: number; min: number } {
  const [timePart, meridiem] = timeStr.split(" ");
  const [hourStr, minStr] = timePart.split(":");
  let hour = parseInt(hourStr);
  const min = parseInt(minStr);
  if (meridiem === "PM" && hour !== 12) hour += 12;
  if (meridiem === "AM" && hour === 12) hour = 0;
  return { hour, min };
}

export async function sendBookingEmail(form: BookingForm) {
  // Rate limit by sender email (3 bookings per minute)
  const rateCheck = await checkRateLimit("booking", form.email);
  if (!rateCheck.allowed) {
    return { success: false, error: "Too many requests. Please wait a moment." };
  }

  // Validate & sanitize all inputs
  const name = validateName(form.name);
  if (!name.valid) return { success: false, error: name.error };

  const email = validateEmail(form.email);
  if (!email.valid) return { success: false, error: email.error };

  const meetingType = validateMeetingType(form.meetingType);
  if (!meetingType.valid) return { success: false, error: meetingType.error };

  const time = validateTimeSlot(form.time);
  if (!time.valid) return { success: false, error: time.error };

  const dateResult = validateBookingDate(form.date);
  if (!dateResult.valid) return { success: false, error: dateResult.error };

  const note = validateMessage(form.note, false);

  // Build start/end DateTimes
  const { hour, min } = parseTime(time.value);
  const startDate = new Date(dateResult.date!);
  startDate.setHours(hour, min, 0, 0);

  const durationMin = DURATION_MAP[meetingType.value] || 30;
  const endDate = new Date(startDate.getTime() + durationMin * 60 * 1000);

  const formattedDate = dateResult.date!.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Create Google Calendar event (if configured)
  const calendarResult = await createCalendarEvent({
    title: `${meetingType.value} with ${name.value}`,
    description: [
      `Booked via portfolio scheduling system.`,
      ``,
      `Name: ${name.value}`,
      `Email: ${email.value}`,
      note.value ? `Note: ${note.value}` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    startDateTime: startDate,
    endDateTime: endDate,
    attendeeEmail: email.value,
    attendeeName: name.value,
  });

  // Build a Google Calendar link for the email
  const calendarUrl = buildGoogleCalendarUrl({
    title: `${meetingType.value} with ${name.value}`,
    description: "Meeting booked via portfolio.",
    startDateTime: startDate,
    endDateTime: endDate,
  });

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Booking <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email.value,
      subject: `[Booking] ${meetingType.value} — ${name.value} on ${formattedDate}`,
      text: [
        `New meeting request from your portfolio:`,
        ``,
        `Name: ${name.value}`,
        `Email: ${email.value}`,
        `Meeting Type: ${meetingType.value}`,
        `Duration: ${durationMin} min`,
        `Date: ${formattedDate}`,
        `Time: ${time.value}`,
        note.value ? `\nNote: ${note.value}` : "",
        ``,
        calendarResult.success
          ? `✅ Google Calendar event created automatically (ID: ${calendarResult.eventId})`
          : `📅 Add to Google Calendar: ${calendarUrl}`,
        ``,
        `---`,
        `Reply to this email to confirm or reschedule.`,
      ].join("\n"),
    });

    if (error) {
      captureError(new Error(error.message), { source: "booking", type: error.name });
      return { success: false, error: "Failed to send booking request." };
    }

    return {
      success: true,
      calendarUrl,
      calendarEventCreated: calendarResult.success,
    };
  } catch (err) {
    captureError(err, { source: "booking" });
    return { success: false, error: "Failed to send booking request." };
  }
}
