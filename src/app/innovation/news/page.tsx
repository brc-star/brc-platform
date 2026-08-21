"use client";

import React from "react";
import Link from "next/link";
import { Newspaper, FileText, Download, ArrowRight, ChevronRight, Calendar, ExternalLink } from "lucide-react";



export default function NewsMediaPage() {
  const pressReleases = [
    {
      title: "BRC STAR Completes TRL-6 Dynamometer Track Validation of Self-Volt Closed-Loop System",
      date: "August 2026",
      source: "Official Newsroom",
      summary: "Empirical telemetry records a 32.8% reduction in net battery draw over the standard Indian Urban Drive Cycle (MIDC) and high-speed expressways.",
      category: "Technology Milestone",
    },
    {
      title: "Indian Patent Office Publishes BRC STAR Dual-Pack Kinetic Recovery Patent Application",
      date: "May 2026",
      source: "IP Regulatory Desk",
      summary: "Publication of Patent Application IN-PAT-2025-BRC-009 marks significant progress in securing exclusive proprietary rights over closed-loop EV power routing.",
      category: "Patent & IP",
    },
    {
      title: "BRC STAR Signs Commercial Fleet Demonstration LOIs with Southern Logistics Operators",
      date: "March 2026",
      source: "Corporate Partnerships",
      summary: "Preliminary agreements cover pilot deployment of 50 StarFleet commercial electric delivery vans across high-density intercity logistics routes.",
      category: "Commercial Partnerships",
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/innovation" className="hover:text-cyan-400">Innovation</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">News &amp; Media</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
            <span>OFFICIAL PRESS RELEASES &amp; MEDIA KIT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Newsroom &amp; Corporate Announcements
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Stay informed on our latest engineering breakthroughs, funding milestones, executive statements, and global automotive media coverage.
          </p>
        </div>
      </div>

      {/* Press Releases List */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white font-mono">Latest Official Releases</h2>
        <div className="space-y-4">
          {pressReleases.map((release) => (
            <div
              key={release.title}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-cyan-400 font-bold">{release.category}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{release.date}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {release.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {release.summary}
                </p>
              </div>

              <button
                onClick={() => alert(`Viewing full press release: ${release.title}`)}
                className="px-4 py-2 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-center"
              >
                <span>Read Release</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Media Kit Download Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-[#050814] to-slate-950 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white font-mono">
            Download Official BRC STAR Media Kit (2026)
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            High-resolution vector logos, executive biographies, vehicle 4K renders, and corporate fact sheet.
          </p>
        </div>

        <button
          onClick={() => alert("Downloading BRC_STAR_Official_Media_Kit_2026.zip (42 MB)")}
          className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Download Media Kit (.ZIP)</span>
        </button>
      </div>
    </div>
  );
}
