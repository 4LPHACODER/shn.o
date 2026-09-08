import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, FacebookIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import { ContactLink } from './ContactLink';
import { ContactForm } from './ContactForm';

export const contactChannels = [
{
  label: 'Email',
  value: 'sdonsing@nemsu.edu.ph',
  href: 'mailto:sdonsing@nemsu.edu.ph',
  icon: MailIcon,
  external: false
},
{
  label: 'GitHub',
  value: 'github.com/shepisces',
  href: 'https://github.com/shepisces',
  icon: GithubIcon,
  external: true
},
{
  label: 'Facebook',
  value: 'facebook.com/shndvo',
  href: 'https://www.facebook.com/shndvo',
  icon: FacebookIcon,
  external: true
}];


export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-gradient-to-bl from-blush-100 to-transparent blur-3xl" />
      

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title="Let's Connect"
          description="I welcome conversations about academic collaboration, student research, startup work, and opportunities to build alongside other developers. Feel free to reach out — I read every message." />
        

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="space-y-4">
            
            {contactChannels.map((channel) =>
            <ContactLink
              key={channel.label}
              label={channel.label}
              value={channel.value}
              href={channel.href}
              icon={channel.icon}
              external={channel.external} />

            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.28, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}>
            
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>);

}