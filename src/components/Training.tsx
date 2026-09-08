import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { TrainingCard } from './TrainingCard';
import { FeaturedTrainingCard } from './FeaturedTrainingCard';
import { CertificateModal } from './CertificateModal';
import { trainingCredentials } from '../data/credentials';
import type { Credential } from '../types/portfolio';

const FEATURED_ID = 'ojt-infinit-solutions';

export function Training() {
  const [selected, setSelected] = useState<Credential | null>(null);

  const featured = trainingCredentials.find((item) => item.id === FEATURED_ID);
  const rest = trainingCredentials.filter((item) => item.id !== FEATURED_ID);

  return (
    <section id="training" className="bg-blush-50 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title="Training and Professional Development"
          description="Industry internship, seminars, workshops, and incubation programmes completed alongside the curriculum, each backed by its official certificate." />
        

        <ol className="relative mt-12 space-y-6 border-l border-blush-300 pl-0 sm:ml-2">
          {featured ?
          <FeaturedTrainingCard credential={featured} onView={setSelected} /> :
          null}

          {rest.map((credential, index) =>
          <TrainingCard
            key={credential.id}
            credential={credential}
            index={index}
            onView={setSelected} />

          )}
        </ol>
      </div>

      <CertificateModal credential={selected} onClose={() => setSelected(null)} />
    </section>);

}