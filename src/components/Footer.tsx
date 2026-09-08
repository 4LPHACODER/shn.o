import React from 'react';
import { GithubIcon, FacebookIcon, MailIcon } from 'lucide-react';

const socials = [
{ label: 'GitHub', href: 'https://github.com/shepisces', icon: GithubIcon, external: true },
{
  label: 'Facebook',
  href: 'https://www.facebook.com/shndvo',
  icon: FacebookIcon,
  external: true
},
{ label: 'Email', href: 'mailto:sdonsing@nemsu.edu.ph', icon: MailIcon, external: false }];


export function Footer() {
  return (
    <footer className="border-t border-blush-200 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 sm:flex-row sm:justify-between lg:px-8">
        <p className="text-sm text-ink-500">© 2026 Shane D. Onsing. All Rights Reserved.</p>
        <ul className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon, external }) =>
          <li key={label}>
              <a
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blush-200 text-ink-500 transition-colors duration-150 ease-out hover:border-rosepink-400 hover:bg-blush-50 hover:text-rosepink-700">
              
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>);

}