"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function NavIndicator({ activeIndex, itemCount }) {
  const indicatorRef = useRef(null);

  useEffect(() => {
    if (!indicatorRef.current || itemCount === 0) return;

    gsap.to(indicatorRef.current, {
      x: activeIndex * 100,
      duration: 0.45,
      ease: "power3.out",
    });
  }, [activeIndex, itemCount]);

  if (itemCount === 0) return null;

  return (
    <span
      ref={indicatorRef}
      className="absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
      style={{ width: `${100 / itemCount}%`, transform: `translateX(${activeIndex * 100}%)` }}
      aria-hidden="true"
    />
  );
}
