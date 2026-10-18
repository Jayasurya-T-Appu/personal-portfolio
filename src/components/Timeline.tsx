"use client";

import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";

/**
 * Vertical experience timeline whose spine "draws" itself as you scroll.
 * Inspired by the scroll-linked path in the Lohitha portfolio's Process section,
 * adapted to a straight monochrome line.
 *
 * Usage: wrap the list in <Timeline> and place a <TimelineDot /> inside each item
 * (positioned the same way the old static dots were).
 */
export function Timeline({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [track, setTrack] = useState({ top: 0, height: 0 });

  // Track runs from the centre of the first dot to the centre of the last dot.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const dots = container.querySelectorAll<HTMLElement>("[data-timeline-dot]");
      if (dots.length < 2) return;
      // Use layout offsets (not getBoundingClientRect) so FadeIn's translate doesn't skew the result.
      const centreOf = (el: HTMLElement) => {
        let y = el.offsetHeight / 2;
        let node: HTMLElement | null = el;
        while (node && node !== container) {
          y += node.offsetTop;
          node = node.offsetParent as HTMLElement | null;
        }
        return y;
      };
      const top = centreOf(dots[0]);
      const bottom = centreOf(dots[dots.length - 1]);
      setTrack({ top, height: Math.max(0, bottom - top) });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // 0 when the track's top reaches the middle of the viewport, 1 when its bottom does.
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start center", "end center"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div
        ref={trackRef}
        aria-hidden
        className="hidden md:block absolute left-2 w-0.5 bg-black/10 rounded-full pointer-events-none"
        style={{ top: track.top, height: track.height }}
      >
        <motion.div className="absolute inset-0 bg-black origin-top rounded-full" style={{ scaleY }} />
      </div>
      {children}
    </div>
  );
}

/** A timeline node that switches to its "reached" state once the line passes it. */
export function TimelineDot({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);
  const { scrollY } = useScroll();

  const check = () => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setActive(r.top + r.height / 2 <= window.innerHeight / 2);
  };

  useMotionValueEvent(scrollY, "change", check);
  useLayoutEffect(check, []);

  return (
    <span
      ref={ref}
      data-timeline-dot
      aria-hidden
      className={`hidden md:block absolute left-0 top-3 w-4 h-4 rounded-full ring-4 ring-[#F2F2F2] z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        active
          ? "bg-black scale-110 shadow-[0_0_0_6px_rgba(0,0,0,0.08)]"
          : "bg-[#F2F2F2] border-2 border-black/25 scale-90"
      } ${className}`}
    />
  );
}
