import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, Download, ShieldCheck, ChevronRight, ArrowRight, BookOpen, Lock, Cpu, Zap, Layers, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Documentation & Technology Summary | BRC STAR",
  description: "Public engineering summary, system blueprints, whitepapers, and technical specifications for BRC STAR kinetic energy recovery powertrain.",
  alternates: {
    canonical: "https://www.brcstar.in/docs",
  },
  openGraph: {
    title: "Technical Documentation & Technology Summary | BRC STAR",
    description: "Public engineering summary, whitepapers, and technical specifications.",
    url: "https://www.brcstar.in/docs",
    type: "website",
  },
};

export default function TechnicalDocsPage() {
  const whitepapers = [
    {
      title: "Self-Volt Architecture: Thermodynamic Energy Recoup in Dual-Pack Topologies",
      abstract: "Mathematical modeling of closed-loop kinetic flow, permanent magnet generator harmonics, and thermal equilibrium across dual battery arrays.",
      version: "v2.4 (Engineering Preprint)",
      fileSize: "4.8 MB PDF",
      isPublic: true,
    },
    {
      title: "Silicon-Carbide Alternator Control Module (ACM): Inverter Harmonics & High-Amp Rectification",
      abstract: "Schematics of the 1200V MOSFET bridge, bi-directional buck-boost stages, and CAN-bus telemetry interfacing.",
      version: "v1.8 (Technical Specification)",
      fileSize: "6.2 MB PDF",
      isPublic: true,
    },
    {
      title: "Commercial Fleet TCO Modeling: Indian Urban Freight Electrification Analysis",
      abstract: "Comparative 5-year total cost of ownership study of StarFleet logistics versus BS-VI diesel commercial fleet baselines.",
      version: "v3.0 (Commercial Whitepaper)",
      fileSize: "2.9 MB PDF",
      isPublic: true,
    },
    {
      title: "Confidential TRL 3/4 Dynamometer Logs & Thermal Stress Testing",
      abstract: "Laboratory test-bench sensor records, EIS electrochemical impedance logs, and thermal runaway prevention test files.",
      version: "v1.0 (NDA Required)",
      fileSize: "18.4 MB PDF",
      isPublic: false,
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Technical Documentation</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPEN ENGINEERING &amp; WHITEPAPERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Whitepapers &amp; Technology Summary
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Access validated technical publications, kinetic equations, and system architecture blueprints authored by the BRC STAR engineering team.
          </p>
        </div>
      </div>

      {/* 1-Page Public Technology Summary Slot */}
      <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900 via-[#050814] to-slate-950 border border-cyan-500/40 space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Public Technology Summary Sheet (1-Page Reference)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-mono">
              Self Volt Kinetic Energy Recovery System Architecture
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              TRL 3/4 Laboratory Bench
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
              Indian Patent App No. 202511050655
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Dual-Pack Topology */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <Layers className="w-4 h-4" />
              <span>1. Dual-Pack Topology</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              Load &amp; Recoup Decoupling
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Standard EVs direct regenerative current into the primary traction battery during discharge, exacerbating internal thermal gradients. BRC STAR isolates the discharge circuit (Pack A) from kinetic harvesting (Pack B), routing regenerative pulses without thermal throttling.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/80">
              • 400V Dual-Bus Topology<br />
              • Sub-millisecond Solid-State Relay Switching
            </div>
          </div>

          {/* Pillar 2: ACM & Inverter */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <Cpu className="w-4 h-4" />
              <span>2. Alternator Control Module (ACM)</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              Variable-Frequency Rectification
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              The proprietary ACM employs high-speed Silicon-Carbide (SiC) MOSFET bridge rectifiers that convert erratic multi-pole generator AC voltages into stabilized high-voltage DC for seamless auxiliary pack replenishment across low-speed gliding and heavy braking.
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/80">
              • 98.4% Peak Rectification Efficiency (Lab)<br />
              • CAN 2.0B / CAN-FD Vehicle Integration
            </div>
          </div>

          {/* Pillar 3: Intellectual Property Foundation */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>3. Defensible IP Foundation</span>
            </div>
            <h3 className="text-base font-bold text-white font-mono">
              Patent Application &amp; Prior Art
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Filed with the Indian Patent Office under Application No. 202511050655 (Published &amp; under examination). Encompasses dual-pack switching logic, alternator electromechanical kinetics, and dynamic load-transfer algorithms [PCT details pending].
            </p>
            <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-slate-800/80">
              • Priority Date: 2025-03-14<br />
              • Status: Published &amp; In Formal Examination
            </div>
          </div>
        </div>

        {/* Engineering Notice */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center text-xs font-mono text-slate-400">
          <p>
            <span className="text-cyan-400 font-semibold">Engineering Disclaimer:</span> All technical data, simulation runs, and kinetic recoup specifications reflect laboratory bench test-bed setups at TRL 3/4. Figures simulated/lab-validated; real-world results vary with driving style, climate, and production configuration.
          </p>
        </div>
      </section>

      {/* Whitepaper Document Cards */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white font-mono">Published Whitepapers &amp; Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whitepapers.map((doc) => (
            <div
              key={doc.title}
              className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 font-bold">{doc.version}</span>
                  <span className="text-slate-400">{doc.fileSize}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-mono">{doc.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{doc.abstract}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                {doc.isPublic ? (
                  <Link
                    href={`/contact?intent=whitepaper&title=${encodeURIComponent(doc.title)}`}
                    className="px-4 py-2 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Whitepaper</span>
                  </Link>
                ) : (
                  <Link
                    href="/invest/pitch-deck"
                    className="px-4 py-2 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Request NDA Access</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
