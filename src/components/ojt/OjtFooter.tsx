import React from 'react';
import { ArrowLeftIcon, MailIcon, GithubIcon, FacebookIcon } from 'lucide-react';
import { returnToPortfolio } from '../../utils/returnToPortfolio';

const links = [
{ label: 'Email', href: 'mailto:sdonsing@nemsu.edu.ph', icon: MailIcon, external: false },
{ label: 'GitHub', href: 'https://github.com/shepisces', icon: GithubIcon, external: true },
{
  label: 'Facebook',
  href: 'https://www.facebook.com/shndvo',
  icon: FacebookIcon,
  external: true
}];


export function OjtFooter() {
  return (
    <footer className="border-t border-blush-200 bg-blush-50 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 sm:flex-row sm:justify-between lg:px-8">
        <a
          href="/#training"
          onClick={returnToPortfolio}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosepink-600 to-rosepink-800 px-5 py-3 text-sm font-semibold text-white shadow-lift transition-[transform,box-shadow] duration-150 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(190,24,93,0.55)] active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosepink-700">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back to Portfolio
        </a>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <p className="text-sm text-ink-500">© 2026 Shane D. Onsing. All Rights Reserved.</p>
          <ul className="flex items-center gap-2">
            {links.map(({ label, href, icon: Icon, external }) =>
            <li key={label}>
                <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-blush-200 bg-white text-ink-500 transition-colors duration-150 ease-out hover:border-rosepink-400 hover:text-rosepink-700">
                
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </footer>);

}