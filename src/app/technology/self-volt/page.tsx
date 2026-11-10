import React from "react";
import Link from "next/link";
import { Zap, Shield, Cpu, Activity, BatteryCharging, ArrowRight, CheckCircle2, ChevronRight, Gauge } from "lucide-react";
import { SelfVoltVisualizer } from "@/components/SelfVoltVisualizer";
import { ResponsiveTable } from "@/components/ResponsiveTable";

export const metadata = {
  title: "Self Volt Architecture | Dual-Pack Kinetic Recovery",
  description:
    "Engineering architecture of the BRC STAR Self Volt powertrain: Pack A/B solid-state switching, Alternator Control Module (ACM), and kinetic energy recovery.",
  alternates: {
    canonical: "https://www.brcstar.in/technology/self-volt",
  },
  openGraph: {
    title: "Self Volt Architecture | BRC STAR",
    description: "Dual-Pack kinetic energy recovery and dynamic switching architecture.",
    url: "https://www.brcstar.in/technology/self-volt",
  },
};

export default function SelfVoltArchitecturePage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/technology" className="hover:text-cyan-400">Technology</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Self Volt Architecture</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>INDIAN PATENT APP NO. 202511050655 • KINETIC RECOVERY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Self Volt: Kinetic Energy Recovery Architecture
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conventional electric vehicles draw from a single battery pack until depletion. The BRC STAR Self Volt powertrain couples an auxiliary Permanent Magnet Generator (PMG) and Alternator Control Module (ACM) with an isolated dual-pack system, dynamically harvesting kinetic momentum into secondary cells to improve overall system efficiency. Figures simulated/lab-validated; real-world results vary.
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
              <span>400V + 400V Topology</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Dual-Pack (A/B) Matrix Isolation
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Splitting the total battery capacity into two synchronized 400V sub-packs allows one pack to supply propulsion discharge while the secondary pack receives high-amp kinetic recharge without simultaneous bi-directional thermal stress.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• Solid-state sub-millisecond bus switching</div>
              <div>• Immersion dielectric liquid thermal balance</div>
            </div>
          </div>

          {/* Subsystem 2: ACM */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>MODULE 02</span>
              </span>
              <span>98.4% Efficiency</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Alternator Control Module (ACM)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Silicon-Carbide (SiC) high-frequency switching inverter that regulates wild AC generation from the kinetic PMG into ripple-free high-voltage DC current calibrated to the exact electrochemical acceptance of the receiving battery pack.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• 1200V Silicon-Carbide MOSFET array</div>
              <div>• Adaptive impedance matching algorithms</div>
            </div>
          </div>

          {/* Subsystem 3: BDA */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                <span>MODULE 03</span>
              </span>
              <span>760 Nm Peak Torque</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Bidirectional Drive Assist (BDA)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Controls torque handoff and parallel high-load discharge. When maximum acceleration is demanded, BDA commands simultaneous parallel discharge from both Pack A and Pack B for instantaneous 0-100 km/h in 3.2 seconds.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• Real-time vector torque distribution</div>
              <div>• Zero-jitter electronic transition</div>
            </div>
          </div>

          {/* Subsystem 4: PMG Linkage */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
              <span className="flex items-center gap-1.5">
                <Gauge className="w-4 h-4" />
                <span>MODULE 04</span>
              </span>
              <span>Low-Drag Rotational Link</span>
            </div>
            <h3 className="text-lg font-bold text-white">
              Permanent Magnet Kinetic Harvester
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Custom neodymium rare-earth magnetic rotor coupled directly to driveline inertia. Proprietary magnetic tooth phasing eliminates the drag penalty typical of industrial generators when operating in glide regimes.
            </p>
            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>• 74% reduction in parasitic mechanical drag</div>
              <div>• Dual axle harvesting on heavy commercial platforms</div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Technical Benchmark Table */}
      <ResponsiveTable caption="Comparative Architecture Benchmark Matrix">
        <table className="w-full text-xs font-mono text-left">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase">
              <th className="py-3 px-4">Performance Parameter</th>
              <th className="py-3 px-4 text-slate-400">Conventional Single-Pack EV</th>
              <th className="py-3 px-4 text-cyan-400 bg-cyan-950/40">BRC STAR Self Volt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            <tr>
              <td className="py-3 px-4 font-bold text-white">Highway Range Degradation</td>
              <td className="py-3 px-4">Drops 30% - 40% at &gt;100 km/h</td>
              <td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">Minimized (-8%) due to PMG glide harvest</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold text-white">Battery Cycle Life</td>
              <td className="py-3 px-4">1,500 - 2,000 cycles</td>
              <td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">4,500+ cycles (Dual-Pack load distribution)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold text-white">Kinetic Recoup Channel</td>
              <td className="py-3 px-4">Braking events only</td>
              <td className="py-3 px-4 font-bold text-cyan-400 bg-cyan-950/20">Continuous (Glide + Deceleration + Dual-Axle)</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-bold text-white">Thermal Runaway Risk</td>
              <td className="py-3 px-4">Higher under simultaneous regen surges</td>
              <td className="py-3 px-4 font-bold text-emerald-400 bg-cyan-950/20">Sub-divided pack isolation with dielectric liquid</td>
            </tr>
          </tbody>
        </table>
      </ResponsiveTable>

      {/* Next Actions CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-cyan-950/40 border border-cyan-500/30">
        <div>
          <h4 className="text-base font-bold text-white font-mono">
            Explore Next: Energy Recovery &amp; PMG Dynamics
          </h4>
          <p className="text-xs text-slate-300">
            Dive into the electromechanical equations governing permanent magnet kinetic recoup.
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
