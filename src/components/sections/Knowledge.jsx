"use client";

import { motion } from "framer-motion";

export default function Knowledge() {
  const stats = [
    { value: "200+", label: "Integrations", color: "text-cyan-400" },
    { value: "96.4%", label: "Compression Ratio", color: "text-blue-400" },
    { value: "42ms", label: "MTTR Actions", color: "text-purple-400" },
    { value: "99.97%", label: "Availability SLA", color: "text-emerald-400" }
  ];

  const features = [
    {
      step: "1. Ingest",
      text: "Connecting custom HTTP sinks, Kafka topics and websocket clients in real-time.",
      color: "border-t-amber-500/40 hover:border-t-amber-500/60",
      dot: "bg-amber-400"
    },
    {
      step: "2. Route",
      text: "Intelligently parsing payload structures to map event schemas dynamically.",
      color: "border-t-emerald-500/40 hover:border-t-emerald-500/60",
      dot: "bg-emerald-400"
    },
    {
      step: "3. Process",
      text: "Enriching events with dynamic metadata and computing rolling window aggregations.",
      color: "border-t-purple-500/40 hover:border-t-purple-500/60",
      dot: "bg-purple-400"
    },
    {
      step: "4. Dispatch",
      text: "Forwarding actions and insights to webhooks or triggering downstream serverless runs.",
      color: "border-t-blue-500/40 hover:border-t-blue-500/60",
      dot: "bg-blue-400"
    }
  ];

  return (
    <section
      id="pricing"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04] bg-[#030307]"
      aria-labelledby="knowledge-heading"
    >
      {/* Background radial blurs */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 h-[400px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 right-1/4 h-[450px] w-[650px] rounded-full bg-purple-500/3 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            Distributed Knowledge Base
          </span>
          <h2
            id="knowledge-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Knowledge in motion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Every data node is interconnected, allowing decisions to propagate across your entire system instantly.
          </p>
        </div>

        {/* Network Graph Container Card */}
        <motion.div
          className="relative rounded-2xl border border-white/[0.08] bg-slate-950/40 p-5 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Custom animated network graph */}
          <div className="relative w-full h-[320px] sm:h-[400px] border border-white/5 rounded-xl bg-[#07070d]/80 overflow-hidden flex items-center justify-center">
            
            {/* SVG Overlay containing nodes and animated links */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
              
              {/* Animated links/connections */}
              <g className="stroke-slate-800" strokeWidth="1" strokeDasharray="5,5">
                {/* Node paths */}
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
              <g className="stroke-cyan-500/60" strokeWidth="1.5" strokeDasharray="12,12">
                <line x1="150" y1="120" x2="320" y2="80" style={{ animation: "dash 15s linear infinite" }} />
                <line x1="150" y1="120" x2="250" y2="220" style={{ animation: "dash 20s linear infinite" }} />
                <line x1="250" y1="220" x2="480" y2="120" style={{ animation: "dash 18s linear infinite" }} />
                <line x1="480" y1="120" x2="650" y2="150" style={{ animation: "dash 12s linear infinite" }} />
              </g>

              <g className="stroke-purple-500/60" strokeWidth="1.5" strokeDasharray="10,10">
                <line x1="320" y1="80" x2="480" y2="120" style={{ animation: "dash 14s linear infinite" }} />
                <line x1="250" y1="220" x2="400" y2="300" style={{ animation: "dash 22s linear infinite" }} />
                <line x1="400" y1="300" x2="650" y2="150" style={{ animation: "dash 16s linear infinite" }} />
              </g>

              {/* Node points */}
              <g>
                {/* Node 1: Ingest */}
                <g transform="translate(150, 120)">
                  <circle r="12" fill="rgba(245,158,11,0.15)" stroke="rgba(245,158,11,0.3)" />
                  <circle r="4" fill="#f59e0b" className="animate-pulse" />
                  <text y="-20" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-wider">Raw Ingest</text>
                </g>

                {/* Node 2: Queue */}
                <g transform="translate(320, 80)">
                  <circle r="14" fill="rgba(34,211,238,0.15)" stroke="rgba(34,211,238,0.3)" />
                  <circle r="5" fill="#22d3ee" />
                  <text y="-22" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-wider">Stream Queue</text>
                </g>

                {/* Node 3: Validation */}
                <g transform="translate(250, 220)">
                  <circle r="16" fill="rgba(168,85,247,0.15)" stroke="rgba(168,85,247,0.3)" />
                  <circle r="6" fill="#a855f7" />
                  <text y="30" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-wider">Validation</text>
                </g>

                {/* Node 4: Processing */}
                <g transform="translate(480, 120)">
                  <circle r="20" fill="rgba(59,130,246,0.15)" stroke="rgba(59,130,246,0.3)" />
                  <circle r="7" fill="#3b82f6" className="animate-pulse" />
                  <text y="-28" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-wider">Decision Matrix</text>
                </g>

                {/* Node 5: Agent Router */}
                <g transform="translate(400, 300)">
                  <circle r="15" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.3)" />
                  <circle r="5" fill="#10b981" />
                  <text y="28" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-wider">Agent Router</text>
                </g>

                {/* Node 6: Sink */}
                <g transform="translate(650, 150)">
                  <circle r="18" fill="rgba(236,72,153,0.15)" stroke="rgba(236,72,153,0.3)" />
                  <circle r="6" fill="#ec4899" />
                  <text y="-25" textAnchor="middle" fill="#94a3b8" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-wider">Structured Sink</text>
                </g>
              </g>

            </svg>

            {/* Bottom mini tabs/statuses inside the graph card */}
            <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-[#0a0a14]/60 border border-white/5 backdrop-blur-md rounded-lg py-2 px-4">
              {[
                { name: "Ingest Stream", color: "bg-amber-400" },
                { name: "Enrich Payload", color: "bg-cyan-400" },
                { name: "Vector Database", color: "bg-purple-400" },
                { name: "Agent Dispatch", color: "bg-emerald-400" },
                { name: "Outcome Log", color: "bg-pink-400" }
              ].map((tab, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${tab.color} animate-pulse`} />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-300 font-mono">{tab.name}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Feature Cards Grid (4 Columns) - Placed directly below the Graph card */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className={`rounded-2xl border border-white/[0.05] border-t-2 bg-slate-950/40 p-6 hover:bg-white/[0.02] shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_32px_rgba(0,0,0,0.5)] transition-all duration-300 ${f.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`h-1.5 w-1.5 rounded-full ${f.dot}`} />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                  {f.step}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics columns below the feature cards - Separated with clean grid and colors */}
        <div className="mt-20 grid grid-cols-2 gap-y-8 pt-12 border-t border-white/[0.06] sm:grid-cols-4 sm:divide-x sm:divide-white/[0.06]">
          {stats.map((s, idx) => (
            <div key={idx} className="flex flex-col items-center text-center px-4">
              <span className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${s.color}`}>
                {s.value}
              </span>
              <span className="mt-2 text-xs font-medium text-slate-500 uppercase tracking-wider">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Global SVG Animation CSS */}
      <style jsx global>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </section>
  );
}
