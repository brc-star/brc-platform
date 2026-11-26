"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ALL_CLAIMS_LIST, EvidenceStatus, Claim } from "@/lib/claims";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";

const STATUS_FILTERS: { id: "ALL" | EvidenceStatus; label: string }[] = [
  { id: "ALL", label: "All Claims" },
  { id: "verified", label: "Verified" },
  { id: "bench", label: "Bench-tested" },
  { id: "simulated", label: "Simulated" },
  { id: "target", label: "Target" },
  { id: "planned", label: "Planned" },
];

export function EvidenceLedgerClient() {
  const [selectedStatus, setSelectedStatus] = useState<"ALL" | EvidenceStatus>("ALL");

  const filteredClaims: Claim[] =
    selectedStatus === "ALL"
      ? ALL_CLAIMS_LIST
      : ALL_CLAIMS_LIST.filter((c) => c.status === selectedStatus);

  const countByStatus = (status: EvidenceStatus) =>
    ALL_CLAIMS_LIST.filter((c) => c.status === status).length;

  return (
    <div className="space-y-8">
      {/* Status Summary KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 font-mono text-center">
        {(["verified", "bench", "simulated", "target", "planned"] as EvidenceStatus[]).map(
          (status) => (
            <button
              key={status}
              type="button"
              onClick={() =>
                setSelectedStatus((prev) => (prev === status ? "ALL" : status))
              }
              className={`p-3.5 rounded-2xl border transition-all flex flex-col items-center gap-1.5 ${
                selectedStatus === status
                  ? "bg-cyan-50 border-cyan-500 ring-2 ring-cyan-500/20 dark:bg-cyan-950/60 dark:border-cyan-400"
                  : "bg-white dark:bg-[#0A0E1A] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <EvidenceBadge status={status} size="sm" />
              <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                {countByStatus(status)}
              </div>
              <span className="text-[10px] text-slate-500 uppercase">Items</span>
            </button>
          )
        )}
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
          <Filter className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Filter Ledger ({filteredClaims.length} / {ALL_CLAIMS_LIST.length})</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {STATUS_FILTERS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedStatus(tab.id)}
              className={`px-3 py-1 rounded-lg transition-colors font-semibold ${
                selectedStatus === tab.id
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Auto-generated Responsive Claims Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0A0E1A] shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/70 text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400">
              <th className="py-3.5 px-4">Claim / Parameter</th>
              <th className="py-3.5 px-4">Published Value</th>
              <th className="py-3.5 px-4">Evidence Status</th>
              <th className="py-3.5 px-4">Testing Methodology / Basis</th>
              <th className="py-3.5 px-4">Source / Date</th>
              <th className="py-3.5 px-4 text-right">Reference / NDA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800/80 text-xs">
            {filteredClaims.map((claim) => (
              <tr
                key={claim.id}
                className="hover:bg-slate-50/70 dark:hover:bg-slate-900/40 transition-colors align-top"
              >
                <td className="py-4 px-4">
                  <div className="text-[10px] font-mono uppercase text-cyan-700 dark:text-cyan-400 font-semibold">
                    {claim.category}
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mt-0.5">
                    {claim.label}
                  </div>
                  {claim.note && (
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 max-w-xs leading-relaxed">
                      {claim.note}
                    </p>
                  )}
                </td>

                <td className="py-4 px-4 font-mono font-bold text-slate-900 dark:text-cyan-300 whitespace-nowrap">
                  {claim.value}
                </td>

                <td className="py-4 px-4">
                  <EvidenceBadge status={claim.status} size="sm" />
                </td>

                <td className="py-4 px-4 text-slate-700 dark:text-slate-300 max-w-sm leading-relaxed">
                  {claim.methodology}
                  {claim.nextMilestone && (
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mt-1.5">
                      Next Gate: <strong className="text-slate-700 dark:text-slate-300">{claim.nextMilestone}</strong>
                    </div>
                  )}
                </td>

                <td className="py-4 px-4 font-mono text-[11px] text-slate-600 dark:text-slate-400">
                  <div>{claim.source || "Internal Engineering"}</div>
                  {claim.date && (
                    <div className="text-[10px] text-slate-500 mt-0.5">{claim.date}</div>
                  )}
                </td>

                <td className="py-4 px-4 text-right whitespace-nowrap">
                  {claim.docLink ? (
                    <Link
                      href={claim.docLink}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-cyan-50 dark:bg-slate-900 dark:hover:bg-cyan-950/60 text-slate-700 hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-300 border border-slate-200 dark:border-slate-700 text-[11px] font-mono font-semibold transition-colors"
                    >
                      <span>{claim.docLink === "/invest/pitch-deck" ? "NDA Data Room" : "Inspect"}</span>
                      {claim.docLink === "/invest/pitch-deck" ? (
                        <ExternalLink className="w-3 h-3" />
                      ) : (
                        <ArrowRight className="w-3 h-3" />
                      )}
                    </Link>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-400">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ClaimDisclaimer showEvidenceLink={false} />
    </div>
  );
}

export default EvidenceLedgerClient;
