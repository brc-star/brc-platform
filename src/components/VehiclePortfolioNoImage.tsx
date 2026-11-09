"use client";

import React from "react";
import Link from "next/link";
import {
  Zap,
  Gauge,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  BatteryCharging,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import {
  VEHICLES_DATA,
  VehicleModelData,
  COMMON_DISCLAIMERS,
} from "@/data/vehicles";
import { formatInr } from "@/lib/utils";
import { VehiclesCTA } from "@/components/VehiclesCTA";

// Primary vehicles to display in the 6-card catalog grid
const PRIMARY_PORTFOLIO_VEHICLES = VEHICLES_DATA.filter((v) => v.slug !== "starfleet-logistic");

export const VehiclePortfolioNoImage = () => {
  return (
    <section className="w-full space-y-12">
      {/* 1. Section Header */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono font-semibold text-cyan-300 shadow-md">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 VEHICLE PORTFOLIO</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-slate-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>SELF-VOLT EV PLATFORM</span>
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
          BRC STAR Electric Vehicle Portfolio
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Next-generation Self-Volt electric mobility engineered for passenger, commercial, and heavy-duty applications.
        </p>
      </div>

      {/* 2. Responsive 3-Column Portfolio Grid (Row 1: 01-03, Row 2: 04-06) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRIMARY_PORTFOLIO_VEHICLES.map((vehicle) => (
          <div
            key={vehicle.slug}
            className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#050814] to-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-950/50 flex flex-col justify-between space-y-6 group relative overflow-hidden vehicle-portfolio-card"
          >
            {/* Ambient Cyan Hover Glow Accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />

            {/* Card Header & Badges */}
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400/80 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-md">
                  Vehicle {vehicle.vehicleNumber}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                  {vehicle.segmentBadge || vehicle.category}
                </span>
              </div>

              {/* Vehicle Title & Self-Volt Badge */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                  {vehicle.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono text-cyan-400/90 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>{vehicle.drivetrainBadge}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-300 leading-relaxed min-h-[48px]">
                {vehicle.description}
              </p>

              {/* Technical Specifications Matrix */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 space-y-2 font-mono vehicle-portfolio-specs">
                <div className="text-[10px] uppercase text-cyan-400 font-semibold tracking-wider pb-1 border-b border-slate-800">
                  Key Technical Specifications
                </div>
                <div className="space-y-1.5">
                  {(vehicle.portfolioSpecs || []).map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs gap-2"
                    >
                      <span className="text-slate-400 text-[11px] shrink-0">
                        {spec.label}:
                      </span>
                      <span className="text-slate-200 font-semibold text-right text-[11px] truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer: Indicative Price & Action CTA */}
            <div className="pt-4 border-t border-slate-800/90 space-y-3 relative z-10">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">
                    {COMMON_DISCLAIMERS.priceLabel}
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold font-mono text-white">
                    {formatInr(vehicle.basePriceInr)}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block">
                    {COMMON_DISCLAIMERS.homologationNotice}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  Self-Volt Active
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={`/vehicles/${vehicle.slug}`}
                  className="flex-1 py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 group-hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Full Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/pre-book?model=${vehicle.slug}`}
                  className="py-2.5 px-3.5 rounded-xl font-mono text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                  title="Reserve Build Slot"
                >
                  Reserve
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Bottom Portfolio CTA */}
      <VehiclesCTA />
    </section>
  );
};
