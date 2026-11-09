"use client";

import React from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";

export const VehiclesCTA: React.FC = () => {
  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 via-cyan-50/40 to-slate-100 border border-slate-200/80 shadow-xl shadow-slate-200/50 dark:bg-gradient-to-br dark:from-[#0B1120] dark:via-[#0D1527] dark:to-[#070B14] dark:border-cyan-500/20 dark:shadow-none relative overflow-hidden text-center space-y-6 transition-all duration-300">
      {/* Ambient Radial Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto space-y-3 relative z-10">
        {/* Badge: ZERO EMISSION ECOSYSTEM */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-100/80 text-cyan-800 border border-cyan-300/60 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-500/30 shadow-sm transition-colors">
          <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>ZERO EMISSION ECOSYSTEM</span>
        </div>

        {/* Main Heading */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-bold tracking-tight dark:text-white font-sans transition-colors">
          Explore the Future of Self-Volt Mobility
        </h3>

        {/* Subtext / Description */}
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed dark:text-slate-400 max-w-2xl mx-auto transition-colors">
          All models feature BRC STAR&apos;s proprietary kinetic energy harvesting architecture, reducing dependence on fixed charging grids and delivering unmatched fleet uptime.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Primary Button */}
          <Link
            href="/pre-book"
            className="px-8 py-3.5 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Reserve a Build Slot</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Secondary Button */}
          <Link
            href="/technology/self-volt"
            className="px-8 py-3.5 rounded-xl font-mono text-sm font-semibold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 shadow-sm dark:bg-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800 transition-all active:scale-[0.98]"
          >
            Technical Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehiclesCTA;
