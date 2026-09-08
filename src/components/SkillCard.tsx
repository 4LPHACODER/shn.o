import React from "react";
import { motion } from "framer-motion";
import { SparklesIcon, BoxIcon } from "lucide-react";
import { SkillGroup } from "../types/portfolio";
interface SkillCardProps {
  group: SkillGroup;
  icon: BoxIcon;
  index: number;
}
export function SkillCard({
  group,
  icon: Icon,
  index
}: SkillCardProps) {
  const featured = Boolean(group.featured);
  return <motion.article initial={{
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
    delay: Math.min(index * 0.04, 0.2),
    ease: [0.23, 1, 0.32, 1]
  }} className={`group flex h-full flex-col rounded-2xl p-6 shadow-card transition-colors duration-200 ease-out ${featured ? 'border border-rosepink-400/70 bg-white ring-1 ring-blush-300 sm:col-span-2 lg:col-span-2' : 'border border-blush-200 bg-white hover:border-rosepink-400 hover:bg-blush-50'}`}>
      <div className="flex items-center gap-3">
        <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 ease-out ${featured ? 'bg-gradient-to-br from-rosepink-600 to-rosepink-800 text-white' : 'bg-blush-100 text-rosepink-700 group-hover:bg-rosepink-600 group-hover:text-white'}`}>
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-ink-900">{group.title}</h3>
        {featured ? <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-blush-100 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-rosepink-800">
            <SparklesIcon className="h-3 w-3" aria-hidden="true" />
            Focus area
          </span> : null}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-500">{group.blurb}</p>

      <ul className={`mt-6 space-y-4 ${featured ? 'sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-4' : ''}`}>
        {group.skills.map((skill) => <li key={skill.name}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm font-medium text-ink-800">{skill.name}</span>
              <span className="text-xs text-ink-400">{skill.level}%</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-blush-200" role="progressbar" aria-label={`${skill.name} proficiency`} aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
              <motion.div className={`h-full rounded-full ${featured ? 'bg-gradient-to-r from-rosepink-600 to-rosepink-800' : 'bg-rosepink-600'}`} initial={{
            width: 0
          }} whileInView={{
            width: `${skill.level}%`
          }} viewport={{
            once: true,
            amount: 0.6
          }} transition={{
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }} />
            </div>
          </li>)}
      </ul>
    </motion.article>;
}