import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
import type { OjtPhoto } from '../data/ojtJourney';

interface PhotoLightboxProps {
  photo: OjtPhoto | null;
  onClose: () => void;
}

export function PhotoLightbox({ photo, onClose }: PhotoLightboxProps) {
  useEffect(() => {
    if (!photo) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [photo, onClose]);

  return createPortal(
    <AnimatePresence>
      {photo ?
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
        
          <div className="absolute inset-0 bg-ink-900/75" onClick={onClose} aria-hidden="true" />
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-lift">
          
            <div className="flex items-start justify-between gap-4 border-b border-blush-200 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-rosepink-600">
                  {photo.category}
                </p>
                <p className="mt-1 text-sm text-ink-700">{photo.caption}</p>
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close photo viewer"
              className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-blush-200 text-ink-700 transition-colors duration-150 ease-out hover:bg-blush-50">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-auto bg-blush-50 p-4 sm:p-6">
              <img
              src={photo.src}
              alt={photo.caption}
              className="mx-auto h-auto w-full rounded-xl object-contain shadow-card" />
            
            </div>
          </motion.div>
        </motion.div> :
      null}
    </AnimatePresence>,
    document.body
  );
}