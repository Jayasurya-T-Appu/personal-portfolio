import { DiagramFrame, Packet, Visible } from "./diagram/smil";

/**
 * Animated diagram for Forge (github.com/Jayasurya-T-Appu/forge-tool-).
 * Mirrors main.c: parseInput → scanProject → createBuildPlan → executeBuild
 *  SCAN    — recursively walk src/, collecting .c sources and .h headers
 *  PLAN    — one build step per .c, object path mirrors the source tree under build/
 *  COMPILE — `gcc -c src/x.c -o build/x.o` per step
 *  LINK    — `gcc build/*.o -o build/forge.exe`
 */

const CYCLE = 8;
const END = CYCLE - 0.25;

type Row = { name: string; depth: number; kind: "dir" | "c" | "h"; y: number };

// Real layout of forge/src (trimmed to the modules that matter for the story)
const SRC: Row[] = [
  { name: "src/", depth: 0, kind: "dir", y: 66 },
  { name: "main.c", depth: 1, kind: "c", y: 84 },
  { name: "scanner/", depth: 1, kind: "dir", y: 102 },
  { name: "scanner.c", depth: 2, kind: "c", y: 120 },
  { name: "scanner.h", depth: 2, kind: "h", y: 138 },
  { name: "build_plan/", depth: 1, kind: "dir", y: 156 },
  { name: "build_plan.c", depth: 2, kind: "c", y: 174 },
  { name: "build_engine/", depth: 1, kind: "dir", y: 192 },
  { name: "build_engine.c", depth: 2, kind: "c", y: 210 },
];
const SOURCES = SRC.filter((r) => r.kind === "c");
const OUT: Row[] = SRC.filter((r) => r.kind !== "h").map((r) => ({
  ...r,
  name: r.name === "src/" ? "build/" : r.name.replace(/\.c$/, ".o"),
}));

const SRC_X = 22;
const OUT_X = 244;
const INDENT = 12;
const STAGES = [
  { label: "Scan", from: 0, to: 1.8 },
  { label: "Plan", from: 1.8, to: 3.0 },
  { label: "Compile", from: 3.0, to: 5.6 },
  { label: "Link", from: 5.6, to: END },
];
const SCAN_START = 0.2;
const SCAN_END = 1.6;
const scanTimeFor = (y: number) => SCAN_START + ((y - 60) / (216 - 60)) * (SCAN_END - SCAN_START);
const compileStart = (i: number) => 3.1 + i * 0.6;
const EXE = { x: 252, y: 236, w: 132, h: 30 };

/** Folder a nested source file lives in (e.g. "scanner/"), or "" for top-level files. */
function parentDir(row: Row) {
  if (row.depth < 2) return "";
  const idx = SRC.indexOf(row);
  for (let i = idx - 1; i >= 0; i--) if (SRC[i].kind === "dir" && SRC[i].depth === row.depth - 1) return SRC[i].name;
  return "";
}

// Each line shows until the next one replaces it (hard cut, like a real terminal).
const TERMINAL_STARTS: { text: string; from: number }[] = [
  { text: "$ forge build ./src", from: 0 },
  { text: "scan: 4 sources · 1 header", from: 0.9 },
  { text: "plan: 4 steps → build/", from: 1.9 },
  ...SOURCES.map((r, i) => ({
    text: `gcc -c ${parentDir(r)}${r.name} -o ${r.name.replace(/\.c$/, "")}.o`,
    from: compileStart(i) - 0.1,
  })),
  { text: "gcc build/*.o -o build/forge.exe", from: 5.6 },
  { text: "✓ build complete", from: 6.5 },
];
const TERMINAL = TERMINAL_STARTS.map((line, i) => ({
  ...line,
  to: i < TERMINAL_STARTS.length - 1 ? TERMINAL_STARTS[i + 1].from : END,
}));

function TreeRow({ row, x, className }: { row: Row; x: number; className: string }) {
  return (
    <text x={x + row.depth * INDENT} y={row.y} className={`text-[8.5px] font-mono ${className}`}>
      {row.name}
    </text>
  );
}

