import React from "react";
import { BoxIcon } from "lucide-react";
interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
  icon: BoxIcon;
  external?: boolean;
}
export function ContactLink({
  label,
  value,
  href,
  icon: Icon,
  external = false
}: ContactLinkProps) {
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className="group flex items-start gap-4 rounded-2xl border border-blush-200 bg-white p-5 shadow-card transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-rosepink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blush-100 text-rosepink-700 transition-colors duration-200 ease-out group-hover:bg-rosepink-600 group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wide text-ink-400">{label}</span>
        <span className="mt-1 block break-words text-sm font-medium text-ink-900 transition-colors duration-150 ease-out group-hover:text-rosepink-700">
          {value}
        </span>
      </span>
    </a>;
}