import { useEffect, useRef } from 'react';

const PALETTE = ['#C1272D', '#DC5A2E', '#E8A33D', '#3F6B2F', '#1B6E86'];

export const CursorTrail = () => {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const lastRef = useRef(0);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(pointer:fine)').matches;

    if (prefersReducedMotion || !hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastRef.current < 55) return;
      lastRef.current = now;

      const dot = document.createElement('div');
      dot.className = 'cursor-dot';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.background = PALETTE[Math.floor(Math.random() * PALETTE.length)];

      layer.appendChild(dot);
      setTimeout(() => dot.remove(), 1150);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      id="trail"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    />
  );
};
