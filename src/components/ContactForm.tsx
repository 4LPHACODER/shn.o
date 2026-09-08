import React, { useRef, useState } from 'react';
import { SendIcon, CheckCircle2Icon, Loader2Icon, AlertCircleIcon } from 'lucide-react';
import {
  validateContactForm,
  MESSAGE_MIN_LENGTH,
  type ContactFormErrors,
  type ContactFormValues } from
'../utils/contactValidation';
import { sendContactEmail, RECIPIENT_EMAIL } from '../utils/emailjs';

type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const emptyValues: ContactFormValues = { name: '', email: '', subject: '', message: '' };

const baseField =
'w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors duration-150 ease-out focus:outline-none focus:ring-2';
const validField = 'border-blush-300 focus:border-rosepink-600 focus:ring-blush-200';
const invalidField = 'border-rosepink-500 focus:border-rosepink-700 focus:ring-rosepink-400/30';

function fieldClass(hasError: boolean): string {
  return `${baseField} ${hasError ? invalidField : validField}`;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  // Hidden honeypot — real visitors never fill this in.
  const honeypotRef = useRef<HTMLInputElement>(null);

  const update = (field: keyof ContactFormValues) => (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setValues((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status === 'sent' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Silently accept and discard bot submissions that trip the honeypot.
    if (honeypotRef.current?.value) {
      setStatus('sent');
      setValues(emptyValues);
      return;
    }

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('sending');
    try {
      await sendContactEmail(values);
      setStatus('sent');
      setValues(emptyValues);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-blush-200 bg-white/80 p-6 shadow-card backdrop-blur sm:p-8"
      aria-label="Contact form">
      
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink-800">
            Name <span className="text-rosepink-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={update('name')}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Your full name"
            className={`mt-2 ${fieldClass(Boolean(errors.name))}`} />
          
          {errors.name ?
          <p id="name-error" className="mt-2 text-xs font-medium text-rosepink-700">
              {errors.name}
            </p> :
          null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink-800">
            Email <span className="text-rosepink-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={update('email')}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="you@example.com"
            className={`mt-2 ${fieldClass(Boolean(errors.email))}`} />
          
          {errors.email ?
          <p id="email-error" className="mt-2 text-xs font-medium text-rosepink-700">
              {errors.email}
            </p> :
          null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="subject" className="block text-sm font-medium text-ink-800">
          Subject <span className="text-rosepink-600">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={update('subject')}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          placeholder="What is this about?"
          className={`mt-2 ${fieldClass(Boolean(errors.subject))}`} />
        
        {errors.subject ?
        <p id="subject-error" className="mt-2 text-xs font-medium text-rosepink-700">
            {errors.subject}
          </p> :
        null}
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-medium text-ink-800">
          Message <span className="text-rosepink-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={update('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-hint'}
          placeholder="Share a few details about your project, research, or opportunity."
          className={`mt-2 resize-y ${fieldClass(Boolean(errors.message))}`} />
        
        {errors.message ?
        <p id="message-error" className="mt-2 text-xs font-medium text-rosepink-700">
            {errors.message}
          </p> :

        <p id="message-hint" className="mt-2 text-xs text-ink-400">
            At least {MESSAGE_MIN_LENGTH} characters.
          </p>
        }
      </div>

      {/* Honeypot field — hidden from users and screen readers, visible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          ref={honeypotRef}
          id="company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue="" />
        
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosepink-600 to-rosepink-800 px-6 py-3 text-sm font-semibold text-white shadow-lift transition-[transform,box-shadow,opacity] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(190,24,93,0.55)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
          
          {status === 'sending' ?
          <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> :

          <SendIcon className="h-4 w-4" aria-hidden="true" />
          }
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>

        <div role="status" aria-live="polite" className="text-sm">
          {status === 'sent' ?
          <p className="inline-flex items-center gap-2 font-medium text-rosepink-700">
              <CheckCircle2Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              Thank you! Your message has been sent successfully.
            </p> :
          null}
          {status === 'error' ?
          <p className="inline-flex items-start gap-2 font-medium text-rosepink-800">
              <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                Message could not be sent. Please try again or email me directly at{' '}
                <a
                href={`mailto:${RECIPIENT_EMAIL}`}
                className="underline underline-offset-4 hover:text-rosepink-700">
                
                  {RECIPIENT_EMAIL}
                </a>
                .
              </span>
            </p> :
          null}
        </div>
      </div>
    </form>);

}