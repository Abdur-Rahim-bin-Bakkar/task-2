"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ctaShimmer } from "@/lib/animations";

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-[0_0_32px_rgba(34,211,238,0.25)] hover:shadow-[0_0_48px_rgba(34,211,238,0.35)]",
  secondary:
    "border border-white/10 bg-white/5 text-slate-200 backdrop-blur-sm hover:border-white/20 hover:bg-white/10",
  nav: "relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_24px_rgba(34,211,238,0.2)]",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  animate = false,
  onClick,
  type = "button",
  ariaLabel,
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06060b]";

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        initial={animate ? { opacity: 0, y: 16 } : false}
        animate={animate ? { opacity: 1, y: 0 } : false}
        transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        whileHover={variant === "nav" || variant === "primary" ? { scale: 1.02 } : undefined}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} onClick={onClick} className={classes} aria-label={ariaLabel}>
          {variant === "nav" && (
            <span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
              aria-hidden="true"
            />
          )}
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      initial={animate ? { opacity: 0, y: 16 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.55, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
