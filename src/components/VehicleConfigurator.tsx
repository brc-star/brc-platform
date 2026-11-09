"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Car,
  Zap,
  Gauge,
  Compass,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  VEHICLES_DATA,
  VehicleModelData,
  STANDARD_DRIVETRAIN_TRIMS,
  COMMON_DISCLAIMERS,
  calculateVehiclePrice,
} from "@/data/vehicles";
import { cn, formatInr } from "@/lib/utils";

// Filter out alias entries so only primary models appear in model picker tabs
const PRIMARY_VEHICLES = VEHICLES_DATA.filter((v) => v.slug !== "starfleet-logistic");

export const VehicleConfigurator = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>("starcraft-gt");
  const [selectedTrim, setSelectedTrim] = useState<"standard" | "long_range" | "performance">("standard");
  const [selectedAngle, setSelectedAngle] = useState<"front" | "side" | "aero">("front");

  // Single Source of Truth for current vehicle
  const currentVehicle: VehicleModelData =
    PRIMARY_VEHICLES.find((v) => v.slug === selectedSlug) || PRIMARY_VEHICLES[0];

  // Single Source of Truth for current trim
  const activeTrim =
    STANDARD_DRIVETRAIN_TRIMS.find((t) => t.id === selectedTrim) || STANDARD_DRIVETRAIN_TRIMS[0];

  // Derived price calculation: basePrice + activeTrim.priceOffset
  const calculatedPrice = calculateVehiclePrice(currentVehicle.basePriceInr, activeTrim.priceOffset);

  // Dynamic angle-aware vehicle image resolution
  const activeVehicleImage = (() => {
    if (selectedSlug === "starcraft-gt") {
      if (selectedAngle === "aero" && currentVehicle.aeroImageUrl) {
        return currentVehicle.aeroImageUrl;
      }
      if (selectedAngle === "side" && currentVehicle.sideImageUrl) {
        return currentVehicle.sideImageUrl;
      }
      return currentVehicle.imageUrl;
    }
    return currentVehicle.imageUrl;
  })();

  return (
    <div className="w-full bg-[#050814]/90 border border-cyan-500/20 rounded-2xl p-4 sm:p-6 lg:p-7 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Model Selection Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 border-b border-slate-800 pb-3 mb-5">
        {PRIMARY_VEHICLES.map((v) => (
          <button
            key={v.slug}
            onClick={() => {
              setSelectedSlug(v.slug);
            }}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5",
              selectedSlug === v.slug
                ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 font-bold"
                : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
            )}
          >
            <Car className="w-3.5 h-3.5" />
            <span>{v.name}</span>
          </button>
        ))}
      </div>

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* Left: Studio Canvas */}
        <div className="lg:col-span-6 flex flex-col">
          {/* Visual Canvas - Full-Box */}
          <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] rounded-xl bg-slate-950 border border-cyan-500/30 overflow-hidden group shadow-xl flex flex-col justify-between vehicle-configurator-canvas">
            {/* Full Bleed Edge-to-Edge Vehicle Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={activeVehicleImage || "/brc-starcraft-gt-suv.png"}
                alt={currentVehicle.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30 pointer-events-none" />
              {/* Cyan Studio Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none bg-cyan-500/30" />
            </div>

            {/* Top Bar: Category Pill & Aero Drag Badge */}
            <div className="relative z-20 p-3 flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-300 shadow-md">
                {currentVehicle.category} Architecture
              </span>
              <div className="px-2.5 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono font-bold text-cyan-300 shadow-md">
                {currentVehicle.dragCoefficientCd}
              </div>
            </div>

            {/* Bottom Bar: Title & Angle Controls */}
            <div className="relative z-20 p-3.5 pt-2 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="space-y-0.5">
                <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-sans">
                  {currentVehicle.name}
                </h4>
                <p className="text-[11px] font-mono text-slate-300 uppercase tracking-wider">
                  {selectedAngle.toUpperCase()} VIEW &bull; {currentVehicle.drivetrainBadge}
                </p>
              </div>

              {/* Angle Selectors */}
              <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md p-0.5 rounded-lg border border-slate-700 shrink-0">
                {(["front", "side", "aero"] as ("front" | "side" | "aero")[]).map((angle) => (
                  <button
                    key={angle}
                    onClick={() => setSelectedAngle(angle)}
                    className={cn(
                      "px-2 py-0.5 rounded text-[9px] font-mono uppercase transition-colors",
                      selectedAngle === angle
                        ? "bg-cyan-400 text-slate-950 font-bold shadow-sm"
                        : "text-slate-400 hover:text-slate-200"
                    )}
                  >
                    {angle}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Engineering Spec Matrix & Price Summary */}
        <div className="lg:col-span-6 space-y-3.5">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
              <div className="text-[9px] font-mono text-slate-400 uppercase">0-100 km/h</div>
              <div className="text-sm sm:text-base font-bold font-mono text-white mt-0.5">
                {currentVehicle.acceleration.split(" ")[0] || "3.2s"}
              </div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
              <div className="text-[9px] font-mono text-slate-400 uppercase">Self-Volt Range</div>
              <div className="text-sm sm:text-base font-bold font-mono text-cyan-400 mt-0.5">
                {selectedTrim === "standard"
                  ? Math.round(currentVehicle.ratedRangeKm * 0.85)
                  : currentVehicle.ratedRangeKm}{" "}
                km
              </div>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl text-center">
              <div className="text-[9px] font-mono text-slate-400 uppercase">Kinetic Harvest</div>
              <div className="text-sm sm:text-base font-bold font-mono text-emerald-400 mt-0.5">
                +{currentVehicle.selfVoltRegenKw} kW
              </div>
            </div>
          </div>

          {/* Trim Selection */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono uppercase text-slate-400 flex items-center justify-between">
              <span>Select Drivetrain Trim</span>
              <span className="text-cyan-400 font-semibold">{currentVehicle.drivetrainBadge}</span>
            </div>

            <div className="space-y-1.5">
              {STANDARD_DRIVETRAIN_TRIMS.map((trim) => (
                <button
                  key={trim.id}
                  onClick={() => setSelectedTrim(trim.id)}
                  className={cn(
                    "w-full p-2.5 rounded-xl text-left border transition-all flex items-center justify-between",
                    selectedTrim === trim.id
                      ? "bg-cyan-950/40 border-cyan-500/60 shadow-md shadow-cyan-950"
                      : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300"
                  )}
                >
                  <div>
                    <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                      <span>{trim.name}</span>
                      {trim.badge && (
                        <span className="text-[8px] px-1 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                          {trim.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {trim.description(currentVehicle.name, currentVehicle.ratedRangeKm)}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "text-[11px] font-mono font-semibold",
                      trim.priceOffset > 0 ? "text-cyan-400" : "text-slate-300"
                    )}
                  >
                    {trim.priceOffset === 0 ? "Base Included" : `+${formatInr(trim.priceOffset)}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Pricing & Checkout Direct Trigger */}
          <div className="pt-2.5 border-t border-slate-800 space-y-2.5">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-slate-400 block tracking-wider">
                  {COMMON_DISCLAIMERS.priceLabel}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white font-mono">
                  {formatInr(calculatedPrice)}
                </span>
                <span className="text-[10px] font-mono text-slate-500 block">
                  {COMMON_DISCLAIMERS.homologationNotice}
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-emerald-400 block">
                  {COMMON_DISCLAIMERS.tokenBadge}
                </span>
                <span className="text-[11px] text-slate-400">{COMMON_DISCLAIMERS.targetDelivery}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                href={`/pre-book?model=${currentVehicle.slug}&trim=${selectedTrim}`}
                className="flex-1 min-h-[44px] py-2.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all text-center flex items-center justify-center gap-2 shadow-md shadow-cyan-500/25"
              >
                <span>Pre-Book This Build</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href={`/vehicles/${currentVehicle.slug}`}
                className="min-h-[44px] py-2.5 px-3.5 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-center"
                title="View Granular Specifications"
              >
                Full Specs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
