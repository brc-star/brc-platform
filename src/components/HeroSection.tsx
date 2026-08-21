"use client";

import React from "react";
import Link from "next/link";
import { Zap, ArrowRight, ShieldCheck, Activity, ChevronRight, Compass } from "lucide-react";
import { LiveTelemetryWidget } from "./LiveTelemetryWidget";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-radial-highlight">
      {/* Background Tech Grids & Floating Energy Rings */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Engineering Indicator Badge */}
        <div className="flex items-center justify-center mb-3.5 sm:mb-4 animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-semibold">BRC STAR SELF VOLT™</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 hidden sm:inline">Closed-Loop Dual-Pack Kinetic Architecture</span>
            <span className="text-slate-300 sm:hidden">Dual-Pack Architecture</span>
          </div>
        </div>

        {/* Master Headline (Refined 2-Line Cinematic Composition) */}
        <div className="text-center max-w-7xl mx-auto space-y-3.5 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-[2.6rem] lg:text-[3.25rem] xl:text-[3.8rem] font-bold text-white tracking-tight leading-[1.02] sm:leading-[0.98] lg:leading-[0.96] font-display max-w-7xl mx-auto">
            <span className="block">The Next Era of Electric Mobility</span>
            <span className="text-gradient tech-glow-text block">
              Generates Its Own Momentum.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans pt-1">
            Eliminating grid charging anxiety through proprietary closed-loop dual-battery energy recoup and high-efficiency permanent magnet harvesting.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 sm:pt-4">
            <Link
              href="/technology/self-volt"
              className="px-7 py-3.5 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Self Volt Tech</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/pre-book"
              className="px-7 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2"
            >
              <span>Reserve / Pre-Book</span>
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </Link>

            <Link
              href="/invest/pitch-deck"
              className="px-6 py-3.5 rounded-xl font-mono text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <span>Request Pitch Deck (NDA)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* HUD Performance Spec Strip */}
        <div className="mt-11 sm:mt-13 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          <div className="bg-[#050814]/90 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-xl text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Real-World Range
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mt-1">
              850 km
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Dual-Pack Long Range</div>
          </div>

          <div className="bg-[#050814]/90 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-xl text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Acceleration (0-100)
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1">
              3.2 s
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">StarCraft GT AWD</div>
          </div>

          <div className="bg-[#050814]/90 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-xl text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Kinetic Recoup
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mt-1">
              +42 kW
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Continuous ACM Flow</div>
          </div>

          <div className="bg-[#050814]/90 border border-cyan-500/20 p-4 rounded-xl backdrop-blur-xl text-center">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Architecture
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mt-1">
              800V
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5">Dual Solid-State Bus</div>
          </div>
        </div>

        {/* Live Telemetry Stream Inset */}
        <div className="mt-10 max-w-4xl mx-auto">
          <LiveTelemetryWidget />
        </div>
      </div>
    </section>
  );
};
