import React from "react";
import Link from "next/link";
import { Cpu, Leaf, Newspaper, ArrowRight } from "lucide-react";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "Innovation & R&D Hub | BRC STAR Self Volt EV",
  description:
    "BRC STAR innovation ecosystem: TRL 3/4 bench and simulation research, ESG sustainability targets, and corporate announcements.",
  alternates: {
    canonical: "https://www.brcstar.in/innovation",
  },
  openGraph: {
    title: "Innovation & R&D Hub | BRC STAR",
    description: "BRC STAR innovation ecosystem and engineering simulation research.",
    url: "https://www.brcstar.in/innovation",
    type: "website",
  },
};

export default function InnovationOverviewPage() {
  const innovationModules = [
    {
      title: "R&D & Test Bench Research",
      href: "/innovation/rnd",
      badge: "TRL 3/4 Stage",
      icon: Cpu,
      desc: "Stage 1 ACM bench evaluation, hardware simulation modeling, and dual-pack thermal engineering design.",
      metrics: "TRL 3/4 Workbench & Numerical Simulation",
    },
    {
      title: "Sustainability & Circular ESG",
      href: "/innovation/sustainability",
      badge: "Design Targets",
      icon: Leaf,
      desc: "Planned battery second-life stewardship and pack-longevity thermal management targets.",
      metrics: "Target Lifecycle Durability (Unverified)",
    },
    {
      title: "News & Media Center",
      href: "/innovation/news",
      badge: "Announcements",
      icon: Newspaper,
      desc: "Official corporate updates, patent-pending filing notices, and exploratory pilot announcements.",
      metrics: "Company Disclosures",
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>04 INNOVATION ECOSYSTEM</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Transparent Engineering for Clean Mobility
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From TRL 3/4 bench and numerical simulations in Rajasthan to battery circularity planning and corporate reporting.
        </p>
      </div>

      {/* 3 Innovation Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {innovationModules.map((module) => {
          const IconComp = module.icon;
          return (
            <div
              key={module.title}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                    {module.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                  {module.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {module.desc}
                </p>

                <div className="pt-2 text-xs font-mono text-cyan-400 border-t border-slate-800/80">
                  Focus: <strong>{module.metrics}</strong>
                </div>
              </div>

              <Link
                href={module.href}
                className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-200 hover:text-white bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Explore {module.title}</span>
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
