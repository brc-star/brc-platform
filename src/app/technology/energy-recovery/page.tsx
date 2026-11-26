import React from "react";
import Link from "next/link";
import { Layers, Zap, Gauge, ArrowRight, ChevronRight, Activity } from "lucide-react";
import { LiveTelemetryWidget } from "@/components/LiveTelemetryWidget";
import { ENERGY_PHYSICS_NOTE } from "@/lib/claims";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "Energy Recovery & Kinetic Harvesting | BRC STAR Technology",
  description:
    "Electromechanical kinetics, Permanent Magnet Generators (PMG), and deceleration kinetic energy recovery in BRC STAR R&D architectures.",
  alternates: {
    canonical: "https://www.brcstar.in/technology/energy-recovery",
  },
  openGraph: {
    title: "Energy Recovery & Kinetic Harvesting | BRC STAR",
    description: "Electromechanical kinetics and decelerative kinetic energy recovery architecture.",
    url: "https://www.brcstar.in/technology/energy-recovery",
    type: "website",
  },
};

export default function EnergyRecoveryPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/technology" className="hover:text-cyan-400">Technology</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Energy Recovery</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>DECELERATIVE KINETIC RECOVERY &amp; ACM DYNAMICS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Capturing Deceleration &amp; Downhill Momentum into an Isolated Buffer Pack
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {ENERGY_PHYSICS_NOTE}
          </p>
        </div>
      </div>

      {/* Live Telemetry Sensor Feed */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            Simulated Telemetry Instrumentation Stream
          </span>
          <EvidenceBadge status="simulated" />
        </div>
        <LiveTelemetryWidget />
      </div>

      {/* Three Kinetic Recovery Regimes */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
          Targeted Kinetic Recovery Regimes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Zap className="w-5 h-5" />
              </div>
              <EvidenceBadge status="target" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              1. Coasting &amp; Glide Recoup
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              During throttle-off glide transitions, the Alternator Control Module routes recovered electrical energy into isolated Pack B rather than interrupting primary Pack A conditioning. Mechanical recovery imposes drivetrain drag; net system range benefit depends on drive cycle and is under bench evaluation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-emerald-400">
                <Activity className="w-5 h-5" />
              </div>
              <EvidenceBadge status="target" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              2. Peak Deceleration Recoup
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              During braking events, controlled excitation directs transient deceleration peaks (up to +42 kW design target on heavy deceleration events) into the recovery buffer while targeting reduced friction brake pad wear.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-amber-400">
                <Gauge className="w-5 h-5" />
              </div>
              <EvidenceBadge status="simulated" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              3. Downhill Gravitational Recapture
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              On sustained downhill gradients and ghat descents, potential energy recovery absorbs kinetic momentum directly into Pack B without adding thermal charge stress to the primary pack (simulated behavior; track confirmation pending).
            </p>
          </div>
        </div>
      </div>

      {/* Next Actions CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
        <div>
          <h4 className="text-base font-bold text-white font-mono">
            Explore Next: Intellectual Property &amp; Filing Status
          </h4>
          <p className="text-xs text-slate-300">
            Review patent-pending application status, technical targets, and NDA diligence options.
          </p>
        </div>
        <Link
          href="/technology/patent-ip"
          className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2"
        >
          <span>Patent Application Summary</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <ClaimDisclaimer />
    </div>
  );
}
