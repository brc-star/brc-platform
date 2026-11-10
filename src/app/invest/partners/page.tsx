import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Users, ChevronRight } from "lucide-react";
import { DealerRoiCalculator } from "@/components/DealerRoiCalculator";
import { DealerPartnerFormClient } from "@/components/DealerPartnerFormClient";

export const metadata: Metadata = {
  title: "Franchise Dealership Network & Territory Expansion | BRC STAR",
  description: "Secure exclusive territory rights for BRC STAR Flagship Experience Centers and certified Self-Volt service hubs.",
  alternates: {
    canonical: "https://brcstar.in/invest/partners",
  },
  openGraph: {
    title: "Franchise Dealership Network | BRC STAR",
    description: "Exclusive dealership and commercial partner opportunities.",
    url: "https://brcstar.in/invest/partners",
    type: "website",
  },
};

export default function DealerPartnersPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/invest" className="hover:text-cyan-400">Invest</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Dealer &amp; Strategic Partners</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>FRANCHISE DEALERSHIP NETWORK EXPANSION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Partner with India&apos;s Deep-Tech Electric Mobility Pioneer
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Secure exclusive territory rights for BRC STAR Flagship Experience Centers and certified Self-Volt high-voltage service hubs across key commercial corridors.
          </p>
        </div>
      </div>

      {/* Interactive Dealership ROI Simulator */}
      <DealerRoiCalculator />

      {/* Franchise Application Form Section */}
      <DealerPartnerFormClient />
    </div>
  );
}
