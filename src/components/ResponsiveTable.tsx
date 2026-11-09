"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResponsiveTableProps {
  children: React.ReactNode;
  caption?: string;
  className?: string;
}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  children,
  caption,
  className,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScrollState();
    window.addEventListener("resize", checkScrollState);
    return () => window.removeEventListener("resize", checkScrollState);
  }, []);

  return (
    <div className={cn("relative w-full rounded-2xl bg-[#040714] border border-slate-800", className)}>
      {caption && (
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-900/40">
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">{caption}</span>
          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300 sm:hidden">
            <ArrowRightLeft className="w-3 h-3" />
            <span>Swipe Horizontally</span>
          </div>
        </div>
      )}

      {/* Dynamic Left Gradient Mask */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute left-0 top-12 bottom-0 w-8 bg-gradient-to-r from-[#040714] to-transparent z-10 transition-opacity duration-200",
          canScrollLeft ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Dynamic Right Gradient Mask */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute right-0 top-12 bottom-0 w-8 bg-gradient-to-l from-[#040714] to-transparent z-10 transition-opacity duration-200",
          canScrollRight ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Scrollable Container with Smooth Scroll Cues */}
      <div
        ref={scrollRef}
        onScroll={checkScrollState}
        tabIndex={0}
        aria-label="Scrollable technical data table"
        className="w-full overflow-x-auto focus:outline-none focus:ring-1 focus:ring-cyan-500/50 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
      >
        <div className="min-w-[560px] sm:min-w-full">
          {children}
        </div>
      </div>
    </div>
  );
};
