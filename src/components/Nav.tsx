export function Nav() {
  return (
    <div className="fixed top-4 md:top-8 w-[92%] sm:w-[80%] md:w-auto left-1/2 -translate-x-1/2 z-50 animate-fade-up" style={{ animationDelay: '2.4s' }}>
      <nav className="flex justify-between md:justify-center items-center gap-2 md:gap-10 py-3 md:py-4 px-6 md:px-10 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.04)] text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] md:tracking-[0.15em]">
        <a href="#about" className="text-black/60 hover:text-black transition-colors">About</a>
        <a href="#experience" className="text-black/60 hover:text-black transition-colors">Experience</a>
        <a href="#work" className="text-black/60 hover:text-black transition-colors">Work</a>
        <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors">Contact</a>
      </nav>
    </div>
  );
}
