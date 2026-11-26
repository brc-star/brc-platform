import React from "react";
import Link from "next/link";
import { Lock, ChevronRight } from "lucide-react";
import { InvestorDataRoomGate } from "@/components/InvestorDataRoomGate";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "Investor Pitch Deck Request & Data Room | BRC STAR",
  description:
    "Digital NDA gateway for accredited investors and strategic partners requesting BRC STAR's seed overview deck, financial model (unaudited), and patent summary.",
  alternates: {
    canonical: "https://www.brcstar.in/invest/pitch-deck",
  },
  openGraph: {
    title: "Investor Pitch Deck Request & Data Room | BRC STAR",
    description: "Confidential investor data room and pitch deck access request.",
    url: "https://www.brcstar.in/invest/pitch-deck",
    type: "website",
  },
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
            <span>CONFIDENTIAL INVESTOR NDA GATEWAY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Investor Pitch Deck &amp; Confidential Data Room
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Execute the digital Non-Disclosure Agreement below to unlock our Seed investor overview deck, unaudited financial model assumptions, TRL 3/4 bench simulation logs, and unpublished patent application summary.
          </p>
        </div>
      </div>

      {/* Interactive Gated Data Room Component */}
      <InvestorDataRoomGate />

      <ClaimDisclaimer variant="investor" />
    </div>
  );
}
