import React from "react";
import Link from "next/link";
import { Cpu, Activity, Gauge, Lock, ArrowRight, ChevronRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { RND_METRICS } from "@/lib/data";

export const metadata = {
  title: "R&D & Engineering Labs | BRC STAR Deep-Tech",
  description: "Explore BRC STAR's advanced electric powertrain R&D labs, dynamometer test-beds, high-speed thermal chambers, and TRL 3/4 test-bench validation data.",
  alternates: {
    canonical: "https://brcstar.in/innovation/rnd",
  },
  openGraph: {
    title: "R&D & Engineering Labs | BRC STAR",
    description: "Explore BRC STAR powertrain R&D labs and TRL 3/4 simulation validation.",
    url: "https://brcstar.in/innovation/rnd",
    type: "website",
  },
};

export default function RndPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/innovation" className="hover:text-cyan-400">Innovation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">R&amp;D Platform</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>DEEP-TECH AUTOMOTIVE R&amp;D FACILITY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Validating Self-Volt Physics: 2.45M+ Simulated Kilometers
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our Bengaluru R&amp;D facility combines multi-axis dynamometer benches, high-voltage battery immersion chambers, and edge hardware-in-the-loop (HIL) simulators to stress-test every component under extreme Indian climate conditions.
          </p>
        </div>
      </div>

      {/* R&D Benchmark Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-center">
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Simulated Distance</div>
          <div className="text-2xl font-bold text-cyan-400 mt-1">{RND_METRICS.totalSimulatedKm}</div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Dyno Test Time</div>
          <div className="text-2xl font-bold text-white mt-1">{RND_METRICS.dynamometerTestHours}</div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Efficiency Delta</div>
          <div className="text-2xl font-bold text-emerald-400 mt-1">+{RND_METRICS.energyEfficiencyGainPct}</div>
        </div>
        <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Readiness Level</div>
          <div className="text-2xl font-bold text-amber-400 mt-1">TRL 3/4 (Lab Rig)</div>
        </div>
      </div>

      {/* R&D Facilities & Test Rigs */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white font-mono">
          Proprietary Simulation &amp; Validation Benches
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white font-mono">
              1. Multi-Axis Dynamometer Rig
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reproduces real-world road loads, tire inertia, and gradient resistance while measuring PMG kinetic generation down to 10-milliwatt resolution.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white font-mono">
              2. Dual-Pack Thermal Shock Chamber
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Subjecting battery cells to thermal swings from -20°C to +65°C under continuous 3C high-amp discharge and kinetic recharge cycles.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <h3 className="text-base font-bold text-white font-mono">
              3. CAN-Bus HIL Firmware Testbed
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Embedded Silicon-Carbide inverters and BDA algorithms execute over 100,000 automated fault injection simulations before track deployment.
            </p>
          </div>
        </div>
      </div>

      {/* Internal R&D Gateway Gated Inset */}
      <div className="p-8 rounded-2xl bg-[#050814] border border-cyan-500/30 text-center space-y-4">
        <h3 className="text-xl font-bold text-white font-mono">
          Internal Engineering Workspace (rnd.brcstar.in)
        </h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto">
          Authorized R&amp;D staff, university research partners, and test-bench engineers can access raw telemetry sensor dumps, CFD meshes, and firmware binaries via authenticated RBAC credentials.
        </p>
        <Link
          href="/operations"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
        >
          <Lock className="w-4 h-4" />
          <span>Access Internal Engineering Hub</span>
        </Link>
      </div>

      {/* Engineering Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center text-xs font-mono text-slate-400">
        <p>
          <span className="text-cyan-400 font-semibold">Testing Notice:</span> Dynamometer test hours and simulated kilometer endurance metrics represent laboratory simulation runs and hardware-in-the-loop test benches at TRL 3/4. Figures simulated/lab-validated; real-world results vary.
        </p>
      </div>
    </div>
  );
}
