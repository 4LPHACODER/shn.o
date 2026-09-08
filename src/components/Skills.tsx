import React from "react";
import { CodeIcon, LayoutIcon, DatabaseIcon, WrenchIcon, UsersIcon, FlaskConicalIcon, FileSearchIcon, RocketIcon, BoxIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SkillCard } from "./SkillCard";
import { skillGroups } from "../data/skills";
const iconByGroup: Record<string, BoxIcon> = {
  research: FlaskConicalIcon,
  programming: CodeIcon,
  web: LayoutIcon,
  database: DatabaseIcon,
  tools: WrenchIcon,
  professional: UsersIcon
};
const roleBadges = [{
  label: 'Researcher',
  icon: FileSearchIcon
}, {
  label: 'Startup Founder',
  icon: RocketIcon
}];
export function Skills() {
  return <section id="skills" className="bg-blush-50 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading title="Technical Skills" description="A working summary of the research practices, languages, frameworks, tools, and professional habits I use across coursework, competitions, and startup projects." />

        <ul className="mt-6 flex flex-wrap gap-2.5">
          {roleBadges.map(({
          label,
          icon: Icon
        }) => <li key={label} className="inline-flex items-center gap-2 rounded-full border border-rosepink-400/70 bg-white px-3.5 py-1.5 text-xs font-semibold text-rosepink-700 shadow-card">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {label}
            </li>)}
        </ul>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => <SkillCard key={group.id} group={group} icon={iconByGroup[group.id] ?? CodeIcon} index={index} />)}
        </div>
      </div>
    </section>;
}