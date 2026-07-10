"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  {
    id: "ingest",
    label: "Ingest Data",
    sub: "250k data sources supported",
    stageNum: "Stage 1 of 3",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
    description: "Pull from databases, APIs, IoT devices, materials servers and custom Webhooks. Out-of-the-box validations ensure streams are clean, categorized and processed in under 1ms.",
    features: [
      "Kafka & Pulsar native",
      "Smart type inference",
      "Auto-schema mapping",
      "Zero-copy buffering"
    ]
  },
  {
    id: "process",
    label: "Process & Enrich",
    sub: "ML-powered categorization",
    stageNum: "Stage 2 of 3",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    description: "Apply real-time filters, transformations, and machine learning models to streaming events. Enrich raw payloads with relational context, geospatial details, and user profiles on the fly.",
    features: [
      "Real-time transformers",
      "Vector embeddings",
      "Windowed aggregations",
      "Dynamic schema evolution"
    ]
  },
  {
    id: "forward",
    label: "Forward Insights",
    sub: "Stateful action triggers",
    stageNum: "Stage 3 of 3",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: "Route clean streams and triggered alerts to webhooks, message queues, databases, or orchestrate downstream AI agents. Execute stateful workflows based on micro-conditions instantly.",
    features: [
      "Agent trigger dispatch",
      "Exactly-once delivery",
      "Multi-sink routing",
      "Edge webhook sync"
    ]
  }
];

export default function Pipeline() {
  const [activeStage, setActiveStage] = useState(STAGES[0]);

  return (
    <section
      id="features"
      className="relative py-24 lg:py-32 overflow-hidden border-t border-white/[0.04]"
      aria-labelledby="pipeline-heading"
    >
      {/* Dynamic Background Glow */}
      <div
        className="pointer-events-none absolute -top-1/4 left-1/4 h-[400px] w-[600px] rounded-full bg-purple-500/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-1/4 right-1/4 h-[400px] w-[600px] rounded-full bg-cyan-500/3 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 lg:mb-20">
          <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-cyan-400 uppercase">
            Data Flow Stages
          </span>
          <h2
            id="pipeline-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            The Intelligence Pipeline
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            Three state-of-the-art stages that route, analyze and act on data streams in real-time.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left selectors list (5 cols) */}
          <div className="flex flex-col gap-4 lg:col-span-5">
            {STAGES.map((stage) => {
              const isSelected = stage.id === activeStage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={`group relative flex items-start gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? "border-cyan-500/30 bg-[rgba(12,12,20,0.6)] shadow-[0_0_24px_rgba(34,211,238,0.06)]"
                      : "border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] hover:bg-white/[0.03]"
                  }`}
                  type="button"
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                      isSelected
                        ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                        : "border-white/10 bg-white/5 text-slate-400 group-hover:text-slate-300"
                    }`}
                  >
                    {stage.icon}
                  </div>
                  <div>
                    <h3 className={`text-base font-semibold transition-colors ${
                      isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}>
                      {stage.label}
                    </h3>
                    <p className={`mt-1 text-xs transition-colors ${
                      isSelected ? "text-cyan-300/80" : "text-slate-500 group-hover:text-slate-400"
                    }`}>
                      {stage.sub}
                    </p>
                  </div>
                  
                  {/* Subtle edge bar for selected stage */}
                  {isSelected && (
                    <motion.div
                      layoutId="active-stage-indicator"
                      className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Custom progress/state strip at the bottom of selectors */}
            <div className="h-1 w-full rounded-full bg-white/[0.04] overflow-hidden mt-4">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                initial={false}
                animate={{
                  width: activeStage.id === "ingest" ? "33.3%" : activeStage.id === "process" ? "66.6%" : "100%"
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>
          </div>

          {/* Right active details card (7 cols) */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] backdrop-blur-md"
              >
                
                {/* Details header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/[0.06] pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.1)]">
                      {activeStage.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white leading-none">
                        {activeStage.label}
                      </h4>
                      <p className="mt-1 text-xs text-slate-400">
                        {activeStage.sub}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex shrink-0 items-center justify-center self-start sm:self-auto rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                    {activeStage.stageNum}
                  </span>
                </div>

                {/* Detailed description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeStage.description}
                </p>

                {/* Sub-features grid */}
                <div className="mt-8 border-t border-white/[0.06] pt-6">
                  <h5 className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-500 uppercase mb-4">
                    Key Features
                  </h5>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {activeStage.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.03] bg-white/[0.01] px-4 py-3 hover:border-white/[0.06] hover:bg-white/[0.02] transition-colors">
                        <span className="flex h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                        <span className="text-xs sm:text-sm font-medium text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
