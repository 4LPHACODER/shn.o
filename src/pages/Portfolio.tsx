import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Training } from '../components/Training';
import { Achievements } from '../components/Achievements';
import { Certificates } from '../components/Certificates';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Portfolio() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-rosepink-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Achievements />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>);

}