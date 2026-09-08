import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, TrophyIcon, StarIcon, BookOpenIcon } from 'lucide-react';
import type { Credential, CredentialCategory } from '../types/portfolio';

const iconByCategory: Record<CredentialCategory, typeof AwardIcon> = {
  Training: BookOpenIcon,
  Certificate: AwardIcon,
  Recognition: TrophyIcon,
  'Academic Achievement': StarIcon
};

interface AchievementCardProps {
  credential: Credential;
  index: number;
  featured?: boolean;
  onView: (credential: Credential) => void;
}

export function AchievementCard({
  credential,
  index,
  featured = false,
  onView
}: AchievementCardProps) {
  const Icon = iconByCategory[credential.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.04, 0.2), ease: [0.23, 1, 0.32, 1] }}
      className={`flex h-full flex-col overflow-hidden rounded-2xl border-l-4 border-rosepink-600 bg-white shadow-card transition-shadow duration-200 ease-out hover:shadow-lift ${
      featured ? 'lg:flex-row' : ''}`
      }>
      
      <button
        type="button"
        onClick={() => onView(credential)}
        aria-label={`View certificate for ${credential.title}`}
        className={`group shrink-0 border-b border-blush-200 bg-blush-50 ${
        featured ? 'lg:w-1/2 lg:border-b-0 lg:border-r' : ''}`
        }>
        
        <img
          src={credential.image}
          alt={`Certificate: ${credential.title}`}
          loading="lazy"
          className={`w-full object-contain p-3 transition-transform duration-200 ease-out group-hover:scale-[1.02] ${
          featured ? 'h-80 lg:h-full lg:min-h-[26rem]' : 'h-64 sm:h-72'}`
          } />
        
      </button>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blush-100 px-3 py-1 text-xs font-semibold text-rosepink-800">
          <Icon className="h-3.5 w-3.5" aria-hidden="true" />
          {credential.category}
        </span>
        <h3
          className={`mt-4 font-semibold leading-snug text-ink-900 ${
          featured ? 'text-lg sm:text-xl' : 'text-base'}`
          }>
          
          {credential.title}
        </h3>
        <p className="mt-2 text-sm text-ink-500">{credential.organization}</p>
        <p className="mt-1 text-sm text-ink-400">{credential.date}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-500">{credential.description}</p>

        <div className="mt-auto pt-5">
          <button
            type="button"
            onClick={() => onView(credential)}
            className="text-sm font-semibold text-rosepink-700 underline-offset-4 transition-colors duration-150 ease-out hover:text-rosepink-800 hover:underline">
            
            View Certificate
          </button>
        </div>
      </div>
    </motion.article>);

}