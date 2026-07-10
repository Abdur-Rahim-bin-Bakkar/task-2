"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Solutions", href: "#solutions" },
      { label: "Integrations", href: "#solutions" },
      { label: "Changelog", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" }
    ],
    resources: [
      { label: "Documentation", href: "#" },
      { label: "System Status", href: "#pricing" },
      { label: "Community", href: "#" },
      { label: "Privacy Policy", href: "#" }
    ]
  };

  return (
    <footer id="about" className="relative border-t border-white/[0.04] bg-[#040408] pt-16 pb-12 overflow-hidden" role="contentinfo">
      {/* Background soft glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[500px] rounded-full bg-purple-500/[0.02] blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Signature Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z" stroke="url(#footer-logo-gradient)" strokeWidth="1.2" />
                  <circle cx="9" cy="9" r="2" fill="#22d3ee" />
                  <defs>
                    <linearGradient id="footer-logo-gradient" x1="2" y1="1" x2="16" y2="17">
                      <stop stopColor="#22d3ee" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="text-sm font-bold tracking-tight text-white">{SITE.name}</span>
            </Link>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              Harness the power of connected AI to turn fragmented data streams into actionable intelligence. Exactly-once stream workflows on autopilot.
            </p>
            
            {/* Social media icons links */}
            <div className="flex items-center gap-3.5 mt-2">
              {["github", "twitter", "linkedin"].map((soc) => (
                <a
                  key={soc}
                  href="#"
                  className="h-7 w-7 rounded-lg border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/5 transition-all flex items-center justify-center text-slate-500 hover:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60"
                  aria-label={`Visit our ${soc}`}
                >
                  <span className="text-[10px] font-bold uppercase font-mono tracking-tight">{soc[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns (7 cols split across 3 grids) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white mb-4">Product</h4>
              <ul className="flex flex-col gap-2.5">
                {links.product.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-slate-500 hover:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5">
                {links.company.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-slate-500 hover:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white mb-4">Resources</h4>
              <ul className="flex flex-col gap-2.5">
                {links.resources.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.href} className="text-xs text-slate-500 hover:text-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 rounded">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom copyright & status row */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] sm:text-xs text-slate-600 font-medium">
            &copy; {currentYear} {SITE.name} Inc. All rights reserved. Made on Antigravity.
          </p>
          
          {/* Simulated System Status indicator */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-3.5 py-1 text-[10px] font-semibold text-emerald-400">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            </span>
            <span>All systems operational</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
