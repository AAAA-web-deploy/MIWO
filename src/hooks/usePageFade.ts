import { useEffect } from 'react';

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/** From the second page on, the page you leave fades out as the next one fades in. */
export function usePageFade(enabled: boolean) {
  useEffect(() => {
    const main = document.getElementById('content');
    if (!main) return;
    const pages = [...main.children] as HTMLElement[];

    const clear = () => {
      pages.forEach((page) => {
        page.style.opacity = '';
      });
    };

    if (!enabled) {
      clear();
      return;
    }

    let frame = 0;
    const measure = () => {
      const span = Math.max(window.innerHeight * 0.7, 1);
      pages.forEach((page, index) => {
        const next = pages[index + 1];
        const enter = index === 0
          ? 1
          : 1 - clamp(page.getBoundingClientRect().top / span, 0, 1);
        const leave = next
          ? 1 - clamp(next.getBoundingClientRect().top / span, 0, 1)
          : 0;
        page.style.opacity = (Math.min(enter, 1 - leave)).toFixed(3);
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clear();
    };
  }, [enabled]);
}
