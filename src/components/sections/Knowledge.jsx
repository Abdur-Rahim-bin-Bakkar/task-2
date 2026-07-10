"use client";

import { motion } from "framer-motion";

export default function Knowledge() {
  const stats = [
    { value: "200+", label: "Integrations", color: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]" },
    { value: "96.4%", label: "Compression Ratio", color: "text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]" },
    { value: "42ms", label: "MTTR Actions", color: "text-purple-400 drop-shadow-[0_0_10px_rgba(192,132,252,0.3)]" },
    { value: "99.97%", label: "Availability SLA", color: "text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]" }
  ];

  const features = [
    {
      step: "1. Ingest",
      text: "Connecting custom HTTP sinks, Kafka topics and websocket clients in real-time.",
      color: "border-amber-500/[0.15] bg-amber-500/[0.02] hover:border-amber-500/40",
      dot: "bg-amber-400 shadow-[0_0_8px_#f59e0b]"
    },
    {
      step: "2. Route",
      text: "Intelligently parsing payload structures to map event schemas dynamically.",
      color: "border-emerald-500/[0.15] bg-emerald-500/[0.02] hover:border-emerald-500/40",
      dot: "bg-emerald-400 shadow-[0_0_8px_#10b981]"
    },
    {
      step: "3. Process",
      text: "Enriching events with dynamic metadata and computing rolling window aggregations.",
      color: "border-purple-500/[0.15] bg-purple-500/[0.02] hover:border-purple-500/40",
      dot: "bg-purple-400 shadow-[0_0_8px_#a855f7]"
    },
    {
      step: "4. Dispatch",
      text: "Forwarding actions and insights to webhooks or triggering downstream serverless runs.",
      color: "border-blue-500/[0.15] bg-blue-500/[0.02] hover:border-blue-500/40",
      dot: "bg-blue-400 shadow-[0_0_8px_#3b82f6]"
    }
  ];

  return (
    <section
      id="knowledge"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#030307]"
      aria-labelledby="knowledge-heading"
    >
      {/* Background radial blurs - Figma glow style */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 h-[500px] w-[700px] rounded-full bg-cyan-500/[0.03] blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-1/4 h-[500px] w-[700px] rounded-full bg-purple-500/[0.03] blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase font-mono">
            Distributed Knowledge Base
          </span>
          <h2
            id="knowledge-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-sans"
          >
            Knowledge in motion
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Every data node is interconnected, allowing decisions to propagate across your entire system instantly.
          </p>
        </div>

        {/* Network Graph Container Card */}
        <motion.div
          className="relative rounded-2xl border border-white/[0.04] bg-[#07070d]/40 p-1 shadow-[0_24px_80px_rgba(0,0,0,0.7)] backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Custom animated network graph */}
          <div className="relative w-full h-[340px] sm:h-[420px] border border-white/[0.03] rounded-xl bg-[#040408]/90 overflow-hidden flex items-center justify-center">
            
            {/* SVG Overlay containing nodes and animated links */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Static Background Links */}
              <g className="stroke-slate-900" strokeWidth="1">
                <line x1="150" y1="120" x2="320" y2="80" />
                <line x1="150" y1="120" x2="250" y2="220" />
                <line x1="320" y1="80" x2="480" y2="120" />
                <line x1="250" y1="220" x2="480" y2="120" />
                <line x1="250" y1="220" x2="400" y2="300" />
                <line x1="480" y1="120" x2="650" y2="150" />
                <line x1="400" y1="300" x2="650" y2="150" />
                <line x1="400" y1="300" x2="520" y2="250" />
                <line x1="520" y1="250" x2="650" y2="150" />
              </g>

              {/* Glowing animated paths overlay */}
              <g strokeWidth="1.5" strokeDasharray="8,16" strokeLinecap="round" filter="url(#glow)">
                <line x1="150" y1="120" x2="320" y2="80" className="stroke-cyan-500/40" style={{ animation: "dash 12s linear infinite" }} />
                <line x1="150" y1="120" x2="250" y2="220" className="stroke-cyan-500/40" style={{ animation: "dash 16s linear infinite" }} />
                <line x1="250" y1="220" x2="480" y2="120" className="stroke-cyan-500/40" style={{ animation: "dash 14s linear infinite" }} />
                <line x1="480" y1="120" x2="650" y2="150" className="stroke-cyan-500/40" style={{ animation: "dash 10s linear infinite" }} />
                
                <line x1="320" y1="80" x2="480" y2="120" className="stroke-purple-500/40" style={{ animation: "dash 11s linear infinite" }} />
                <line x1="250" y1="220" x2="400" y2="300" className="stroke-purple-500/40" style={{ animation: "dash 18s linear infinite" }} />
                <line x1="400" y1="300" x2="650" y2="150" className="stroke-purple-500/40" style={{ animation: "dash 13s linear infinite" }} />
              </g>

              {/* Node points */}
              <g>
                {/* Node 1: Ingest */}
                <g transform="translate(150, 120)">
                  <circle r="16" fill="rgba(245,158,11,0.06)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
                  <circle r="4" fill="#f59e0b" filter="url(#glow)" className="animate-pulse" />
                  <text y="-22" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Raw Ingest</text>
                </g>

                {/* Node 2: Queue */}
                <g transform="translate(320, 80)">
                  <circle r="16" fill="rgba(34,211,238,0.06)" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
                  <circle r="4" fill="#22d3ee" filter="url(#glow)" />
                  <text y="-22" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Stream Queue</text>
                </g>

                {/* Node 3: Validation */}
                <g transform="translate(250, 220)">
                  <circle r="16" fill="rgba(168,85,247,0.06)" stroke="rgba(168,85,247,0.2)" strokeWidth="1" />
                  <circle r="4" fill="#a855f7" filter="url(#glow)" />
                  <text y="26" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Validation</text>
                </g>

                {/* Node 4: Processing */}
                <g transform="translate(480, 120)">
                  <circle r="22" fill="rgba(59,130,246,0.06)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <circle r="5" fill="#3b82f6" filter="url(#glow)" className="animate-pulse" />
                  <text y="-28" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Decision Matrix</text>
                </g>

                {/* Node 5: Agent Router */}
                <g transform="translate(400, 300)">
                  <circle r="16" fill="rgba(160,175,230,0.06)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
                  <circle r="4" fill="#10b981" filter="url(#glow)" />
                  <text y="26" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Agent Router</text>
                </g>

                {/* Node 6: Sink */}
                <g transform="translate(650, 150)">
                  <circle r="20" fill="rgba(236,72,153,0.06)" stroke="rgba(236,72,153,0.2)" strokeWidth="1" />
                  <circle r="4" fill="#ec4899" filter="url(#glow)" />
                  <text y="-25" textAnchor="middle" fill="#64748b" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Structured Sink</text>
                </g>
              </g>
            </svg>

            {/* Bottom mini status bars */}
            <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-[#06060c]/80 border border-white/[0.04] backdrop-blur-md rounded-full py-1.5 px-6 max-w-max mx-auto shadow-xl">
              {[
                { name: "Ingest Stream", color: "bg-amber-400" },
                { name: "Enrich Payload", color: "bg-cyan-400" },
                { name: "Vector Database", color: "bg-purple-400" },
                { name: "Agent Dispatch", color: "bg-emerald-400" },
                { name: "Outcome Log", color: "bg-pink-400" }
              ].map((tab, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className={`h-1 w-1 rounded-full ${tab.color} shadow-[0_0_6px_currentColor]`} />
                  <span className="text-[10px] font-medium tracking-wider text-slate-400 font-mono">{tab.name}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Feature Cards Grid (4 Columns) - Refactored for smooth borders */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl border p-5 transition-all duration-300 ${f.color}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className={`h-1.5 w-1.5 rounded-full ${f.dot}`} />
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white font-mono">
                  {f.step}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Metric Columns (Clean, borderless & modern alignment) */}
        <div className="mt-24 grid grid-cols-2 gap-y-10 pt-16 border-t border-white/[0.03] sm:grid-cols-4">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-2">
              <span className={`text-4xl font-bold tracking-tight font-sans ${s.color}`}>
                {s.value}
              </span>
              <span className="mt-2.5 text-[10px] font-semibold text-slate-500 uppercase tracking-widest font-mono">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Optimized SVG Animation Styling */}
      <style jsx global>{`
        @keyframes dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -48;
          }
        }
      `}</style>
    </section>
  );
}