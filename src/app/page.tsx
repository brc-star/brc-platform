import React from "react";
import Link from "next/link";
import {
  Zap,
  Shield,
  Layers,
  ArrowRight,
  TrendingUp,
  Cpu,
  BatteryCharging,
  Car,
  CheckCircle2,
  Lock,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SelfVoltVisualizer } from "@/components/SelfVoltVisualizer";
import { VehiclesTopEmptyVideoContainer } from "@/components/VehiclesTopEmptyVideoContainer";
import { VehicleStudioEmpty } from "@/components/VehicleStudioEmpty";
import { VehiclePortfolioVideoContainer } from "@/components/VehiclePortfolioVideoContainer";
import { VehiclePortfolioNoImage } from "@/components/VehiclePortfolioNoImage";
import { RangeRoiCalculator } from "@/components/RangeRoiCalculator";
import { PatentShowcase } from "@/components/PatentShowcase";
import { INVESTOR_METRICS, RND_METRICS } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* 01. MASTER CINEMATIC HERO */}
      <HeroSection />

      {/* 02. SELF VOLT TECHNOLOGY DEEP DIVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>02 TECHNOLOGY BREAKTHROUGH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Self Volt Revolutionizes Electric Range
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Conventional EVs suffer continuous single-battery drain. BRC STAR implements a dual-pack closed-loop architecture that routes kinetic PMG regeneration into secondary reserve cells while driving.
          </p>
        </div>

        {/* Interactive Visualizer */}
        <SelfVoltVisualizer />

        {/* 3 Core Architecture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <BatteryCharging className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              Dual-Pack A/B Switching
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dynamically isolates discharge current and charge surges, eliminating battery thermal runaway risks and extending cell life to 4,500+ cycles.
            </p>
            <Link
              href="/technology/self-volt"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-2"
            >
              <span>Explore Dual-Pack Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              ACM Intelligent Controller
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Patented Alternator Control Module converts variable rotor RPM into ultra-stable 400V DC harvest with 98.4% peak inverter efficiency.
            </p>
            <Link
              href="/technology/energy-recovery"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-2"
            >
              <span>View ACM Dynamics</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-mono">
              Defensible Patent Moat
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Protected under registered Indian Patent Office (IPO) filings and PCT international priority claims with comprehensive architectural protection.
            </p>
            <Link
              href="/technology/patent-ip"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 pt-2"
            >
              <span>Inspect Patent Claims</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 03. VEHICLE FLEET & CONFIGURATOR STUDIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-12">
          {/* Top Section 03 Empty Video Container (At the very top) */}
          <VehiclesTopEmptyVideoContainer />

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Car className="w-3.5 h-3.5 text-cyan-400" />
              <span>03 VEHICLE PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineered for Passenger, Fleet &amp; Municipal Transit
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Explore the BRC STAR lineup. Configure trims, customize exterior colorways, and reserve your build slot.
            </p>
          </div>

          {/* Active Studio Configurator */}
          <VehicleStudioEmpty />

          {/* Dedicated Empty Video Container (Ready for future visual video) */}
          <VehiclePortfolioVideoContainer />
        </div>

        {/* New Dedicated No-Image Vehicle Portfolio Container */}
        <VehiclePortfolioNoImage />
      </section>

      {/* 04. ROI & TOTAL COST OF OWNERSHIP CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RangeRoiCalculator />
      </section>

      {/* 05. PATENT & IP REGISTRY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PatentShowcase />
      </section>

      {/* 06. INVESTOR & STRATEGIC CAPITAL SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#090d1f] via-[#050814] to-[#02040a] border border-cyan-500/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                <span>05 INVESTOR OPPORTUNITY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Capturing the $50 Billion+ Clean EV Transition
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                BRC STAR is positioned at the intersection of deep-tech engineering and high-volume commercial scalability. We are currently raising Seed / Pre-Series A capital to complete track durability validation and tooling deployment.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Target TAM</div>
                  <div className="text-lg font-bold text-cyan-400 mt-0.5">$50B+</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Current Stage</div>
                  <div className="text-lg font-bold text-white mt-0.5">TRL-6 Track</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Projected Margin</div>
                  <div className="text-lg font-bold text-emerald-400 mt-0.5">28.5%</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/invest/pitch-deck"
                  className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  <Lock className="w-4 h-4" />
                  <span>Request Pitch Deck &amp; Data Room</span>
                </Link>
                <Link
                  href="/invest"
                  className="px-6 py-3 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  View Investor Overview
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-3 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
              <div className="text-xs font-mono uppercase text-cyan-400 font-bold border-b border-slate-800 pb-3">
                Key Strategic Milestones
              </div>
              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">TRL-6 Prototype Track Tested:</strong> Validated 32.8% energy gain on dynamometer rigs.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Patent Examination Progress:</strong> Primary closed-loop claim published with IPO.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Dealer Network LOIs:</strong> 18+ franchise letters of intent across southern metro corridors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. GLOBAL CLOSING CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-950/80 via-[#050814] to-blue-950/80 border border-cyan-500/40 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Join the Self-Volt Revolution.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Whether you are an institutional investor seeking deep-tech alpha, an enterprise logistics operator cutting fleet TCO, a dealership franchise partner, or an early adopter driver — connect with BRC STAR today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/pre-book"
                className="px-8 py-3.5 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center gap-2 shadow-xl shadow-cyan-500/30"
              >
                <span>Reserve Your BRC STAR EV</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/invest/partners"
                className="px-8 py-3.5 rounded-xl font-mono text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 transition-all"
              >
                Become a Franchise Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
