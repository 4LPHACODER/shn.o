import React from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  BuildingIcon,
  EyeIcon,
  ExternalLinkIcon,
  Code2Icon,
  SparklesIcon } from
'lucide-react';
import type { Credential } from '../types/portfolio';

interface FeaturedTrainingCardProps {
  credential: Credential;
  onView: (credential: Credential) => void;
}

export function FeaturedTrainingCard({ credential, onView }: FeaturedTrainingCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="relative pl-8 sm:pl-12">
      
      <span
        aria-hidden="true"
        className="absolute left-[3px] top-2 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-rosepink-600 to-rosepink-800 text-white shadow-lift sm:left-[11px]">
        
        <Code2Icon className="h-4 w-4" />
      </span>

      <div className="rounded-[26px] bg-gradient-to-br from-rosepink-400 via-blush-300 to-lilac-200 p-[1.5px] shadow-lift">
        <article className="relative overflow-hidden rounded-[24px] bg-white/80 p-5 backdrop-blur-md sm:p-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-blush-200/80 to-transparent blur-3xl" />
          

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/80 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-wide text-rosepink-800 shadow-card backdrop-blur">
              <SparklesIcon className="h-3 w-3" aria-hidden="true" />
              Featured Experience
            </span>

            <div className="mt-5 flex flex-col gap-6 lg:flex-row">
              <button
                type="button"
                onClick={() => onView(credential)}
                aria-label={`View certificate for ${credential.title}`}
                className="group w-full shrink-0 overflow-hidden rounded-2xl border border-blush-200 bg-blush-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700 lg:w-[22rem]">
                
                <img
                  src={credential.image}
                  alt={`Certificate: ${credential.title}`}
                  loading="lazy"
                  className="h-64 w-full object-contain p-3 transition-transform duration-200 ease-out group-hover:scale-[1.03] lg:h-full lg:min-h-[16rem]" />
                
              </button>

              <div className="flex min-w-0 flex-1 flex-col">
                <h3 className="font-display text-xl leading-snug text-ink-900 sm:text-2xl">
                  {credential.title}
                </h3>
                <div className="mt-4 space-y-2 text-sm text-ink-500">
                  <p className="flex items-start gap-2">
                    <BuildingIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-rosepink-600"
                      aria-hidden="true" />
                    
                    <span>{credential.organization}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 shrink-0 text-rosepink-600" aria-hidden="true" />
                    <span>{credential.date}</span>
                  </p>
                </div>
                <p className="mt-4 text-sm leading-[1.8] text-ink-500">{credential.description}</p>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                    href="/ojt-journey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosepink-600 to-rosepink-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lift transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(190,24,93,0.55)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
                    
                    View Journey
                    <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => onView(credential)}
                    className="inline-flex items-center gap-2 rounded-full border border-rosepink-400 bg-white/70 px-5 py-2.5 text-sm font-semibold text-rosepink-700 backdrop-blur transition-colors duration-150 ease-out hover:bg-blush-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
                    
                    <EyeIcon className="h-4 w-4" aria-hidden="true" />
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </motion.li>);

}