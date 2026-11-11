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
  Clock,
  Compass,
} from "lucide-react";
import {
  VEHICLES_DATA,
  VehicleModelData,
  COMMON_DISCLAIMERS,
} from "@/data/vehicles";
import { formatInr } from "@/lib/utils";
import { VehiclesCTA } from "@/components/VehiclesCTA";
import { usePreBookDrawer } from "@/components/PreBookContext";

// Hero vehicles featured prominently for pre-booking (Single canonical StarFleet slug)
const HERO_SLUGS = ["starcraft-gt", "starfleet-commercial", "startransit-bus"];
const HERO_VEHICLES = VEHICLES_DATA.filter((v) => HERO_SLUGS.includes(v.slug));
// Roadmap vehicles excluding hero models and duplicate fleet variants
const ROADMAP_VEHICLES = VEHICLES_DATA.filter(
  (v) => !HERO_SLUGS.includes(v.slug) && v.slug !== "starfleet-logistic"
);

export const VehiclePortfolioNoImage = () => {
  const { openDrawer } = usePreBookDrawer();
  return (
    <section className="w-full space-y-16">
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
          Flagship Lineup &amp; Production Roadmap
        </h2>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Featured hero vehicles open for priority reservation, followed by our commercial and heavy-transit production pipeline.
        </p>
      </div>

      {/* 2. Hero Vehicles (3 Featured Models) */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
              Featured Flagship Vehicles (Priority Pre-Booking)
            </h3>
          </div>
          <span className="text-xs font-mono text-cyan-400">
            3 Models Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HERO_VEHICLES.map((vehicle, index) => (
            <div
              key={vehicle.slug}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/90 via-[#050814] to-slate-950 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-xl hover:shadow-cyan-950/50 flex flex-col justify-between space-y-6 group relative overflow-hidden vehicle-portfolio-card"
            >
              {/* Ambient Cyan Hover Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />

              {/* Card Header & Badges */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-cyan-400/90 bg-cyan-950/70 border border-cyan-500/40 px-2.5 py-0.5 rounded-md">
                    Hero Model • {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                    {vehicle.segmentBadge || vehicle.category}
                  </span>
                </div>

                {/* Vehicle Title & Drivetrain Badge */}
                <div className="space-y-1.5">
                  <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight font-sans group-hover:text-cyan-300 transition-colors">
                    {vehicle.name}
                  </h4>
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
                    Key Specifications (Simulated/Target)
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
                    Priority Slot
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
                  <button
                    type="button"
                    onClick={() => openDrawer({ modelSlug: vehicle.slug })}
                    className="py-2.5 px-3.5 rounded-xl font-mono text-xs font-semibold text-cyan-300 hover:text-white bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 hover:border-cyan-400 transition-colors"
                    title="Reserve Build Slot"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Production Roadmap Section */}
      <div className="space-y-6 pt-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg sm:text-xl font-bold font-mono text-white">
              Production Roadmap &amp; Pipeline Concepts
            </h3>
          </div>
          <span className="text-xs font-mono text-amber-400/90">
            Scheduled Post-Homologation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROADMAP_VEHICLES.map((vehicle) => (
            <div
              key={vehicle.slug}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 group relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300">
                    Roadmap
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {vehicle.category}
                  </span>
                </div>

                <div>
                  <h4 className="text-base font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">
                    {vehicle.name}
                  </h4>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    Target Range: {vehicle.ratedRangeKm} km (Simulated)
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {vehicle.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-500 block uppercase">Estimated Base</span>
                  <span className="text-sm font-bold font-mono text-white">{formatInr(vehicle.basePriceInr)}</span>
                </div>
                <Link
                  href={`/vehicles/${vehicle.slug}`}
                  className="px-3 py-1.5 rounded-lg font-mono text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1"
                >
                  <span>Specs</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Portfolio CTA */}
      <VehiclesCTA />
    </section>
  );
};
