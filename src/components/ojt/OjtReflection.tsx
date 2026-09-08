import React from 'react';
import { motion } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';

export function OjtReflection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24" aria-labelledby="journey-reflection">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-8 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-blush-200/60 to-transparent blur-3xl animate-glow-pulse" />
      

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="rounded-3xl border border-white/80 bg-white/70 p-8 shadow-glass ring-1 ring-blush-200/80 backdrop-blur-md sm:p-12">
          
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-rosepink-600 to-rosepink-800 text-white shadow-lift">
            <QuoteIcon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2
            id="journey-reflection"
            className="mt-6 font-display text-2xl text-ink-900 sm:text-3xl">
            
            A Meaningful Professional Milestone
          </h2>
          <p className="mt-5 text-base leading-[1.9] text-ink-700">
            This OJT experience helped me transform classroom knowledge into practical skills. It
            strengthened my confidence in data management and software development while teaching me
            the value of responsibility, collaboration, and continuous learning. The journey at
            Advanced Infinit Technology Solutions Inc. became an important foundation for my growth
            as a future technology professional.
          </p>
        </motion.div>
      </div>
    </section>);

}