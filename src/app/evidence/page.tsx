import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, ArrowRight, Layers, Cpu, FlaskConical, Car } from "lucide-react";
import { EvidenceLedgerClient } from "@/components/EvidenceLedgerClient";
import { PATENT_STATEMENT, ENERGY_PHYSICS_NOTE, VOLTAGE_ARCHITECTURE_EXPLAINER } from "@/lib/claims";

export const metadata: Metadata = {
  title: "Evidence & Validation Status Ledger | BRC STAR",
  description:
    "Single-source technical due-diligence ledger mapping every BRC STAR claim, metric, simulation, bench rig result, and target milestone at TRL 3/4.",
  alternates: {
    canonical: "https://www.brcstar.in/evidence",
  },
  openGraph: {
    title: "Evidence & Validation Status Ledger | BRC STAR",
    description:
      "Transparent validation ledger of BRC STAR TRL 3/4 bench, simulation, and design target metrics.",
    url: "https://www.brcstar.in/evidence",
  },
};

export default function EvidenceStatusPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] text-slate-900 dark:text-white transition-colors pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">Evidence &amp; Status Ledger</span>
        </div>

        {/* Page Hero */}
        <section className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-100/90 text-cyan-900 border border-cyan-300/80 dark:bg-cyan-950/80 dark:border-cyan-500/30 text-xs font-mono dark:text-cyan-300 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>INSTITUTIONAL DILIGENCE • SINGLE SOURCE OF TRUTH</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Evidence &amp; Engineering Status Ledger
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Every technical, performance, IP, and market figure published by BRC STAR is centrally governed in this ledger and explicitly classified by verification stage—ensuring institutional clarity between verified registry records, Stage 1 bench testing, computer simulation, and planned targets.
          </p>

          <p className="text-xs font-mono text-slate-600 dark:text-slate-400 p-3.5 rounded-xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800">
            <strong>Patent Status:</strong> {PATENT_STATEMENT}
          </p>
        </section>

        {/* Interactive Ledger Table */}
        <EvidenceLedgerClient />

        {/* Validation Progression Roadmap: Simulated -> Bench -> Track-Verified */}
        <section className="space-y-6 pt-4">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold">
              TRL PROGRESSION METHODOLOGY
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              How Claims Advance: Simulated → Bench → Track-Verified
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400">
                <Cpu className="w-4 h-4" />
                <span>Stage 1: Simulated (TRL 3)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Numerical MATLAB/Simulink models, SPICE switching behavior, and steady-state CAD/CFD airflow modeling establish preliminary engineering envelopes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                <FlaskConical className="w-4 h-4" />
                <span>Stage 2: Bench-Tested (TRL 4)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Isolated hardware benches (currently Alternator Control Module active rectifier rig) followed by coupled 800V SiC commutation hardware-in-loop benches.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-blue-700 dark:text-blue-400">
                <Layers className="w-4 h-4" />
                <span>Stage 3: Mule Integration (TRL 5–6)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Fabricated physical test mule logging closed-course drive cycles with comparative baseline A/B telemetry under third-party observer witness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                <Car className="w-4 h-4" />
                <span>Stage 4: Homologated (TRL 7–9)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Formal Indian type-approval and safety testing (AIS-038, AIS-156, AIS-052, UN ECE R100) conducted at authorized Indian testing agencies (ARAI/ICAT).
              </p>
            </div>
          </div>
        </section>

        {/* Architecture & Physics Transparency Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <h3 className="font-mono font-bold uppercase text-cyan-700 dark:text-cyan-400">
              Voltage Architecture Clarification
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {VOLTAGE_ARCHITECTURE_EXPLAINER}
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <h3 className="font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
              Thermodynamics &amp; Kinetic Recovery Principle
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {ENERGY_PHYSICS_NOTE}
            </p>
          </div>
        </section>

        {/* NDA Diligence Link */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-4 text-white">
          <div className="space-y-1">
            <h3 className="font-display text-lg font-bold">
              Conducting Institutional Technical or Financial Diligence?
            </h3>
            <p className="text-xs text-slate-300 font-mono">
              Request access to test bench documentation, patent specification summaries, and financial models under NDA.
            </p>
          </div>
          <Link
            href="/invest/pitch-deck"
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors inline-flex items-center gap-2"
          >
            <span>Request NDA Data Room</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
