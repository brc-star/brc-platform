import React from "react";
import Link from "next/link";
import { Leaf, Zap, RefreshCw, Globe, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Sustainability & Circular ESG Roadmap | BRC STAR EV",
  description: "Carbon lifecycle reduction targets, circular second-life battery stewardship, sustainable Indian supply chain, and net-zero manufacturing at BRC STAR.",
  alternates: {
    canonical: "https://www.brcstar.in/innovation/sustainability",
  },
  openGraph: {
    title: "Sustainability & Circular ESG Roadmap | BRC STAR",
    description: "BRC STAR sustainability commitments and circular lifecycle targets.",
    url: "https://www.brcstar.in/innovation/sustainability",
    type: "website",
  },
};

export default function SustainabilityPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/innovation" className="hover:text-cyan-400">Innovation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Sustainability</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Leaf className="w-3.5 h-3.5 text-emerald-400" />
            <span>CIRCULAR BATTERY LIFECYCLE &amp; NET-ZERO IMPACT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Clean Motion Engineered for True Ecological Harmony
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Sustainability at BRC STAR goes beyond zero tailpipe exhaust. By recouping kinetic energy, reducing grid power consumption by up to 35%, and extending cell longevity to 4,500+ cycles, we minimize global lithium-ion mining demand.
          </p>
        </div>
      </div>

      {/* 3 Core ESG Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">
            1. Grid Power Decoupling
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            By generating kinetic recharge while in transit, BRC STAR vehicles require fewer grid megawatt-hours per 100,000 km, easing load on national electrical transmission grids.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-cyan-400">
            <RefreshCw className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">
            2. Dual-Pack 4,500 Cycle Longevity
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Dividing charge/discharge fatigue across Pack A and Pack B triples usable battery lifespan (&gt;1.2 Million Kilometers), eliminating premature cell degradation and battery replacement waste.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-amber-400">
            <Globe className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">
            3. Circular Second-Life Storage
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            At end-of-vehicle duty, battery modules transition directly into stationary solar energy storage microgrids before undergoing hydrometallurgical closed-loop recycling.
          </p>
        </div>
      </div>
    </div>
  );
}
