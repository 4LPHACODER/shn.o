import React from 'react';
import { motion } from 'framer-motion';
import { MaximizeIcon } from 'lucide-react';
import type { Credential } from '../types/portfolio';

interface CertificateCardProps {
  credential: Credential;
  index: number;
  onView: (credential: Credential) => void;
}

export function CertificateCard({ credential, index, onView }: CertificateCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.26, delay: Math.min(index * 0.03, 0.24), ease: [0.23, 1, 0.32, 1] }}>
      
      <button
        type="button"
        onClick={() => onView(credential)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-blush-200 bg-white text-left shadow-card transition-colors duration-200 ease-out hover:border-rosepink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700"
        aria-label={`Open full-size certificate: ${credential.title}`}>
        
        <span className="relative block bg-blush-50">
          <img
            src={credential.image}
            alt={`Certificate: ${credential.title}`}
            loading="lazy"
            className="h-72 w-full object-contain p-3 transition-transform duration-200 ease-out group-hover:scale-[1.02] sm:h-80" />
          
          <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-rosepink-700 opacity-0 shadow-card transition-opacity duration-150 ease-out group-hover:opacity-100">
            <MaximizeIcon className="h-4 w-4" aria-hidden="true" />
          </span>
        </span>
        <span className="flex flex-1 flex-col p-4">
          <span className="text-xs font-semibold uppercase tracking-wide text-rosepink-600">
            {credential.category}
          </span>
          <span className="mt-2 text-sm font-semibold leading-snug text-ink-900">
            {credential.title}
          </span>
          <span className="mt-auto pt-3 text-xs text-ink-400">{credential.date}</span>
        </span>
      </button>
    </motion.li>);

}