import React from "react";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { STANDARD_CLAIM_DISCLAIMER, INVESTOR_RISK_DISCLAIMER } from "@/lib/claims";

interface ClaimDisclaimerProps {
  variant?: "default" | "compact" | "investor";
  showEvidenceLink?: boolean;
  className?: string;
}

export function ClaimDisclaimer({
  variant = "default",
  showEvidenceLink = true,
  className = "",
}: ClaimDisclaimerProps) {
  const text =
    variant === "investor"
      ? `${STANDARD_CLAIM_DISCLAIMER} ${INVESTOR_RISK_DISCLAIMER}`
      : STANDARD_CLAIM_DISCLAIMER;

  if (variant === "compact") {
    return (
      <p
        className={`text-[11px] font-mono text-slate-600 dark:text-slate-400 leading-relaxed ${className}`}
      >
        {text}{" "}
        {showEvidenceLink && (
          <Link
            href="/evidence"
            className="text-cyan-700 dark:text-cyan-400 underline hover:text-cyan-600 dark:hover:text-cyan-300 font-semibold"
          >
            View Evidence Ledger
          </Link>
        )}
      </p>
    );
  }

  return (
    <div
      className={`p-3.5 sm:p-4 rounded-xl bg-slate-100/90 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-600 dark:text-slate-400 transition-colors ${className}`}
    >
      <div className="flex items-start gap-2.5">
        <Info className="w-4 h-4 text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5" />
        <p className="leading-relaxed">{text}</p>
      </div>
      {showEvidenceLink && (
        <Link
          href="/evidence"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-cyan-700 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 whitespace-nowrap shrink-0"
        >
          <span>Evidence &amp; Status</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      )}
    </div>
  );
}

export default ClaimDisclaimer;
