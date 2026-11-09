"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

// "Swarm rebuild" reveal: a few cursor agents fly in, draw a placeholder box over each
// layer, then the real content fills in. Layers are built in `index` order.

type Phase = "pending" | "drawing" | "filling" | "done";

interface LayerState {
  phase: Phase;
  agent?: number;
  size?: string;
}

interface Agent {
  x: number;
  y: number;
  dur: number;
  visible: boolean;
}

// Monochrome agents: cursor / outline colour, and the lighter dot used on the black progress pill
const AGENTS = [
  { name: "node", color: "#0A0A0A", dot: "#FFFFFF" },
  { name: "redis", color: "#525252", dot: "#D4D4D4" },
  { name: "mongo", color: "#262626", dot: "#A3A3A3" },
  { name: "docker", color: "#737373", dot: "#737373" },
];

// Raise above 1 to slow the whole swarm down, lower to speed it up
const PACE = 1.03;
const MOVE_MS = 550 * PACE;
const DRAW_MS = 600 * PACE;
const FILL_MS = 400 * PACE;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface SwarmContextValue {
  registerLayer: (index: number, el: HTMLElement | null) => void;
  layers: Record<number, LayerState>;
  complete: boolean;
}

const SwarmContext = createContext<SwarmContextValue | null>(null);

