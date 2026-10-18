import { DiagramFrame, Packet, Visible } from "./diagram/smil";

/**
 * Animated diagram for the Enterprise Knowledge Platform (PrivateRAG).
 * Mirrors the real pipeline in github.com/Jayasurya-T-Appu/RAG_AI-AGENT:
 *  ① Ingest  — document → chunk (500 chars / 100 overlap) → MiniLM embeddings → ChromaDB, tagged with user_id
 *  ② Query   — question → API Gateway (JWT → X-User-ID) → embed → ChromaDB top-k=2 filtered by user_id
 *              → Mistral via Ollama → answer streamed back (SSE)
 */

const CYCLE = 7;
const END = CYCLE - 0.25; // everything fades before the loop restarts

// Layout (viewBox 0 0 400 340)
const DOC = { x: 20, y: 30, w: 38, h: 48 };
const CHUNK_X = 76;
const CHUNK_Y = [36, 50, 64];
const EMBED = { x: 160, y: 44, w: 76, h: 28 };
const DB = { x: 262, y: 30, w: 120, top: 38, bottom: 128, ry: 8 };
const GATEWAY = { x: 16, y: 168, w: 124, h: 36 };
const LLM = { x: 262, y: 168, w: 120, h: 36 };
const Q_BUBBLE = { x: 214, y: 232, w: 158, h: 24 };
const A_BUBBLE = { x: 30, y: 270, w: 272, h: 48 };

const DB_COLS = [284, 300, 316, 332, 348, 364];
const DB_ROWS = [74, 86];
const NEW_VECTORS = [300, 316, 332]; // the three freshly ingested chunks (row y = 98)
const NEW_ROW = 98;

const P_CHUNK = CHUNK_Y.map((y) => `M 140 ${y + 4} C 150 ${y + 4}, 150 ${EMBED.y + 14}, ${EMBED.x} ${EMBED.y + 14}`);
const P_EMBED_DB = `M ${EMBED.x + EMBED.w} ${EMBED.y + 14} H ${DB.x}`;
const P_Q_GATEWAY = `M ${Q_BUBBLE.x} ${Q_BUBBLE.y + 12} C 150 ${Q_BUBBLE.y + 12}, 78 236, 78 ${GATEWAY.y + GATEWAY.h}`;
const P_GATEWAY_EMBED = `M 120 ${GATEWAY.y} C 120 120, 198 112, 198 ${EMBED.y + EMBED.h}`;
const P_DB_LLM = [310, 334].map((x) => `M ${x} ${DB.bottom + DB.ry} V ${LLM.y}`);
const P_LLM_ANSWER = `M ${LLM.x} ${LLM.y + 28} C 220 ${LLM.y + 28}, 190 220, 170 ${A_BUBBLE.y}`;

