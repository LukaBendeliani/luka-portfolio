'use client';

import { portfolioData } from '@/lib/data/portfolio-data';

export default function CVPage() {
    const { personal, overview, experiences, skills, education } = portfolioData;

    const handlePrint = () => {
        if (typeof window !== 'undefined') {
            window.print();
        }
    };

    return (
        <div className="cv-page-wrapper min-h-screen bg-white">
            {/* Print button - hidden when printing */}
            <div className="fixed top-20 right-6 z-50 print:hidden">
                <button
                    type="button"
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0066FF] text-white font-semibold rounded-lg hover:bg-[#0052CC] transition-colors shadow-lg cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                    Print / Save PDF
                </button>
            </div>

            {/* CV Container - 2 Column Layout */}
            <article className="cv-container max-w-[850px] mx-auto bg-white text-black my-8 print:my-0 print:shadow-none shadow-2xl print:max-w-none print:mx-0">

                {/* Header Section - Full Width */}
                <header className="text-center border-b-2 border-black px-8 py-6 print:px-[0.5in] print:py-4">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black uppercase mb-1">
                        {personal.name}
                    </h1>
                    <h2 className="text-lg sm:text-xl text-gray-700 font-medium mb-3">
                        {personal.title}
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            {personal.contact.phone}
                        </span>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            {personal.contact.email}
                        </span>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <a href="https://www.linkedin.com/in/luka-bendeliani-537ab7161/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-blue-700 hover:underline print:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            LinkedIn
                        </a>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <a href="https://github.com/LukaBendeliani" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-800 hover:underline">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                    </div>
                </header>

                {/* Two Column Layout */}
                <div className="flex flex-col md:flex-row print:flex-row">

                    {/* Left Sidebar - Skills, Languages, Education */}
                    <aside className="w-full md:w-[35%] print:w-[35%] bg-gray-50 print:bg-gray-50 px-5 py-5 print:px-4 print:py-4 border-r border-gray-200">

                        {/* Technical Skills */}
                        <section className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-300 pb-1 mb-2">
                                Technical Skills
                            </h3>
                            <div className="text-xs text-gray-800 space-y-2">
                                <div>
                                    <p className="font-semibold text-gray-900">Languages & Frameworks</p>
                                    <p>{skills.frontend.join(', ')}, {skills.backend.join(', ')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Tools & Platforms</p>
                                    <p>Git, Vercel, Figma, Docker, AWS, GCP</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">AI & Data</p>
                                    <p>LLMs, RAG, REST APIs, {skills.databases.join(', ')}</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Testing</p>
                                    <p>Cypress, Jest</p>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-300 pb-1 mb-2">
                                Education
                            </h3>
                            {education.map((edu) => (
                                <div key={edu.id} className="text-xs">
                                    <p className="font-semibold text-gray-900">{edu.institution}</p>
                                    {edu.field && (
                                        <p className="text-gray-700">{edu.degree}: {edu.field}</p>
                                    )}
                                    <p className="text-gray-600">{edu.startYear} – {edu.endYear}</p>
                                </div>
                            ))}
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-300 pb-1 mb-2">
                                Languages
                            </h3>
                            <div className="text-xs text-gray-800 space-y-1">
                                {overview.languages.map((lang) => (
                                    <p key={lang.language}>
                                        <span className="font-semibold">{lang.language}:</span>{' '}
                                        {lang.proficiency === 'Fluent' ? 'Advanced' : lang.proficiency}
                                    </p>
                                ))}
                            </div>
                        </section>
                    </aside>

                    {/* Right Column - Summary & Experience */}
                    <main className="w-full md:w-[65%] print:w-[65%] px-5 py-5 print:px-4 print:py-4">

                        {/* Professional Summary */}
                        <section className="mb-5">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-300 pb-1 mb-2">
                                Professional Summary
                            </h3>
                            <p className="text-xs leading-relaxed text-gray-800">
                                {overview.introduction}
                            </p>
                        </section>

                        {/* Work Experience */}
                        <section>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-black border-b border-gray-300 pb-1 mb-3">
                                Professional Experience
                            </h3>
                            <div className="space-y-4">
                                {experiences.map((exp) => (
                                    <article key={exp.id}>
                                        <header className="flex flex-wrap justify-between items-baseline gap-x-2 mb-0.5">
                                            <div>
                                                <h4 className="text-sm font-bold text-black">{exp.company}</h4>
                                                <p className="text-xs text-gray-700 italic">{exp.position}</p>
                                            </div>
                                            <time className="text-xs text-gray-600 font-medium whitespace-nowrap">
                                                {exp.startDate} – {exp.endDate}
                                            </time>
                                        </header>
                                        <ul className="list-disc list-outside ml-4 text-xs text-gray-800 space-y-0.5 mt-1">
                                            {exp.achievements.map((achievement, index) => (
                                                <li key={index} className="leading-snug">{achievement}</li>
                                            ))}
                                        </ul>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </article>

            {/* Print & Page Styles */}
            <style jsx global>{`
        /* Override global dark theme for CV page */
        .cv-page-wrapper,
        .cv-page-wrapper * {
          background-color: transparent;
        }
        
        .cv-page-wrapper {
          background-color: white !important;
        }
        
        .cv-container {
          background-color: white !important;
        }
        
        /* ATS-friendly fonts */
        .cv-container,
        .cv-container * {
          font-family: 'Arial', 'Helvetica Neue', sans-serif !important;
          line-height: 1.4;
        }
        
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          html, body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: white !important;
          }
          
          body > *:not(.cv-page-wrapper),
          nav,
          header:not(.cv-container header),
          footer,
          .grid-overlay,
          .print\\:hidden {
            display: none !important;
          }
          
          .cv-page-wrapper {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .cv-container {
            box-shadow: none !important;
            margin: 0 !important;
            max-width: none !important;
            width: 100% !important;
          }
          
          aside {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
        </div>
    );
}
