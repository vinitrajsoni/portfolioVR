import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type RevealOptions = {
  /** pixels from bottom before triggering, default 80 */
  threshold?: number;
  /** stagger between children, default 0.12 */
  stagger?: number;
  /** y offset to slide up from, default 50 */
  y?: number;
  /** animation duration in seconds, default 0.7 */
  duration?: number;
  /** delay before animation starts, default 0 */
  delay?: number;
};

/**
 * Attaches a scroll-reveal animation to the returned ref.
 * Children can also be animated via stagger if `stagger` > 0.
 */
export function useScrollReveal<T extends HTMLElement>(opts: RevealOptions = {}) {
  const ref = useRef<T>(null);
  const { threshold = 80, stagger = 0, y = 50, duration = 0.7, delay = 0 } = opts;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // start hidden
    gsap.set(el, { opacity: 0, y, willChange: "transform, opacity" });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (stagger > 0 && el.children.length > 0) {
            gsap.fromTo(
              Array.from(el.children),
              { opacity: 0, y },
              { opacity: 1, y: 0, duration, ease: "power3.out", stagger, delay }
            );
            // also reveal the container itself instantly
            gsap.set(el, { opacity: 1, y: 0 });
          } else {
            gsap.to(el, { opacity: 1, y: 0, duration, ease: "power3.out", delay });
          }
          observer.unobserve(el);
        }
      },
      { rootMargin: `0px 0px -${threshold}px 0px` }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, stagger, y, duration, delay]);

  return ref;
}
