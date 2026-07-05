"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 p-3 md:p-4 rounded-full bg-black text-white shadow-[0_12px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-8 invisible pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        className="md:w-6 md:h-6"
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
