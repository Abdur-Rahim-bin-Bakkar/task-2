"use client";

import { motion } from "framer-motion";

export default function CommandCenter() {
  // Sparkline data (SVG paths)
  const sparklines = [
    "M0 15 Q 10 5, 20 12 T 40 4 T 60 14 T 80 2",
    "M0 10 Q 15 15, 30 5 T 60 12 T 80 8",
    "M0 8 Q 10 12, 20 4 T 40 8 T 60 2 T 80 6",
    "M0 15 Q 15 2, 30 10 T 60 5 T 80 12"
  ];

  const streams = [
    { name: "sensor-telemetry-prod", status: "active", rate: "4,821 ev/s", health: "100%" },
    { name: "user-action-logs-us", status: "active", rate: "1,850 ev/s", health: "99.9%" },
    { name: "billing-webhook-stream", status: "idle", rate: "12 ev/s", health: "100%" },
    { name: "anomaly-detection-run", status: "active", rate: "940 ev/s", health: "99.8%" }
  ];

  const logs = [
    { time: "06:30:21", text: "Agent #104 routed event to database sink.", type: "route" },
    { time: "06:30:22", text: "Agent #012 text-embedding-ada-002 complete.", type: "ai" },
    { time: "06:30:24", text: "System scale-up: spawned 3 new node clusters.", type: "system" }
  ];

  return (
    <section
      id="solutions"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04] bg-[#030307]"
      aria-labelledby="command-heading"
    >
      {/* Background gradients */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.03] blur-[150px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-purple-400 uppercase">
            Operational Dashboard
          </span>
          <h2
            id="command-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Your AI command center
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Powering decisions, workflows and alerts at scales you never thought possible.
          </p>
        </div>

        {/* Dashboard Mockup Card */}
        <motion.div
          className="relative rounded-2xl border border-white/[0.08] bg-slate-950/40 p-1.5 sm:p-2.5 shadow-[0_0_80px_rgba(0,0,0,0.6)] backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Main card box mimicking macOS app window */}
          <div className="overflow-hidden rounded-xl border border-white/[0.06] bg-[#07070c] shadow-2xl">
            
            {/* App Header (Toolbar) */}
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 bg-[#0a0a14]">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="hidden sm:flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-6 py-1 text-[11px] font-medium tracking-wide text-slate-400">
                <span>nexusai.com/console/overview</span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] sm:text-xs font-semibold text-slate-300 hover:bg-white/10 transition-colors">
                  Refresh
                </button>
                <button type="button" className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-[10px] sm:text-xs font-bold text-white shadow-[0_0_12px_rgba(34,211,238,0.25)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all">
                  Deploy Agent
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-[550px]">
              
              {/* Sidebar Menu Panel */}
              <div className="w-full lg:w-56 border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-[#07070d] p-4 flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2 px-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="none">
                        <path d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="9" cy="9" r="2" fill="currentColor" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold tracking-tight text-white uppercase">Nexus Console</span>
                  </div>
                  <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible">
                    <a href="#solutions" className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs font-medium text-white shrink-0">
                      <span>Overview</span>
                    </a>
                    <a href="#solutions" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 shrink-0">
                      <span>AI Agents</span>
                    </a>
                    <a href="#solutions" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 shrink-0">
                      <span>Data Streams</span>
                    </a>
                    <a href="#solutions" className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 shrink-0">
                      <span>Integrations</span>
                    </a>
                  </nav>
                </div>
                <div className="hidden lg:flex items-center gap-2.5 border-t border-white/[0.06] pt-4 px-2">
                  <div className="h-7 w-7 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[10px] font-bold text-cyan-400">
                    OP
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-white leading-none">Operator #02</p>
                    <p className="mt-0.5 text-[9px] text-slate-500 leading-none">admin-prod-us</p>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-4 sm:p-6 bg-[#05050a] flex flex-col gap-6">
                
                {/* Section Header */}
                <div>
                  <h3 className="text-sm font-bold tracking-wide uppercase text-slate-400">Intelligence Overview</h3>
                  <p className="mt-0.5 text-xs text-slate-500">Real-time metrics, node diagnostics, and active agent threads.</p>
                </div>

                {/* Metrics Grid Row */}
                <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {[
                    { label: "Data Volume", val: "64.2M", diff: "+12.4%", desc: "vs last hour", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/10", sp: 0 },
                    { label: "Active Agents", val: "367", diff: "+5 new", desc: "active threads", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/10", sp: 1 },
                    { label: "AI Accuracy", val: "99.4%", diff: "+0.3%", desc: "99.1% baseline", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/10", sp: 2 },
                    { label: "Avg Latency", val: "14.2ms", diff: "-2.4ms", desc: "optimal state", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/10", sp: 3 }
                  ].map((m, i) => (
                    <div key={i} className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 flex flex-col justify-between gap-3 hover:border-white/[0.08] transition-colors">
                      <div>
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">{m.label}</span>
                        <p className="text-xl font-bold text-white mt-1 leading-none">{m.val}</p>
                      </div>
                      <div className="flex items-center justify-between gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <span className={`inline-flex rounded-full px-1.5 py-0.5 text-[9px] font-bold ${m.color} ${m.bg} border ${m.border}`}>
                            {m.diff}
                          </span>
                          <span className="text-[9px] text-slate-500 whitespace-nowrap">{m.desc}</span>
                        </div>
                        <svg className="w-10 h-6 shrink-0 overflow-visible" viewBox="0 0 80 20">
                          <path
                            d={sparklines[m.sp]}
                            fill="none"
                            stroke={i === 2 ? "#a855f7" : i === 1 ? "#22d3ee" : "#10b981"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Graph Grid Row */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                  
                  {/* Line Chart (7 cols) */}
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 lg:col-span-7 flex flex-col justify-between hover:border-white/[0.08] transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Events Volume Over Time</span>
                      <span className="text-[9px] text-slate-500">Live updating</span>
                    </div>
                    
                    {/* SVG Line Chart Graphic */}
                    <div className="relative w-full h-[150px] mt-4 flex items-end">
                      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        {/* Grid lines */}
                        <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                        <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                        
                        {/* Glowing Line Fill Area */}
                        <path
                          d="M0 80 Q 20 40, 40 70 T 80 30 T 100 10 L 100 100 L 0 100 Z"
                          fill="url(#chart-fill)"
                          opacity="0.1"
                        />
                        {/* Plot line */}
                        <path
                          d="M0 80 Q 20 40, 40 70 T 80 30 T 100 10"
                          fill="none"
                          stroke="url(#chart-stroke)"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        
                        <defs>
                          <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="chart-stroke" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#22d3ee" />
                            <stop offset="50%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#a855f7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      <div className="absolute bottom-1 left-2 flex gap-1.5 items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="text-[9px] text-slate-400">Peak: 4.8M events/s</span>
                      </div>
                    </div>
                  </div>

                  {/* Bar Chart (5 cols) */}
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 lg:col-span-5 flex flex-col justify-between hover:border-white/[0.08] transition-colors">
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.04]">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">AI Activity Bursts</span>
                      <span className="text-[9px] text-slate-500">Last 12 hrs</span>
                    </div>

                    <div className="h-[150px] mt-4 flex items-end justify-between px-2 gap-2">
                      {[40, 60, 25, 75, 50, 95, 30, 85, 45, 70].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                          <div
                            className="w-full rounded-t-sm transition-all duration-500 bg-gradient-to-t from-purple-500/20 to-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[7px] text-slate-600 font-bold">{i + 1}h</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Table and Logs Row */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  
                  {/* Active Streams Table */}
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 hover:border-white/[0.08] transition-colors">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block border-b border-white/[0.04] pb-3 mb-3">
                      Active Event Streams
                    </span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/[0.04]">
                            <th className="py-2 text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Stream Name</th>
                            <th className="py-2 text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                            <th className="py-2 text-[9px] font-semibold text-slate-500 uppercase tracking-wider">Event Rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.02]">
                          {streams.map((s, idx) => (
                            <tr key={idx} className="hover:bg-white/[0.01] transition-colors">
                              <td className="py-2 text-xs font-semibold text-white font-mono">{s.name}</td>
                              <td className="py-2">
                                <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-bold ${
                                  s.status === "active" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/15" : "bg-amber-500/10 text-amber-400 border border-amber-500/15"
                                }`}>
                                  <span className={`h-1 w-1 rounded-full ${s.status === "active" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                                  {s.status}
                                </span>
                              </td>
                              <td className="py-2 text-xs text-slate-400 font-medium font-mono">{s.rate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* System Event Log */}
                  <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-4 hover:border-white/[0.08] transition-colors flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block border-b border-white/[0.04] pb-3 mb-3">
                        System Event Log Ticker
                      </span>
                      <div className="flex flex-col gap-3 mt-1.5">
                        {logs.map((l, idx) => (
                          <div key={idx} className="flex gap-3 text-xs leading-relaxed font-mono">
                            <span className="text-[10px] font-medium text-slate-600 shrink-0">{l.time}</span>
                            <div className="flex gap-2 items-start">
                              <span className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${
                                l.type === "route" ? "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" : l.type === "ai" ? "bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,0.8)]" : "bg-emerald-400"
                              }`} />
                              <span className="text-slate-300 font-medium text-[11px]">{l.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[9px] font-medium text-slate-600">
                      <span>Socket tunnel: online</span>
                      <span className="flex items-center gap-1 text-emerald-400">
                        <span className="h-1 w-1 bg-emerald-400 rounded-full animate-ping" />
                        connected
                      </span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
