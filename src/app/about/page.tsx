import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  ChevronRight,
  Award,
  Calendar,
  Building,
  Target,
  Users,
  Compass,
  ArrowRight,
  FileCheck2,
  Sparkles,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About BRC STAR | Founder Journey & Deep-Tech Mission",
  description:
    "Founded by Bishna Chauhan in November 2019, BRC STAR (OPC) PRIVATE LIMITED is an Indian deep-tech EV startup incubated by iStart Rajasthan and recognized by DPIIT.",
  alternates: {
    canonical: "https://www.brcstar.in/about",
  },
  openGraph: {
    title: "About BRC STAR | Founder Journey & Deep-Tech EV Architecture",
    description: "The story, mission, and leadership behind BRC STAR and Indian Patent Application No. 202511050655.",
    url: "https://www.brcstar.in/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] text-slate-900 dark:text-white transition-colors duration-300 pt-24 sm:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-600 dark:text-cyan-400 font-bold">About BRC STAR</span>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/90 text-cyan-900 border border-cyan-300/80 dark:bg-cyan-950/80 dark:border-cyan-500/30 text-xs font-mono dark:text-cyan-300 font-semibold shadow-sm">
            <Compass className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>INDIAN DEEP-TECH CLEAN MOBILITY • SINCE NOV 2019</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
            Engineering Indigenous EV Architecture for High-Uptime Fleets
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            BRC STAR (OPC) PRIVATE LIMITED is an automotive technology research venture dedicated to solving single-pack battery degradation and highway range limitations through auxiliary kinetic harvesting.
          </p>
        </div>

        {/* Institutional & Incubation Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 flex items-start gap-3">
            <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">iStart Rajasthan</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Incubated under the flagship startup initiative of the Department of Information Technology &amp; Communication (DoIT&amp;C), Government of Rajasthan.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">DPIIT Startup India</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce &amp; Industry, Government of India.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 flex items-start gap-3">
            <FileCheck2 className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold text-slate-900 dark:text-white block">Patent Application 202511050655</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] leading-relaxed">
                Indian Patent Application filed with the Indian Patent Office (IPO) covering closed-loop dual-pack kinetic energy recovery topologies.
              </p>
            </div>
          </div>
        </div>

        {/* Founder Profile Section */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white/90 border border-slate-200 shadow-xl dark:bg-slate-900/60 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
            {/* Founder Photo Slot / Frame */}
            <div className="w-44 h-44 rounded-2xl bg-gradient-to-br from-cyan-400/40 via-amber-400/30 to-blue-600/40 p-[2px] shadow-xl shadow-cyan-500/10">
              <div className="w-full h-full rounded-2xl bg-slate-100 dark:bg-[#050814] flex flex-col items-center justify-center p-4 border border-slate-200 dark:border-slate-800 overflow-hidden relative group">
                <Image
                  src="/brc-star-symbol.png"
                  alt="BRC STAR Emblem"
                  width={64}
                  height={64}
                  className="object-contain opacity-80"
                />
                <span className="mt-2 text-[10px] font-mono text-slate-500 dark:text-slate-400 text-center">
                  [PLACEHOLDER: founder portrait photograph]
                </span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                Bishna Chauhan (Dr. B. Chauhan)
              </h3>
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 block">
                Founder &amp; Managing Director
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 block">
                BRC STAR (OPC) PRIVATE LIMITED
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">
              The Founder&apos;s Mission
            </h2>
            <p>
              In November 2019, Bishna Chauhan established BRC STAR with a fundamental engineering question: <em>Why should an electric vehicle rely entirely on static grid charging when continuous kinetic momentum can be recovered and managed across dual storage reservoirs?</em>
            </p>
            <p>
              Operating from Rajasthan, BRC STAR was founded to build practical, durable electric powertrains tailored to India&apos;s demanding operating conditions—extreme ambient temperatures, undulating intercity gradients, and relentless commercial duty cycles.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-700 dark:text-slate-400">
              <strong>Executive Statement:</strong> &ldquo;[PLACEHOLDER: verified founder statement on long-term EV roadmap and regional manufacturing strategy]&rdquo;
            </div>
          </div>
        </div>

        {/* Corporate Journey Timeline (Since Nov 2019) */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-semibold block">
              Historical Milestones
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
              Journey Since November 2019
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm block">Nov 2019</span>
              <span className="font-bold text-slate-900 dark:text-white block font-sans text-xs">Incorporation</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] font-sans leading-relaxed">
                Incorporated as BRC STAR (OPC) PRIVATE LIMITED in Rajasthan (CIN: U34100RJ2019OPC066948).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm block">2020–2023</span>
              <span className="font-bold text-slate-900 dark:text-white block font-sans text-xs">R&amp;D &amp; Modeling</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] font-sans leading-relaxed">
                Mathematical modeling of dual-pack energy flows, silicon-carbide switching logic, and mechanical PMG alternator integration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm block">2024–2025</span>
              <span className="font-bold text-slate-900 dark:text-white block font-sans text-xs">Incubation &amp; Patent</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] font-sans leading-relaxed">
                Incubated by iStart Rajasthan; recognized by DPIIT; Indian Patent Application No. 202511050655 formally filed with the Indian Patent Office.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm block">2026–2027</span>
              <span className="font-bold text-slate-900 dark:text-white block font-sans text-xs">Prototyping &amp; Pilots</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px] font-sans leading-relaxed">
                TRL 3/4 laboratory validation benches, dynamic prototype mules, and preparatory steps toward statutory ARAI/ICAT homologation.
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Governance & Legal Details Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 dark:bg-slate-900/40 dark:border-slate-800 text-xs font-mono space-y-3">
          <span className="text-cyan-600 dark:text-cyan-400 uppercase font-bold tracking-wider block">
            Statutory Corporate Governance
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-slate-600 dark:text-slate-300">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">CIN:</span>
              <span className="font-bold text-slate-900 dark:text-white">U34100RJ2019OPC066948</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Incorporation Date:</span>
              <span className="font-bold text-slate-900 dark:text-white">19 November 2019</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Registered Jurisdiction:</span>
              <span className="font-bold text-slate-900 dark:text-white">RoC Jaipur (Rajasthan)</span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block text-[10px]">Official Inquiries:</span>
              <a href="mailto:contact@brcstar.in" className="font-bold text-cyan-600 dark:text-cyan-400 underline">contact@brcstar.in</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
