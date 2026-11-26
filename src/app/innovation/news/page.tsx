import React from "react";
import Link from "next/link";
import { Newspaper, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { PATENT_STATEMENT } from "@/lib/claims";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata: Metadata = {
  title: "Newsroom & Corporate Announcements | BRC STAR",
  description:
    "Corporate announcements, TRL 3/4 R&D milestones, and patent filing notices from BRC STAR (OPC) PRIVATE LIMITED.",
  alternates: {
    canonical: "https://www.brcstar.in/innovation/news",
  },
  openGraph: {
    title: "Newsroom & Corporate Announcements | BRC STAR",
    description: "Official corporate updates from BRC STAR (OPC) PRIVATE LIMITED.",
    url: "https://www.brcstar.in/innovation/news",
    type: "website",
  },
};

export default function NewsMediaPage() {
  const pressReleases = [
    {
      title:
        "BRC STAR Conducts Stage 1 ACM Laboratory Bench & Simulation Validation (TRL 3/4)",
      date: "2026 Milestone",
      source: "R&D Engineering Desk",
      summary:
        "Completed Stage 1 Alternator Control Module (ACM) laboratory bench rig testing while evaluating dual-pack bus simulation models (net vehicle range benefit remains drive-cycle dependent and pending independent track verification).",
      category: "Technology Milestone",
    },
    {
      title:
        "Indian Patent Application No. 202511050655 Filed with Indian Patent Office",
      date: "May 2025 (Filing)",
      source: "IP Regulatory Desk",
      summary: PATENT_STATEMENT,
      category: "Patent-Pending Filing",
    },
    {
      title:
        "Exploratory Fleet & Dealership Interest Framework Initiated",
      date: "2026 Initiative",
      source: "Corporate Partnerships",
      summary:
        "Non-binding dealership and commercial fleet exploratory framework initiated for post-homologation evaluation [Non-binding inquiries logged].",
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
            <span>OFFICIAL ANNOUNCEMENTS &amp; MILESTONES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Newsroom &amp; Corporate Disclosures
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Follow our transparent engineering milestones, patent-pending filing updates, and corporate notices.
          </p>
        </div>
      </div>

      {/* Press Releases List */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-white font-mono">Latest Disclosures</h2>
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
                href="/evidence"
                className="px-4 py-2 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5 shrink-0 self-start md:self-center"
              >
                <span>Evidence Ledger</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <ClaimDisclaimer />
    </div>
  );
}
