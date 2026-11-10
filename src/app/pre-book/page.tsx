import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Zap, CheckCircle2, Clock, AlertCircle, HelpCircle } from "lucide-react";
import { PreBookClient } from "@/components/PreBookClient";

export const metadata: Metadata = {
  title: "Vehicle Pre-Booking & Priority Waitlist Allocation",
  description:
    "Reserve your BRC STAR production priority queue. ₹25,000 fully refundable reservation deposit, indicative ex-showroom pricing subject to statutory homologation.",
  alternates: {
    canonical: "https://www.brcstar.in/pre-book",
  },
  openGraph: {
    title: "Pre-Book BRC STAR Electric Vehicles",
    description: "Reserve your production priority slot. 100% fully refundable ₹25,000 reservation deposit.",
    url: "https://www.brcstar.in/pre-book",
  },
};

function PreBookSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 space-y-6">
          <div className="h-48 rounded-2xl bg-slate-200/80 dark:bg-slate-900/60" />
          <div className="h-48 rounded-2xl bg-slate-200/80 dark:bg-slate-900/60" />
        </div>
        <div className="lg:col-span-6">
          <div className="h-96 rounded-2xl bg-slate-200/80 dark:bg-slate-900/60" />
        </div>
      </div>
    </div>
  );
}

export default function PreBookPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] text-slate-900 dark:text-white transition-colors duration-300 pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/vehicles" className="hover:text-cyan-600 dark:hover:text-cyan-400">Vehicles</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">Pre-Book Priority Queue</span>
        </div>

        {/* Visible Trust & Refund Terms Banner (Server Rendered) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 dark:text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>TRANSPARENT RESERVATION TERMS &amp; REFUND GUARANTEE</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              Indian Patent App No. 202511050655
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="space-y-1">
              <span className="font-mono text-slate-500 dark:text-slate-400 block uppercase text-[10px]">Deposit Amount</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm font-mono">₹25,000 Token</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Held in designated escrow accounts. Not a final purchase agreement.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-500 dark:text-slate-400 block uppercase text-[10px]">Refund Policy</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm font-mono">100% Unconditional Refund</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Full refund anytime prior to final VIN allocation. 7–10 day banking turnaround.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-500 dark:text-slate-400 block uppercase text-[10px]">Indicative Pricing</span>
              <span className="font-bold text-slate-900 dark:text-white text-sm font-mono">Subject to Homologation</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Base ₹16.5L (StarCraft GT) indicative ex-showroom, subject to final ARAI/ICAT certification.
              </p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-slate-500 dark:text-slate-400 block uppercase text-[10px]">Target Timeline</span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400 text-sm font-mono">2026–2027 Rollout</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Manufacturing queue prioritized by verified reservation timestamp.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Client Configurator & Escrow Checkout */}
      <Suspense fallback={<PreBookSkeleton />}>
        <PreBookClient />
      </Suspense>
    </div>
  );
}
