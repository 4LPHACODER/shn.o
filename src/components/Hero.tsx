import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, MailIcon, GraduationCapIcon, MapPinIcon, FileSearchIcon, RocketIcon, Code2Icon, BoxIcon } from "lucide-react";
import { profileImage } from "../data/credentials";
import { GlassCard } from "./GlassCard";
const easing = [0.23, 1, 0.32, 1] as const;
const glassCards: {
  id: string;
  label: string;
  icon: BoxIcon;
  position: string;
}[] = [{
  id: 'student',
  label: 'Computer Science Student',
  icon: GraduationCapIcon,
  position: '-left-16 top-10 max-w-[13rem] animate-float-slow'
}, {
  id: 'researcher',
  label: 'Researcher',
  icon: FileSearchIcon,
  position: '-right-14 top-1/4 animate-float-slower'
}, {
  id: 'founder',
  label: 'Startup Founder',
  icon: RocketIcon,
  position: '-left-14 bottom-24 animate-float-slower'
}, {
  id: 'solutions',
  label: 'Building Purposeful Digital Solutions',
  icon: Code2Icon,
  position: '-right-12 bottom-6 max-w-[14rem] animate-float-slow'
}];
const academicCards = [{
  label: 'Program',
  value: 'BS Computer Science',
  icon: GraduationCapIcon
}, {
  label: 'Campus',
  value: 'North Eastern Mindanao State University',
  icon: MapPinIcon
}];
export function Hero() {
  return <section id="home" className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-28">
      {/* Ambient gradient mesh + blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-blush-200/70 via-blush-100/40 to-transparent blur-3xl animate-glow-pulse" />
        <div className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-gradient-to-bl from-lilac-200/70 via-blush-100/30 to-transparent blur-3xl animate-float-slower" />
        <div className="absolute left-1/3 bottom-0 h-72 w-72 rounded-full bg-gradient-to-t from-blush-200/50 to-transparent blur-3xl animate-float-slow" />
        <svg viewBox="0 0 800 600" className="absolute left-0 top-10 h-full w-full text-blush-300/60 animate-orbit-drift" preserveAspectRatio="none">
          <ellipse cx="300" cy="300" rx="260" ry="230" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <ellipse cx="300" cy="300" rx="330" ry="290" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
          <path d="M0 520 C 200 400, 520 470, 800 330" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        </svg>
        <span className="absolute left-[18%] top-24 h-1.5 w-1.5 rounded-full bg-rosepink-400/70 animate-twinkle" />
        <span className="absolute left-[46%] top-40 h-1 w-1 rounded-full bg-rosepink-500/60 animate-twinkle [animation-delay:1.2s]" />
        <span className="absolute right-[22%] top-16 h-2 w-2 rounded-full bg-blush-300 animate-twinkle [animation-delay:2.4s]" />
        <span className="absolute right-[12%] bottom-24 h-1.5 w-1.5 rounded-full bg-rosepink-400/60 animate-twinkle [animation-delay:0.6s]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24">
          {/* Portrait — first in DOM so it stacks on top on mobile */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.96
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.32,
          ease: easing
        }} className="group relative mx-auto w-full max-w-sm lg:max-w-[24rem]">
            <div aria-hidden="true" className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-br from-blush-200/80 via-lilac-100/60 to-transparent blur-2xl animate-glow-pulse" />

            <div className="relative rounded-[30px] border border-white/80 bg-white/60 p-2.5 shadow-glass ring-1 ring-blush-200/80 backdrop-blur-md transition-transform duration-300 ease-out group-hover:-translate-y-1.5">
              <div className="overflow-hidden rounded-[24px] border-4 border-white bg-blush-50">
                <img src={profileImage} alt="Portrait of Shane D. Onsing" className="h-auto w-full object-contain" />
              </div>
            </div>

            {/* Floating glass cards — desktop only */}
            {glassCards.map((card) => <GlassCard key={card.id} label={card.label} icon={card.icon} className={`absolute z-10 hidden lg:inline-flex ${card.position}`} />)}
          </motion.div>

          {/* Text content */}
          <div className="lg:pl-2">
            <motion.p initial={{
            opacity: 0,
            y: 14
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.28,
            ease: easing
          }} className="text-xs font-semibold uppercase tracking-[0.22em] text-rosepink-600">
              Welcome to my portfolio
            </motion.p>

            <motion.h1 initial={{
            opacity: 0,
            y: 18
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.05,
            ease: easing
          }} className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.01em] text-ink-900 sm:text-6xl lg:text-[4.25rem]">
              Shane D. Onsing
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.1,
            ease: easing
          }} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-medium text-rosepink-800 sm:text-lg">
              <span>Computer Science Student</span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-rosepink-400" />
              <span>Researcher</span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-rosepink-400" />
              <span>Startup Founder</span>
            </motion.p>

            <motion.p initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.15,
            ease: easing
          }} className="mt-7 max-w-xl text-base leading-[1.85] text-ink-500 sm:text-[1.0625rem]">
              A Computer Science student, researcher, and startup founder passionate about creating
              purposeful digital solutions through innovation, continuous learning, and
              technology-driven collaboration.
            </motion.p>

            <motion.div aria-hidden="true" initial={{
            opacity: 0,
            scaleX: 0.5
          }} animate={{
            opacity: 1,
            scaleX: 1
          }} transition={{
            duration: 0.3,
            delay: 0.2,
            ease: easing
          }} className="mt-8 h-[2px] w-44 origin-left rounded-full bg-gradient-to-r from-rosepink-600 via-rosepink-400 to-transparent" />

            {/* Simplified glass chips for tablet and mobile */}
            <div className="mt-8 flex flex-wrap gap-3 lg:hidden">
              {glassCards.map((card) => <GlassCard key={card.id} label={card.label} icon={card.icon} />)}
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.24,
            ease: easing
          }} className="mt-8 flex flex-wrap gap-3">
              <a href="#achievements" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosepink-600 to-rosepink-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-[transform,box-shadow,opacity] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-14px_rgba(190,24,93,0.55)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
                View My Achievements
                <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-rosepink-400 bg-white/70 px-6 py-3.5 text-sm font-semibold text-rosepink-700 backdrop-blur transition-colors duration-150 ease-out hover:bg-blush-100 active:bg-blush-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>
            </motion.div>

            <motion.dl initial={{
            opacity: 0,
            y: 16
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.3,
            delay: 0.3,
            ease: easing
          }} className="mt-10 grid gap-4 sm:max-w-xl sm:grid-cols-2">
              {academicCards.map(({
              label,
              value,
              icon: Icon
            }) => <div key={label} className="rounded-xl border border-blush-200 border-t-2 border-t-rosepink-600 bg-white/80 px-4 py-3.5 shadow-card backdrop-blur">
                  <dt className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-400">
                    <Icon className="h-3.5 w-3.5 text-rosepink-600" aria-hidden="true" />
                    {label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold leading-snug text-ink-900">
                    {value}
                  </dd>
                </div>)}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>;
}