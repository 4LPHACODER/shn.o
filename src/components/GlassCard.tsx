import React from "react";
import { BoxIcon } from "lucide-react";
interface GlassCardProps {
  label: string;
  icon: BoxIcon;
  className?: string;
  floating?: boolean;
}
export function GlassCard({
  label,
  icon: Icon,
  className = '',
  floating = false
}: GlassCardProps) {
  return <div className={`inline-flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/70 px-4 py-3 shadow-glass ring-1 ring-blush-200/70 backdrop-blur-md transition-transform duration-200 ease-out hover:-translate-y-1 ${floating ? 'animate-float-slow' : ''} ${className}`}>
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blush-100 text-rosepink-700">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold leading-snug text-ink-800 sm:text-sm">{label}</span>
    </div>;
}