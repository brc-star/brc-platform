import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Car, Zap, Gauge, Compass, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2, Layers } from "lucide-react";
import { VEHICLES_DATA, VehicleModelData } from "@/lib/data";
import { formatInr } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return VEHICLES_DATA.map((v) => ({ slug: v.slug }));
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = VEHICLES_DATA.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/vehicles" className="hover:text-cyan-400">Vehicles</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">{vehicle.name}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest block mb-1">
              {vehicle.category} Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              {vehicle.name}
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              {vehicle.tagline}
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
              INDICATIVE EX-SHOWROOM (ESTIMATED)
            </span>
            <span className="text-3xl font-extrabold text-white font-mono">{formatInr(vehicle.basePriceInr)}</span>
            <span className="text-[10px] font-mono text-slate-500 block">
              Subject to homologation &amp; prototype validation
            </span>
          </div>
        </div>
      </div>

      {/* Main Highlights Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Acceleration</div>
          <div className="text-xl font-bold text-white mt-1">{vehicle.acceleration}</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Self-Volt Range</div>
          <div className="text-xl font-bold text-cyan-400 mt-1">{vehicle.ratedRangeKm} km</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Kinetic Recoup</div>
          <div className="text-xl font-bold text-emerald-400 mt-1">+{vehicle.selfVoltRegenKw} kW</div>
        </div>
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase">Drag Index</div>
          <div className="text-xl font-bold text-amber-400 mt-1">{vehicle.dragCoefficientCd}</div>
        </div>
      </div>

      {/* Granular Specification Table */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 lg:p-8 space-y-6">
        <h3 className="text-xl font-bold text-white font-mono">
          Granular Technical Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          {vehicle.specsList.map((spec) => (
            <div
              key={spec.label}
              className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between"
            >
              <span className="text-slate-400">{spec.label}</span>
              <span className="font-bold text-white text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-Booking Action Strip */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/80 via-[#050814] to-slate-950 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-xl font-bold text-white font-mono">
            Ready to Configure {vehicle.name}?
          </h4>
          <p className="text-xs text-slate-300 mt-1">
            Reserve your build priority slot with a 100% refundable token of ₹25,000.
          </p>
        </div>

        <Link
          href={`/pre-book?model=${vehicle.slug}`}
          className="px-8 py-3.5 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25 shrink-0"
        >
          <span>Pre-Book Build Slot</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
