import React, { useEffect, useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { returnToPortfolio } from '../utils/returnToPortfolio';
import { OjtHero } from '../components/ojt/OjtHero';
import { OjtOverview } from '../components/ojt/OjtOverview';
import { OjtTimeline } from '../components/ojt/OjtTimeline';
import { OjtGallery } from '../components/ojt/OjtGallery';
import { OjtReflection } from '../components/ojt/OjtReflection';
import { OjtFooter } from '../components/ojt/OjtFooter';
import { PhotoLightbox } from '../components/PhotoLightbox';
import type { OjtPhoto } from '../data/ojtJourney';

export function OjtJourney() {
  const [selected, setSelected] = useState<OjtPhoto | null>(null);

  useEffect(() => {
    document.title = 'OJT Journey — Shane D. Onsing';
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 border-b border-blush-200/70 bg-white/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
          <a
            href="/#training"
            onClick={returnToPortfolio}
            className="inline-flex items-center gap-2 text-sm font-semibold text-rosepink-700 transition-colors duration-150 ease-out hover:text-rosepink-800">
            
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            Back to Portfolio
          </a>
          <p className="hidden font-display text-base text-ink-900 sm:block">
            OJT Journey — Shane D. Onsing
          </p>
        </div>
      </header>

      <main>
        <OjtHero />
        <OjtOverview />
        <OjtTimeline onViewPhoto={setSelected} />
        <OjtGallery onViewPhoto={setSelected} />
        <OjtReflection />
      </main>

      <OjtFooter />
      <PhotoLightbox photo={selected} onClose={() => setSelected(null)} />
    </>);

}