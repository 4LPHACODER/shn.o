import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon, SchoolIcon, CodeIcon } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

const academicInfo = [
{
  label: 'Program',
  value: 'Bachelor of Science in Computer Science',
  icon: GraduationCapIcon
},
{
  label: 'School',
  value: 'North Eastern Mindanao State University',
  icon: SchoolIcon
},
{
  label: 'Role',
  value: 'Student Developer · Researcher · Startup Founder',
  icon: CodeIcon
}];


export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title="About Me" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="space-y-5 text-base leading-relaxed text-ink-700">
            <p>
              I am a Computer Science student, researcher, and startup founder at North Eastern
              Mindanao State University, Tandag Campus, under the College of Information Technology
              Education. My coursework spans programming fundamentals, web and database systems, and
              software development practice.
            </p>
            <p>
              My research interests centre on identifying real problems in my region and studying
              how technology can address them responsibly — from problem framing and data analysis
              to system analysis and documentation. That research work feeds directly into the
              platforms I help build as a founder, where innovation has to survive contact with
              actual users.
            </p>
            <p>
              Alongside this, student leadership, pitching competitions, and industry internship
              experience have taught me how much good outcomes depend on teamwork, clear
              communication, and disciplined planning. My goal is to keep strengthening both
              technical depth and professional judgement, and to contribute purposeful digital
              solutions for my community.
            </p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="h-fit rounded-2xl border border-blush-200 bg-blush-50 p-6 shadow-card sm:p-7"
            aria-label="Academic information">
            
            <h3 className="font-display text-xl text-ink-900">Academic Information</h3>
            <dl className="mt-6 space-y-6">
              {academicInfo.map(({ label, value, icon: Icon }) =>
              <div key={label} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-rosepink-700 shadow-card">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-ink-400">{label}</dt>
                    <dd className="mt-1 text-sm font-medium leading-snug text-ink-900">{value}</dd>
                  </div>
                </div>
              )}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>);

}