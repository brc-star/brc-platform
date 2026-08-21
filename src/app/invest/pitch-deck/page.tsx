import React from "react";
import Link from "next/link";
import { FileText, Lock, ChevronRight } from "lucide-react";
import { InvestorDataRoomGate } from "@/components/InvestorDataRoomGate";

export const metadata = {
  title: "Investor Pitch Deck Request & Data Room | BRC STAR",
  description: "Secure NDA digital signature gateway for authorized institutional investors, venture funds, and family offices to access BRC STAR Series-A pitch deck and financial models.",
};

export default function PitchDeckRequestPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/invest" className="hover:text-cyan-400">Invest</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Pitch Deck Request</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>CONFIDENTIAL INVESTOR CLEARANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Institutional Investor Pitch Deck &amp; Data Room
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Please execute the digital Non-Disclosure Agreement below to instantly generate a secure session key and unlock audited financial models, TRL-6 track logs, and the 38-page Master Series-A deck.
          </p>
        </div>
      </div>

      {/* Interactive Gated Data Room Component */}
      <InvestorDataRoomGate />
    </div>
  );
}