export function SwarmBuild({ children, className = "", agents = 4 }: { children: ReactNode; className?: string; agents?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerEls = useRef(new Map<number, HTMLElement>());
  const [layers, setLayers] = useState<Record<number, LayerState>>({});
  const [agentStates, setAgentStates] = useState<Agent[]>([]);
  const [built, setBuilt] = useState(0);
  const [total, setTotal] = useState(0);
  const [pillVisible, setPillVisible] = useState(false);
  const [complete, setComplete] = useState(false);

  const registerLayer = useCallback((index: number, el: HTMLElement | null) => {
    if (el) layerEls.current.set(index, el);
    else layerEls.current.delete(index);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let cancelled = false;

    const setLayer = (index: number, state: LayerState) => setLayers((prev) => ({ ...prev, [index]: state }));
    const moveAgent = (a: number, patch: Partial<Agent>) =>
      setAgentStates((prev) => prev.map((agent, i) => (i === a ? { ...agent, ...patch } : agent)));

    const boundsOf = (el: HTMLElement) => {
      const c = container.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return { x: r.left - c.left, y: r.top - c.top, w: r.width, h: r.height };
    };

    const run = async () => {
      const order = [...layerEls.current.keys()].sort((a, b) => a - b);
      const count = Math.min(agents, AGENTS.length, order.length);
      const { width, height } = container.getBoundingClientRect();
      // Agents enter from just outside the container's corners and sides
      const starts = [
        { x: -40, y: -40 },
        { x: width + 40, y: -40 },
        { x: -40, y: height * 0.6 },
        { x: width + 40, y: height * 0.6 },
      ];

      setTotal(order.length);
      setPillVisible(true);
      setAgentStates(starts.slice(0, count).map((s) => ({ ...s, dur: 0, visible: false })));
      await sleep(50);

      let next = 0;
      const worker = async (a: number) => {
        await sleep(a * 180);
        moveAgent(a, { visible: true });
        while (!cancelled && next < order.length) {
          const index = order[next++];
          const el = layerEls.current.get(index);
          if (!el) continue;

          let b = boundsOf(el);
          moveAgent(a, { x: b.x, y: b.y, dur: MOVE_MS });
          await sleep(MOVE_MS);
          if (cancelled) return;

          b = boundsOf(el);
          setLayer(index, { phase: "drawing", agent: a, size: `${Math.round(b.w)} × ${Math.round(b.h)}` });
          moveAgent(a, { x: b.x + b.w, y: b.y + b.h, dur: DRAW_MS });
          await sleep(DRAW_MS + 150);
          if (cancelled) return;

          setLayer(index, { phase: "filling", agent: a });
          setBuilt((n) => n + 1);
          await sleep(FILL_MS);
          if (cancelled) return;
          setLayer(index, { phase: "done" });
        }
        moveAgent(a, { ...starts[a], dur: MOVE_MS * 1.4, visible: false });
      };

      await Promise.all(Array.from({ length: count }, (_, a) => worker(a)));
      if (cancelled) return;
      setComplete(true);
      await sleep(1200);
      if (!cancelled) setPillVisible(false);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setComplete(true);
          return;
        }
        run();
      },
      { threshold: 0.2 }
    );
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [agents]);

  const value = useMemo(() => ({ registerLayer, layers, complete }), [registerLayer, layers, complete]);

  return (
    <SwarmContext.Provider value={value}>
      <div ref={containerRef} className={`relative ${className}`}>
        {children}

        {agentStates.map((agent, a) => (
          <div
            key={a}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 z-20"
            style={{
              transform: `translate3d(${agent.x - 3}px, ${agent.y - 2}px, 0)`,
              transition: `transform ${agent.dur}ms cubic-bezier(0.65, 0, 0.35, 1), opacity 400ms`,
              opacity: agent.visible ? 1 : 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
              <path d="M4 2.5 L19.5 13 L12 14.5 L8.5 21.5 Z" fill={AGENTS[a].color} stroke="#FFFFFF" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span
              className="absolute left-4 top-5 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold lowercase tracking-wide text-white"
              style={{ background: AGENTS[a].color }}
            >
              {AGENTS[a].name}
            </span>
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${pillVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        <div className="flex items-center gap-3 rounded-full bg-black px-4 py-2 text-[11px] font-bold tracking-wider text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] tabular-nums">
          <div className="flex -space-x-1.5">
            {agentStates.map((_, a) => (
              <span key={a} className="h-4 w-4 rounded-full border-2 border-black" style={{ background: AGENTS[a].dot }} />
            ))}
          </div>
          <span>{agentStates.length} agents</span>
          <span className="text-white/40">·</span>
          <span>
            {built} / {total} layers
          </span>
        </div>
      </div>
    </SwarmContext.Provider>
  );
}

export function SwarmLayer({ children, index, className = "", radius = "rounded-2xl" }: { children: ReactNode; index: number; className?: string; radius?: string }) {
  const ctx = useContext(SwarmContext);
  const registerLayer = ctx?.registerLayer;
  const ref = useCallback((el: HTMLDivElement | null) => registerLayer?.(index, el), [registerLayer, index]);

  const state = ctx?.layers[index] ?? { phase: "pending" as Phase };
  const shown = !ctx || ctx.complete || state.phase === "filling" || state.phase === "done";
  const color = state.agent !== undefined ? AGENTS[state.agent].color : "#000";

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className={`h-full transition-[opacity,scale] duration-500 ease-out ${shown ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"}`}>
        {children}
      </div>

      {(state.phase === "drawing" || state.phase === "filling") && (
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ${state.phase === "filling" ? "opacity-0" : "opacity-100"}`}
        >
          <div
            className={`swarm-draw absolute inset-0 ${radius}`}
            style={{
              animationDuration: `${DRAW_MS}ms`,
              border: `1.5px solid ${color}`,
              background: "repeating-linear-gradient(135deg, rgba(0,0,0,0.07) 0 6px, rgba(0,0,0,0.025) 6px 12px)",
            }}
          />
          {["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"].map((pos) => (
            <span
              key={pos}
              className={`swarm-pop absolute h-2 w-2 bg-white ${pos}`}
              style={{ border: `1.5px solid ${color}`, animationDelay: `${DRAW_MS}ms` }}
            />
          ))}
          <span
            className="swarm-pop absolute -bottom-7 left-1/2 -ml-8 w-16 rounded px-1.5 py-0.5 text-center text-[10px] font-bold text-white tabular-nums"
            style={{ background: color, animationDelay: `${DRAW_MS}ms` }}
          >
            {state.size}
          </span>
        </div>
      )}
    </div>
  );
}
