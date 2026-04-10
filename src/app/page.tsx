import { Card, TintedCard } from "../components/Card";
import { Button } from "../components/Button";
import { Nav } from "../components/Nav";
import { ScrollToTop } from "../components/ScrollToTop";
import { Loader } from "../components/Loader";
import { FadeIn } from "../components/FadeIn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] pb-32 font-sans overflow-x-hidden selection:bg-black selection:text-white">
      <Loader />
      <Nav />
      

      <FadeIn delay={2200}>
        <section className="pt-32 md:pt-48 pb-10 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="w-32 h-44 md:w-40 md:h-56 rounded-[2rem] overflow-hidden mb-8 md:mb-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white p-1">
          <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
            <Image src="/profile.png" alt="Jayasurya T Appu" fill priority className="object-cover object-top" sizes="(max-width: 768px) 160px, 200px" />
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-10 text-black">
          Architecting Scalable <br/> Backend Systems.
        </h1>
        
        <p className="text-lg md:text-2xl text-[#4D4D4D] max-w-3xl font-light mb-10 md:mb-14 leading-relaxed tracking-wide">
          Hi, I&apos;m Jayasurya T Appu. A Backend Engineer specializing in Node.js, Python, and microservices 
          that power high-throughput applications. 
        </p>
        
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto">
            <a href="#work" className="w-full sm:w-auto"><Button className="w-full">View My Work</Button></a>
            <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"><Button variant="secondary" className="w-full">Contact Me</Button></a>
            
            <div className="flex items-center justify-center gap-1 sm:gap-4 sm:ml-2 w-full sm:w-auto">
              <a href="https://github.com/Jayasurya-T-Appu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-3.5 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/jayasuryatappu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-3.5 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-[#0A66C2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section id="experience" className="px-6 md:px-12 max-w-6xl mx-auto space-y-10 mt-10 md:mt-20">
          <h2 className="text-3xl font-extrabold mb-12 px-6 tracking-tight text-black">Experience</h2>
        
        <Card className="flex flex-col lg:flex-row gap-12 group">
           <div className="lg:w-1/3">
             <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Carclenx (Pexa)</h4>
             <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Software Engineer</div>
             <p className="text-black/40 text-sm font-bold tracking-wider">JULY 2025 – PRESENT</p>
           </div>
           <div className="lg:w-2/3">
             <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Designed and scaled backend systems handling ~1000 requests/sec in production.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Built Worker & Staff Analytics system, reducing cancellation rates by ~80% through data-driven task assignment.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Engineered automated Payroll Processing system for ~200 employees using message queues, reducing manual workload by ~70–80%.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Migrated WhatsApp automation from third-party dependency to an in-house system, reducing external costs and driving a ~20% increase in lead generation.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Stabilized legacy backend systems by fixing exception handling and server issues, reducing downtime and preventing missed requests.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Optimized database queries and backend workflows, improving API response times by 30–50%.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Led a team of 5 developers, managing task distribution and code reviews.
               </li>
             </ul>
           </div>
        </Card>

        <Card className="flex flex-col lg:flex-row gap-12 group">
           <div className="lg:w-1/3">
             <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Quest Innovative Sol.</h4>
             <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Junior Software Engineer</div>
             <p className="text-black/40 text-sm font-bold tracking-wider">DEC 2022 – SEPT 2024</p>
           </div>
           <div className="lg:w-2/3">
             <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Designed and developed 20+ REST APIs, improving backend efficiency and reducing manual processing workflows.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Built backend services using Node.js and Python (Django) for business-critical applications.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Optimized backend performance through efficient query design and logic improvements.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Integrated frontend applications (React, Angular) with backend APIs, ensuring stable and efficient data flow.
               </li>
             </ul>
           </div>
        </Card>

        <Card className="flex flex-col lg:flex-row gap-12 group">
           <div className="lg:w-1/3">
             <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Carclenx (Pexa)</h4>
             <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Full Stack Developer</div>
             <p className="text-black/40 text-sm font-bold tracking-wider">JAN 2022 – JUNE 2022</p>
           </div>
           <div className="lg:w-2/3">
             <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Developed secure RESTful APIs and integrated third-party services.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Built admin dashboards with Angular, ensuring real-time backend integration.
               </li>
               <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                 Improved application reliability by ensuring consistent frontend-backend communication.
               </li>
             </ul>
           </div>
        </Card>
      </section>
      </FadeIn>

      <FadeIn>
        <section className="px-6 md:px-12 max-w-6xl mx-auto mt-10 md:mt-32">
          <TintedCard type="peach" className="relative overflow-hidden group !p-10 md:!p-16 lg:!p-20">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
              <div className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.08)] flex items-center justify-center shrink-0 relative overflow-hidden border border-black/5 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
                <Image src="/paco_icon.png" alt="PACO Studios" fill className="object-contain p-4 md:p-6" sizes="(max-width: 768px) 112px, (max-width: 1024px) 160px, 192px" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-black">
                  Co-founder at <br />
                  <span className="whitespace-nowrap"><span className="text-[#EA6F00]">PACO</span> <span className="text-black">Studios</span></span>
                </h3>
                <p className="text-xl md:text-2xl text-[#4D4D4D] leading-relaxed mb-8 max-w-3xl mx-auto md:mx-0">
                  From pixel-perfect websites to immersive 3D experiences—we are your modern development partner. We blend creativity with technology to craft scalable, meaningful digital products that drive results and empower businesses to stand out.
                </p>
                <a href="https://www.pacostudios.org/" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" className="!bg-white border !border-black/5 hover:!border-black/20 shadow-sm transition-all duration-300 hover:shadow-md !px-8 !py-4 !text-lg">
                    Visit pacostudios.org
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-[#EA6F00]/15 blur-3xl rounded-full z-0 pointer-events-none transition-transform duration-700 group-hover:scale-150"></div>
          </TintedCard>
        </section>
      </FadeIn>

      <FadeIn>
        <section id="skills" className="px-6 md:px-12 max-w-6xl mx-auto space-y-10 mt-20 md:mt-40">
           <h2 className="text-3xl font-extrabold mb-12 px-6 tracking-tight text-black">Technical Arsenal</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <TintedCard type="gray" className="!p-6 md:!p-8 flex flex-col items-start h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Systems</span>
              <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Node.js, Express.js, Python, Flask, Django</p>
            </TintedCard>
            
            <TintedCard type="mint" className="!p-6 md:!p-8 flex flex-col items-start h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Architecture</span>
              <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Microservices, REST APIs, gRPC, Web Sockets</p>
            </TintedCard>
            
            <TintedCard type="blue" className="!p-6 md:!p-8 flex flex-col items-start h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Database & Data</span>
              <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">MongoDB, SQL, Redis, Kafka</p>
            </TintedCard>
            
            <TintedCard type="peach" className="!p-6 md:!p-8 flex flex-col items-start h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Infrastructure</span>
              <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Docker, Nginx, Google Cloud, Docker Compose</p>
            </TintedCard>

            <TintedCard type="gray" className="!p-6 md:!p-8 flex flex-col items-start h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">AI Tooling</span>
              <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Cursor, ChatGPT, Google Antigravity</p>
            </TintedCard>

            <TintedCard type="mint" className="!p-6 md:!p-8 flex flex-col items-start h-full">
              <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">AI &amp; ML</span>
              <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">RAG, embeddings, machine learning, NLP, computer vision</p>
            </TintedCard>
         </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section id="work" className="px-6 md:px-12 max-w-6xl mx-auto space-y-10 mt-20 md:mt-40">
          <h2 className="text-3xl font-extrabold mb-12 px-6 tracking-tight text-black">Featured Projects</h2>
        
        <TintedCard type="blue" className="relative group overflow-hidden select-none pointer-events-none">
          {/* Maintenance Overlay */}
          <div className="absolute inset-0 z-50 flex items-center justify-center text-center p-4 bg-white/10 backdrop-blur-[1px]">
            <div className="bg-black/90 text-white px-6 py-3 rounded-full font-bold tracking-widest uppercase text-sm shadow-xl border border-white/10">
              Under Maintenance
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 opacity-70">
            <div className="lg:w-1/2 flex flex-col justify-center">
               <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 lg:mb-6 text-black">Microservices E-commerce</h3>
               <p className="text-lg lg:text-xl text-[#4D4D4D] leading-relaxed mb-6 lg:mb-8">
                 Designed and implemented a highly-scalable event-driven backend system. 
                 Utilized Kafka for event streaming and gRPC for blazing-fast inter-service communication.
               </p>
               <div className="flex flex-wrap gap-3">
                 <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Node.js</span>
                 <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Kafka</span>
                 <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Docker</span>
               </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 h-32 md:h-48 lg:h-auto min-h-[8rem] bg-white/40 rounded-[2rem] border border-black/5 items-center justify-center p-4 md:p-8 mt-2 lg:mt-0">
               <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-center">Architecture Diagram <span className="hidden md:inline"><br/></span> Component</div>
            </div>
          </div>
        </TintedCard>

        <TintedCard type="mint" className="relative group overflow-hidden select-none pointer-events-none">
          {/* Maintenance Overlay */}
          <div className="absolute inset-0 z-50 flex items-center justify-center text-center p-4 bg-white/10 backdrop-blur-[1px]">
            <div className="bg-black/90 text-white px-6 py-3 rounded-full font-bold tracking-widest uppercase text-sm shadow-xl border border-white/10">
              Under Maintenance
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10 opacity-70">
            <div className="lg:w-1/2 flex flex-col justify-center">
               <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 lg:mb-6 text-black">AI Chat with RAG</h3>
               <p className="text-lg lg:text-xl text-[#4D4D4D] leading-relaxed mb-6 lg:mb-8">
                 Developed a sophisticated backend for semantic search. Integrated a local Mistral LLM and ChromaDB for instant vector retrieval against document embeddings.
               </p>
               <div className="flex flex-wrap gap-3">
                 <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">FastAPI</span>
                 <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Mistral LLM</span>
                 <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">ChromaDB</span>
               </div>
            </div>

            <div className="hidden lg:flex lg:w-1/2 h-32 md:h-48 lg:h-auto min-h-[8rem] bg-white/40 rounded-[2rem] border border-black/5 items-center justify-center p-4 md:p-8 mt-2 lg:mt-0">
               <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-center">RAG Search <span className="hidden md:inline"><br/></span> Visualization</div>
            </div>
          </div>
        </TintedCard>
        </section>
      </FadeIn>


      <FadeIn>
        <footer className="mt-20 md:mt-40 text-center pb-3">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-12 text-black">Let&apos;s build something great.</h2>
          <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer"><Button className="!px-12 !py-6 !text-lg mx-auto">Get in touch</Button></a>
          
          <div className="flex gap-6 items-center justify-center mt-6 md:mt-12">
            <a href="https://github.com/Jayasurya-T-Appu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-4 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/jayasuryatappu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-4 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-[#0A66C2]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </footer>
      </FadeIn>

      <ScrollToTop />
    </div>
  );
}
