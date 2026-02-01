'use client';

import { useEffect, useState } from 'react';

interface TerminalBackgroundProps {
  className?: string;
}

const SNIPPETS = [
  `luka@portfolio:~$ curl -s https://api.luka.dev/v1/profile
{
  "name": "Luka Bendeliani",
  "title": "Software Engineer",
  "skills": ["React", "Next.js", "TypeScript", "Node.js"],
  "location": "Tbilisi, Georgia"
}
luka@portfolio:~$ `,
  `luka@portfolio:~$ git push --force
Everything up-to-date
luka@portfolio:~$ `,
  `luka@portfolio:~$ npm run dev

> luka-b@0.1.0 dev
> next dev

- ready started server on 0.0.0.0:3000, url: http://localhost:3000
- event compiled client and server successfully in 2.2s (20 modules)
- wait compiling...`,
  `luka@portfolio:~$ git commit -m "Fix bug"
[main 1a2b3c4] Fix bug
 1 file changed, 1 insertion(+), 1 deletion(-)
luka@portfolio:~$ git commit -m "Actually fix bug"
[main 5d6e7f8] Actually fix bug
 1 file changed, 1 insertion(+), 1 deletion(-)
luka@portfolio:~$ git commit -m "Final final fix, I promise"
[main 9h0i1j2] Final final fix, I promise
 1 file changed, 1 insertion(+), 1 deletion(-)`,
];

export default function TerminalBackground({ className = '' }: TerminalBackgroundProps) {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timeout = setTimeout(() => {
      const snippet = SNIPPETS[snippetIndex];
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setSnippetIndex((prevIndex) => (prevIndex + 1) % SNIPPETS.length);
        }
      } else { // Typing
        if (currentText.length < snippet.length) {
          setCurrentText(snippet.slice(0, currentText.length + 1));
        } else {
          // Finished typing, start pausing
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, 2000);
        }
      }
    }, isDeleting ? 10 : 30);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, snippetIndex]);

  const [cursorOn, setCursorOn] = useState<boolean>(true);
  useEffect(() => {
    const cursorTimer = setInterval(() => setCursorOn((c) => !c), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div
      className={`absolute inset-0 top-10 overflow-hidden ${className}`}
      aria-hidden
    >
      <div className="absolute inset-0 opacity-30">
        <pre className="h-full w-full p-6 md:p-10 lg:p-14 text-xs md:text-sm lg:text-base font-mono text-white/80 bg-black/40 border border-white/10">
          {currentText}
          {cursorOn ? '▌' : ' '}
        </pre>
      </div>
    </div>
  );
}