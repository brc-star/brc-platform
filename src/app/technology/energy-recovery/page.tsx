import React from "react";
import Link from "next/link";
import { Layers, Zap, Gauge, Cpu, ShieldCheck, ArrowRight, ChevronRight, Activity, BatteryCharging } from "lucide-react";
import { LiveTelemetryWidget } from "@/components/LiveTelemetryWidget";

export const metadata = {
  title: "Energy Recovery & Kinetic Harvesting | BRC STAR Technology",
  description: "Electromechanical kinetics, high-efficiency Permanent Magnet Generators (PMG), and simulated kinetic energy recovery in BRC STAR electric vehicles.",
  alternates: {
    canonical: "https://www.brcstar.in/technology/energy-recovery",
  },
  openGraph: {
    title: "Energy Recovery & Kinetic Harvesting | BRC STAR",
    description: "Electromechanical kinetics and kinetic energy recovery architecture.",
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
            <span>KINETIC HARVESTING &amp; PMG ALTERNATOR DYNAMICS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Converting Deceleration &amp; Driveline Momentum into Storable Current
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every rotating wheel, axle, and motor armature contains kinetic rotational inertia. BRC STAR extracts and rectifies this mechanical energy using synchronous Permanent Magnet Generators and intelligent electromagnetic retarders.
          </p>
        </div>
      </div>

      {/* Live Telemetry Sensor Feed */}
      <div className="space-y-3">
        <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
          Real-Time Sensor Telemetry Validation (Test Rig)
        </div>
        <LiveTelemetryWidget />
      </div>

      {/* Three Kinetic Harvesting Regimes */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
          Three Distinct Operational Harvesting Regimes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              1. Steady Glide Harvesting
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              When cruising on level expressways at 80-120 km/h, the PMG alternator taps residual rotational flux without perceptible drag, feeding 15-28 kW continuous charge into Battery Pack B.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-emerald-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              2. Heavy Deceleration Recoup
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Upon brake pedal depression or throttle lift-off, the ACM engages full magnetic field excitation, converting vehicle inertia into up to 65+ kW regeneration while saving brake disc wear.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-amber-400">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              3. Downhill Gravitational Recapture
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              On mountain descents and ghat roads, gravitational potential energy is converted continuously, allowing a vehicle to descend with a higher state of charge (SOC) at the base than at the crest.
            </p>
          </div>
        </div>
      </div>

      {/* Next Actions CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
        <div>
          <h4 className="text-base font-bold text-white font-mono">
            Explore Next: Patent Claims &amp; IP Fortress
          </h4>
          <p className="text-xs text-slate-300">
            View filed patent numbers, claim structures, and IPO examination milestones.
          </p>
        </div>
        <Link
          href="/technology/patent-ip"
          className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2"
        >
          <span>Patent Portfolio</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      {/* Regulatory & Real-World Results Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center text-xs font-mono text-slate-400">
        <p>
          <span className="text-cyan-400 font-semibold">Engineering Disclaimer:</span> PMG output and glide recoup figures represent laboratory and dynamometer test-bench simulations at TRL 3/4. Figures simulated/lab-validated; real-world results vary with driving style, road gradient, ambient climate, and vehicle configuration.
        </p>
      </div>
    </div>
  );
}
