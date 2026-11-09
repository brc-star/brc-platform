"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Lock } from "lucide-react";
import { LiveTelemetryWidget } from "./LiveTelemetryWidget";
import { PitchDeckModal } from "./PitchDeckModal";

export const HeroSection: React.FC = () => {
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);

  return (
    <section 
      aria-label="BRC STAR Powertrain Overview"
      className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden bg-[#02040a]"
    >
      {/* Background Architectural Glow & Grids */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[650px] h-[320px] sm:h-[650px] bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Patent Status Badge */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[11px] sm:text-xs font-mono text-cyan-200 shadow-lg shadow-cyan-950/50">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shrink-0" aria-hidden="true" />
            <span className="font-semibold tracking-wider">INDIAN PATENT APP 202511050655</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
            <span className="text-slate-300 hidden sm:inline">TRL 3/4 Validation Stage</span>
          </div>
        </div>

        {/* Master Headline - Rigorous Institutional KERS Terminology */}
        <div className="text-center max-w-5xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-white tracking-tight leading-[1.08] sm:leading-[1.04] font-display">
            Dual-Pack Kinetic Energy Recovery Architecture.
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Engineered for High-Duty Fleet Range.
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Pioneering auxiliary mechanical harvesting with isolated secondary-pack dynamic switching. 
            Mitigating highway range degradation and single-battery thermal stress via proprietary 
            Alternator Control Module (ACM) power routing.
          </p>

          {/* Accessible Action CTAs (Min 48px touch-target bounds) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
            <Link
              href="/technology/self-volt"
              className="w-full sm:w-auto min-h-[48px] px-8 py-3 rounded-xl font-mono text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 focus:ring-2 focus:ring-cyan-300 focus:outline-none"
            >
              <span>Inspect Architecture</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setIsDeckModalOpen(true)}
              className="w-full sm:w-auto min-h-[48px] px-7 py-3 rounded-xl font-mono text-sm font-semibold text-slate-100 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/60 active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            >
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
              <span>Institutional Deck (NDA)</span>
            </button>

            <Link
              href="/pre-book"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-cyan-300 transition-colors flex items-center justify-center gap-1.5 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
            >
              <span>Fleet Pre-Booking</span>
              <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Mobile-First 2x2 to Desktop 4-Col Performance HUD Spec Strip */}
        <div className="mt-10 sm:mt-12 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
          <div className="bg-[#050814]/90 border border-cyan-500/30 p-3 sm:p-4 rounded-xl backdrop-blur-md text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-300 font-medium">
              Target Range
            </span>
            <span className="text-xl sm:text-3xl font-extrabold text-cyan-300 font-mono mt-0.5 sm:mt-1">
              850 km
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
              Dual-Pack (Simulated)
            </span>
          </div>

          <div className="bg-[#050814]/90 border border-cyan-500/30 p-3 sm:p-4 rounded-xl backdrop-blur-md text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-300 font-medium">
              0-100 km/h
            </span>
            <span className="text-xl sm:text-3xl font-extrabold text-white font-mono mt-0.5 sm:mt-1">
              3.2 s
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
              StarCraft GT AWD
            </span>
          </div>

          <div className="bg-[#050814]/90 border border-cyan-500/30 p-3 sm:p-4 rounded-xl backdrop-blur-md text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-300 font-medium">
              Aux Harvest
            </span>
            <span className="text-xl sm:text-3xl font-extrabold text-emerald-300 font-mono mt-0.5 sm:mt-1">
              +42 kW
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
              Peak Kinetic Inflow
            </span>
          </div>

          <div className="bg-[#050814]/90 border border-cyan-500/30 p-3 sm:p-4 rounded-xl backdrop-blur-md text-center flex flex-col justify-center">
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-300 font-medium">
              HV Architecture
            </span>
            <span className="text-xl sm:text-3xl font-extrabold text-amber-300 font-mono mt-0.5 sm:mt-1">
              800V
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5">
              Dual Solid-State Bus
            </span>
          </div>
        </div>

        {/* Telemetry Stream Section */}
        <div className="mt-8 sm:mt-10 max-w-4xl mx-auto">
          <LiveTelemetryWidget />
        </div>
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
