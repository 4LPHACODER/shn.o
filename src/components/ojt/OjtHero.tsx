import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon } from 'lucide-react';

const easing = [0.23, 1, 0.32, 1] as const;

export function OjtHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-blush-200/70 via-blush-100/40 to-transparent blur-3xl animate-glow-pulse" />
        <div className="absolute -right-28 top-16 h-96 w-96 rounded-full bg-gradient-to-bl from-lilac-200/70 to-transparent blur-3xl animate-float-slower" />
        <svg
          viewBox="0 0 900 500"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-full w-full text-blush-300/70 animate-orbit-drift">
          
          <path
            d="M-20 420 C 180 300, 320 380, 480 260 S 760 140, 920 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeDasharray="6 10" />
          
          <path
            d="M-20 470 C 220 380, 400 430, 560 320 S 800 220, 920 280"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.6" />
          
        </svg>
        <span className="absolute left-[20%] top-24 h-1.5 w-1.5 rounded-full bg-rosepink-400/70 animate-twinkle" />
        <span className="absolute right-[26%] top-16 h-2 w-2 rounded-full bg-blush-300 animate-twinkle [animation-delay:1.6s]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: easing }}
          className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold text-rosepink-700 shadow-glass ring-1 ring-blush-200/70 backdrop-blur-md">
          
          <CodeIcon className="h-3.5 w-3.5" aria-hidden="true" />
          OJT Software Developer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05, ease: easing }}
          className="mt-7 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.01em] text-ink-900 sm:text-5xl lg:text-6xl">
          
          My OJT Journey
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: easing }}
          className="mt-5 text-base font-medium text-rosepink-800 sm:text-lg">
          
          Software Developer Intern at Advanced Infinit Technology Solutions Inc.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: easing }}
          className="mx-auto mt-7 max-w-2xl text-base leading-[1.85] text-ink-500">
          
          My On-the-Job Training journey at Advanced Infinit Technology Solutions Inc. provided
          meaningful experience in data management, software development, teamwork, and professional
          growth. Through real projects and collaborative activities, I strengthened my technical
          skills while gaining a deeper understanding of the software development environment.
        </motion.p>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3, delay: 0.2, ease: easing }}
          className="mx-auto mt-9 h-[2px] w-48 rounded-full bg-gradient-to-r from-transparent via-rosepink-500 to-transparent" />
        
      </div>
    </section>);

}