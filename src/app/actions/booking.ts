"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface BookingForm {
  name: string;
  email: string;
  note: string;
  date: string;
  time: string;
  meetingType: string;
  duration: string;
}

export async function sendBookingEmail(form: BookingForm) {
  const { name, email, date, time, meetingType, duration, note } = form;

  if (!name || !email || !date || !time) {
    return { success: false, error: "All required fields must be filled." };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Booking <onboarding@resend.dev>",
      to: "daylenhicks10@gmail.com",
      replyTo: email,
      subject: `[Booking] ${meetingType} — ${name} on ${date}`,
      text: [
        `New meeting request from your portfolio:`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Meeting Type: ${meetingType}`,
        `Duration: ${duration}`,
        `Date: ${date}`,
        `Time: ${time}`,
        note ? `\nNote: ${note}` : "",
        ``,
        `---`,
        `Reply to this email to confirm or reschedule.`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error.name, error.message);
      return { success: false, error: "Failed to send booking request." };
    }

    return { success: true };
  } catch (err) {
    console.error("Booking error:", err);
    return { success: false, error: "Failed to send booking request." };
  }
}
