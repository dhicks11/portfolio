"use server";

import { Resend } from "resend";
import {
  validateName,
  validateEmail,
  validateSubject,
  validateMessage,
  checkRateLimit,
} from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT = process.env.CONTACT_EMAIL || "daylenhicks10@gmail.com";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(form: ContactForm) {
  // Rate limit by sender email (5 requests per minute)
  const rateCheck = checkRateLimit(`contact:${form.email}`, 5, 60_000);
  if (!rateCheck.allowed) {
    return { success: false, error: "Too many requests. Please wait a moment." };
  }

  // Validate & sanitize all inputs
  const name = validateName(form.name);
  if (!name.valid) return { success: false, error: name.error };

  const email = validateEmail(form.email);
  if (!email.valid) return { success: false, error: email.error };

  const subject = validateSubject(form.subject);
  if (!subject.valid) return { success: false, error: subject.error };

  const message = validateMessage(form.message);
  if (!message.valid) return { success: false, error: message.error };

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email.value,
      subject: `[Portfolio] ${subject.value} — from ${name.value}`,
      text: `Name: ${name.value}\nEmail: ${email.value}\nSubject: ${subject.value}\n\n${message.value}`,
    });

    if (error) {
      console.error("Resend error:", error.name, error.message);
      return { success: false, error: "Failed to send message. Please try again." };
    }

    return { success: true };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
