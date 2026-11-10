import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Zap, Layers, Shield, Cpu, Gauge, BatteryCharging, ArrowRight, RefreshCw, Sparkles, CheckCircle2 } from "lucide-react";

const SelfVoltVisualizer = dynamic(
  () => import("@/components/SelfVoltVisualizer").then((mod) => mod.SelfVoltVisualizer),
  {
    loading: () => (
      <div className="h-96 w-full rounded-3xl bg-slate-900/40 border border-slate-800 animate-pulse flex items-center justify-center text-xs font-mono text-slate-500">
        Loading interactive telemetry visualizer...
      </div>
    ),
  }
);

export const metadata = {
  title: "Technology & Engineering Pillars | BRC STAR Self Volt EV",
  description: "Explore BRC STAR's deep-tech engineering: Self-Volt dual-pack kinetic energy recovery, Alternator Control Modules, and Indian Patent Application No. 202511050655.",
  alternates: {
    canonical: "https://brcstar.in/technology",
  },
  openGraph: {
    title: "Technology & Engineering Pillars | BRC STAR",
    description: "Deep-tech kinetic energy recovery and dual-pack powertrain architecture for electric mobility.",
    url: "https://brcstar.in/technology",
    type: "website",
  },
};

export default function TechnologyOverviewPage() {
  const techPillars = [
    {
      title: "Self Volt Dual-Pack Architecture",
      href: "/technology/self-volt",
      badge: "Proprietary Architecture",
      icon: Zap,
      desc: "Our dual-pack system decouples discharge load from simultaneous kinetic charging, eliminating thermal bottlenecks and delivering up to 850 km target range.",
      specs: ["400V Dual-Bus Topology", "Kinetic Energy Recovery", "TRL 3/4 Test Bench Validated"],
    },
    {
      title: "Energy Recovery & Kinetic PMG",
      href: "/technology/energy-recovery",
      badge: "Electromechanical Link",
      icon: Layers,
      desc: "Permanent magnet generator kinetic recovery converts vehicle momentum and deceleration into high-amp electrical replenishment.",
      specs: ["Kinetic Glide Recoup", "98.4% ACM Inverter Efficiency (Lab)", "Multi-Stage Retarder"],
    },
    {
      title: "Patent & Intellectual Property",
      href: "/technology/patent-ip",
      badge: "IPO Filing",
      icon: Shield,
      desc: "Intellectual property foundation centered on Indian Patent Application No. 202511050655 with international PCT application details pending.",
      specs: ["Indian Patent App No. 202511050655", "[PCT details pending]", "22 Utility Claims"],
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>02 TECHNOLOGY PLATFORM</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Deep-Tech Engineering for the Next Century of Clean Motion
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          BRC STAR has engineered an end-to-end proprietary powertrain platform that reimagines how energy flows through an electric vehicle.
        </p>
      </div>

      {/* Interactive Simulator Inset */}
      <SelfVoltVisualizer />

      {/* 3 Pillar Deep-Dive Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {techPillars.map((pillar) => {
          const IconComp = pillar.icon;
          return (
            <div
              key={pillar.title}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="pt-2 space-y-1.5 border-t border-slate-800/80">
                  {pillar.specs.map((sp) => (
                    <div key={sp} className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={pillar.href}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Read Full Engineering Docs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* Regulatory & Real-World Results Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center text-xs font-mono text-slate-400">
        <p>
          <span className="text-cyan-400 font-semibold">Engineering Notice:</span> All powertrain performance metrics, efficiency gains, and operational ranges are laboratory-simulated and bench-validated at TRL 3/4. Figures simulated/lab-validated; real-world results vary depending on driving cycles, vehicle payload, environmental temperatures, and production homologation.
        </p>
      </div>
    </div>
  );
}
