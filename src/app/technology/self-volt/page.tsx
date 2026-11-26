import React from "react";
import Link from "next/link";
import {
  Zap,
  Cpu,
  Activity,
  BatteryCharging,
  ArrowRight,
  ChevronRight,
  Gauge,
  Info,
} from "lucide-react";
import { SelfVoltVisualizer } from "@/components/SelfVoltVisualizer";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";
import {
  PATENT_STATEMENT_SHORT,
  SYSTEM_VOLTAGES,
  VOLTAGE_ARCHITECTURE_EXPLAINER,
  ENERGY_PHYSICS_NOTE,
  CLAIMS_REGISTRY,
} from "@/lib/claims";

export const metadata = {
  title: "Self Volt Architecture | Dual-Pack Kinetic Recovery",
  description:
    "Engineering architecture of the BRC STAR Self Volt powertrain: Pack A/B solid-state switching, Alternator Control Module (ACM), and kinetic energy recovery.",
  alternates: {
    canonical: "https://www.brcstar.in/technology/self-volt",
  },
  openGraph: {
    title: "Self Volt Architecture | BRC STAR",
    description:
      "Dual-Pack kinetic energy recovery and dynamic switching architecture.",
    url: "https://www.brcstar.in/technology/self-volt",
  },
};

export default function SelfVoltArchitecturePage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/technology" className="hover:text-cyan-400">
            Technology
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Self Volt Architecture</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PATENT_STATEMENT_SHORT}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Self Volt: Dual-Pack Kinetic Energy Recovery Architecture
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conventional electric vehicles route traction discharge and regeneration onto a single battery pack. BRC STAR evaluates pairing an auxiliary Permanent Magnet Generator (PMG) and Alternator Control Module (ACM) with an isolated dual-pack bus, directing deceleration and glide kinetic recovery into secondary reserve cells.
          </p>
        </div>
      </div>

      {/* Voltage Architecture & Physics Clarity Disclosures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5 text-xs font-mono">
          <div className="flex items-center justify-between text-cyan-400 font-bold">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              <span>Voltage Architecture Clarification</span>
            </span>
            <EvidenceBadge status="target" />
          </div>
          <p className="text-slate-300 font-sans leading-relaxed">
            {VOLTAGE_ARCHITECTURE_EXPLAINER}
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1.5 text-xs font-mono">
          <div className="flex items-center justify-between text-amber-400 font-bold">
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Energy Recovery Physics Note</span>
            </span>
            <EvidenceBadge status="bench" />
          </div>
          <p className="text-slate-300 font-sans leading-relaxed">
            {ENERGY_PHYSICS_NOTE}
          </p>
        </div>
      </div>

      {/* Interactive Simulator Component */}
      <SelfVoltVisualizer />

      {/* Engineering Breakdown: 4 Core Modules */}
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
          Core Electromechanical Subsystems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subsystem 1: Dual Pack Topology */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4" />
                <span>MODULE 01</span>
              </span>
              <EvidenceBadge status={CLAIMS_REGISTRY.dual_bus_architecture.status} />
            </div>
            <h3 className="text-lg font-bold text-white">
              Dual-Pack (A/B) Matrix Isolation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dividing storage capacity into two isolated {SYSTEM_VOLTAGES.packNominal} packs ({SYSTEM_VOLTAGES.systemArchitecture} system architecture) allows Pack A to supply traction discharge while Pack B receives decelerative/glide kinetic recovery, designed to reduce thermal stress compared with simultaneous bi-directional cycling on a single pack.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• Solid-state bus switching ({CLAIMS_REGISTRY.bus_switching_latency.metric} simulated)</div>
              <div>• Dielectric liquid thermal isolation concept (Simulated)</div>
            </div>
          </div>

          {/* Subsystem 2: ACM */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>MODULE 02</span>
              </span>
              <EvidenceBadge status={CLAIMS_REGISTRY.acm_bench_efficiency.status} />
            </div>
            <h3 className="text-lg font-bold text-white">
              Alternator Control Module (ACM)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Silicon-Carbide (SiC) active rectifier and boost stage targeting up to {CLAIMS_REGISTRY.acm_bench_efficiency.metric} peak lab-rig conversion efficiency (Evidence available under NDA), regulating variable AC generator input into a controlled {SYSTEM_VOLTAGES.acmHarvestBus} DC bus matching Pack B.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• {SYSTEM_VOLTAGES.sicSwitchRating}-rated Silicon-Carbide MOSFET stage</div>
              <div>• Adaptive impedance matching algorithms (Confidential know-how)</div>
            </div>
            <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-800/80 leading-relaxed">
              {VOLTAGE_ARCHITECTURE_EXPLAINER}
            </p>
          </div>

          {/* Subsystem 3: BDA */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                <span>MODULE 03</span>
              </span>
              <EvidenceBadge status={CLAIMS_REGISTRY.accel_starcraft_gt.status} />
            </div>
            <h3 className="text-lg font-bold text-white">
              Bidirectional Drive Assist (BDA)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Designed to coordinate torque handoff and parallel discharge. Under peak acceleration demand, BDA commands parallel draw from Pack A and Pack B, targeting 0–100 km/h in {CLAIMS_REGISTRY.accel_starcraft_gt.metric} on the StarCraft GT concept (simulation target; not yet track-tested).
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• Parallel torque discharge coordination target</div>
              <div>• Electronic bus transition control (Simulation)</div>
            </div>
          </div>

          {/* Subsystem 4: PMG Linkage */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                <span>MODULE 04</span>
              </span>
              <EvidenceBadge status="target" />
            </div>
            <h3 className="text-lg font-bold text-white">
              Permanent Magnet Kinetic Harvester
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Neodymium magnetic rotor coupled to driveline inertia. Proprietary stator/tooth geometry is designed to reduce drag in glide mode (target). Net range benefit depends on drive cycle and is being quantified on the test bench.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• Target parasitic drag minimization during free-glide</div>
              <div>• Multi-stage deceleration &amp; downhill kinetic recoup</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Architecture Design Targets Table */}
      <ResponsiveTable caption="Architectural Comparison (Design Targets — Subject to Prototype Validation)">
        <table className="w-full text-xs font-mono text-left">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase">
              <th className="py-3 px-4">Engineering Parameter</th>
              <th className="py-3 px-4 text-slate-400">Conventional Single-Pack EV</th>
              <th className="py-3 px-4 text-cyan-400 bg-cyan-950/40">BRC STAR Self Volt (Target / Simulated)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            <tr>
              <td className="py-3 px-4 font-bold text-white">Highway Speed Efficiency</td>
              <td className="py-3 px-4">Single pack supplies traction + absorbs all regen</td>
              <td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">
                Simulated dual-pack buffering target (Net drive-cycle gain under bench test)
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold text-white">Battery Cycle Life</td>
              <td className="py-3 px-4">Chemistry &amp; thermal dependent (1,500–3,000+ LFP/NMC)</td>
              <td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">
                Design target: {CLAIMS_REGISTRY.pack_cycle_life_target.metric} (not yet tested; depends on chemistry, duty cycle &amp; thermal management)
              </td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold text-white">Kinetic Recovery Regime</td>
              <td className="py-3 px-4">Traction motor regenerative braking</td>
              <td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">
                Deceleration, downhill &amp; glide recoup routed to isolated Pack B
              </td>
            </tr>
          </tbody>
        </table>
      </ResponsiveTable>

      <ClaimDisclaimer />

      {/* Next Actions CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
        <div>
          <h4 className="text-base font-bold text-white font-mono">
            Explore Next: Energy Recovery &amp; PMG Dynamics
          </h4>
          <p className="text-xs text-slate-300">
            Examine decelerative recovery regimes and real-time bench instrumentation concepts.
          </p>
        </div>
        <Link
          href="/technology/energy-recovery"
          className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2"
        >
          <span>Energy Recovery</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
