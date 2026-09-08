import React from 'react';
import { motion } from 'framer-motion';
import { MaximizeIcon } from 'lucide-react';
import { ojtPhotos, photoCategories } from '../../data/ojtJourney';
import type { OjtPhoto } from '../../data/ojtJourney';

interface OjtGalleryProps {
  onViewPhoto: (photo: OjtPhoto) => void;
}

export function OjtGallery({ onViewPhoto }: OjtGalleryProps) {
  return (
    <section className="bg-blush-50 py-16 lg:py-24" aria-labelledby="journey-photos">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <h2 id="journey-photos" className="font-display text-3xl text-ink-900 sm:text-4xl">
          Journey in Photos
        </h2>
        <div className="mt-4 h-px w-16 bg-rosepink-600" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
          Every photo from the internship, grouped by phase. Select any image to view it full size.
        </p>

        <div className="mt-12 space-y-14">
          {photoCategories.map((category) => {
            const photos = ojtPhotos.filter((photo) => photo.category === category);
            if (!photos.length) return null;

            return (
              <div key={category}>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-ink-900">{category}</h3>
                  <span className="rounded-full bg-white px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-rosepink-700 shadow-card">
                    {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
                  </span>
                </div>

                <ul className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
                  {photos.map((photo, index) =>
                  <motion.li
                    key={photo.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.26,
                      delay: Math.min(index * 0.03, 0.18),
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="break-inside-avoid">
                    
                      <button
                      type="button"
                      onClick={() => onViewPhoto(photo)}
                      aria-label={`Open full-size photo: ${photo.caption}`}
                      className="group relative block w-full overflow-hidden rounded-2xl border border-white/80 bg-white shadow-glass ring-1 ring-blush-200/80 transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
                      
                        <img
                        src={photo.src}
                        alt={photo.caption}
                        loading="lazy"
                        className="w-full object-contain transition-transform duration-200 ease-out group-hover:scale-[1.03]" />
                      
                        <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rosepink-700 opacity-0 shadow-card backdrop-blur transition-opacity duration-150 ease-out group-hover:opacity-100">
                          <MaximizeIcon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="absolute inset-x-0 bottom-0 bg-white/80 px-4 py-3 text-left text-xs font-medium leading-snug text-ink-800 opacity-0 backdrop-blur-md transition-opacity duration-150 ease-out group-hover:opacity-100">
                          {photo.caption}
                        </span>
                      </button>
                    </motion.li>
                  )}
                </ul>
              </div>);

          })}
        </div>
      </div>
    </section>);

}