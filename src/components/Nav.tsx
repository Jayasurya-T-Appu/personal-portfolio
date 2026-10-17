"use client";

import { useEffect, useState } from "react";
import { RESUME_DOWNLOAD_NAME, RESUME_PATH } from "../constants/resume";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
];

// A section becomes active once its top passes this line (just below the nav + scroll-padding-top)
const ACTIVE_OFFSET = 120;

export function Nav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const updateActive = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id;
      }
      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 bg-white border-b border-neutral-200 animate-fade-up" style={{ animationDelay: '2.4s' }}>
      <nav className="flex items-center gap-2 py-3 md:py-4 px-6 md:px-12 max-w-6xl mx-auto text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.15em]">
        <div className="hidden md:block w-[5.5rem] shrink-0" aria-hidden />
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-4 md:gap-x-10 min-w-0">
          {SECTIONS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActive(id)}
                aria-current={isActive ? "location" : undefined}
                className={`relative shrink-0 py-1 transition-colors after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-black after:transition-transform after:duration-300 after:origin-center ${
                  isActive ? "text-black after:scale-x-100" : "text-black/60 hover:text-black after:scale-x-0"
                }`}
              >
                {label}
              </a>
            );
          })}
          <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors shrink-0 py-1">Contact</a>
        </div>
        <div className="flex shrink-0 justify-end w-[5.5rem]">
          <a
            href={RESUME_PATH}
            download={RESUME_DOWNLOAD_NAME}
            className="rounded-full border border-black/10 bg-black text-white px-3 py-1.5 md:px-4 md:py-2 hover:bg-black/90 transition-colors tracking-[0.1em]"
          >
            Resume
          </a>
        </div>
      </nav>
    </div>
  );
}
