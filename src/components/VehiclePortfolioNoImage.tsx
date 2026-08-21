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
import { formatInr } from "@/lib/utils";

export interface PortfolioVehicleItem {
  id: string;
  vehicleNumber: string;
  name: string;
  category: string;
  description: string;
  specs: { label: string; value: string }[];
  priceInr: number;
  specsUrl: string;
  drivetrainBadge: string;
}

export const PORTFOLIO_VEHICLES_NO_IMAGE: PortfolioVehicleItem[] = [
  {
    id: "starcraft-gt",
    vehicleNumber: "01",
    name: "BRC StarCraft GT",
    category: "Premium Electric SUV",
    description:
      "Premium Self-Volt electric SUV designed for high-performance passenger mobility, long-distance driving and intelligent energy management.",
    specs: [
      { label: "Power", value: "380 kW Dual Drive" },
      { label: "Architecture", value: "800V Dual Architecture" },
      { label: "Acceleration", value: "0–100 km/h in 3.2s" },
      { label: "Self-Volt Range", value: "Up to 723 km" },
      { label: "Kinetic Regeneration", value: "+42 kW" },
      { label: "Drivetrain", value: "Dual Motor AWD" },
    ],
    priceInr: 3450000,
    specsUrl: "/vehicles/passenger",
    drivetrainBadge: "Dual Motor AWD • 800V",
  },
  {
    id: "starpulse",
    vehicleNumber: "02",
    name: "BRC StarPulse",
    category: "Premium Electric SUV",
    description:
      "Smart urban and long-range electric SUV focused on efficiency, comfort, connected technology and Self-Volt energy recovery.",
    specs: [
      { label: "Architecture", value: "800V System Architecture" },
      { label: "Drivetrain", value: "Dual Motor AWD" },
      { label: "Range", value: "Up to 650+ km" },
      { label: "Energy Management", value: "Intelligent AI Control" },
      { label: "Kinetic Harvest", value: "Continuous Self-Volt" },
      { label: "Cabin", value: "Premium Connected Cabin" },
    ],
    priceInr: 2950000,
    specsUrl: "/vehicles/passenger",
    drivetrainBadge: "Intelligent e-AWD • 800V",
  },
  {
    id: "starfleet-commercial",
    vehicleNumber: "03",
    name: "BRC StarFleet Commercial",
    category: "Commercial Electric Vehicle",
    description:
      "Practical electric mobility platform designed for fleet operators, logistics businesses and high-utilization commercial applications.",
    specs: [
      { label: "Powertrain", value: "High-Torque Electric Drive" },
      { label: "Battery", value: "Commercial-Grade LFP" },
      { label: "Energy Recovery", value: "Self-Volt Dual-Pack" },
      { label: "Fleet Intelligence", value: "Enterprise Telematics" },
      { label: "Regen System", value: "Active Dynamic Braking" },
      { label: "Operating Cost", value: "Low Maintenance TCO" },
    ],
    priceInr: 2450000,
    specsUrl: "/vehicles/commercial",
    drivetrainBadge: "Fleet Duty • High-Torque",
  },
  {
    id: "starhauler-truck",
    vehicleNumber: "04",
    name: "BRC StarHauler Heavy Electric Truck",
    category: "Heavy Electric Truck",
    description:
      "Heavy-duty electric truck engineered for commercial transportation, logistics and high-load applications.",
    specs: [
      { label: "Powertrain", value: "High-Torque Electric Powertrain" },
      { label: "Battery Tech", value: "Heavy-Duty Battery Architecture" },
      { label: "Kinetic Harvest", value: "Self-Volt Energy Recovery" },
      { label: "Thermal Control", value: "Intelligent Immersion Management" },
      { label: "Braking", value: "Regenerative High-Load Braking" },
      { label: "Architecture", value: "Fleet-Ready Multi-Axle" },
    ],
    priceInr: 4950000,
    specsUrl: "/vehicles/commercial",
    drivetrainBadge: "Multi-Axle Heavy • 6x4",
  },
  {
    id: "startitan-semi-truck",
    vehicleNumber: "05",
    name: "BRC StarTitan Heavy Semi-Trailer Truck",
    category: "Heavy-Duty Semi-Trailer EV",
    description:
      "Next-generation heavy electric transportation platform designed for long-haul logistics and high-capacity freight operations.",
    specs: [
      { label: "Powertrain", value: "High-Output Dual E-Axles" },
      { label: "Battery System", value: "Heavy-Duty Dual Battery Setup" },
      { label: "Kinetic Harvester", value: "Advanced Quad-Axle Recovery" },
      { label: "Drive Torque", value: "2,400 Nm High-Torque System" },
      { label: "Thermal Loop", value: "Intelligent Thermal Management" },
      { label: "Configuration", value: "Long-Haul Highway Prime Mover" },
    ],
    priceInr: 7950000,
    specsUrl: "/vehicles/commercial",
    drivetrainBadge: "24-Ton Freight • Ultra-Torque",
  },
  {
    id: "startransit-bus",
    vehicleNumber: "06",
    name: "BRC StarTransit Electric Bus",
    category: "Electric Bus",
    description:
      "Self-Volt electric mobility platform for city transportation, institutional mobility, school transport and premium passenger services.",
    specs: [
      { label: "Battery Pack", value: "High-Capacity 240 kWh Matrix" },
      { label: "Energy Harvest", value: "Self-Volt Energy Recovery" },
      { label: "Regen Output", value: "+85 kW Dual-Axle Harvester" },
      { label: "Fleet Telematics", value: "Municipal Fleet Management" },
      { label: "Drive Motor", value: "High-Torque 350 kW Electric Drive" },
      { label: "Capacity", value: "Multiple Seating Configurations (72+)" },
    ],
    priceInr: 6500000,
    specsUrl: "/vehicles/bus",
    drivetrainBadge: "12-Meter Monocoque • 72 Riders",
  },
];

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
        {PORTFOLIO_VEHICLES_NO_IMAGE.map((vehicle) => (
          <div
            key={vehicle.id}
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
                  {vehicle.category}
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
                  {vehicle.specs.map((spec, sIdx) => (
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
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">
                    Indicative Ex-Showroom
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold font-mono text-white">
                    {formatInr(vehicle.priceInr)}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  Self-Volt Active
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href={vehicle.specsUrl}
                  className="flex-1 py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all text-center flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20 group-hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Full Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/pre-book?model=${vehicle.id}`}
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
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#050814] via-slate-900/90 to-[#02040a] border border-cyan-500/30 shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>ZERO-EMISSION ECOSYSTEM</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
            Explore the Future of Self-Volt Mobility
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            From premium passenger vehicles to heavy-duty commercial transportation, BRC STAR is building a complete electric mobility ecosystem powered by Self-Volt technology.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
          <Link
            href="/vehicles"
            className="px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-[1.02]"
          >
            <span>Explore All Vehicles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-cyan-300 hover:text-white bg-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2"
          >
            <span>Request Vehicle Details</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
