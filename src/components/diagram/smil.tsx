import { ReactNode } from "react";

/**
 * Shared helpers for the animated project diagrams.
 * Everything is SVG + SMIL (<animate>/<animateMotion>) on a shared loop ("cycle"),
 * so the diagrams need no client JS and every element stays in sync.
 */

/** Seconds → fraction of the cycle (clamped, rounded for stable markup). */
export const frac = (t: number, cycle: number) => +(Math.min(Math.max(t, 0), cycle) / cycle).toFixed(4);

/** Opacity animation: visible between `from` and `to` seconds of each cycle. */
export function Visible({ cycle, from, to, fade = 0.15, max = 1 }: { cycle: number; from: number; to: number; fade?: number; max?: number }) {
  const a = frac(from, cycle);
  const b = frac(Math.min(from + fade, to), cycle);
  const c = frac(Math.max(to - fade, from + fade), cycle);
  const d = frac(to, cycle);
  return (
    <animate
      attributeName="opacity"
      dur={`${cycle}s`}
      repeatCount="indefinite"
      values={`0;0;${max};${max};0;0`}
      keyTimes={`0;${a};${b};${c};${d};1`}
    />
  );
}

/** A dot that travels `path` during [start, start + travel] seconds of each cycle. */
export function Packet({ path, start, travel, cycle, r = 3, className = "fill-black" }: { path: string; start: number; travel: number; cycle: number; r?: number; className?: string }) {
  const t0 = frac(start, cycle);
  const t1 = frac(start + travel, cycle);
  return (
    <circle r={r} className={`diagram-motion ${className}`} opacity={0}>
      <animateMotion dur={`${cycle}s`} repeatCount="indefinite" path={path} keyPoints="0;0;1;1" keyTimes={`0;${t0};${t1};1`} calcMode="linear" />
      <Visible cycle={cycle} from={start} to={start + travel} fade={Math.min(0.08, travel / 4)} />
    </circle>
  );
}

/** Card chrome shared by all diagrams: header label, "live" pulse, reduced-motion handling. */
export function DiagramFrame({ label, viewBox, ariaLabel, children, className = "" }: { label: string; viewBox: string; ariaLabel: string; children: ReactNode; className?: string }) {
  return (
    <div className={`relative w-full rounded-[2rem] bg-white/50 border border-black/5 p-4 md:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{label}</span>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          <span className="relative flex h-1.5 w-1.5">
            <span className="diagram-motion absolute inline-flex h-full w-full rounded-full bg-black/40 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black" />
          </span>
          Live
        </span>
      </div>
      <svg viewBox={viewBox} className="w-full h-auto font-sans" role="img" aria-label={ariaLabel}>
        {children}
      </svg>
    </div>
  );
}
