import React from "react";
import { motion } from "framer-motion";
import { DatabaseIcon, Code2Icon, LayoutDashboardIcon, UsersIcon, PartyPopperIcon, ClockIcon, BriefcaseIcon, SparklesIcon, BoxIcon } from "lucide-react";
import { ojtMilestones, ojtPhotos, OjtPhoto } from "../../data/ojtJourney";
const iconByKey: Record<string, BoxIcon> = {
  database: DatabaseIcon,
  code: Code2Icon,
  dashboard: LayoutDashboardIcon,
  coordinator: UsersIcon,
  celebrate: PartyPopperIcon,
  deployment: BriefcaseIcon
};
interface OjtTimelineProps {
  onViewPhoto: (photo: OjtPhoto) => void;
}
export function OjtTimeline({
  onViewPhoto
}: OjtTimelineProps) {
  return <section className="relative overflow-hidden bg-white py-16 lg:py-24" aria-labelledby="journey-timeline">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-gradient-to-bl from-blush-100 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <h2 id="journey-timeline" className="font-display text-3xl text-ink-900 sm:text-4xl">
          Journey Timeline
        </h2>
        <div className="mt-4 h-px w-16 bg-rosepink-600" aria-hidden="true" />
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-500">
          A week-by-week look at the projects, responsibilities, and milestones that shaped this
          internship.
        </p>

        <ol className="relative mt-14 space-y-12">
          <span aria-hidden="true" className="absolute left-[19px] top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-rosepink-500 via-blush-300 to-transparent sm:left-[23px]" />

          {ojtMilestones.map((milestone, index) => {
          const Icon = iconByKey[milestone.icon] ?? Code2Icon;
          const photos = milestone.photoIds.map((id) => ojtPhotos.find((photo) => photo.id === id)).filter((photo): photo is OjtPhoto => Boolean(photo));
          return <motion.li key={milestone.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            amount: 0.2
          }} transition={{
            duration: 0.3,
            ease: [0.23, 1, 0.32, 1]
          }} className="relative pl-14 sm:pl-20">
                <span aria-hidden="true" className="absolute left-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-gradient-to-br from-rosepink-600 to-rosepink-800 text-white shadow-lift sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5" />
                </span>

                <article className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/75 p-6 shadow-glass ring-1 ring-blush-200/80 backdrop-blur-md transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-lift sm:p-7">
                  <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br from-blush-200/70 to-transparent blur-2xl" />
              
                  <div className="relative flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blush-100 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wide text-rosepink-800">
                      {milestone.phase}
                    </span>
                    {milestone.duration ? <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-400">
                        <ClockIcon className="h-3.5 w-3.5 text-rosepink-600" aria-hidden="true" />
                        {milestone.duration}
                      </span> : null}
                    {milestone.badge ? <span className="inline-flex items-center gap-1.5 rounded-full border border-rosepink-400/60 bg-white/80 px-3 py-1 text-[0.6875rem] font-semibold text-rosepink-700 shadow-card backdrop-blur">
                        <SparklesIcon className="h-3 w-3" aria-hidden="true" />
                        {milestone.badge}
                      </span> : null}
                  </div>

                  <h3 className="relative mt-4 font-display text-xl text-ink-900 sm:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="relative mt-3 max-w-2xl text-sm leading-[1.8] text-ink-500 sm:text-base">
                    {milestone.content}
                  </p>

                  {photos.length ? <ul className={`relative mt-6 grid gap-4 ${photos.length > 2 ? 'sm:grid-cols-3' : photos.length === 2 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                      {photos.map((photo) => <li key={photo.id}>
                          <button type="button" onClick={() => onViewPhoto(photo)} aria-label={`View photo: ${photo.caption}`} className="group relative block w-full overflow-hidden rounded-xl border border-blush-200 bg-blush-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
                            <img src={photo.src} alt={photo.caption} loading="lazy" className={`w-full transition-transform duration-200 ease-out group-hover:scale-[1.04] ${photos.length > 2 ? 'h-44 object-cover' : photos.length === 2 ? 'h-64 object-cover sm:h-72' : 'h-auto max-h-[30rem] object-contain'}`} />
                            <span className="absolute inset-x-0 bottom-0 bg-white/80 px-3 py-2 text-left text-[0.6875rem] font-medium leading-snug text-ink-800 opacity-0 backdrop-blur transition-opacity duration-150 ease-out group-hover:opacity-100">
                              {photo.caption}
                            </span>
                          </button>
                        </li>)}
                    </ul> : null}
                </article>
              </motion.li>;
        })}
        </ol>
      </div>
    </section>;
}