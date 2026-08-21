"use client";

import React from "react";
import Link from "next/link";
import { FileText, Download, ShieldCheck, ChevronRight, ArrowRight, BookOpen, Lock } from "lucide-react";



export default function TechnicalDocsPage() {
  const whitepapers = [
    {
      title: "Self-Volt Architecture: Thermodynamic Energy Recoup in Dual-Pack Topologies",
      abstract: "A rigorous mathematical exploration of the closed-loop kinetic flow, permanent magnet alternator phasing, and thermal balance equations.",
      version: "v2.4 (Peer Reviewed)",
      fileSize: "4.8 MB PDF",
      isPublic: true,
    },
    {
      title: "Silicon-Carbide Alternator Control Module (ACM): Inverter Harmonics & Rectification",
      abstract: "Detailed schematics of the 1200V MOSFET bridge and high-frequency variable AC-to-DC rectification stages.",
      version: "v1.8 (Engineering Release)",
      fileSize: "6.2 MB PDF",
      isPublic: true,
    },
    {
      title: "Commercial Fleet TCO Modeling: Indian Urban Freight Electrification Analysis",
      abstract: "Comparative 5-year operating expenditure analysis of StarFleet logistics versus BS-VI diesel commercial vehicles.",
      version: "v3.0 (Commercial Whitepaper)",
      fileSize: "2.9 MB PDF",
      isPublic: true,
    },
    {
      title: "Confidential TRL-6 Test-Bed Sensor Logs & Immersion Battery Calibration",
      abstract: "Proprietary empirical data room log files for dynamometer cycles, thermal runaway tests, and EIS neural estimators.",
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
            Engineering Whitepapers &amp; Technical Specifications
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Access validated technical publications, kinetic equations, and system architecture blueprints authored by the BRC STAR engineering and power electronics team.
          </p>
        </div>
      </div>

      {/* Whitepaper Document Cards */}
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
                <button
                  onClick={() => alert(`Downloading Whitepaper: ${doc.title}`)}
                  className="px-4 py-2 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Whitepaper</span>
                </button>
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
  );
}
