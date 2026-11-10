import React from "react";
import Link from "next/link";
import { Newspaper, FileText, Download, ArrowRight, ChevronRight, Calendar, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsroom & Corporate Announcements | BRC STAR",
  description: "Official corporate news, press statements, leadership updates, and media kit from BRC STAR electric vehicle startup.",
  alternates: {
    canonical: "https://brcstar.in/innovation/news",
  },
  openGraph: {
    title: "Newsroom & Corporate Announcements | BRC STAR",
    description: "Official press announcements and media statements from BRC STAR.",
    url: "https://brcstar.in/innovation/news",
    type: "website",
  },
};

export default function NewsMediaPage() {
  const pressReleases = [
    {
      title: "BRC STAR Advances TRL 3/4 Laboratory Dynamometer Simulation of Kinetic Recovery System",
      date: "August 2026",
      source: "Official Newsroom",
      summary: "Empirical bench telemetry indicates a 32.8% simulated reduction in net battery draw across modeled urban and highway driving drive cycles.",
      category: "Technology Milestone",
    },
    {
      title: "Indian Patent Office Publishes BRC STAR Dual-Pack Kinetic Recovery Patent Application",
      date: "March 2025",
      source: "IP Regulatory Desk",
      summary: "Publication of Indian Patent Application No. 202511050655 marks formal IPO examination for dual-pack kinetic energy recovery and alternator routing.",
      category: "Patent & IP",
    },
    {
      title: "Commercial Fleet Demonstrator Concept & Expression of Interest Framework Announced",
      date: "January 2026",
      source: "Corporate Partnerships",
      summary: "Framework for logistics demonstration pilots and fleet feasibility studies [Discussion stage / Available in data room].",
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
            Stay informed on our verified engineering milestones, patent examination disclosures, executive updates, and technical disclosures.
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

              <Link
                href="/docs"
                className="px-4 py-2 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-center"
              >
                <span>Read in Docs</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Media Kit Download Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-[#050814] to-slate-950 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white font-mono">
            Official BRC STAR Press &amp; Media Kit
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            High-resolution brand logos, executive biographies, vehicle rendered concept assets, and verified corporate disclosures.
          </p>
        </div>

        <Link
          href="/contact?intent=press"
          className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/20 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Request Media Kit</span>
        </Link>
      </div>

      {/* Engineering Disclaimer */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 text-center text-xs font-mono text-slate-400">
        <p>
          <span className="text-cyan-400 font-semibold">Regulatory Disclosure:</span> All efficiency comparisons, mileage simulations, and performance metrics reflect controlled laboratory test-bench and dynamometer simulations. Figures simulated/lab-validated; real-world results vary.
        </p>
      </div>
    </div>
  );
}
