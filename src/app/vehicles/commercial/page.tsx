import React from "react";
import Link from "next/link";
import { Truck, Zap, Gauge, Compass, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2, TrendingDown, Box, BatteryCharging } from "lucide-react";
import { VEHICLES_DATA } from "@/lib/data";
import { formatInr } from "@/lib/utils";

export const metadata = {
  title: "Commercial Electric Mobility | StarFleet, StarHauler & StarTitan Semi-Truck | BRC STAR",
  description: "Enterprise commercial electric vehicles: light cargo vans, rigid heavy freight trucks, and long-haul multi-axle electric semi-trailers with up to 52% diesel fuel substitution.",
};

export default function CommercialVehiclesPage() {
  const commercialVehicles = VEHICLES_DATA.filter((v) => v.category === "Commercial");

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/vehicles" className="hover:text-cyan-400">Vehicles</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Commercial Mobility Portfolio</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/30 text-xs font-mono text-amber-300">
            <Truck className="w-3.5 h-3.5 text-amber-400" />
            <span>ENTERPRISE LOGISTICS &amp; HEAVY FREIGHT ELECTRIFICATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Commercial Electric Fleet &amp; Heavy Freight Trucks
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From urban last-mile delivery platforms to heavy-duty multi-axle intercity cargo haulers and cross-country semi-trailers. Powered by BRC STAR Self-Volt closed-loop energy harvesting, reducing commercial fleet OPEX by up to 52% below diesel parity.
          </p>
        </div>
      </div>

      {/* Commercial Vehicles Showcase List */}
      <div className="space-y-12">
        {commercialVehicles.map((vehicle) => (
          <div
            key={vehicle.slug}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Full Box Edge-to-Edge Visual Card */}
            <div className="lg:col-span-6 bg-white dark:bg-[#030611] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden relative group shadow-2xl flex flex-col justify-between vehicle-studio-card">
              <div className="relative w-full h-[300px] sm:h-[360px] overflow-hidden bg-slate-950">
                <img
                  src={vehicle.imageUrl || "/starfleet-commercial.jpg"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Payload & Aero Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-500/50 text-xs font-mono font-semibold text-amber-300 shadow-xl">
                    {vehicle.slug === "startitan-semi-truck"
                      ? "24,000 kg Payload • 85 m³ Mega-Trailer"
                      : vehicle.slug === "starhauler-truck"
                      ? "8,500 kg Payload • 38.5 m³ High-Cube"
                      : "1,850 kg Payload • 12.5 m³ Volume"}
                  </span>
                </div>
              </div>

              <div className="p-6 pt-4 space-y-1 relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#030611] vehicle-studio-footer">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-sans">{vehicle.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{vehicle.tagline}</p>
              </div>
            </div>

            {/* Engineering Specs & Pre-Booking CTA */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {vehicle.description}
              </p>

              <div className="grid grid-cols-3 gap-3 font-mono text-center">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Gross Payload</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {vehicle.slug === "startitan-semi-truck"
                      ? "24,000 kg"
                      : vehicle.slug === "starhauler-truck"
                      ? "8,500 kg"
                      : "1,850 kg"}
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Duty Range</div>
                  <div className="text-base font-bold text-amber-400 mt-0.5">
                    {vehicle.ratedRangeKm} km
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Annual TCO Gain</div>
                  <div className="text-base font-bold text-emerald-400 mt-0.5">
                    {vehicle.slug === "startitan-semi-truck"
                      ? "₹21.5 Lakhs"
                      : vehicle.slug === "starhauler-truck"
                      ? "₹11.2 Lakhs"
                      : "₹4.8 Lakhs"}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Fleet Specifications:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  {vehicle.features.slice(0, 4).map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Commercial Pricing</span>
                  <span className="text-2xl font-bold text-white font-mono">{formatInr(vehicle.basePriceInr)}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    View Specs
                  </Link>
                  <Link
                    href={`/pre-book?model=${vehicle.slug}`}
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
                  >
                    <span>Fleet Pre-Order</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
