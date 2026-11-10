import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, FileCheck, CheckCircle2, ChevronRight, ArrowRight, Shield } from "lucide-react";
import { PatentShowcase } from "@/components/PatentShowcase";
import { PATENTS_DATA } from "@/lib/data";

export const metadata = {
  title: "Patent & Intellectual Property Portfolio",
  description:
    "Indian Patent Application No. 202511050655, filed with the Indian Patent Office (IPO). Dual-pack kinetic energy recovery architecture and adaptive alternator control.",
  alternates: {
    canonical: "https://www.brcstar.in/technology/patent-ip",
  },
  openGraph: {
    title: "Patent & Intellectual Property Portfolio | BRC STAR",
    description: "Indian Patent Application No. 202511050655, filed with Indian Patent Office (IPO).",
    url: "https://www.brcstar.in/technology/patent-ip",
  },
};

export default function PatentIpPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
            <span>INDIAN PATENT APPLICATION NO. 202511050655 • [PCT DETAILS PENDING]</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proprietary IP &amp; Patent Architecture
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            BRC STAR has filed Indian Patent Application No. 202511050655 covering auxiliary electromechanical kinetic harvesting, dual-pack closed-loop battery switching, and adaptive alternator control modules. Figures simulated/lab-validated; real-world results vary.
          </p>
        </div>
      </div>

      {/* Interactive Patent Claims Showcase */}
      <PatentShowcase />

      {/* IP Fortress Strategy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-3 transition-colors">
          <div className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">Pillar 1</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Patent Claims Coverage</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            22 independent and dependent claims filed with the Indian Patent Office protecting dual-pack sequential energy routing, high-frequency ACM rectification, and synchronous PMG alternator mechanical couplings.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-3 transition-colors">
          <div className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">Pillar 2</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">International PCT Framework</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            International patent application documentation structured under the Patent Cooperation Treaty (PCT) framework [PCT details pending]. Target national phase filings subject to homologation schedule.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-3 transition-colors">
          <div className="text-xs font-mono uppercase text-cyan-600 dark:text-cyan-400 font-bold">Pillar 3</div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Proprietary Control Firmware</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Embedded state-of-health estimation algorithms and sub-millisecond cell balancing logic are maintained as proprietary trade secrets and executed locally on microcontroller hardware.
          </p>
        </div>
      </div>

      {/* Investor NDA Gateway Inset */}
      <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 via-cyan-50/40 to-slate-100 border border-slate-200/80 shadow-xl dark:bg-[#050814] dark:border-cyan-500/30 text-center space-y-4 transition-colors">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">
          Request Full Patent Legal Dossier &amp; Filing Copies
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          Authorized institutional investors and strategic OEM partners can access complete patent specifications, prior-art search clearance, and claims matrices through the authenticated Data Room.
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
