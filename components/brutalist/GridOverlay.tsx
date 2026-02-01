'use client';

import { useEffect, useState } from 'react';

interface Coords {
  x: number;
  y: number;
  col: number;
  row: number;
}

const ROW_HEIGHT = 64; // px baseline to match globals.css
const COLS = 12;

export default function GridOverlay() {
  const [coords, setCoords] = useState<Coords | null>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const width = window.innerWidth;
      const colWidth = width / COLS;
      const x = e.clientX;
      const y = e.clientY;
      const col = Math.min(COLS, Math.max(1, Math.floor(x / colWidth) + 1));
      const row = Math.max(1, Math.floor(y / ROW_HEIGHT) + 1);
      setCoords({ x, y, col, row });
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <>
      {/* Grid overlay lines */}
      <div aria-hidden className="grid-overlay">
        {Array.from({ length: COLS }).map((_, i) => (
          <div key={i} className="col-line" />
        ))}
      </div>

      {/* Cursor coordinates badge */}
      {coords && (
        <div
          className="cursor-coords"
          style={{ top: coords.y + 12, left: coords.x + 12 }}
          role="status"
          aria-label={`Grid coordinates column ${coords.col}, row ${coords.row}`}
        >
          [{coords.col},{coords.row}] {Math.round(coords.x)}×{Math.round(coords.y)}
        </div>
      )}
    </>
  );
}