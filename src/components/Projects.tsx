import React from 'react';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-gradient-to-br from-blush-100/80 to-transparent blur-3xl" />
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gradient-to-tl from-lilac-100 to-transparent blur-3xl" />
      

      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          description="Platforms I help build as a student developer and startup founder — from robotics and agriculture technology to collaborative startup work." />
        

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) =>
          <ProjectCard key={project.id} project={project} index={index} />
          )}
        </div>
      </div>
    </section>);

}