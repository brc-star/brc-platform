import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Zap, Layers, Shield, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import { PATENT_STATEMENT } from "@/lib/claims";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

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
  description: `Explore BRC STAR's TRL 3/4 R&D engineering: Self-Volt dual-pack kinetic energy recovery, Alternator Control Modules, and ${PATENT_STATEMENT}`,
  alternates: {
    canonical: "https://www.brcstar.in/technology",
  },
  openGraph: {
    title: "Technology & Engineering Pillars | BRC STAR",
    description: "Dual-pack kinetic energy recovery R&D architecture for electric mobility.",
    url: "https://www.brcstar.in/technology",
    type: "website",
  },
};

export default function TechnologyOverviewPage() {
  const techPillars = [
    {
      title: "Self Volt Dual-Pack Architecture",
      href: "/technology/self-volt",
      badge: "TRL 3/4 Target",
      icon: Zap,
      desc: "Our dual-pack system separates traction discharge load from decelerative kinetic charging, designed to reduce thermal stress and target up to 850 km simulated range.",
      specs: ["Dual 400V / 800V Architecture Target", "Isolated Buffer Pack Switching", "Simulation & Test Bench R&D"],
    },
    {
      title: "Energy Recovery & Kinetic PMG",
      href: "/technology/energy-recovery",
      badge: "Stage 1 ACM Bench",
      icon: Layers,
      desc: "Permanent magnet generator (PMG) kinetic recovery captures vehicle deceleration and downhill momentum into auxiliary battery storage.",
      specs: ["Deceleration & Glide Recoup", "98.4% ACM Rig Efficiency (Stage 1 Bench)", "Drive-Cycle Dependent Gain"],
    },
    {
      title: "Patent & Intellectual Property",
      href: "/technology/patent-ip",
      badge: "Patent-Pending",
      icon: Shield,
      desc: PATENT_STATEMENT,
      specs: [
        "Indian Patent App No. 202511050655",
        "24 claims as filed (subject to exam)",
        "Not yet published or granted",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>02 TECHNOLOGY PLATFORM • TRL 3/4 R&amp;D</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Deep-Tech Powertrain Engineering for Clean Motion
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          BRC STAR is developing a dual-pack energy-management architecture to reduce battery thermal stress and maximize kinetic energy recovery during deceleration and grade duty cycles.
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
                <span>Read Engineering Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          );
        })}
      </div>

      <ClaimDisclaimer />
    </div>
  );
}
