import { google } from "googleapis";

/**
 * Google Calendar integration for the scheduling system.
 *
 * Setup instructions:
 * 1. Go to https://console.cloud.google.com
 * 2. Create a project and enable the Google Calendar API
 * 3. Create a Service Account under Credentials
 * 4. Download the JSON key file
 * 5. Share your Google Calendar with the service account email
 *    (found in the JSON key file as "client_email")
 * 6. Set these environment variables:
 *    - GOOGLE_CALENDAR_CLIENT_EMAIL=...@...iam.gserviceaccount.com
 *    - GOOGLE_CALENDAR_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
 *    - GOOGLE_CALENDAR_ID=your-email@gmail.com (or calendar ID)
 */

function getCalendarClient() {
  const clientEmail = process.env.GOOGLE_CALENDAR_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_CALENDAR_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    return null;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar.events"],
  });

  return google.calendar({ version: "v3", auth });
}

interface CalendarEventInput {
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  attendeeEmail: string;
  attendeeName: string;
}

export async function createCalendarEvent(
  input: CalendarEventInput
): Promise<{ success: boolean; eventId?: string; error?: string }> {
  const calendar = getCalendarClient();
  const calendarId =
    process.env.GOOGLE_CALENDAR_ID || "primary";

  if (!calendar) {
    return {
      success: false,
      error: "Google Calendar not configured — skipping event creation.",
    };
  }

  try {
    const event = await calendar.events.insert({
      calendarId,
      requestBody: {
        summary: input.title,
        description: input.description,
        start: {
          dateTime: input.startDateTime.toISOString(),
          timeZone: "America/New_York",
        },
        end: {
          dateTime: input.endDateTime.toISOString(),
          timeZone: "America/New_York",
        },
        attendees: [
          { email: input.attendeeEmail, displayName: input.attendeeName },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 60 },
            { method: "popup", minutes: 15 },
          ],
        },
      },
      sendUpdates: "all",
    });

    return { success: true, eventId: event.data.id ?? undefined };
  } catch (err) {
    console.error("Google Calendar error:", err);
    return {
      success: false,
      error: "Failed to create Google Calendar event.",
    };
  }
}

/**
 * Generates a Google Calendar URL that opens the "Add Event" page.
 * Works without any API credentials — just a URL the user clicks.
 */
export function buildGoogleCalendarUrl(input: {
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
}): string {
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: input.title,
    dates: `${fmt(input.startDateTime)}/${fmt(input.endDateTime)}`,
    details: input.description,
    ctz: "America/New_York",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}
