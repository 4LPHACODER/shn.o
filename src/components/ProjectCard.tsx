import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from 'lucide-react';
import type { Project } from '../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.28, delay: Math.min(index * 0.05, 0.2), ease: [0.23, 1, 0.32, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white/70 shadow-glass ring-1 ring-blush-200/80 backdrop-blur-md transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1.5 hover:shadow-lift">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-blush-200/80 to-transparent opacity-0 blur-2xl transition-opacity duration-200 ease-out group-hover:opacity-100" />
      

      <div className="relative overflow-hidden border-b border-blush-200/80 bg-blush-50">
        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          loading="lazy"
          className="h-48 w-full object-cover object-top transition-transform duration-200 ease-out group-hover:scale-[1.03] sm:h-52" />
        
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-ink-900">{project.name}</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) =>
          <li
            key={tag}
            className="rounded-full bg-blush-100 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-rosepink-700">
            
              {tag}
            </li>
          )}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-ink-500">{project.description}</p>

        <div className="mt-auto pt-6">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosepink-600 to-rosepink-800 px-5 py-2.5 text-sm font-semibold text-white transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(190,24,93,0.55)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
            
            Visit Project
            <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.article>);

}