"use client";

import { motion } from "framer-motion";

export default function Badge({ children, className = "" }) {
  return (
    <motion.span
      className={`inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-300 uppercase ${className}`}
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
        aria-hidden="true"
      />
      {children}
    </motion.span>
  );
}
