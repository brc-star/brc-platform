"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  FileCheck,
  Layers,
  Lock,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Zap,
  Sparkles,
  Bot,
  ExternalLink,
  Check,
} from "lucide-react";
import { PATENTS_DATA } from "@/lib/data";
import {
  PATENT_METADATA,
  PATENT_CLAIMS_DATABASE,
  AIS_STANDARDS,
} from "@/lib/patent-knowledge";
import { cn } from "@/lib/utils";

export const PatentShowcase = () => {
  const [activeTab, setActiveTab] = useState<"filings" | "claims" | "standards">("claims");
  const [selectedPatentIndex, setSelectedPatentIndex] = useState<number>(0);
  const [selectedClaimNumber, setSelectedClaimNumber] = useState<number>(1);

  const selectedPatent = PATENTS_DATA[selectedPatentIndex];
  const selectedClaim =
    PATENT_CLAIMS_DATABASE.find((c) => c.claimNumber === selectedClaimNumber) ||
    PATENT_CLAIMS_DATABASE[0];

  return (
    <div className="w-full bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-xl dark:bg-[#050814]/90 dark:border-cyan-500/30 dark:shadow-2xl rounded-2xl p-5 sm:p-7 lg:p-10 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-600 dark:text-cyan-400 mb-1.5 font-bold">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Proprietary Intellectual Property &amp; Patent Architecture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Self-Volt IP Portfolio
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Indian Patent Application No. <strong className="font-mono text-cyan-600 dark:text-cyan-400">{PATENT_METADATA.applicationNumber}</strong> (Filed/Published with IPO) • [PCT details pending]. Figures simulated/lab-validated.
          </p>
        </div>

        {/* View Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-300 dark:border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab("claims")}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-colors font-semibold",
              activeTab === "claims"
                ? "bg-white text-slate-900 shadow-sm dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            Patent Claims (22)
          </button>
          <button
            onClick={() => setActiveTab("filings")}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-colors font-semibold",
              activeTab === "filings"
                ? "bg-white text-slate-900 shadow-sm dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            All Filings
          </button>
          <button
            onClick={() => setActiveTab("standards")}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-colors font-semibold",
              activeTab === "standards"
                ? "bg-white text-slate-900 shadow-sm dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            AIS-156 Safety
          </button>
        </div>
      </div>

      {/* Tab 1: Detailed Claims Explorer (Patent 202511050655) */}
      {activeTab === "claims" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Claims Sidebar */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold mb-2">
              Select Specific Claim to Inspect
            </div>
            {PATENT_CLAIMS_DATABASE.map((claim) => (
              <button
                key={claim.claimNumber}
                onClick={() => setSelectedClaimNumber(claim.claimNumber)}
                className={cn(
                  "w-full text-left p-3.5 rounded-xl border transition-all space-y-1 block",
                  selectedClaimNumber === claim.claimNumber
                    ? "bg-cyan-50 border-cyan-500 shadow-md dark:bg-cyan-950/50 dark:border-cyan-400 dark:shadow-cyan-950/60"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                )}
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400">
                    Claim #{claim.claimNumber} ({claim.type})
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                    {claim.parentClaim ? `Subordinate to Claim ${claim.parentClaim}` : "Independent Root"}
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm line-clamp-1">
                  {claim.title}
                </h5>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate">
                  {claim.technicalMetric}
                </p>
              </button>
            ))}
          </div>

          {/* Claim Deep-Dive Card */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 relative overflow-hidden space-y-4 transition-colors">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-semibold">
                  Indian Patent App No. 202511050655
                </span>
                <span className="text-base sm:text-lg font-extrabold text-cyan-700 dark:text-cyan-400 font-mono">
                  Claim #{selectedClaim.claimNumber}: {selectedClaim.title}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 dark:bg-cyan-950 dark:border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-bold">
                {selectedClaim.type}
              </span>
            </div>

            {/* Legal Specification */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-bold">
                Legal Claim Language (Indian Patent App No. 202511050655)
              </span>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono bg-white dark:bg-slate-950/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80">
                &ldquo;{selectedClaim.legalText}&rdquo;
              </p>
            </div>

            {/* Novelty Assertion */}
            <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-500/20 space-y-1">
              <div className="text-xs font-mono uppercase text-cyan-800 dark:text-cyan-400 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Novelty &amp; Inventive Step Differentiation</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedClaim.noveltyAssertion}
              </p>
            </div>

            {/* Prior Art Distinction */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#030611] border border-slate-200 dark:border-cyan-500/20 space-y-1">
              <div className="text-xs font-mono uppercase text-slate-700 dark:text-cyan-400 flex items-center gap-1.5 font-bold">
                <Lock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Architecture Distinction (Conventional Baseline Comparison)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedClaim.priorArtDistinction}
              </p>
            </div>

            {/* Verified Technical Metric */}
            <div className="flex items-center justify-between text-xs font-mono pt-1 text-slate-500 dark:text-slate-400">
              <span>Test Rig Spec (Simulated / Bench):</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">
                {selectedClaim.technicalMetric}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: All Patent Filings Registry */}
      {activeTab === "filings" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-3">
            {PATENTS_DATA.map((pat, idx) => (
              <button
                key={pat.refNumber}
                onClick={() => setSelectedPatentIndex(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all space-y-2 block",
                  selectedPatentIndex === idx
                    ? "bg-cyan-50 border-cyan-500 shadow-md dark:bg-cyan-950/50 dark:border-cyan-400 dark:shadow-cyan-950/60"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                )}
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">{pat.refNumber}</span>
                  <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-300 dark:border-slate-800">
                    {pat.claimsCount} Claims
                  </span>
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm line-clamp-2">
                  {pat.title}
                </h5>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Filing: {pat.filingDate}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{pat.status.split(" ")[0]}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 relative overflow-hidden space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-semibold">
                  Official Patent Reference Number
                </span>
                <span className="text-base font-extrabold text-cyan-700 dark:text-cyan-400 font-mono">
                  {selectedPatent.refNumber}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 dark:bg-cyan-950 dark:border-cyan-500/30 text-[11px] font-mono text-cyan-300 font-bold">
                {selectedPatent.category}
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {selectedPatent.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedPatent.abstract}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#030611] border border-slate-200 dark:border-cyan-500/20 space-y-2">
              <div className="text-xs font-mono uppercase text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5 font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>Commercial Defensibility Moat</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedPatent.moatFactor}
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
              <span>Status: <strong className="text-emerald-600 dark:text-emerald-400">{selectedPatent.status}</strong></span>
              <span>IPO / PCT Jurisdiction</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Automotive Regulatory & AIS Homologation Matrix */}
      {activeTab === "standards" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {AIS_STANDARDS.map((std) => (
            <div
              key={std.code}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-300 dark:bg-cyan-950 dark:text-cyan-400 dark:border-cyan-500/30 text-xs font-mono font-bold">
                  {std.code}
                </span>
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                  VALIDATED
                </span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {std.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {std.testParameters}
              </p>
              <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                Status: {std.complianceStatus}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PatentShowcase;
