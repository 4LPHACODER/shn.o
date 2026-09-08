import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, ExternalLinkIcon } from 'lucide-react';
import type { Credential } from '../types/portfolio';

interface CertificateModalProps {
  credential: Credential | null;
  onClose: () => void;
}

export function CertificateModal({ credential, onClose }: CertificateModalProps) {
  useEffect(() => {
    if (!credential) return;
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
  }, [credential, onClose]);

  return createPortal(
    <AnimatePresence>
      {credential ?
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}>
        
          <div
          className="absolute inset-0 bg-ink-900/70"
          onClick={onClose}
          aria-hidden="true" />
        
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={credential.title}
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 4 }}
          transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-lift">
          
            <div className="flex items-start justify-between gap-4 border-b border-blush-200 px-5 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-rosepink-600">
                  {credential.category}
                </p>
                <h3 className="mt-1 text-base font-semibold text-ink-900 sm:text-lg">
                  {credential.title}
                </h3>
                <p className="mt-1 text-sm text-ink-500">
                  {credential.organization} · {credential.date}
                </p>
              </div>
              <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-blush-200 text-ink-700 transition-colors duration-150 ease-out hover:bg-blush-50">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-auto bg-blush-50 p-4 sm:p-6">
              <img
              src={credential.image}
              alt={`Certificate: ${credential.title}`}
              className="mx-auto h-auto w-full rounded-lg bg-white object-contain shadow-card" />
            
            </div>

            <div className="flex flex-col gap-3 border-t border-blush-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="max-w-2xl text-sm leading-relaxed text-ink-500">
                {credential.description}
              </p>
              <a
              href={credential.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-blush-300 px-4 py-2 text-sm font-medium text-rosepink-700 transition-colors duration-150 ease-out hover:bg-blush-100">
              
                Open full image
                <ExternalLinkIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div> :
      null}
    </AnimatePresence>,
    document.body
  );
}