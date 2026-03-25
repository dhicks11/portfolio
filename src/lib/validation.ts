/**
 * Shared input validation & sanitization for server actions.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;

/** Strip characters that could be used for email header injection. */
export function sanitize(input: string): string {
  return input.replace(/[\r\n\x00]/g, "").trim();
}

/** Truncate a string to a max length. */
export function truncate(input: string, max: number): string {
  return input.length > max ? input.slice(0, max) : input;
}

/** Validate and sanitize a name field. */
export function validateName(raw: string): { valid: boolean; value: string; error?: string } {
  const value = truncate(sanitize(raw), MAX_NAME_LENGTH);
  if (!value) return { valid: false, value, error: "Name is required." };
  return { valid: true, value };
}

/** Validate and sanitize an email field. */
export function validateEmail(raw: string): { valid: boolean; value: string; error?: string } {
  const value = truncate(sanitize(raw), MAX_EMAIL_LENGTH).toLowerCase();
  if (!value) return { valid: false, value, error: "Email is required." };
  if (!EMAIL_REGEX.test(value)) return { valid: false, value, error: "Invalid email format." };
  return { valid: true, value };
}

/** Validate a subject/meeting-type string. */
export function validateSubject(raw: string): { valid: boolean; value: string; error?: string } {
  const value = truncate(sanitize(raw), MAX_SUBJECT_LENGTH);
  if (!value) return { valid: false, value, error: "Subject is required." };
  return { valid: true, value };
}

/** Validate a message/note field. */
export function validateMessage(raw: string, required = true): { valid: boolean; value: string; error?: string } {
  const value = truncate(sanitize(raw), MAX_MESSAGE_LENGTH);
  if (required && !value) return { valid: false, value, error: "Message is required." };
  return { valid: true, value };
}

const ALLOWED_TIME_SLOTS = new Set([
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
]);

const ALLOWED_MEETING_TYPES = new Set([
  "Consultation", "Project Discussion", "Coffee Chat", "Interview",
]);

/** Validate a time slot is one of the allowed values. */
export function validateTimeSlot(raw: string): { valid: boolean; value: string; error?: string } {
  const value = sanitize(raw);
  if (!ALLOWED_TIME_SLOTS.has(value)) return { valid: false, value, error: "Invalid time slot." };
  return { valid: true, value };
}

/** Validate a meeting type is one of the allowed values. */
export function validateMeetingType(raw: string): { valid: boolean; value: string; error?: string } {
  const value = sanitize(raw);
  if (!ALLOWED_MEETING_TYPES.has(value)) return { valid: false, value, error: "Invalid meeting type." };
  return { valid: true, value };
}

/** Validate a date string and ensure it's a future weekday. */
export function validateBookingDate(raw: string): { valid: boolean; value: string; date?: Date; error?: string } {
  const value = sanitize(raw);
  const parsed = new Date(value);

  if (isNaN(parsed.getTime())) return { valid: false, value, error: "Invalid date." };

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (parsed < today) return { valid: false, value, error: "Date must be in the future." };

  const day = parsed.getDay();
  if (day === 0 || day === 6) return { valid: false, value, error: "Weekends are not available." };

  return { valid: true, value, date: parsed };
}

/**
 * Simple in-memory rate limiter.
 * In production, replace with Redis-based rate limiting.
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  maxRequests = 5,
  windowMs = 60_000
): { allowed: boolean; retryAfterMs?: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(key);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (entry.count >= maxRequests) {
    return { allowed: false, retryAfterMs: entry.resetAt - now };
  }

  entry.count++;
  return { allowed: true };
}
