"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, ChevronRight, Lock } from "lucide-react";
import { PitchDeckModal } from "./PitchDeckModal";
import { usePreBookDrawer } from "@/components/PreBookContext";

const LiveTelemetryWidget = dynamic(
  () => import("./LiveTelemetryWidget").then((mod) => mod.LiveTelemetryWidget),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 w-full rounded-2xl bg-slate-900/60 border border-slate-800 animate-pulse flex items-center justify-center text-xs font-mono text-slate-500">
        Initializing telemetry HUD...
      </div>
    ),
  }
);

export const HeroSection: React.FC = () => {
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const { openDrawer } = usePreBookDrawer();

  return (
    <section 
      aria-label="BRC STAR Powertrain Overview"
      className="relative pt-20 pb-8 px-4 md:pt-28 md:pb-16 md:px-8 overflow-hidden bg-[#F8FAFC] dark:bg-[#060913] transition-colors duration-300"
    >
      {/* Background Architectural Glow & Radial Layer */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent dark:from-cyan-950/20 dark:via-transparent dark:to-transparent pointer-events-none" 
        aria-hidden="true" 
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-15 pointer-events-none" />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Top Patent Status Badge */}
        <div className="flex items-center justify-center">
          <div className="mt-2 mb-3 py-1 px-3 text-[11px] leading-tight inline-flex items-center gap-2 rounded-full bg-cyan-100/80 border border-cyan-300/60 text-cyan-800 dark:bg-cyan-950/80 dark:border-cyan-500/40 dark:text-cyan-200 shadow-sm dark:shadow-lg dark:shadow-cyan-950/50 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse shrink-0" aria-hidden="true" />
            <span className="font-semibold tracking-wider font-mono">INDIAN PATENT APP 202511050655</span>
            <span className="text-slate-400 dark:text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-slate-600 dark:text-slate-300 hidden sm:inline font-mono">TRL 3/4 Validation Stage</span>
          </div>
        </div>

        {/* Master Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug font-display text-slate-900 dark:text-white mb-3 md:mb-5 transition-colors">
            Dual-Pack Kinetic Energy Recovery Architecture.
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Engineered for High-Duty Fleet Range.
            </span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-5 leading-relaxed font-sans font-normal transition-colors">
            Pioneering auxiliary mechanical harvesting with isolated secondary-pack dynamic switching. 
            Mitigating highway range degradation and single-battery thermal stress via proprietary 
            Alternator Control Module (ACM) power routing.
          </p>

          {/* Action CTAs Group */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <Link
              href="/technology/self-volt"
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md sm:shadow-lg shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
            >
              <span>Inspect Architecture</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setIsDeckModalOpen(true)}
              className="w-full sm:w-auto min-h-[44px] sm:min-h-[48px] px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-white text-slate-800 border border-slate-300 hover:bg-slate-100 shadow-sm dark:bg-slate-900/90 dark:text-slate-100 dark:hover:text-white dark:border-slate-700 dark:hover:bg-slate-800 dark:shadow-none active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            >
              <Lock className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
              <span>Institutional Deck (NDA)</span>
            </button>

            <button
              type="button"
              onClick={() => openDrawer()}
              className="w-full sm:w-auto min-h-[40px] sm:min-h-[48px] px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-mono text-xs font-semibold text-slate-600 hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300 transition-colors flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            >
              <span>Fleet Pre-Booking</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile-First 2x2 to Desktop 4-Col Performance HUD Spec Strip */}
        <div className="grid grid-cols-2 gap-2.5 w-full max-w-md mx-auto mb-4 md:grid-cols-4 md:gap-4 md:max-w-4xl">
          <div className="bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md dark:bg-slate-900/60 dark:border-slate-800/80 dark:shadow-none p-2.5 sm:p-3.5 rounded-xl text-center flex flex-col justify-center transition-all">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Target Range
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-mono text-cyan-600 dark:text-cyan-300 mt-0.5 sm:mt-1">
              850 km
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              Dual-Pack (Simulated)
            </span>
          </div>

          <div className="bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md dark:bg-slate-900/60 dark:border-slate-800/80 dark:shadow-none p-2.5 sm:p-3.5 rounded-xl text-center flex flex-col justify-center transition-all">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              0-100 km/h
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-mono text-slate-900 dark:text-white mt-0.5 sm:mt-1">
              3.2 s
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              StarCraft GT AWD
            </span>
          </div>

          <div className="bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md dark:bg-slate-900/60 dark:border-slate-800/80 dark:shadow-none p-2.5 sm:p-3.5 rounded-xl text-center flex flex-col justify-center transition-all">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              Aux Harvest
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-mono text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-1">
              +42 kW
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              Peak Kinetic Inflow
            </span>
          </div>

          <div className="bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-md dark:bg-slate-900/60 dark:border-slate-800/80 dark:shadow-none p-2.5 sm:p-3.5 rounded-xl text-center flex flex-col justify-center transition-all">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-medium">
              HV Architecture
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-mono text-amber-600 dark:text-amber-400 mt-0.5 sm:mt-1">
              800V
            </span>
            <span className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
              Dual Solid-State Bus
            </span>
          </div>
        </div>

        {/* Telemetry Stream Section */}
        <div className="mt-4 sm:mt-6 max-w-4xl mx-auto w-full">
          <LiveTelemetryWidget />
        </div>

        {/* Real-world variance disclaimer */}
        <p className="mt-3 text-center text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-500 max-w-2xl mx-auto">
          *Performance and range figures are simulated and bench-validated under laboratory test cycles. Real-world results vary with payload, terrain, and operational conditions.
        </p>
      </div>

      {/* DPDPA-Compliant Pitch Deck Modal Gateway */}
      <PitchDeckModal 
        isOpen={isDeckModalOpen} 
        onClose={() => setIsDeckModalOpen(false)} 
      />
    </section>
  );
};

export const Hero = HeroSection;
export default HeroSection;
