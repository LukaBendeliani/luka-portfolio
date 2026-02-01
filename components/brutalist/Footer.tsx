'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

const siteMap = [
  { id: 'hero', label: 'Hero', href: '#hero' },
  // { id: 'proof', label: 'Proof', href: '#proof' },
  { id: 'overview', label: 'Overview', href: '#overview' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { contact } = portfolioData.personal;

  return (
    <footer className="brutalist-section px-4 sm:px-6 lg:px-8 py-10" role="contentinfo">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4 items-start">
        {/* Site map */}
        <nav className="col-span-12 md:col-span-8" aria-label="Site">
          <ul className="flex flex-wrap gap-x-3 gap-y-6">
            {siteMap.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="px-3 py-2 border border-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons: only SVGs */}
        <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/LukaBendeliani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 border border-white hover:bg-white hover:text-black transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2C6.48 2 2 6.58 2 12.25C2 16.89 4.87 20.72 8.84 21.98C9.34 22.06 9.52 21.76 9.52 21.5C9.52 21.27 9.51 20.61 9.5 19.75C7.06 20.29 6.56 18.7 6.56 18.7C6.1 17.52 5.43 17.2 5.43 17.2C4.5 16.58 5.5 16.6 5.5 16.6C6.53 16.68 7.08 17.75 7.08 17.75C7.98 19.31 9.45 18.86 10.04 18.6C10.12 17.91 10.4 17.44 10.71 17.17C8.6 16.9 6.39 16.05 6.39 12.3C6.39 11.24 6.77 10.39 7.38 9.73C7.28 9.46 6.93 8.43 7.47 7.06C7.47 7.06 8.34 6.77 9.5 7.7C10.33 7.47 11.2 7.35 12.07 7.35C12.94 7.35 13.81 7.47 14.64 7.7C15.8 6.77 16.67 7.06 16.67 7.06C17.21 8.43 16.86 9.46 16.76 9.73C17.37 10.39 17.75 11.24 17.75 12.3C17.75 16.06 15.53 16.9 13.41 17.16C13.79 17.48 14.12 18.1 14.12 19.05C14.12 20.39 14.11 21.36 14.11 21.5C14.11 21.76 14.29 22.07 14.79 21.98C18.76 20.72 21.63 16.89 21.63 12.25C21.63 6.58 17.15 2 11.63 2H12Z" fill="currentColor"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luka-bendeliani-537ab7161/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 border border-white hover:bg-white hover:text-black transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4.98 3.5C4.98 4.61 4.08 5.5 2.98 5.5C1.88 5.5 0.98 4.61 0.98 3.5C0.98 2.39 1.88 1.5 2.98 1.5C4.08 1.5 4.98 2.39 4.98 3.5ZM0.98 8.5H5V22H0.98V8.5ZM8.98 8.5H13.02V10.53H13.08C13.64 9.48 15.04 8.36 17.13 8.36C21.23 8.36 22 10.99 22 14.63V22H17.98V15.73C17.98 14.32 17.95 12.52 15.93 12.52C13.89 12.52 13.58 14.04 13.58 15.62V22H9.56V8.5H8.98Z" fill="currentColor"/>
            </svg>
          </a>

          {/* Email */}
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="p-2 border border-white hover:bg-white hover:text-black transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M2 4H22V20H2V4ZM20 6H4V18H20V6ZM12 12.5L4.5 7H19.5L12 12.5Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}