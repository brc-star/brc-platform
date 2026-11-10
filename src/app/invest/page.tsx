import React from "react";
import Link from "next/link";
import { TrendingUp, ShieldCheck, Lock, CheckCircle2, ArrowRight, DollarSign, Target, PieChart, FileText } from "lucide-react";
import { INVESTOR_METRICS } from "@/lib/data";

export const metadata = {
  title: "Investor Relations & Capital Opportunity",
  description:
    "BRC STAR investor relations: market TAM ($50B+ Indian & global clean mobility transition), unit economics, capital allocation roadmap, and cap table overview.",
  alternates: {
    canonical: "https://www.brcstar.in/invest",
  },
  openGraph: {
    title: "Investor Relations & Capital Opportunity | BRC STAR",
    description: "BRC STAR investor relations: market TAM ($50B+), unit economics, capital allocation roadmap.",
    url: "https://www.brcstar.in/invest",
  },
};

export default function InvestorRelationsPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
          <span>05 INVESTOR RELATIONS &amp; CAPITAL</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Backing the Definitive EV Architecture of the Next Decade
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          BRC STAR combines proprietary hardware IP (Indian Patent App No. 202511050655), high projected gross margins, and massive $50B+ market tailwinds across the Indian clean mobility transition.
        </p>
      </div>

      {/* Financial & TAM Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-center">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Indian EV TAM (2030)</div>
          <div className="text-2xl font-bold text-cyan-400 mt-1">$50B+</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Total Addressable Market</div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Serviceable Market (SAM)</div>
          <div className="text-2xl font-bold text-white mt-1">$12.4B</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Passenger &amp; Commercial</div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Projected Gross Margin</div>
          <div className="text-2xl font-bold text-emerald-400 mt-1">28.5%</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Target at Phase 2 Scale</div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Active Round Target</div>
          <div className="text-2xl font-bold text-amber-400 mt-1">$3.5M - $5.0M</div>
          <div className="text-[10px] text-slate-500 mt-0.5">Seed / Pre-Series A</div>
        </div>
      </div>

      {/* 3 Strategic Pillars for Investors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-cyan-400">Pillar 1</div>
          <h3 className="text-lg font-bold text-white font-mono">
            Defensible IP &amp; High Moat
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Proprietary dual-pack closed-loop kinetic harvesting filed under Indian Patent Application No. 202511050655 [PCT details pending], establishing clear technological differentiation.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-cyan-400">Pillar 2</div>
          <h3 className="text-lg font-bold text-white font-mono">
            Capital-Efficient Manufacturing
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            We utilize contract manufacturing for high-tonnage stamping while retaining high-margin powertrain assembly, ACM inverter production, and BMS firmware calibration in-house.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-cyan-400">Pillar 3</div>
          <h3 className="text-lg font-bold text-white font-mono">
            Commercial Fleet Interest
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fleet operators face high operating fuel expenses. StarFleet commercial delivery vans are designed to reduce total cost of ownership by up to ₹4.8 Lakhs annually (simulated models available in data room).
          </p>
        </div>
      </div>

      {/* Gated Pitch Deck & Data Room Action Banner */}
      <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-r from-cyan-950/80 via-[#050814] to-slate-950 border border-cyan-500/40 text-center space-y-6">
        <div className="max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONFIDENTIAL INVESTOR DATA ROOM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Access Financial Model &amp; Master Pitch Deck
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Sign our digital bilateral NDA to review the Master Pitch Deck, Cap Table schedule, and unit economics projections. [Financial projections are internal models subject to homologation].
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/invest/pitch-deck"
            className="px-7 py-3.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
          >
            <Lock className="w-4 h-4" />
            <span>Sign NDA &amp; Access Data Room</span>
          </Link>
          <Link
            href="/invest/partners"
            className="px-7 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            Explore Franchise Dealerships
          </Link>
        </div>
      </div>
    </div>
  );
}
