"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Knowledge() {
  const containerRef = useRef(null);
  
  // Mouse interaction handling for custom parallax responsive flow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Calculate mouse position relative to the center of the component
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Dampening settings for smooth premium inertia motion physics
  const springConfig = { damping: 25, stiffness: 45, mass: 0.6 };
  const dX = useSpring(useTransform(mouseX, [-600, 600], [-20, 20]), springConfig);
  const dY = useSpring(useTransform(mouseY, [-600, 600], [-20, 20]), springConfig);

  const stats = [
    { value: "200+", label: "Integrations", color: "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.35)]" },
    { value: "96.4%", label: "Compression Ratio", color: "text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.35)]" },
    { value: "42ms", label: "MTTR Actions", color: "text-purple-400 drop-shadow-[0_0_15px_rgba(192,132,252,0.35)]" },
    { value: "99.97%", label: "Availability SLA", color: "text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.35)]" }
  ];

  const features = [
    {
      step: "1. Ingest",
      text: "Connecting custom HTTP sinks, Kafka topics and websocket clients in real-time.",
      color: "border-amber-500/[0.08] bg-gradient-to-b from-amber-500/[0.03] to-transparent hover:border-amber-500/30",
      dot: "bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.65)]"
    },
    {
      step: "2. Route",
      text: "Intelligently parsing payload structures to map event schemas dynamically.",
      color: "border-emerald-500/[0.08] bg-gradient-to-b from-emerald-500/[0.03] to-transparent hover:border-emerald-500/30",
      dot: "bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.65)]"
    },
    {
      step: "3. Process",
      text: "Enriching events with dynamic metadata and computing rolling window aggregations.",
      color: "border-purple-500/[0.08] bg-gradient-to-b from-purple-500/[0.03] to-transparent hover:border-purple-500/30",
      dot: "bg-purple-400 shadow-[0_0_12px_rgba(168,85,247,0.65)]"
    },
    {
      step: "4. Dispatch",
      text: "Forwarding actions and insights to webhooks or triggering downstream serverless runs.",
      color: "border-blue-500/[0.08] bg-gradient-to-b from-blue-500/[0.03] to-transparent hover:border-blue-500/30",
      dot: "bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.65)]"
    }
  ];

  return (
    <section
      ref={containerRef}
      id="knowledge"
      className="relative py-24 lg:py-32 overflow-hidden bg-[#020205]"
      aria-labelledby="knowledge-heading"
    >
      {/* Background High-Fidelity Figma Radial Blurs */}
      <div
        className="pointer-events-none absolute -bottom-12 left-10 h-[600px] w-[800px] rounded-full bg-cyan-500/[0.03] blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-12 right-10 h-[600px] w-[800px] rounded-full bg-purple-500/[0.03] blur-[180px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-24">
          <span className="text-[11px] font-bold tracking-[0.3em] text-cyan-400 uppercase font-mono bg-cyan-950/20 px-3 py-1 rounded-full border border-cyan-500/10">
            Distributed Knowledge Base
          </span>
          <h2
            id="knowledge-heading"
            className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl font-sans"
          >
            Knowledge in motion
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-normal">
            Every data node is interconnected, allowing decisions to propagate across your entire system instantly.
          </p>
        </div>

        {/* Network Graph Container Card */}
        <motion.div
          className="relative rounded-2xl border border-white/[0.05] bg-[#05050a]/30 p-1.5 shadow-[0_32px_128px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Custom animated network graph viewport */}
          <div className="relative w-full h-[380px] sm:h-[480px] border border-white/[0.02] rounded-xl bg-[#030306]/98 overflow-hidden flex items-center justify-center">
            
            {/* Parallax Layer driven by Framer Motion Springs */}
            <motion.div style={{ x: dX, y: dY }} className="absolute inset-0 w-full h-full flex items-center justify-center">
              <svg className="w-full h-full max-w-[900px] max-h-[480px]" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Exact Figma Structure Background Static Vectors */}
                <g className="stroke-[#0e0f19]" strokeWidth="1.2">
                  <line x1="200" y1="130" x2="400" y2="80" />
                  <line x1="200" y1="130" x2="280" y2="250" />
                  <line x1="400" y1="80" x2="600" y2="130" />
                  <line x1="280" y1="250" x2="520" y2="200" />
                  <line x1="280" y1="250" x2="400" y2="350" />
                  <line x1="600" y1="130" x2="620" y2="280" />
                  <line x1="520" y1="200" x2="620" y2="280" />
                  <line x1="400" y1="350" x2="620" y2="280" />
                  <line x1="400" y1="350" x2="520" y2="200" />
                </g>

                {/* Premium High-Fidelity Glowing Dash Paths Overlay */}
                <g strokeWidth="1.5" strokeDasharray="6,20" strokeLinecap="round" filter="url(#glow)">
                  <line x1="200" y1="130" x2="400" y2="80" className="stroke-cyan-500/35" style={{ animation: "dash 16s linear infinite" }} />
                  <line x1="200" y1="130" x2="280" y2="250" className="stroke-cyan-500/35" style={{ animation: "dash 20s linear infinite" }} />
                  <line x1="280" y1="250" x2="520" y2="200" className="stroke-cyan-500/35" style={{ animation: "dash 18s linear infinite" }} />
                  <line x1="520" y1="200" x2="620" y2="280" className="stroke-cyan-500/35" style={{ animation: "dash 14s linear infinite" }} />
                  
                  <line x1="400" y1="80" x2="600" y2="130" className="stroke-purple-500/35" style={{ animation: "dash 15s linear infinite" }} />
                  <line x1="280" y1="250" x2="400" y2="350" className="stroke-purple-500/35" style={{ animation: "dash 22s linear infinite" }} />
                  <line x1="400" y1="350" x2="620" y2="280" className="stroke-purple-500/35" style={{ animation: "dash 16s linear infinite" }} />
                </g>

                {/* Nodes Geometry Realignment as per Figma Blueprint */}
                <g>
                  {/* Node 1: Ingest */}
                  <g transform="translate(200, 130)">
                    <circle r="16" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.22)" strokeWidth="1" />
                    <circle r="4" fill="#f59e0b" filter="url(#glow)" className="animate-pulse" />
                    <text y="26" textAnchor="middle" fill="#57657a" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Raw Ingest</text>
                  </g>

                  {/* Node 2: Queue */}
                  <g transform="translate(400, 80)">
                    <circle r="16" fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.22)" strokeWidth="1" />
                    <circle r="4" fill="#22d3ee" filter="url(#glow)" />
                    <text y="-22" textAnchor="middle" fill="#57657a" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Stream Queue</text>
                  </g>

                  {/* Node 3: Validation */}
                  <g transform="translate(280, 250)">
                    <circle r="16" fill="rgba(168,85,247,0.04)" stroke="rgba(168,85,247,0.22)" strokeWidth="1" />
                    <circle r="4" fill="#a855f7" filter="url(#glow)" />
                    <text x="-24" y="4" textAnchor="end" fill="#57657a" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Validation</text>
                  </g>

                  {/* Node 4: Processing */}
                  <g transform="translate(520, 200)">
                    <circle r="22" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.22)" strokeWidth="1" />
                    <circle r="5" fill="#3b82f6" filter="url(#glow)" className="animate-pulse" />
                    <text y="-28" textAnchor="middle" fill="#57657a" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Decision Matrix</text>
                  </g>

                  {/* Node 5: Agent Router */}
                  <g transform="translate(400, 350)">
                    <circle r="16" fill="rgba(16,185,129,0.04)" stroke="rgba(16,185,129,0.22)" strokeWidth="1" />
                    <circle r="4" fill="#10b981" filter="url(#glow)" />
                    <text y="26" textAnchor="middle" fill="#57657a" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Agent Router</text>
                  </g>

                  {/* Node 6: Sink */}
                  <g transform="translate(620, 280)">
                    <circle r="20" fill="rgba(236,72,153,0.04)" stroke="rgba(236,72,153,0.22)" strokeWidth="1" />
                    <circle r="4" fill="#ec4899" filter="url(#glow)" />
                    <text x="26" y="4" textAnchor="start" fill="#57657a" fontSize="9" fontWeight="600" className="font-mono uppercase tracking-widest">Structured Sink</text>
                  </g>
                </g>
              </svg>
            </motion.div>

            {/* Bottom Horizon Capsule Status Tabs */}
            <div className="absolute bottom-5 inset-x-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-[#040408]/90 border border-white/[0.04] backdrop-blur-md rounded-full py-2 px-6 max-w-max mx-auto shadow-2xl">
              {[
                { name: "Ingest Stream", color: "bg-amber-400" },
                { name: "Enrich Payload", color: "bg-cyan-400" },
                { name: "Vector Database", color: "bg-purple-400" },
                { name: "Agent Dispatch", color: "bg-emerald-400" },
                { name: "Outcome Log", color: "bg-pink-400" }
              ].map((tab, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${tab.color} shadow-[0_0_8px_currentColor]`} />
                  <span className="text-[10px] font-semibold tracking-wider text-slate-400 font-mono">{tab.name}</span>
                </div>
              ))}
            </div>

          </div>
         </motion.div>

        {/* Feature Cards Matrix Grid Layout */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl border p-5 backdrop-blur-sm transition-all duration-300 ${f.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className={`h-1.5 w-1.5 rounded-full ${f.dot}`} />
                <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
                  {f.step}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics Premium Bento-style Layout Container with Clean Underglow */}
        <div className="mt-16 bg-gradient-to-b from-[#06060c]/60 to-[#030306]/20 border border-white/[0.03] backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.01)]">
          <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:divide-x sm:divide-white/[0.04]">
            {stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <span className={`text-4xl font-extrabold tracking-tight font-sans ${s.color}`}>
                  {s.value}
                </span>
                <span className="mt-3 text-[10px] font-bold text-slate-500 uppercase tracking-[0.22em] font-mono">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Global Optimization Layer for SVG Dash Animations */}
      <style jsx global>{`
        @keyframes dash {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -52;
          }
        }
      `}</style>
    </section>
  );
}