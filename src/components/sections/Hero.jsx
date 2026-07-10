"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HERO, HERO_STATS } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-[300px] w-full items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] sm:h-[380px] lg:h-[450px]"
      aria-hidden="true"
    >
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-500/30 border-t-cyan-400" />
    </div>
  ),
});

export default function Hero() {
  const headlineParts = HERO.headline.split(HERO.headlineAccent);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center overflow-hidden pt-32 pb-24 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(56,189,248,0.15),rgba(139,92,246,0.05),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[550px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-[450px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.06] blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge>{HERO.badge}</Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 sm:mt-10 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.75rem] xl:text-[4.5rem]"
            variants={fadeUp}
            custom={0.1}
          >
            {headlineParts[0]}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {HERO.headlineAccent}
            </span>
            {headlineParts[1] || ""}
          </motion.h1>

          <motion.p
            className="mt-8 sm:mt-10 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg lg:leading-relaxed"
            variants={fadeUp}
            custom={0.2}
          >
            {HERO.description}
          </motion.p>

          <motion.div
            className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4"
            variants={fadeUp}
            custom={0.3}
          >
            <Button href={HERO.primaryCta.href} variant="primary" animate>
              {HERO.primaryCta.label}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button href={HERO.secondaryCta.href} variant="secondary" animate>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6.5 6.5L10.5 8L6.5 9.5V6.5Z" fill="currentColor" />
              </svg>
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.p
            className="mt-6 sm:mt-8 text-[10px] font-semibold tracking-wider text-slate-500 uppercase sm:text-xs"
            variants={fadeUp}
            custom={0.35}
          >
            Powered by Next-Gen Event Streaming & Distributed AI Orchestration
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-16 sm:mt-20 w-full max-w-5xl"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.02] to-transparent p-1 shadow-[0_0_80px_rgba(34,211,238,0.06)] backdrop-blur-md">
            <div className="overflow-hidden rounded-[calc(1rem-2px)] bg-[#07070c]/90">

              {/* Top card metadata strip */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 text-[10px] font-medium tracking-wide uppercase text-slate-400 sm:px-6 sm:text-xs">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500"></span>
                  </span>
                  <span>TCP / TLS Encryption Enabled</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
                  </span>
                  <span>Live Traffic: 4.8M events/sec</span>
                </div>
              </div>

              {/* R3F Canvas Container */}
              <div className="relative">
                <HeroScene />
              </div>

              {/* Bottom statistics strip */}
              <div className="grid grid-cols-2 gap-y-6 border-t border-white/[0.06] bg-white/[0.01] px-6 py-6 sm:grid-cols-4 sm:divide-x sm:divide-white/[0.06] sm:py-5">
                {HERO_STATS.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center text-center sm:px-4">
                    <span className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                      {stat.label}
                    </span>
                    <div className="mt-2 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-emerald-400 sm:text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                      <span>
                        {stat.metricValue} {stat.metricLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
