import React from "react";
import Link from "next/link";
import { Cpu, Lock, ChevronRight } from "lucide-react";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "R&D & Bench Validation Roadmap | BRC STAR Deep-Tech",
  description:
    "Explore BRC STAR's TRL 3/4 electric powertrain R&D roadmap: Stage 1 ACM lab rig, Stage 2 solid-state switcher simulation, and Stage 3 CAD mule packaging.",
  alternates: {
    canonical: "https://www.brcstar.in/innovation/rnd",
  },
  openGraph: {
    title: "R&D & Bench Validation Roadmap | BRC STAR",
    description: "Explore BRC STAR powertrain R&D stages and TRL 3/4 simulation validation.",
    url: "https://www.brcstar.in/innovation/rnd",
    type: "website",
  },
};

export default function RndPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/innovation" className="hover:text-cyan-400">Innovation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">R&amp;D Platform</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>TRL 3/4 R&amp;D &amp; TEST BENCH ROADMAP</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Validating Self-Volt Powertrains: Laboratory Bench to Track Mule
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Engineered from Anupgarh, Rajasthan, BRC STAR operates at TRL 3/4: Stage 1 focuses on Alternator Control Module (ACM) laboratory bench evaluation, Stage 2 focuses on bus switching simulation, and Stage 3 covers vehicle CAD/CFD packaging prior to mule track testing.
          </p>
        </div>
      </div>

      {/* Honest Stage Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-center">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Stage 1: ACM Rig</div>
          <div className="text-lg font-bold text-cyan-400">Lab Bench Rig</div>
          <EvidenceBadge status="bench" />
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Stage 2: Bus Switcher</div>
          <div className="text-lg font-bold text-white">SiC SPICE / HIL</div>
          <EvidenceBadge status="simulated" />
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Stage 3: Mule Vehicle</div>
          <div className="text-lg font-bold text-emerald-400">CAD / CFD Concept</div>
          <EvidenceBadge status="target" />
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
          <div className="text-[10px] text-slate-400 uppercase">Readiness Level</div>
          <div className="text-lg font-bold text-amber-400">TRL 3/4 Stage</div>
          <EvidenceBadge status="planned" />
        </div>
      </div>

      {/* R&D Workstreams */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white font-mono">
          Active Engineering Validation Workstreams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white font-mono">
              1. Alternator Control Module (ACM) Rig
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Evaluating variable AC-to-DC boost rectification efficiency across generator RPM ranges on the Stage 1 laboratory test bench.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white font-mono">
              2. Dual-Pack Thermal Simulation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Modeling thermal behavior under separate traction discharge and deceleration recovery currents to reduce pack thermal concentration.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white font-mono">
              3. Embedded Firmware &amp; Switch Logic
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Developing SiC switching control firmware and state estimation algorithms maintained as confidential engineering know-how prior to full-scale mule integration.
            </p>
          </div>
        </div>
      </div>

      {/* Internal R&D Gateway Gated Inset */}
      <div className="p-8 rounded-2xl bg-[#050814] border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white font-mono">
          Technical Evidence &amp; Diligence Workspace
        </h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto">
          Inspect our public claim status ledger or request institutional NDA access for bench logs and architectural schematics.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/evidence"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
          >
            <span>View Evidence Ledger</span>
          </Link>
          <Link
            href="/invest/pitch-deck"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            <Lock className="w-4 h-4" />
            <span>Request NDA Data Room</span>
          </Link>
        </div>
      </div>

      <ClaimDisclaimer />
    </div>
  );
}
