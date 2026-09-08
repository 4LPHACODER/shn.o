import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { CertificateCard } from './CertificateCard';
import { CertificateModal } from './CertificateModal';
import { credentials } from '../data/credentials';
import type { Credential } from '../types/portfolio';

export function Certificates() {
  const [selected, setSelected] = useState<Credential | null>(null);

  return (
    <section id="certificates" className="bg-blush-50 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title="Certificates"
          description={`Complete collection of ${credentials.length} official certificates. Select any card to open the full-size, unaltered scan.`} />
        

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((credential, index) =>
          <CertificateCard
            key={credential.id}
            credential={credential}
            index={index}
            onView={setSelected} />

          )}
        </ul>
      </div>

      <CertificateModal credential={selected} onClose={() => setSelected(null)} />
    </section>);

}