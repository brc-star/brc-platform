"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  FileText,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import { PATENTS_DATA } from "@/lib/data";
import {
  PATENT_METADATA,
  TECHNICAL_DESIGN_GOALS,
  TARGET_REGULATORY_FRAMEWORKS,
} from "@/lib/patent-knowledge";
import { PATENT_STATEMENT, PATENT_STATUS_BOX } from "@/lib/claims";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";
import { cn } from "@/lib/utils";

export const PatentShowcase = () => {
  const [activeTab, setActiveTab] = useState<"goals" | "filings" | "standards">("goals");
  const [selectedPatentIndex, setSelectedPatentIndex] = useState<number>(0);
  const [selectedGoalId, setSelectedGoalId] = useState<number>(1);

  const selectedPatent = PATENTS_DATA[selectedPatentIndex] || PATENTS_DATA[0];
  const selectedGoal =
    TECHNICAL_DESIGN_GOALS.find((g) => g.id === selectedGoalId) ||
    TECHNICAL_DESIGN_GOALS[0];

  return (
    <div className="w-full bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-xl dark:bg-[#050814]/90 dark:border-cyan-500/30 dark:shadow-2xl rounded-2xl p-5 sm:p-7 lg:p-10 relative overflow-hidden transition-colors duration-300 space-y-6">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-700 dark:text-cyan-400 mb-1.5 font-bold">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Patent-Pending Engineering Overview</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Targets &amp; Application Summary
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            {PATENT_STATEMENT}
          </p>
        </div>

        {/* View Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-300 dark:border-slate-800 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveTab("goals")}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-colors font-semibold",
              activeTab === "goals"
                ? "bg-white text-slate-900 shadow-sm dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            Technical Targets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("filings")}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-colors font-semibold",
              activeTab === "filings"
                ? "bg-white text-slate-900 shadow-sm dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            Application Status
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("standards")}
            className={cn(
              "px-3 py-1.5 rounded-lg transition-colors font-semibold",
              activeTab === "standards"
                ? "bg-white text-slate-900 shadow-sm dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            Target Standards (Planned)
          </button>
        </div>
      </div>

      {/* Tab 1: High-Level Technical Targets & Design Goals (Separate from unpublished claims) */}
      {activeTab === "goals" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Selector Sidebar */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider font-semibold mb-2">
              Select Subsystem Design Goal
            </div>
            {TECHNICAL_DESIGN_GOALS.map((goal) => (
              <button
                key={goal.id}
                type="button"
                onClick={() => setSelectedGoalId(goal.id)}
                className={cn(
                  "w-full text-left p-3.5 rounded-xl border transition-all space-y-1.5 block",
                  selectedGoalId === goal.id
                    ? "bg-cyan-50 border-cyan-500 shadow-md dark:bg-cyan-950/50 dark:border-cyan-400 dark:shadow-cyan-950/60"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                )}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="font-bold text-cyan-700 dark:text-cyan-400">
                    Subsystem #{goal.id}
                  </span>
                  <EvidenceBadge status={goal.evidenceStatus} />
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm line-clamp-1">
                  {goal.title}
                </h5>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono truncate">
                  {goal.designGoalMetric}
                </p>
              </button>
            ))}
          </div>

          {/* Detail Card */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 relative overflow-hidden space-y-4 transition-colors">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-semibold">
                  Technical Architecture Design Goal #{selectedGoal.id}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-cyan-700 dark:text-cyan-400 font-mono">
                  {selectedGoal.title}
                </span>
              </div>
              <EvidenceBadge status={selectedGoal.evidenceStatus} size="sm" />
            </div>

            {/* High-Level Engineering Summary */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-bold">
                High-Level Architectural Summary (Public Disclosure)
              </span>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-950/80 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80">
                {selectedGoal.engineeringSummary}
              </p>
            </div>

            {/* Neutral Comparison Against Single-Bus Topologies */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#030611] border border-slate-200 dark:border-cyan-500/20 space-y-1.5">
              <div className="text-xs font-mono uppercase text-slate-800 dark:text-cyan-400 flex items-center gap-1.5 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>How This Differs From Conventional Single-Bus EV Architectures</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedGoal.singleBusComparison}
              </p>
            </div>

            {/* Target / Bench Spec */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono pt-1 text-slate-600 dark:text-slate-400">
              <span>Current Stage Parameter:</span>
              <span className="font-bold text-slate-900 dark:text-cyan-300">
                {selectedGoal.designGoalMetric}
              </span>
            </div>

            {/* Unpublished Claim Notice + NDA CTA */}
            <div className="p-3.5 rounded-xl bg-amber-50/80 dark:bg-amber-950/25 border border-amber-200 dark:border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2 text-[11px] text-amber-950 dark:text-amber-200">
                <Lock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Application No. 202511050655 is <strong>not yet published</strong>. Formal legal claim text (24 claims as filed; subject to examination) is disclosed strictly under bilateral NDA.
                </span>
              </div>
              <Link
                href="/invest/pitch-deck"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-cyan-400 text-white dark:text-slate-950 text-[11px] font-mono font-bold whitespace-nowrap shrink-0"
              >
                <span>NDA Data Room</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Application Status & Confidentiality Summary */}
      {activeTab === "filings" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-3">
            {PATENTS_DATA.map((pat, idx) => (
              <button
                key={pat.refNumber}
                type="button"
                onClick={() => setSelectedPatentIndex(idx)}
                className={cn(
                  "w-full text-left p-4 rounded-xl border transition-all space-y-2 block",
                  selectedPatentIndex === idx
                    ? "bg-cyan-50 border-cyan-500 shadow-md dark:bg-cyan-950/50 dark:border-cyan-400 dark:shadow-cyan-950/60"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                )}
              >
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-cyan-700 dark:text-cyan-400 font-bold">
                    {pat.refNumber}
                  </span>
                  <EvidenceBadge status={idx === 0 ? "verified" : "planned"} />
                </div>
                <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm line-clamp-2">
                  {pat.title}
                </h5>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>{pat.filingDate}</span>
                </div>
              </button>
            ))}

            {/* Patent Status Summary Card */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2 font-mono text-[11px]">
              <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>IPO Application Status Record</span>
              </div>
              <div className="grid grid-cols-1 gap-1.5 text-slate-600 dark:text-slate-400">
                <div>Application No.: <strong className="text-slate-900 dark:text-white">{PATENT_STATUS_BOX.applicationNumber}</strong></div>
                <div>Filing Date: <strong className="text-slate-900 dark:text-white">{PATENT_STATUS_BOX.filingDate}</strong></div>
                <div>Publication: <strong className="text-amber-700 dark:text-amber-300">{PATENT_STATUS_BOX.publicationStatus}</strong></div>
                <div>Examination: <strong className="text-slate-900 dark:text-white">{PATENT_STATUS_BOX.examinationStatus}</strong></div>
                <div>Grant Status: <strong className="text-amber-700 dark:text-amber-300">{PATENT_STATUS_BOX.grantStatus}</strong></div>
                <div>PCT Status: <strong className="text-slate-700 dark:text-slate-300">{PATENT_STATUS_BOX.pctStatus}</strong></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 relative overflow-hidden space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400 block font-semibold">
                  Reference Identifier
                </span>
                <span className="text-base font-extrabold text-cyan-700 dark:text-cyan-400 font-mono">
                  {selectedPatent.refNumber}
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 border border-cyan-300 dark:bg-cyan-950 dark:border-cyan-500/30 text-[11px] font-mono dark:text-cyan-300 font-bold">
                {selectedPatent.category}
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                {selectedPatent.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {selectedPatent.abstract}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#030611] border border-slate-200 dark:border-cyan-500/20 space-y-2">
              <div className="text-xs font-mono uppercase text-cyan-700 dark:text-cyan-400 flex items-center gap-1.5 font-bold">
                <Lock className="w-3.5 h-3.5" />
                <span>Engineering Objective (Subject to Examination &amp; Validation)</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedPatent.designObjective}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
              <span>Status: <strong className="text-slate-900 dark:text-white">{selectedPatent.status}</strong></span>
              <span>{PATENT_METADATA.jurisdiction}</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Target Regulatory & Safety Frameworks (Planned — Not Yet Obtained) */}
      {activeTab === "standards" && (
        <div className="space-y-4">
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <span>
              Notice: BRC STAR systems are at TRL 3/4 (laboratory bench &amp; simulation stage). The regulatory standards below represent <strong>future certification design targets</strong>; formal ARAI/ICAT testing and approval have not yet been initiated or obtained.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TARGET_REGULATORY_FRAMEWORKS.map((std) => (
              <div
                key={std.code}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:text-cyan-300 dark:border-slate-700 text-xs font-mono font-bold">
                    {std.code}
                  </span>
                  <EvidenceBadge status="planned" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                  {std.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {std.scopeSummary}
                </p>
                <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                  {std.targetStatus}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Standard Compliance Footnote */}
      <ClaimDisclaimer variant="default" />
    </div>
  );
};

export default PatentShowcase;
