import emailjs from '@emailjs/browser';
import type { ContactFormValues } from './contactValidation';

/**
 * EmailJS credentials.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * INSERT YOUR EMAILJS CREDENTIALS AS ENVIRONMENT VARIABLES (never in code):
 *
 *   VITE_EMAILJS_SERVICE_ID   → EmailJS dashboard ▸ Email Services
 *   VITE_EMAILJS_TEMPLATE_ID  → EmailJS dashboard ▸ Email Templates
 *   VITE_EMAILJS_PUBLIC_KEY   → EmailJS dashboard ▸ Account ▸ General
 *
 * Add them to a local `.env` file (and to your hosting provider's env settings):
 *
 *   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
 *   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
 *   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * In the EmailJS template, set:
 *   To email : sdonsing@nemsu.edu.ph   (or {{to_email}})
 *   Subject  : Portfolio Contact: {{subject}}
 *   Content  : Sender Name: {{from_name}}
 *              Sender Email: {{from_email}}
 *              Subject: {{subject}}
 *              Message: {{message}}
 *   Reply-To : {{from_email}}
 */
const env = (import.meta as unknown as {env?: Record<string, string | undefined>;}).env ?? {};

const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID ?? '';
const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID ?? '';
const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY ?? '';

export const RECIPIENT_EMAIL = 'sdonsing@nemsu.edu.ph';

export const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

/** Sends the contact form through the EmailJS browser SDK. */
export async function sendContactEmail(values: ContactFormValues): Promise<void> {
  if (!isEmailJsConfigured) {
    throw new Error('EmailJS environment variables are missing.');
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      to_email: RECIPIENT_EMAIL,
      from_name: values.name.trim(),
      from_email: values.email.trim(),
      reply_to: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim()
    },
    { publicKey: PUBLIC_KEY }
  );
}