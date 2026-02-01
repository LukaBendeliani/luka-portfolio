'use client';

import { useEffect, useState } from 'react';

export default function InvertToggle() {
  const [on, setOn] = useState<boolean>(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('invert-theme') === '1';
    setOn(saved);
    if (saved) document.documentElement.classList.add('invert-theme');
  }, []);

  const toggle = () => {
    setOn((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle('invert-theme', next);
      window.localStorage.setItem('invert-theme', next ? '1' : '0');
      return next;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="px-4 py-2 border border-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
      aria-pressed={on}
      aria-label="Toggle light/dark invert"
      title="Invert"
    >
      Invert
    </button>
  );
}