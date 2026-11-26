import React from "react";
import Link from "next/link";
import { Leaf, Zap, RefreshCw, Globe, ChevronRight } from "lucide-react";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "Sustainability & Circular ESG Roadmap | BRC STAR EV",
  description:
    "Decarbonization targets, circular second-life battery stewardship concepts, and battery longevity R&D goals at BRC STAR.",
  alternates: {
    canonical: "https://www.brcstar.in/innovation/sustainability",
  },
  openGraph: {
    title: "Sustainability & Circular ESG Roadmap | BRC STAR",
    description: "BRC STAR sustainability commitments and circular battery lifecycle targets.",
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
            <span>CIRCULAR BATTERY STEWARDSHIP &amp; ESG TARGETS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Designing High-Durability Powertrains for Reduced Lifecycle Waste
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Sustainability goals at BRC STAR focus on mitigating tailpipe emissions while targeting reduced thermal cycling stress across dual battery packs to lower long-term cell replacement demand (design targets at TRL 3/4; independent lifecycle audit pending).
          </p>
        </div>
      </div>

      {/* 3 Core ESG Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Zap className="w-5 h-5" />
            </div>
            <EvidenceBadge status="simulated" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">
            1. Grid Demand Relief Target
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            By pairing regenerative braking recovery with glide energy management, the dual-pack architecture targets lower net grid charging demand across urban stop-go commercial duty cycles (drive-cycle dependent; under bench quantification).
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-cyan-400">
              <RefreshCw className="w-5 h-5" />
            </div>
            <EvidenceBadge status="target" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">
            2. Dual-Pack Longevity Target
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Separating discharge and recharge surges across Pack A and Pack B is designed to reduce thermal stress and extend pack durability (4,500+ cycle design target — depends on chemistry, duty cycle &amp; thermal management; not yet tested).
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-amber-400">
              <Globe className="w-5 h-5" />
            </div>
            <EvidenceBadge status="planned" />
          </div>
          <h3 className="text-base font-bold text-white font-mono">
            3. Planned Second-Life Storage
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Future circularity roadmap envisions transitioning end-of-mobility modules into stationary solar microgrids prior to certified mineral recycling partners.
          </p>
        </div>
      </div>

      <ClaimDisclaimer />
    </div>
  );
}
