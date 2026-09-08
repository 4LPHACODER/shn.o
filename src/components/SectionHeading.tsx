import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
      className={align === 'center' ? 'max-w-2xl mx-auto text-center' : 'max-w-2xl'}>
      
      <h2 className="font-display text-3xl sm:text-4xl text-ink-900">{title}</h2>
      <div
        className={`mt-4 h-px w-16 bg-rosepink-600 ${align === 'center' ? 'mx-auto' : ''}`}
        aria-hidden="true" />
      
      {description ?
      <p className="mt-5 text-base leading-relaxed text-ink-500">{description}</p> :
      null}
    </motion.div>);

}