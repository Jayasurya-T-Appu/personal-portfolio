/**
 * Animated architecture diagram for the Distributed Commerce Platform project.
 * Pure SVG + SMIL (<animateMotion>), so it needs no JS and runs on the server-rendered page.
 * Packets travel: client → gateway → services (gRPC) → Kafka → consumers.
 */

type Box = { x: number; y: number; w: number; h: number; label: string; sub?: string; dark?: boolean };

const CLIENT: Box = { x: 150, y: 14, w: 100, h: 34, label: "Client", sub: "web · mobile" };
const GATEWAY: Box = { x: 140, y: 78, w: 120, h: 34, label: "API Gateway", dark: true };
const SERVICES: Box[] = [
  { x: 30, y: 158, w: 96, h: 34, label: "Orders" },
  { x: 152, y: 158, w: 96, h: 34, label: "Catalog" },
  { x: 274, y: 158, w: 96, h: 34, label: "Users" },
];
const KAFKA = { x: 20, y: 232, w: 360, h: 26 };
const CONSUMERS: Box[] = [
  { x: 30, y: 290, w: 96, h: 30, label: "Inventory" },
  { x: 152, y: 290, w: 96, h: 30, label: "Payments" },
  { x: 274, y: 290, w: 96, h: 30, label: "Notify" },
];

const cx = (b: Box) => b.x + b.w / 2;
const bottom = (b: { y: number; h: number }) => b.y + b.h;

// Connection paths (also used as motion paths for packets).
const P_CLIENT = `M ${cx(CLIENT)} ${bottom(CLIENT)} V ${GATEWAY.y}`;
const P_RPC = SERVICES.map(
  (s) => `M ${cx(GATEWAY)} ${bottom(GATEWAY)} C ${cx(GATEWAY)} ${bottom(GATEWAY) + 26}, ${cx(s)} ${s.y - 26}, ${cx(s)} ${s.y}`
);
const P_PUB = SERVICES.map((s) => `M ${cx(s)} ${bottom(s)} V ${KAFKA.y}`);
const P_SUB = CONSUMERS.map((c) => `M ${cx(c)} ${bottom(KAFKA)} V ${c.y}`);

function Node({ b }: { b: Box }) {
  return (
    <g>
      <rect
        x={b.x}
        y={b.y}
        width={b.w}
        height={b.h}
        rx={10}
        className={b.dark ? "fill-black" : "fill-white stroke-black/15"}
        strokeWidth={1}
      />
      <text
        x={cx(b)}
        y={b.y + (b.sub ? b.h / 2 - 3 : b.h / 2 + 4)}
        textAnchor="middle"
        className={`text-[11px] font-bold ${b.dark ? "fill-white" : "fill-black"}`}
      >
        {b.label}
      </text>
      {b.sub && (
        <text x={cx(b)} y={b.y + b.h / 2 + 10} textAnchor="middle" className="text-[8px] fill-black/40 font-mono">
          {b.sub}
        </text>
      )}
    </g>
  );
}

const CYCLE = 3.6; // seconds for one request → event round trip; every packet shares this clock

/** A packet that travels `path` during [start, start + travel] seconds of each CYCLE. */
function Packet({ path, start, travel, r = 3 }: { path: string; start: number; travel: number; r?: number }) {
  const t0 = +(start / CYCLE).toFixed(4);
  const t1 = +(Math.min(start + travel, CYCLE) / CYCLE).toFixed(4);
  const fadeIn = +Math.min(t0 + 0.02, t1).toFixed(4);
  const fadeOut = +Math.max(t1 - 0.02, fadeIn).toFixed(4);
  return (
    <circle r={r} className="arch-packet fill-black" opacity={0}>
      <animateMotion dur={`${CYCLE}s`} repeatCount="indefinite" path={path} keyPoints="0;0;1;1" keyTimes={`0;${t0};${t1};1`} calcMode="linear" />
      <animate attributeName="opacity" dur={`${CYCLE}s`} repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes={`0;${t0};${fadeIn};${fadeOut};${t1};1`} />
    </circle>
  );
}

export function ArchitectureDiagram({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full rounded-[2rem] bg-white/50 border border-black/5 p-4 md:p-6 ${className}`}>
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">System Architecture</span>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
          <span className="relative flex h-1.5 w-1.5">
            <span className="arch-pulse absolute inline-flex h-full w-full rounded-full bg-black/40 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-black" />
          </span>
          Live
        </span>
      </div>

      <svg
        viewBox="0 0 400 332"
        className="w-full h-auto font-sans"
        role="img"
        aria-label="Event-driven architecture: client requests pass through an API gateway to Orders, Catalog and Users services over gRPC; services publish events to Kafka, consumed by Inventory, Payments and Notify workers."
      >
        {/* Docker boundary around the services */}
        <rect x={18} y={146} width={364} height={58} rx={14} fill="none" className="stroke-black/20" strokeDasharray="4 5" />
        <text x={26} y={142} className="text-[8px] font-mono fill-black/40 uppercase tracking-widest">docker · services</text>

        {/* Wires */}
        <g fill="none" className="stroke-black/20" strokeWidth={1.25}>
          <path d={P_CLIENT} />
          {P_RPC.map((d, i) => <path key={`rpc${i}`} d={d} />)}
          {P_PUB.map((d, i) => <path key={`pub${i}`} d={d} strokeDasharray="3 3" />)}
          {P_SUB.map((d, i) => <path key={`sub${i}`} d={d} strokeDasharray="3 3" />)}
        </g>
        <text x={cx(GATEWAY) + 8} y={bottom(GATEWAY) + 22} className="text-[8px] font-mono fill-black/40">gRPC</text>

        {/* Kafka bus */}
        <rect x={KAFKA.x} y={KAFKA.y} width={KAFKA.w} height={KAFKA.h} rx={8} className="fill-black" />
        <text x={KAFKA.x + 12} y={KAFKA.y + 17} className="text-[10px] font-bold fill-white tracking-wider">KAFKA</text>
        <text x={KAFKA.x + KAFKA.w - 12} y={KAFKA.y + 17} textAnchor="end" className="text-[8px] font-mono fill-white/50">order.created · stock.updated</text>
        {/* Event stream moving along the bus */}
        <g className="arch-packet">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} y={KAFKA.y + 11} width={10} height={4} rx={2} className="fill-white/30">
              <animate attributeName="x" from={KAFKA.x + 70} to={KAFKA.x + KAFKA.w - 150} dur="2.4s" begin={`${i * 0.6}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>

        {/* Nodes */}
        <Node b={CLIENT} />
        <Node b={GATEWAY} />
        {SERVICES.map((s) => <Node key={s.label} b={s} />)}
        {CONSUMERS.map((c) => <Node key={c.label} b={c} />)}

        {/* Packets: one request fans out over gRPC, then becomes events on Kafka */}
        <Packet path={P_CLIENT} start={0} travel={0.5} />
        {P_RPC.map((d, i) => <Packet key={`prpc${i}`} path={d} start={0.5 + i * 0.1} travel={0.7} />)}
        {P_PUB.map((d, i) => <Packet key={`ppub${i}`} path={d} start={1.4 + i * 0.1} travel={0.45} r={2.5} />)}
        {P_SUB.map((d, i) => <Packet key={`psub${i}`} path={d} start={2.1 + i * 0.12} travel={0.45} r={2.5} />)}
      </svg>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .arch-packet, .arch-pulse { display: none; }
        }
      `}</style>
    </div>
  );
}
