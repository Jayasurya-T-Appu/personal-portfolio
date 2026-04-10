import { RESUME_DOWNLOAD_NAME, RESUME_PATH } from "../constants/resume";

export function Nav() {
  return (
    <div className="fixed top-4 md:top-8 w-[92%] sm:w-[90%] md:w-auto md:min-w-[min(42rem,92vw)] left-1/2 -translate-x-1/2 z-50 animate-fade-up" style={{ animationDelay: '2.4s' }}>
      <nav className="flex items-center gap-2 py-3 md:py-4 px-4 sm:px-6 md:px-8 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.15em]">
        <div className="hidden md:block w-[5.5rem] shrink-0" aria-hidden />
        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-1 sm:gap-x-4 md:gap-x-10 min-w-0">
          <a href="#about" className="text-black/60 hover:text-black transition-colors shrink-0">About</a>
          <a href="#experience" className="text-black/60 hover:text-black transition-colors shrink-0">Experience</a>
          <a href="#work" className="text-black/60 hover:text-black transition-colors shrink-0">Work</a>
          <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors shrink-0">Contact</a>
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
