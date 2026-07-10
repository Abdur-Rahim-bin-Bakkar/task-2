"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { navItemVariants, mobileMenuVariants, mobileLinkVariants } from "@/lib/animations";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import Button from "@/components/ui/Button";

export default function Navigation() {
  const isScrolled = useScrollPosition(10);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = NAV_LINKS.map((link) => link.href);
  const activeHref = useActiveSection(sectionIds, 100);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.04] bg-[#030307]/75 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-12"
        aria-label="Main navigation"
      >
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded-md"
          aria-label={`${SITE.name} home`}
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/[0.08]"
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z"
                stroke="url(#logo-gradient)"
                strokeWidth="1.5"
              />
              <circle cx="9" cy="9" r="2.5" fill="#22d3ee" className="shadow-[0_0_8px_#22d3ee]" />
              <defs>
                <linearGradient id="logo-gradient" x1="2" y1="1" x2="16" y2="17">
                  <stop stopColor="#22d3ee" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-sm font-semibold tracking-wide text-white font-sans">
            {SITE.name}
          </span>
        </Link>

        {/* NAV LINKS (CENTERED STYLE) */}
        <div className="hidden items-center gap-1 md:flex">
          <div className="relative flex items-center gap-2">
            {NAV_LINKS.map((link, i) => {
              const isActive = link.href === activeHref;
              return (
                <motion.div
                  key={link.href}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs font-normal tracking-wide transition-colors duration-200 focus-visible:outline-none rounded-md ${
                      isActive ? "text-white" : "text-slate-400 hover:text-slate-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        className="absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden items-center md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              href="#get-started" 
              variant="nav" 
              className="group relative overflow-hidden bg-cyan-500 text-black font-semibold text-xs px-4 py-2 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] flex items-center gap-1.5"
            >
              <span>Start Free</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M2 7H12M12 7L8 3M12 7L8 11"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </motion.div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/5 text-slate-300 transition-colors hover:bg-white/10 md:hidden"
          onClick={toggleMobile}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
            className="absolute block h-[1.5px] w-4 rounded-full bg-current"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="absolute block h-[1.5px] w-4 rounded-full bg-current"
            transition={{ duration: 0.15 }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
            className="absolute block h-[1.5px] w-4 rounded-full bg-current"
            transition={{ duration: 0.2 }}
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            className="overflow-hidden border-t border-white/[0.05] bg-[#030307]/95 backdrop-blur-xl md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={mobileLinkVariants}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      link.href === activeHref
                        ? "bg-white/5 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                    }`}
                    aria-current={link.href === activeHref ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={mobileLinkVariants} className="pt-2">
                <Button
                  href="#get-started"
                  variant="nav"
                  className="w-full bg-cyan-500 text-black font-semibold rounded-full text-sm py-2.5"
                  onClick={closeMobile}
                >
                  Start Free
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}