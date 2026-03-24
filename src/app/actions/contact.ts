"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(form: ContactForm) {
  const { name, email, subject, message } = form;

  if (!name || !email || !subject || !message) {
    return { success: false, error: "All fields are required." };
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "daylenhicks10@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
