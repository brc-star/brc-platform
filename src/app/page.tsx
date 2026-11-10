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
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/HeroSection";
import { VehiclesTopEmptyVideoContainer } from "@/components/VehiclesTopEmptyVideoContainer";
import { VehicleStudioEmpty } from "@/components/VehicleStudioEmpty";
import { VehiclePortfolioVideoContainer } from "@/components/VehiclePortfolioVideoContainer";
import { VehiclePortfolioNoImage } from "@/components/VehiclePortfolioNoImage";
import { PatentShowcase } from "@/components/PatentShowcase";
import { INVESTOR_METRICS, RND_METRICS } from "@/lib/data";
import { Metadata } from "next";

const SelfVoltVisualizer = dynamic(
  () => import("@/components/SelfVoltVisualizer").then((mod) => mod.SelfVoltVisualizer),
  {
    loading: () => (
      <div className="h-96 w-full rounded-3xl bg-slate-900/40 border border-slate-800 animate-pulse flex items-center justify-center text-xs font-mono text-slate-500">
        Loading interactive telemetry visualizer...
      </div>
    ),
  }
);

const RangeRoiCalculator = dynamic(
  () => import("@/components/RangeRoiCalculator").then((mod) => mod.RangeRoiCalculator),
  {
    loading: () => (
      <div className="h-80 w-full rounded-3xl bg-slate-900/40 border border-slate-800 animate-pulse flex items-center justify-center text-xs font-mono text-slate-500">
        Loading efficiency calculator...
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: "BRC STAR | Dual-Pack Kinetic Energy Recovery Electric Vehicles",
  description: "BRC STAR (OPC) PRIVATE LIMITED — Deep-tech electric vehicle architecture filed under Indian Patent Application No. 202511050655. Auxiliary mechanical harvesting and dynamic dual-pack power routing.",
  alternates: {
    canonical: "https://www.brcstar.in",
  },
  openGraph: {
    title: "BRC STAR | Dual-Pack Kinetic Energy Recovery Architecture",
    description: "Deep-tech electric vehicle architecture filed under Indian Patent Application No. 202511050655.",
    url: "https://www.brcstar.in",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-24 pb-16 sm:pb-20">
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
              Alternator Control Module (Patent application filed/published) converts variable rotor RPM into ultra-stable 400V DC harvest with 98.4% peak inverter efficiency (Simulated).
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
              Filed with the Indian Patent Office under Application No. 202511050655 (Published); international [PCT details pending].
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

      {/* 05.5 PROTOTYPE PROGRESS & ENGINEERING VALIDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>HARDWARE RIG &amp; TEST BENCH MILESTONES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Prototype Progress &amp; Engineering Roadmap
              </h2>
            </div>
            <div className="text-xs font-mono text-slate-400">
              TRL Stage: <strong className="text-cyan-400">TRL 3/4 Laboratory Bench</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold">Stage 1: Inverter ACM</span>
                <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 text-[10px]">
                  Bench Validated
                </span>
              </div>
              <h3 className="text-sm font-bold text-white font-sans">
                Alternator Control Module (ACM) Rig
              </h3>
              <p className="text-slate-400 text-[11px] font-sans leading-relaxed">
                Hardware test rig testing variable PMG generator output across 300 to 9,500 RPM into active 400V boost circuitry.
              </p>
              <div className="pt-2 text-[10px] text-amber-400/90 font-mono">
                [Rendered concept / Test bench model]
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold">Stage 2: Bus Switcher</span>
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-[10px]">
                  Simulation
                </span>
              </div>
              <h3 className="text-sm font-bold text-white font-sans">
                Dual-Pack Solid-State Commutator
              </h3>
              <p className="text-slate-400 text-[11px] font-sans leading-relaxed">
                Silicon Carbide (SiC) semiconductor bus-switching matrix with sub-2.4ms role transition latency between Pack A and Pack B.
              </p>
              <div className="pt-2 text-[10px] text-amber-400/90 font-mono">
                [Rendered concept / Hardware logic]
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold">Stage 3: Mule Chassis</span>
                <span className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-500/30 text-[10px]">
                  CAD Packaging
                </span>
              </div>
              <h3 className="text-sm font-bold text-white font-sans">
                StarCraft GT Track Platform
              </h3>
              <p className="text-slate-400 text-[11px] font-sans leading-relaxed">
                Aerodynamic chassis packaging integrating dual battery tubs, PMG auxiliary mechanical linkages, and immersion coolant loops.
              </p>
              <div className="pt-2 text-[10px] text-amber-400/90 font-mono">
                [Rendered concept / Awaiting track mule]
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-500 font-mono border-t border-slate-800/80 pt-4 text-center">
            *Visuals and representations labeled as &ldquo;Rendered concept&rdquo; represent CAD models and laboratory simulations. Real physical test mule track photography will be published post-homologation.
          </div>
        </div>
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
                  <div className="text-lg font-bold text-white mt-0.5">TRL 3/4</div>
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
                    <strong className="text-white">TRL 3/4 Dynamometer Validated:</strong> 32.8% auxiliary energy gain (Simulated / Lab Test Bench).
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Patent Examination Progress:</strong> Indian Patent Application No. 202511050655 filed with IPO.
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Dealer Network Interest:</strong> 18+ franchise expressions of interest [Available in data room].
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
