import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, ChevronRight, FileText } from "lucide-react";
import { PatentShowcase } from "@/components/PatentShowcase";
import { PATENT_STATEMENT, PATENT_STATUS_BOX } from "@/lib/claims";
import { EvidenceBadge } from "@/components/EvidenceBadge";

export const metadata = {
  title: "Intellectual Property — Patent Application Filed | BRC STAR",
  description: PATENT_STATEMENT,
  alternates: {
    canonical: "https://www.brcstar.in/technology/patent-ip",
  },
  openGraph: {
    title: "Intellectual Property — Patent Application Filed | BRC STAR",
    description: PATENT_STATEMENT,
    url: "https://www.brcstar.in/technology/patent-ip",
  },
};

export default function PatentIpPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/technology" className="hover:text-cyan-600 dark:hover:text-cyan-400">Technology</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">Patent &amp; IP</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/90 text-cyan-900 border border-cyan-300/80 dark:bg-cyan-950/80 dark:border-cyan-500/30 text-xs font-mono dark:text-cyan-300 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>PATENT-PENDING TECHNOLOGY • APPLICATION NO. 202511050655</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Intellectual Property — Patent Application Filed
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {PATENT_STATEMENT} The application covers BRC STAR&apos;s dual-pack energy-management concept, alternating recovery bus topology, and adaptive alternator control framework. All metrics remain at TRL 3/4 simulation or lab bench validation stage.
          </p>
        </div>
      </div>

      {/* Explicit Patent Status Summary Box */}
      <section aria-label="Patent Application Status" className="p-6 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
            <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Official Filing Status Summary</span>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-200/80 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
            Patent-Pending • Date Confirmation Under NDA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase block">Application Number</span>
            <span className="font-bold text-slate-900 dark:text-cyan-300 mt-0.5 block">
              {PATENT_STATUS_BOX.applicationNumber}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase block">Filing Date</span>
            <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
              {PATENT_STATUS_BOX.filingDate}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase block">Disclosure Status</span>
            <span className="font-bold text-amber-700 dark:text-amber-300 mt-0.5 block">
              {PATENT_STATUS_BOX.disclosureStatus}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase block">Examination Status</span>
            <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">
              {PATENT_STATUS_BOX.examinationStatus}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase block">Grant Status</span>
            <span className="font-bold text-amber-700 dark:text-amber-300 mt-0.5 block">
              {PATENT_STATUS_BOX.grantStatus}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
            <span className="text-[10px] text-slate-500 uppercase block">Jurisdictional Scope</span>
            <span className="font-bold text-slate-700 dark:text-slate-300 mt-0.5 block">
              {PATENT_STATUS_BOX.jurisdictionScope}
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Technical Targets & Application Showcase */}
      <PatentShowcase />

      {/* Neutral Engineering & Confidentiality Strategy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-3 transition-colors">
          <div className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">Pillar 1</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Patent Application Scope</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {PATENT_STATUS_BOX.claimCountSummary}. Focuses on dual-pack sequential routing, adaptive Alternator Control Module (ACM) rectification, and solid-state switching control.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-3 transition-colors">
          <div className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">Pillar 2</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Pre-Disclosure Confidentiality</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Because Application No. 202511050655 is currently in confidential pre-disclosure status at the Indian Patent Office, verbatim specification and full claim text are not distributed publicly and are made available exclusively under mutual NDA.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-3 transition-colors">
          <div className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">Pillar 3</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Confidential Firmware Know-How</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Firmware and state-of-health estimator algorithms are kept as confidential know-how executed on embedded vehicle control hardware.
          </p>
        </div>
      </div>

      {/* Investor NDA Gateway Inset */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-cyan-50/40 to-slate-100 border border-slate-200/80 shadow-xl dark:bg-[#050814] dark:border-cyan-500/30 text-center space-y-4 transition-colors">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">
          Request Patent Specification &amp; Claim Summary Under NDA
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Patent specification and claim summary available under NDA for qualified institutional investors and strategic partners through the authenticated Data Room.
        </p>
        <div>
          <Link
            href="/invest/pitch-deck"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
          >
            <Lock className="w-4 h-4" />
            <span>Access Authenticated IP Room</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
