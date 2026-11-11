import React from "react";
import type { Metadata } from "next";
import { Building2, MapPin, ShieldCheck, TrendingUp } from "lucide-react";
import { DealershipApplicationForm } from "@/components/DealershipApplicationForm";
import { DealerRoiCalculator } from "@/components/DealerRoiCalculator";

export const metadata: Metadata = {
  title: "Dealership & Franchise Partners | BRC STAR Experience Hubs",
  description:
    "Partner with BRC STAR (OPC) PRIVATE LIMITED to establish Tier 1 Flagship Experience Hubs (₹2.5 Cr), Tier 2 Regional Transit Hubs (₹1.25 Cr), or Tier 3 District Express Centers (₹50 Lakh).",
  alternates: {
    canonical: "https://www.brcstar.in/partners",
  },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] text-slate-900 dark:text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Hero Banner */}
        <section className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/30 text-xs font-mono font-bold text-cyan-800 dark:text-cyan-300">
            <Building2 className="w-3.5 h-3.5" />
            <span>PAN-INDIA FRANCHISE &amp; DEALERSHIP NETWORK</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Own the Self-Volt EV Corridor in Your City
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Apply for exclusive territorial rights across India&apos;s golden industrial and expressway hubs with high-margin service bay recurring revenue and zero-range-anxiety fleet demand.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                <TrendingUp className="w-4 h-4" />
                <span>Tier 1 • ₹2.5 Cr</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Flagship 3S Experience Hub (10,000+ sq ft) with Full HV Service Bays &amp; Fleet Desk.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                <MapPin className="w-4 h-4" />
                <span>Tier 2 • ₹1.25 Cr</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Regional Sales &amp; Commercial Fleet Transit Hub (5,000+ sq ft) on arterial corridors.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Tier 3 • ₹50 Lakh</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                District Express Showroom &amp; Fast-Diagnostic Spoke (2,500+ sq ft).
              </p>
            </div>
          </div>
        </section>

        {/* Qualification & Application Funnel */}
        <section aria-label="Dealership Application Form">
          <DealershipApplicationForm />
        </section>

        {/* Economics Estimator */}
        <section aria-label="Franchise Unit Economics Calculator">
          <DealerRoiCalculator />
        </section>
      </div>
    </div>
  );
}
