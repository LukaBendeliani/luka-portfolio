'use client';

import InvertToggle from './InvertToggle';

const logos = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Node.js' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB' },
  { name: 'Jest' },
  { name: 'Cypress' },
  { name: 'AWS' },
  { name: 'Docker' },
  { name: 'Three.js' },
  { name: 'Tailwind' },
];

export default function LogoWall() {
  return (
    <section id="proof" className="brutalist-section">
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold uppercase tracking-wider">Proof</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
          {logos.map((logo, index) => (
            <div key={logo.name} className="border border-white aspect-[3/2] flex items-center justify-center p-2">
              <svg
                viewBox="0 0 200 120"
                role="img"
                aria-label={`${logo.name} logo`}
                className="w-full h-full"
              >
                <rect x="2" y="2" width="196" height="116" fill="none" stroke="currentColor" strokeWidth="4" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="28"
                  fontFamily="ui-monospace, Menlo, Monaco, Consolas"
                  fill="currentColor"
                >
                  {logo.name}
                </text>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}