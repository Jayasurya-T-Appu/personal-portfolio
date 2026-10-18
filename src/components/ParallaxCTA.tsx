"use client";

import { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Closing call-to-action with an oversized word drifting behind it (scroll parallax).
 * Adapted from the giant "CONTACT" heading in the Lohitha portfolio, in a light/monochrome key.
 */
export function ParallaxCTA({ children, word = "build.", className = "" }: { children: ReactNode; word?: string; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-35%", "35%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        aria-hidden
        style={{ y, x }}
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center z-0"
      >
        <span className="font-black lowercase leading-none tracking-[-0.07em] whitespace-nowrap text-[34vw] md:text-[26vw] text-black/[0.045]">
          {word}
        </span>
      </motion.div>
      <div className="relative z-10">{children}</div>
    </section>
  );
}
