import { Card, TintedCard } from "../components/Card";
import { ProjectGallery } from "../components/ProjectGallery";
import { Button } from "../components/Button";
import { Nav } from "../components/Nav";
import { ScrollToTop } from "../components/ScrollToTop";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { Loader } from "../components/Loader";
import { FadeIn } from "../components/FadeIn";
import { RESUME_DOWNLOAD_NAME, RESUME_PATH } from "../constants/resume";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans overflow-x-hidden selection:bg-black selection:text-white">
      <Loader />
      <Nav />


      <FadeIn delay={2200}>
        <section id="about" className="pt-32 md:pt-48 pb-10 md:pb-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="w-40 h-56 md:w-52 md:h-72 rounded-[2rem] overflow-hidden mb-8 md:mb-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white p-1">
            <div className="w-full h-full rounded-[1.8rem] overflow-hidden relative">
              <Image src="/profile_pic.webp" alt="Jayasurya T Appu" fill priority className="object-cover object-top" sizes="(max-width: 768px) 200px, 260px" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 md:mb-10 text-black">
            Architecting Scalable <br /> Backend Systems.
          </h1>

          <p className="text-lg md:text-2xl text-[#4D4D4D] max-w-3xl font-light mb-10 md:mb-14 leading-relaxed tracking-wide">
            Hi, I&apos;m Jayasurya T Appu. A Backend Engineer specializing in Node.js, Python, and microservices
            that power high-throughput applications.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:gap-5 w-full max-w-[280px] sm:max-w-none mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <a href="#work" className="w-full sm:w-auto"><Button className="w-full">View My Work</Button></a>
              <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto"><Button variant="secondary" className="w-full">Contact Me</Button></a>
            </div>
            <a
              href={RESUME_PATH}
              download={RESUME_DOWNLOAD_NAME}
              aria-label="Download resume as PDF"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-black shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.75}
                stroke="currentColor"
                className="h-4 w-4 shrink-0 text-black/55 transition-colors group-hover:text-black"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download resume</span>
              <span className="rounded-full bg-black/[0.06] px-2 py-0.5 text-[9px] font-bold tracking-wide text-black/55 group-hover:text-black/70">
                PDF
              </span>
            </a>
            <div className="flex items-center justify-center gap-4 sm:gap-6 sm:ml-0 w-full sm:w-auto">
              <a href="https://github.com/Jayasurya-T-Appu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-3.5 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/jayasuryatappu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-3.5 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section id="experience" className="px-6 md:px-12 max-w-6xl mx-auto mt-10 md:mt-20">
          <h2 className="text-3xl font-extrabold mb-12 px-6 tracking-tight text-black">Experience</h2>

          <div className="space-y-10">
            <FadeIn delay={0}>
              <div className="relative pl-0 md:pl-28">
                <span className="hidden md:block absolute left-2 top-3 bottom-[-52px] w-0.5 bg-black/30" aria-hidden />
                <span className="hidden md:block absolute left-0 top-3 w-4 h-4 rounded-full bg-black ring-4 ring-[#F2F2F2]" aria-hidden />

                <Card className="flex flex-col lg:flex-row gap-12 group">
                  <div className="lg:w-1/3">
                    <div className="md:hidden inline-block mb-2 px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-bold text-black/60 tracking-wider">2025</div>
                    <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Carclenx (Pexa)</h4>
                    <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Software Engineer</div>
                    <p className="text-black/40 text-sm font-bold tracking-wider">JULY 2025 – PRESENT</p>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Designed and delivered scalable backend services and high-performance REST APIs powering production web and mobile applications, successfully supporting production traffic of <strong className="text-black font-bold">~1,000 requests per second</strong>.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Engineered asynchronous processing pipelines using <strong className="text-black font-bold">Redis Streams</strong> and background worker services, significantly improving application responsiveness by decoupling long-running operations from the request lifecycle.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Architected and implemented a <strong className="text-black font-bold">Worker & Staff Analytics</strong> module, optimizing task allocation logic and contributing to an <strong className="text-black font-bold">80% reduction in service cancellations</strong>.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Designed and implemented secure authentication, authorization, session lifecycle management, and <strong className="text-black font-bold">Role-Based Access Control (RBAC)</strong>, strengthening application security across multiple user roles and administrative workflows.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Architected <strong className="text-black font-bold">Finite State Machine (FSM)-driven backend workflows</strong> to manage conversational state transitions and complex business processes, improving maintainability and reducing workflow complexity.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Designed a distributed payroll management system that <strong className="text-black font-bold">reduced manual HR effort by approximately 70–80%</strong> through workflow automation.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Optimized MongoDB schemas, indexing strategies, aggregation pipelines, cursor-based pagination, and geospatial queries, <strong className="text-black font-bold">reducing API response times by 30–50%</strong> for data-intensive endpoints.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Designed resilient integrations with messaging platforms and payment gateways by implementing validation, retry mechanisms, and fault-tolerant error handling to ensure reliable communication between distributed services.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Developed Angular-based user interfaces and integrated frontend components with backend APIs to deliver seamless end-to-end application functionality.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Collaborated with engineering teams to define API contracts, review backend architecture, and deliver production-ready solutions following Clean Architecture principles and backend engineering best practices.
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="relative pl-0 md:pl-28">
                <span className="hidden md:block absolute left-2 top-3 bottom-[-52px] w-0.5 bg-black/30" aria-hidden />
                <span className="hidden md:block absolute left-0 top-3 w-4 h-4 rounded-full bg-black ring-4 ring-[#F2F2F2]" aria-hidden />

                <Card className="flex flex-col lg:flex-row gap-12 group">
                  <div className="lg:w-1/3">
                    <div className="md:hidden inline-block mb-2 px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-bold text-black/60 tracking-wider">2024</div>
                    <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Cordova Educational Solutions</h4>
                    <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Software Developer</div>
                    <p className="text-black/40 text-sm font-bold tracking-wider">OCT 2024 – JUNE 2025</p>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Developed and maintained scalable backend services and REST APIs supporting production <strong className="text-black font-bold">Learning Management System (LMS)</strong> and business applications.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Modernized legacy backend modules by decomposing tightly coupled code into reusable components and optimizing core algorithms using efficient data structures, improving code maintainability while increasing processing performance by approximately <strong className="text-black font-bold">20–40%</strong>.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Optimized database queries and backend business logic to improve application responsiveness and ensure consistent data handling across production systems.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Worked across the stack by developing <strong className="text-black font-bold">React.js features</strong>, enhancing existing user interfaces, and integrating frontend components with backend services to deliver complete application functionality.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Collaborated with developers and product stakeholders to translate business requirements into reliable, production-ready software solutions.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Investigated production issues through debugging, root cause analysis, and backend optimization, improving application reliability and overall system stability.
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="relative pl-0 md:pl-28">
                <span className="hidden md:block absolute left-2 top-3 bottom-[-52px] w-0.5 bg-black/30" aria-hidden />
                <span className="hidden md:block absolute left-0 top-3 w-4 h-4 rounded-full bg-black ring-4 ring-[#F2F2F2]" aria-hidden />

                <Card className="flex flex-col lg:flex-row gap-12 group">
                  <div className="lg:w-1/3">
                    <div className="md:hidden inline-block mb-2 px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-bold text-black/60 tracking-wider">2022</div>
                    <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Quest Innovative Solution</h4>
                    <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Junior Software Engineer</div>
                    <p className="text-black/40 text-sm font-bold tracking-wider">DEC 2022 – SEPT 2024</p>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Developed and maintained <strong className="text-black font-bold">30+ REST APIs</strong> for multiple client applications using Node.js and Express.js, delivering scalable backend services for booking systems and other business solutions.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Built reusable backend modules and business logic that accelerated feature development while following clean coding and software engineering best practices.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Modernized legacy backend modules by refactoring tightly coupled code into reusable components, <strong className="text-black font-bold">improving maintainability, readability, and long-term code quality</strong>.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Designed and optimized relational database queries and backend business logic, improving application performance, data consistency, and overall system reliability.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Integrated third-party APIs and external services to streamline business workflows and extend application capabilities across multiple client projects.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Developed responsive React.js user interfaces and integrated frontend components with backend APIs to deliver seamless end-to-end application functionality.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Diagnosed and resolved backend and frontend production issues through debugging, code optimization, and root cause analysis, improving software stability and reducing recurring defects.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Collaborated with senior developers throughout the software development lifecycle, contributing to feature implementation, testing, deployment, and continuous enhancement of production applications.
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </FadeIn>

            <FadeIn delay={360}>
              <div className="relative pl-0 md:pl-28">
                <span className="hidden md:block absolute left-0 top-3 w-4 h-4 rounded-full bg-black ring-4 ring-[#F2F2F2]" aria-hidden />

                <Card className="flex flex-col lg:flex-row gap-12 group">
                  <div className="lg:w-1/3">
                    <div className="md:hidden inline-block mb-2 px-2.5 py-1 rounded-full bg-black/5 text-[11px] font-bold text-black/60 tracking-wider">2022</div>
                    <h4 className="text-2xl font-bold tracking-tight mb-2 text-black">Carclenx (Pexa)</h4>
                    <div className="text-[#4D4D4D] font-medium uppercase tracking-widest text-sm mb-4">Full Stack Developer</div>
                    <p className="text-black/40 text-sm font-bold tracking-wider">JAN 2022 – JUNE 2022</p>
                  </div>
                  <div className="lg:w-2/3">
                    <ul className="space-y-4 text-lg text-[#4D4D4D] leading-relaxed relative">
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Developed responsive <strong className="text-black font-bold">Angular-based administrative dashboards</strong> and integrated frontend components with backend APIs to deliver intuitive and efficient user experiences.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Built and maintained RESTful APIs using Node.js and Express.js to support internal business applications and operational workflows.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Integrated third-party APIs and external services to extend platform capabilities and enable seamless data exchange across business systems.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Collaborated across frontend and backend development to implement reliable, maintainable, and production-ready application features.
                      </li>
                      <li className="pl-6 relative before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-black before:rounded-full">
                        Investigated and resolved application issues through debugging, testing, and code enhancements, improving software stability, maintainability, and overall application quality.
                      </li>
                    </ul>
                  </div>
                </Card>
              </div>
            </FadeIn>
          </div>
        </section>
      </FadeIn>



      <FadeIn>
        <section id="skills" className="px-6 md:px-12 max-w-6xl mx-auto space-y-10 mt-20 md:mt-40">
          <h2 className="text-3xl font-extrabold mb-12 px-6 tracking-tight text-black">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FadeIn delay={0}>
              <TintedCard shine type="gray" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Languages</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">JavaScript (ES6+), TypeScript, SQL, C</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={80}>
              <TintedCard shine type="mint" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Backend</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Node.js, Express.js, REST APIs, Redis Streams, Asynchronous Processing, FSM</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={160}>
              <TintedCard shine type="blue" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Frontend</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Angular, React.js, HTML5, CSS3</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={240}>
              <TintedCard shine type="peach" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Architecture</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">RESTful API Design, Clean Architecture, Database Schema Design, Distributed Systems</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={320}>
              <TintedCard shine type="gray" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Database &amp; Data</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">MongoDB, MySQL, Redis</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={400}>
              <TintedCard shine type="mint" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Cloud &amp; Infrastructure</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">AWS (Basics), Vercel, Docker, Nginx</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={480}>
              <TintedCard shine type="blue" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">Tools &amp; Workflow</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Git, GitHub, Postman, Linux, VS Code</p>
              </TintedCard>
            </FadeIn>

            <FadeIn delay={560}>
              <TintedCard shine type="peach" className="!p-6 md:!p-8 flex flex-col items-start h-full">
                <span className="text-xs font-bold uppercase tracking-widest text-black/50 mb-4">AI &amp; ML</span>
                <p className="text-base md:text-lg font-bold tracking-tight leading-snug text-black text-left mt-auto">Retrieval-Augmented Generation (RAG), Vector Embeddings, ChromaDB, Hugging Face, LLMs</p>
              </TintedCard>
            </FadeIn>
          </div>
        </section>
      </FadeIn>


      <FadeIn>
        <section id="work" className="px-6 md:px-12 max-w-6xl mx-auto space-y-10 mt-20 md:mt-40">
          <h2 className="text-3xl font-extrabold mb-12 px-6 tracking-tight text-black">Featured Projects</h2>

          <TintedCard type="blue" className="relative group overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 lg:mb-6 text-black">Distributed Commerce Platform</h3>
                <p className="text-lg lg:text-xl text-[#4D4D4D] leading-relaxed mb-8">
                  Designed and implemented a highly-scalable event-driven backend system.
                  Utilized Kafka for event streaming and gRPC for blazing-fast inter-service communication.
                </p>

                <a href="https://github.com/Jayasurya-T-Appu/Ecommerce_microservice_docker" target="_blank" rel="noopener noreferrer" className="mb-10 inline-block pointer-events-auto">
                  <Button variant="primary" className="!px-8 !py-3.5 !text-xs !rounded-xl border-2 border-black/20 hover:border-black transition-all duration-300 shadow-lg">
                    View Repository
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </Button>
                </a>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Node.js</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Kafka</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Docker</span>
                </div>
              </div>

              <div className="hidden lg:flex lg:w-1/2 h-32 md:h-48 lg:h-auto min-h-[8rem] bg-white/40 rounded-[2rem] border border-black/5 items-center justify-center p-4 md:p-8 mt-2 lg:mt-0">
                <div className="text-black/30 font-bold uppercase tracking-[0.2em] text-xs md:text-sm text-center">Architecture Diagram <span className="hidden md:inline"><br /></span> Component</div>
              </div>
            </div>
          </TintedCard>

          <TintedCard type="mint" className="relative group overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 lg:mb-6 text-black">Enterprise Knowledge Platform</h3>
                <p className="text-lg lg:text-xl text-[#4D4D4D] leading-relaxed mb-8">
                  Developed a sophisticated backend for semantic search. Integrated a local Mistral LLM and ChromaDB for instant vector retrieval against document embeddings.
                </p>

                <a href="https://github.com/Jayasurya-T-Appu/RAG_AI-AGENT.git" target="_blank" rel="noopener noreferrer" className="mb-10 inline-block pointer-events-auto">
                  <Button variant="primary" className="!px-8 !py-3.5 !text-xs !rounded-xl border-2 border-black/20 hover:border-black transition-all duration-300 shadow-lg">
                    View Repository
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </Button>
                </a>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">FastAPI</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Mistral LLM</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">ChromaDB</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-[280px] md:h-[320px] mt-8 lg:mt-0">
                <ProjectGallery
                  images={[
                    { src: "/rag_project/login.png", alt: "Login Interface" },
                    { src: "/rag_project/chat.png", alt: "Chat History" },
                    { src: "/rag_project/chat2.png", alt: "Chat Interface" }
                  ]}
                />
              </div>
            </div>
          </TintedCard>

          <TintedCard type="peach" className="relative group overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
              <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 lg:mb-6 text-black">Forge – Build Automation Tool</h3>
                <p className="text-lg lg:text-xl text-[#4D4D4D] leading-relaxed mb-8">
                  A lightweight compiler driver and native build system written in C. Recursively scans project directories, generates a dependency build plan, automatically structures the build directories, compiles files via GCC, and links them into a final executable.
                </p>

                <a href="https://github.com/Jayasurya-T-Appu/forge-tool-.git" target="_blank" rel="noopener noreferrer" className="mb-10 inline-block pointer-events-auto">
                  <Button variant="primary" className="!px-8 !py-3.5 !text-xs !rounded-xl border-2 border-black/20 hover:border-black transition-all duration-300 shadow-lg">
                    View Repository
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ml-1"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </Button>
                </a>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">C</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">GCC</span>
                  <span className="bg-white/50 px-4 py-2 rounded-full text-sm font-bold text-black border border-black/5 backdrop-blur-sm">Systems Programming</span>
                </div>
              </div>

              <div className="w-full lg:w-1/2 h-[280px] md:h-[320px] mt-8 lg:mt-0 flex items-center justify-center p-4">
                <div className="relative w-full h-full rounded-[1.2rem] overflow-hidden border border-black/10 bg-white shadow-xl flex flex-col">
                  {/* Window Header */}
                  <div className="h-6 bg-[#1A1A1A] border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  </div>

                  <div className="relative flex-1 bg-[#1E1E1E]">
                    <Image
                      src="/forgeTool.webp"
                      alt="Forge – Build Automation Tool Interface"
                      fill
                      className="object-cover p-2"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TintedCard>
        </section>
      </FadeIn>


      <FadeIn>
        <section className="mt-20 md:mt-40 text-center pb-3">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-12 text-black">Let&apos;s build something great.</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer"><Button className="!px-12 !py-6 !text-lg mx-auto sm:mx-0">Get in touch</Button></a>
            <a href={RESUME_PATH} download={RESUME_DOWNLOAD_NAME}><Button variant="secondary" className="!px-12 !py-6 !text-lg mx-auto sm:mx-0">Download resume</Button></a>
          </div>

          <div className="flex gap-6 items-center justify-center mt-6 md:mt-12">
            <a href="https://github.com/Jayasurya-T-Appu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-4 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/jayasuryatappu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-4 bg-white border border-black/5 rounded-full hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </section>
      </FadeIn>

      <footer className="mt-20 md:mt-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-center md:text-left">
          <div>
            <p className="text-lg font-extrabold tracking-tight text-white">Jayasurya T Appu</p>
            <p className="text-sm text-white/50 mt-1 max-w-xs">Backend Engineer building scalable systems, one service at a time.</p>
          </div>

          <div className="flex flex-col items-center md:items-start gap-2 text-sm font-medium">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a>
            <a href="#work" className="text-white/60 hover:text-white transition-colors">Work</a>
            <a href="mailto:jayasuryawebdev@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Jayasurya-T-Appu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="p-3 bg-white/10 border border-white/10 rounded-full hover:-translate-y-1 hover:bg-white/20 transition-all duration-300 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/jayasuryatappu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="p-3 bg-white/10 border border-white/10 rounded-full hover:-translate-y-1 hover:bg-white/20 transition-all duration-300 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/40 tracking-wide">
          © {new Date().getFullYear()} Jayasurya T Appu. All rights reserved.
        </div>
      </footer>

      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
