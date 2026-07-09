"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-[320px] w-full items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] sm:h-[400px] lg:h-[520px]"
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
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-[4.5rem]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(34,211,238,0.12),transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          className="flex flex-1 flex-col items-start text-left"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp} custom={0}>
            <Badge>{HERO.badge}</Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            variants={fadeUp}
            custom={0.1}
          >
            {headlineParts[0]}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {HERO.headlineAccent}
            </span>
            {headlineParts[1] || ""}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            variants={fadeUp}
            custom={0.2}
          >
            {HERO.description}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
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
        </motion.div>

        <motion.div
          className="relative w-full flex-1"
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-1 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-sm">
            <div className="overflow-hidden rounded-[calc(1rem-2px)] bg-[#0a0a12]/80">
              <HeroScene />
            </div>
          </div>

          <motion.div
            className="absolute -bottom-4 -left-4 hidden rounded-xl border border-white/10 bg-[rgba(12,12,20,0.9)] px-4 py-3 backdrop-blur-xl sm:block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            aria-hidden="true"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-white">Live Processing</p>
                <p className="text-[10px] text-slate-500">2.4M data points/sec</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-3 -right-3 hidden rounded-xl border border-white/10 bg-[rgba(12,12,20,0.9)] px-3 py-2 backdrop-blur-xl sm:block"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            aria-hidden="true"
          >
            <p className="text-[10px] font-medium text-purple-300">AI Accuracy</p>
            <p className="text-sm font-bold text-white">99.7%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
