import React from "react";
import Link from "next/link";
import { Car, Zap, Gauge, Compass, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { VEHICLES_DATA } from "@/lib/data";
import { formatInr } from "@/lib/utils";

export const metadata = {
  title: "Passenger Electric Vehicles | StarCraft GT & StarPulse | BRC STAR",
  description: "Explore BRC STAR's luxury deep-tech passenger lineup: the StarCraft GT aerodynamic hyper-sedan and StarPulse luxury long-range electric SUV.",
  alternates: {
    canonical: "https://www.brcstar.in/vehicles/passenger",
  },
  openGraph: {
    title: "Passenger Electric Vehicles | BRC STAR",
    description: "StarCraft GT and StarPulse luxury electric passenger lineup.",
    url: "https://www.brcstar.in/vehicles/passenger",
    type: "website",
  },
};

export default function PassengerVehiclesPage() {
  const passengerVehicles = VEHICLES_DATA.filter((v) => v.category === "Passenger");

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/vehicles" className="hover:text-cyan-400">Vehicles</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Passenger EV Portfolio</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <Car className="w-3.5 h-3.5 text-cyan-400" />
            <span>LUXURY DEEP-TECH PASSENGER EV</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            StarCraft GT Hyper-Sedan &amp; StarPulse Luxury SUV
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Crafted for discerning drivers who demand aerospace aerodynamics, sub-3.5s acceleration, and peerless intercity endurance unlocked by BRC STAR Self Volt closed-loop regeneration.
          </p>
        </div>
      </div>

      {/* Vehicle Showcases */}
      <div className="space-y-12">
        {passengerVehicles.map((vehicle) => (
          <div
            key={vehicle.slug}
            className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/30 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Visual Studio Card - Full Box Fit with Light & Dark Mode Contrast */}
            <div className="lg:col-span-6 bg-white dark:bg-[#030611] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden relative group shadow-2xl flex flex-col justify-between vehicle-studio-card">
              {/* Full Box Vehicle Image */}
              <div className="relative w-full h-[300px] sm:h-[360px] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={vehicle.imageUrl || "/brc-starcraft-gt-suv.png"}
                  alt={vehicle.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Aero Drag Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-xs font-mono font-semibold text-cyan-300 shadow-xl">
                    {vehicle.dragCoefficientCd}
                  </span>
                </div>
              </div>

              {/* Title & Tagline Inset */}
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
                  <div className="text-[10px] text-slate-400 uppercase">0-100 km/h</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {vehicle.acceleration.split(" ")[0]}
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Self-Volt Range</div>
                  <div className="text-base font-bold text-cyan-400 mt-0.5">
                    {vehicle.ratedRangeKm} km
                  </div>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div className="text-[10px] text-slate-400 uppercase">Peak Power</div>
                  <div className="text-base font-bold text-white mt-0.5">
                    {vehicle.motorPowerKw} kW
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">
                  Key Proprietary Technologies:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  {vehicle.features.slice(0, 4).map((feat) => (
                    <div key={feat} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">
                    INDICATIVE EX-SHOWROOM (ESTIMATED)
                  </span>
                  <span className="text-2xl font-bold text-white font-mono">
                    {formatInr(vehicle.basePriceInr)}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block">
                    Subject to homologation &amp; prototype validation
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    href={`/vehicles/${vehicle.slug}`}
                    className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    View Granular Specs
                  </Link>
                  <Link
                    href="/pre-book"
                    className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-1.5 shadow-lg shadow-cyan-500/20"
                  >
                    <span>Reserve Slot</span>
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
