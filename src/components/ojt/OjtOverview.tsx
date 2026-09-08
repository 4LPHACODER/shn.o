import React from "react";
import { motion } from "framer-motion";
import { BriefcaseIcon, Building2Icon, TargetIcon, SparklesIcon, BoxIcon } from "lucide-react";
import { journeyOverview } from "../../data/ojtJourney";
const iconByLabel: Record<string, BoxIcon> = {
  Position: BriefcaseIcon,
  Company: Building2Icon,
  'Focus Areas': TargetIcon,
  'Key Experiences': SparklesIcon
};
export function OjtOverview() {
  return <section className="bg-blush-50 py-16 lg:py-20" aria-labelledby="journey-overview">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <h2 id="journey-overview" className="font-display text-3xl text-ink-900 sm:text-4xl">
          Journey Overview
        </h2>
        <div className="mt-4 h-px w-16 bg-rosepink-600" aria-hidden="true" />

        <dl className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journeyOverview.map(({
          label,
          value
        }, index) => {
          const Icon = iconByLabel[label] ?? SparklesIcon;
          return <motion.div key={label} initial={{
            opacity: 0,
            y: 16
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.3
          }} transition={{
            duration: 0.28,
            delay: Math.min(index * 0.05, 0.2),
            ease: [0.23, 1, 0.32, 1]
          }} className="flex h-full flex-col rounded-2xl border border-white/80 bg-white/75 p-5 shadow-glass ring-1 ring-blush-200/80 backdrop-blur-md transition-transform duration-200 ease-out hover:-translate-y-1">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blush-100 text-rosepink-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <dt className="mt-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold leading-snug text-ink-900">{value}</dd>
              </motion.div>;
        })}
        </dl>
      </div>
    </section>;
}