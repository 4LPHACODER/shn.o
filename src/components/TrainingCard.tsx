import React from 'react';
import { motion } from 'framer-motion';
import { CalendarIcon, BuildingIcon, EyeIcon } from 'lucide-react';
import type { Credential } from '../types/portfolio';

interface TrainingCardProps {
  credential: Credential;
  index: number;
  onView: (credential: Credential) => void;
}

export function TrainingCard({ credential, index, onView }: TrainingCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.05, 0.2), ease: [0.23, 1, 0.32, 1] }}
      className="relative pl-8 sm:pl-12">
      
      <span
        aria-hidden="true"
        className="absolute left-[7px] top-3 h-3.5 w-3.5 rounded-full border-2 border-white bg-rosepink-600 ring-4 ring-blush-100 sm:left-[15px]" />
      
      <article className="flex h-full flex-col gap-5 rounded-2xl border border-blush-200 bg-white p-5 shadow-card transition-shadow duration-200 ease-out hover:shadow-lift sm:flex-row sm:p-6">
        <button
          type="button"
          onClick={() => onView(credential)}
          className="group relative w-full shrink-0 overflow-hidden rounded-xl border border-blush-200 bg-blush-50 sm:w-72 lg:w-80"
          aria-label={`View certificate for ${credential.title}`}>
          
          <img
            src={credential.image}
            alt={`Certificate thumbnail: ${credential.title}`}
            loading="lazy"
            className="h-60 w-full object-contain p-2 transition-transform duration-200 ease-out group-hover:scale-[1.02] sm:h-56" />
          
        </button>

        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="text-base font-semibold leading-snug text-ink-900">{credential.title}</h3>
          <div className="mt-3 space-y-1.5 text-sm text-ink-500">
            <p className="flex items-start gap-2">
              <BuildingIcon className="mt-0.5 h-4 w-4 shrink-0 text-rosepink-600" aria-hidden="true" />
              <span>{credential.organization}</span>
            </p>
            <p className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 shrink-0 text-rosepink-600" aria-hidden="true" />
              <span>{credential.date}</span>
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-500">{credential.description}</p>

          <div className="mt-auto pt-5">
            <button
              type="button"
              onClick={() => onView(credential)}
              className="inline-flex items-center gap-2 rounded-full bg-blush-100 px-4 py-2 text-sm font-semibold text-rosepink-700 transition-colors duration-150 ease-out hover:bg-rosepink-600 hover:text-white">
              
              <EyeIcon className="h-4 w-4" />
              View Certificate
            </button>
          </div>
        </div>
      </article>
    </motion.li>);

}