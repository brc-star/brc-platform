import React from "react";
import Link from "next/link";
import { TrendingUp, Lock, ArrowRight } from "lucide-react";
import { PATENT_STATEMENT, CLAIMS_REGISTRY } from "@/lib/claims";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "Investor Relations & Seed Capital Opportunity | BRC STAR",
  description:
    "BRC STAR investor relations: early-stage deep-tech EV architecture seeking seed funding (TRL 3/4), capital roadmap, and engineering evidence ledger.",
  alternates: {
    canonical: "https://www.brcstar.in/invest",
  },
  openGraph: {
    title: "Investor Relations & Seed Capital Opportunity | BRC STAR",
    description:
      "Early-stage deep-tech EV powertrain architecture at TRL 3/4 seeking seed capital.",
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
          <span>05 INVESTOR RELATIONS &amp; SEED CAPITAL</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Early-Stage Deep-Tech EV Architecture — Seeking Seed Funding
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          {PATENT_STATEMENT} Built bootstrapped from Anupgarh, Rajasthan, combining Stage 1 ACM lab-rig validation and dual-pack powertrain simulation toward India&apos;s expanding EV ecosystem.
        </p>
      </div>

      {/* Financial & Market Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-center">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Primary Segments</div>
          <div className="text-lg font-bold text-white mt-1">Fleet &amp; Passenger</div>
          <div className="text-[10px] text-slate-500">Assumptions unaudited</div>
          <EvidenceBadge status="target" />
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Phase-2 Gross Margin Assumption</div>
          <div className="text-lg font-bold text-emerald-400 mt-1">{CLAIMS_REGISTRY.phase2_gross_margin.metric} (Illustrative, Unaudited)</div>
          <div className="text-[10px] text-slate-500">Not a forecast •{" "}
            <Link href="/evidence#phase2_gross_margin" className="text-cyan-400 underline">
              Assumptions
            </Link>
          </div>
          <EvidenceBadge status={CLAIMS_REGISTRY.phase2_gross_margin.status} />
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Current Round</div>
          <div className="text-lg font-bold text-amber-400 mt-1">Seed Funding</div>
          <div className="text-[10px] text-slate-500">Subject to change; not an offer</div>
          <EvidenceBadge status="planned" />
        </div>
      </div>

      {/* 3 Strategic Pillars for Investors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-cyan-400">Pillar 1</div>
          <h3 className="text-lg font-bold text-white font-mono">
            Patent Application Filed
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {PATENT_STATEMENT} Patent application filed; scope subject to examination (no granted or exclusive rights implied).
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-cyan-400">Pillar 2</div>
          <h3 className="text-lg font-bold text-white font-mono">
            Capital-Efficient R&amp;D
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Bootstrapped execution focused on core dual-pack bus topology, ACM power electronics, and software estimation know-how while utilizing partner contract fabrication at manufacturing scale.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="text-xs font-mono uppercase text-cyan-400">Pillar 3</div>
          <h3 className="text-lg font-bold text-white font-mono">
            Exploratory Commercial Interest
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Fleet logistics concepts target lower energy operating cost under illustrative tariff models (unaudited assumptions and preliminary inquiry logs accessible inside the NDA data room).
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
            Access Financial Model &amp; Investor Pitch Deck
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Execute a digital bilateral NDA to review our Seed overview pitch deck, unaudited financial assumptions, and unpublished patent application summary.
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
            href="/evidence"
            className="px-7 py-3.5 rounded-xl font-mono text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors inline-flex items-center gap-1.5"
          >
            <span>View Evidence Ledger</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <ClaimDisclaimer variant="investor" />
    </div>
  );
}