export function ForgeBuildDiagram({ className = "" }: { className?: string }) {
  return (
    <DiagramFrame
      className={className}
      label="Build Pipeline"
      viewBox="0 0 400 340"
      ariaLabel="Forge build pipeline: it scans the src folder for C sources and headers, plans one build step per source file mirroring the folder structure under build, compiles each file to an object file with gcc, then links the object files into forge.exe."
    >
      {/* Stage pills */}
      {STAGES.map((s, i) => {
        const x = 16 + i * 94;
        return (
          <g key={s.label}>
            <rect x={x} y={10} width={84} height={22} rx={11} className="fill-white stroke-black/15" />
            <g className="diagram-motion" opacity={0}>
              <rect x={x} y={10} width={84} height={22} rx={11} className="fill-black" />
              <Visible cycle={CYCLE} from={s.from} to={s.to} fade={0.1} />
            </g>
            <text x={x + 42} y={24.5} textAnchor="middle" className="text-[8px] font-bold uppercase tracking-widest fill-black/50">
              {s.label}
            </text>
            <text x={x + 42} y={24.5} textAnchor="middle" className="diagram-motion text-[8px] font-bold uppercase tracking-widest fill-white" opacity={0}>
              {s.label}
              <Visible cycle={CYCLE} from={s.from} to={s.to} fade={0.1} />
            </text>
            {i < STAGES.length - 1 && <path d={`M ${x + 86} 21 h 6`} className="stroke-black/25" />}
          </g>
        );
      })}

      {/* Tree panels */}
      <rect x={14} y={48} width={160} height={176} rx={12} className="fill-white stroke-black/10" />
      <rect x={236} y={48} width={148} height={176} rx={12} className="fill-white stroke-black/10" />
      <text x={194} y={60} textAnchor="middle" className="text-[7.5px] font-mono fill-black/40">gcc -c</text>

      {/* Source tree */}
      {SRC.map((r) => (
        <TreeRow key={r.name} row={r} x={SRC_X} className={r.kind === "dir" ? "fill-black/45" : "fill-black"} />
      ))}
      {/* Scan markers: .c gets a solid dot, .h a hollow one, as the scan line passes */}
      {SRC.filter((r) => r.kind !== "dir").map((r) => (
        <circle
          key={`m${r.name}`}
          cx={162}
          cy={r.y - 3}
          r={2.5}
          className={`diagram-motion ${r.kind === "c" ? "fill-black" : "fill-none stroke-black/50"}`}
          opacity={0}
        >
          <Visible cycle={CYCLE} from={scanTimeFor(r.y)} to={END} fade={0.08} />
        </circle>
      ))}
      {/* Scan line */}
      <g className="diagram-motion" opacity={0}>
        <rect x={16} width={156} height={14} y={52} className="fill-black/[0.05]">
          <animate attributeName="y" dur={`${CYCLE}s`} repeatCount="indefinite" values="52;52;206;206" keyTimes={`0;${(SCAN_START / CYCLE).toFixed(4)};${(SCAN_END / CYCLE).toFixed(4)};1`} />
        </rect>
        <rect x={16} width={156} height={1.25} y={66} className="fill-black/60">
          <animate attributeName="y" dur={`${CYCLE}s`} repeatCount="indefinite" values="66;66;220;220" keyTimes={`0;${(SCAN_START / CYCLE).toFixed(4)};${(SCAN_END / CYCLE).toFixed(4)};1`} />
        </rect>
        <Visible cycle={CYCLE} from={SCAN_START} to={SCAN_END + 0.15} fade={0.1} />
      </g>

      {/* Output tree: dim placeholders, directories materialise in PLAN, objects in COMPILE */}
      {OUT.map((r) => (
        <TreeRow key={`o${r.name}`} row={r} x={OUT_X} className="fill-black/15" />
      ))}
      {OUT.map((r, i) => {
        const srcIndex = SOURCES.findIndex((s) => s.y === r.y);
        const from = r.kind === "dir" ? 1.95 + i * 0.12 : compileStart(srcIndex) + 0.45;
        return (
          <g key={`os${r.name}`} className="diagram-motion" opacity={0}>
            <TreeRow row={r} x={OUT_X} className={r.kind === "dir" ? "fill-black/45" : "fill-black font-bold"} />
            <Visible cycle={CYCLE} from={from} to={END} fade={0.1} />
          </g>
        );
      })}

      {/* Plan: dashed step mapping source → object */}
      <g className="diagram-motion" opacity={0}>
        {SOURCES.map((r) => (
          <path key={`p${r.name}`} d={`M 168 ${r.y - 3} H ${OUT_X - 4}`} className="stroke-black/20" strokeDasharray="2 3" />
        ))}
        <Visible cycle={CYCLE} from={1.9} to={END} fade={0.2} />
      </g>

      {/* Compile packets */}
      {SOURCES.map((r, i) => (
        <Packet key={`c${r.name}`} path={`M 168 ${r.y - 3} H ${OUT_X - 4}`} start={compileStart(i)} travel={0.45} cycle={CYCLE} />
      ))}

      {/* Link: objects converge into the executable */}
      <rect x={EXE.x} y={EXE.y} width={EXE.w} height={EXE.h} rx={10} className="fill-white stroke-black/25" strokeDasharray="3 3" />
      <text x={EXE.x + EXE.w / 2} y={EXE.y + 19} textAnchor="middle" className="text-[9px] font-mono font-bold fill-black/30">build/forge.exe</text>
      <g className="diagram-motion" opacity={0}>
        <rect x={EXE.x} y={EXE.y} width={EXE.w} height={EXE.h} rx={10} className="fill-black" />
        <text x={EXE.x + EXE.w / 2} y={EXE.y + 19} textAnchor="middle" className="text-[9px] font-mono font-bold fill-white">build/forge.exe ✓</text>
        <Visible cycle={CYCLE} from={6.35} to={END} />
      </g>
      {SOURCES.map((r, i) => {
        const startX = OUT_X + r.depth * INDENT + r.name.length * 5.2 + 8;
        return (
          <Packet
            key={`l${r.name}`}
            path={`M ${startX} ${r.y - 3} C 384 ${r.y - 3}, ${EXE.x + EXE.w / 2 + 40} ${EXE.y - 10}, ${EXE.x + EXE.w / 2} ${EXE.y}`}
            start={5.7 + i * 0.12}
            travel={0.55}
            cycle={CYCLE}
            r={2.5}
          />
        );
      })}

      {/* Terminal */}
      <rect x={14} y={280} width={370} height={48} rx={10} className="fill-[#111]" />
      <circle cx={26} cy={291} r={2} className="fill-white/40" />
      <circle cx={33} cy={291} r={2} className="fill-white/25" />
      <circle cx={40} cy={291} r={2} className="fill-white/15" />
      {TERMINAL.map((line) => (
        <text key={line.text} x={26} y={315} className="diagram-motion text-[8.5px] font-mono fill-white/85" opacity={0}>
          {line.text}
          <Visible cycle={CYCLE} from={line.from} to={line.to} fade={0.02} />
        </text>
      ))}
    </DiagramFrame>
  );
}