function Box({ x, y, w, h, label, sub, dark = false }: { x: number; y: number; w: number; h: number; label: string; sub?: string; dark?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} className={dark ? "fill-black" : "fill-white stroke-black/15"} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} textAnchor="middle" className={`text-[10px] font-bold ${dark ? "fill-white" : "fill-black"}`}>
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 10} textAnchor="middle" className={`text-[7.5px] font-mono ${dark ? "fill-white/55" : "fill-black/40"}`}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function RagPipelineDiagram({ className = "" }: { className?: string }) {
  return (
    <DiagramFrame
      className={className}
      label="RAG Pipeline"
      viewBox="0 0 400 340"
      ariaLabel="Retrieval-augmented generation pipeline: a document is split into chunks, embedded with MiniLM and stored in ChromaDB tagged with the user's ID. A question passes through the API gateway, is embedded, matched against that user's chunks only, and the top two are sent to a local Mistral model whose answer streams back to the chat."
    >
      {/* Lane labels */}
      <text x={16} y={18} className="text-[7.5px] font-mono uppercase tracking-widest fill-black/40">① ingest</text>
      <text x={16} y={160} className="text-[7.5px] font-mono uppercase tracking-widest fill-black/40">② query</text>

      {/* Wires */}
      <g fill="none" className="stroke-black/15" strokeWidth={1.25}>
        {P_CHUNK.map((d, i) => <path key={i} d={d} strokeDasharray="3 3" />)}
        <path d={P_EMBED_DB} />
        <path d={P_Q_GATEWAY} strokeDasharray="3 3" />
        <path d={P_GATEWAY_EMBED} />
        {P_DB_LLM.map((d, i) => <path key={i} d={d} />)}
        <path d={P_LLM_ANSWER} strokeDasharray="3 3" />
      </g>

      {/* Document */}
      <path
        d={`M ${DOC.x} ${DOC.y} H ${DOC.x + DOC.w - 10} L ${DOC.x + DOC.w} ${DOC.y + 10} V ${DOC.y + DOC.h} H ${DOC.x} Z`}
        className="fill-white stroke-black/30"
      />
      <path d={`M ${DOC.x + DOC.w - 10} ${DOC.y} V ${DOC.y + 10} H ${DOC.x + DOC.w}`} fill="none" className="stroke-black/30" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={DOC.x + 7} y={DOC.y + 16 + i * 7} width={i === 3 ? 14 : 24} height={2.5} rx={1} className="fill-black/20" />
      ))}
      <text x={DOC.x + DOC.w / 2} y={DOC.y + DOC.h + 12} textAnchor="middle" className="text-[7px] font-mono fill-black/45">.pdf · .docx</text>

      {/* Chunks split out of the document */}
      {CHUNK_Y.map((y, i) => (
        <g key={i} className="diagram-motion" opacity={0}>
          <rect x={CHUNK_X} y={y} width={64} height={9} rx={3} className="fill-black" />
          <rect x={CHUNK_X + 5} y={y + 3.5} width={i === 2 ? 30 : 46} height={2} rx={1} className="fill-white/40" />
          <animateTransform
            attributeName="transform"
            type="translate"
            dur={`${CYCLE}s`}
            repeatCount="indefinite"
            values="-48 0;-48 0;0 0;0 0"
            keyTimes={`0;${((0.3 + i * 0.2) / CYCLE).toFixed(4)};${((0.65 + i * 0.2) / CYCLE).toFixed(4)};1`}
          />
          <Visible cycle={CYCLE} from={0.3 + i * 0.2} to={END} />
        </g>
      ))}
      <text x={CHUNK_X} y={90} className="text-[7px] font-mono fill-black/40">500 chars · 100 overlap</text>

      {/* Embedding model (shared by ingest + query) */}
      <Box {...EMBED} label="Embed" sub="MiniLM-L6" />

      {/* ChromaDB cylinder */}
      <path
        d={`M ${DB.x} ${DB.top} V ${DB.bottom} A ${DB.w / 2} ${DB.ry} 0 0 0 ${DB.x + DB.w} ${DB.bottom} V ${DB.top}`}
        className="fill-white stroke-black/15"
      />
      <ellipse cx={DB.x + DB.w / 2} cy={DB.top} rx={DB.w / 2} ry={DB.ry} className="fill-white stroke-black/15" />
      <text x={DB.x + DB.w / 2} y={60} textAnchor="middle" className="text-[10px] font-bold fill-black">ChromaDB</text>
      {DB_ROWS.flatMap((y) => DB_COLS.map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r={2.5} className="fill-black/15" />))}
      {NEW_VECTORS.map((x) => (
        <circle key={x} cx={x} cy={NEW_ROW} r={2.5} className="fill-black/15" />
      ))}
      {/* Newly ingested vectors light up */}
      {NEW_VECTORS.map((x, i) => (
        <circle key={`n${x}`} cx={x} cy={NEW_ROW} r={2.8} className="diagram-motion fill-black" opacity={0}>
          <Visible cycle={CYCLE} from={2.05 + i * 0.1} to={END} />
        </circle>
      ))}
      {/* Top-k = 2 retrieval hits (only this user's chunks) */}
      {NEW_VECTORS.slice(0, 2).map((x) => (
        <circle key={`k${x}`} cx={x} cy={NEW_ROW} r={6} fill="none" className="diagram-motion stroke-black" strokeWidth={1.25} opacity={0}>
          <Visible cycle={CYCLE} from={4.2} to={END} />
        </circle>
      ))}
      <text x={DB.x + DB.w / 2} y={118} textAnchor="middle" className="text-[7px] font-mono fill-black/40">where user_id = you</text>
      <text x={DB.x + DB.w - 2} y={152} textAnchor="end" className="diagram-motion text-[7px] font-mono fill-black/60" opacity={0}>
        top-k 2
        <Visible cycle={CYCLE} from={4.2} to={END} />
      </text>

      {/* Gateway + LLM */}
      <Box {...GATEWAY} label="API Gateway" sub="JWT → X-User-ID" />
      <Box {...LLM} label="Mistral" sub="Ollama · local" dark />

      {/* Chat panel */}
      <rect x={16} y={222} width={368} height={110} rx={14} className="fill-white/70 stroke-black/10" />
      <g className="diagram-motion" opacity={0}>
        <rect x={Q_BUBBLE.x} y={Q_BUBBLE.y} width={Q_BUBBLE.w} height={Q_BUBBLE.h} rx={12} className="fill-black" />
        <text x={Q_BUBBLE.x + Q_BUBBLE.w - 12} y={Q_BUBBLE.y + 15.5} textAnchor="end" className="text-[9px] font-semibold fill-white">
          What&apos;s our leave policy?
        </text>
        <Visible cycle={CYCLE} from={2.6} to={END} />
      </g>

      {/* Streaming answer, revealed left → right like SSE tokens */}
      <defs>
        <clipPath id="rag-answer-clip">
          <rect x={A_BUBBLE.x} y={A_BUBBLE.y} height={A_BUBBLE.h} width={0}>
            <animate
              attributeName="width"
              dur={`${CYCLE}s`}
              repeatCount="indefinite"
              values={`0;0;${A_BUBBLE.w};${A_BUBBLE.w}`}
              keyTimes={`0;${(5.2 / CYCLE).toFixed(4)};${(6.3 / CYCLE).toFixed(4)};1`}
            />
          </rect>
        </clipPath>
      </defs>
      <g className="diagram-motion" opacity={0}>
        <rect x={A_BUBBLE.x} y={A_BUBBLE.y} width={A_BUBBLE.w} height={A_BUBBLE.h} rx={12} className="fill-white stroke-black/15" />
        <g clipPath="url(#rag-answer-clip)">
          <text x={A_BUBBLE.x + 12} y={A_BUBBLE.y + 19} className="text-[9px] fill-black">Full-time staff get 24 days of paid leave;</text>
          <text x={A_BUBBLE.x + 12} y={A_BUBBLE.y + 34} className="text-[9px] fill-black">up to 6 unused days carry over. ▍</text>
        </g>
        <Visible cycle={CYCLE} from={5.0} to={END} />
      </g>

      {/* Packets */}
      {P_CHUNK.map((d, i) => <Packet key={`c${i}`} path={d} start={1.0 + i * 0.1} travel={0.45} cycle={CYCLE} r={2.5} />)}
      {[0, 1, 2].map((i) => <Packet key={`e${i}`} path={P_EMBED_DB} start={1.6 + i * 0.1} travel={0.35} cycle={CYCLE} r={2.5} />)}
      <Packet path={P_Q_GATEWAY} start={2.8} travel={0.5} cycle={CYCLE} />
      <Packet path={P_GATEWAY_EMBED} start={3.3} travel={0.45} cycle={CYCLE} />
      <Packet path={P_EMBED_DB} start={3.8} travel={0.35} cycle={CYCLE} />
      {P_DB_LLM.map((d, i) => <Packet key={`l${i}`} path={d} start={4.4 + i * 0.1} travel={0.4} cycle={CYCLE} r={2.5} />)}
      {[0, 1, 2].map((i) => <Packet key={`a${i}`} path={P_LLM_ANSWER} start={4.95 + i * 0.25} travel={0.45} cycle={CYCLE} r={2} />)}
    </DiagramFrame>
  );
}
