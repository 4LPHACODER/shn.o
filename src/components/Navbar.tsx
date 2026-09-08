import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems = [
{ id: 'home', label: 'Home' },
{ id: 'about', label: 'About' },
{ id: 'skills', label: 'Skills' },
{ id: 'projects', label: 'Projects' },
{ id: 'training', label: 'Training' },
{ id: 'achievements', label: 'Achievements' },
{ id: 'certificates', label: 'Certificates' },
{ id: 'contact', label: 'Contact' }];


const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 bg-white/90 backdrop-blur transition-shadow duration-200 ease-out ${
      scrolled ? 'shadow-card border-b border-blush-200' : 'border-b border-transparent'}`
      }>
      
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-6">
          <a
            href="#home"
            className="font-display text-lg tracking-tight text-ink-900 whitespace-nowrap">
            
            Shane D. Onsing
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative block whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-150 ease-out ${
                      isActive ?
                      'text-rosepink-700 bg-blush-100' :
                      'text-ink-500 hover:text-rosepink-700 hover:bg-blush-50'}`
                      }>
                      
                      {item.label}
                    </a>
                  </li>);

              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-blush-200 text-ink-700 transition-colors duration-150 ease-out hover:bg-blush-50">
            
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ?
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className="lg:hidden border-t border-blush-200 bg-white">
        
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {navItems.map((item) =>
          <li key={item.id}>
                <a
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`block rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-150 ease-out ${
              active === item.id ?
              'text-rosepink-700 bg-blush-100' :
              'text-ink-700 hover:bg-blush-50'}`
              }>
              
                  {item.label}
                </a>
              </li>
          )}
          </ul>
        </nav> :
      null}
    </header>);

}