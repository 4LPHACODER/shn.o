import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { AchievementCard } from './AchievementCard';
import { CertificateModal } from './CertificateModal';
import { achievementCredentials } from '../data/credentials';
import type { Credential } from '../types/portfolio';

export function Achievements() {
  const [selected, setSelected] = useState<Credential | null>(null);
  const [featured, ...rest] = achievementCredentials;

  return (
    <section id="achievements" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          title="Achievements"
          description="Academic standing, competition results, and recognitions received during my studies at NEMSU." />
        

        <div className="mt-12 space-y-6">
          <AchievementCard credential={featured} index={0} featured onView={setSelected} />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((credential, index) =>
            <AchievementCard
              key={credential.id}
              credential={credential}
              index={index + 1}
              onView={setSelected} />

            )}
          </div>
        </div>
      </div>

      <CertificateModal credential={selected} onClose={() => setSelected(null)} />
    </section>);

}