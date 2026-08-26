'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

const MIN_SCALE = 0.8;
const MOBILE_BREAKPOINT = 768;

export function AboutPhotoZoom({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const applyScale = () => {
      ticking = false;

      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        el.style.transform = '';
        return;
      }

      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight * 0.7), 0), 1);
      const scale = MIN_SCALE + (1 - MIN_SCALE) * progress;
      el.style.transform = `scale(${scale})`;
    };

    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(applyScale);
    };

    applyScale();
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize);
    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
