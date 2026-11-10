import React from "react";
import Link from "next/link";
import { Bus, Zap, Gauge, Compass, ShieldCheck, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { VEHICLES_DATA } from "@/lib/data";
import { formatInr } from "@/lib/utils";

export const metadata = {
  title: "Electric Bus Mobility | StarTransit 12M | BRC STAR",
  description: "High-capacity 12-meter electric bus for municipal transit authorities and intercity operators with kinetic energy recovery.",
  alternates: {
    canonical: "https://www.brcstar.in/vehicles/bus",
  },
  openGraph: {
    title: "Electric Bus Mobility | BRC STAR",
    description: "StarTransit 12M electric transit bus platform.",
    url: "https://www.brcstar.in/vehicles/bus",
    type: "website",
  },
};

export default function BusVehiclesPage() {
  const busVehicle = VEHICLES_DATA.find((v) => v.slug === "startransit-bus") || VEHICLES_DATA[3];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/vehicles" className="hover:text-cyan-400">Vehicles</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Electric Bus</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-xs font-mono text-emerald-300">
            <Bus className="w-3.5 h-3.5 text-emerald-400" />
            <span>MUNICIPAL &amp; INTERCITY MASS TRANSIT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            BRC StarTransit 12M: Closed-Loop Electric Transit Coach
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Engineered for high passenger density, zero tailpipe emissions, and continuous 18-hour daily municipal duty cycles. Features heavy-duty dual-axle PMG kinetic harvesters that recoup energy on frequent city bus stops.
          </p>
        </div>
      </div>

      {/* Main Bus Showcase */}
      <div className="p-6 sm:p-8 lg:p-12 rounded-3xl bg-slate-900/70 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Full Box Edge-to-Edge Visual Card */}
        <div className="lg:col-span-6 bg-white dark:bg-[#030611] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden relative group shadow-2xl flex flex-col justify-between vehicle-studio-card">
          <div className="relative w-full h-[300px] sm:h-[360px] overflow-hidden bg-slate-950">
            <img
              src={busVehicle.imageUrl || "/startransit-bus.png"}
              alt={busVehicle.name}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Capacity Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/50 text-xs font-mono font-semibold text-emerald-300 shadow-xl">
                12-Meter Monocoque &bull; 72+ Passenger Capacity
              </span>
            </div>
          </div>

          <div className="p-6 pt-4 space-y-1 relative z-10 border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-[#030611] vehicle-studio-footer">
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white font-sans">{busVehicle.name}</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{busVehicle.tagline}</p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {busVehicle.description}
          </p>

          <div className="grid grid-cols-3 gap-3 font-mono text-center">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Passenger Cap</div>
              <div className="text-base font-bold text-white mt-0.5">72 Riders</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Duty Range</div>
              <div className="text-base font-bold text-emerald-400 mt-0.5">480 km</div>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <div className="text-[10px] text-slate-400 uppercase">Dual-Axle Regen</div>
              <div className="text-base font-bold text-cyan-300 mt-0.5">85 kW</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase">Compliance &amp; Systems:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
              {busVehicle.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">INDICATIVE EX-SHOWROOM (ESTIMATED)</span>
              <span className="text-2xl font-bold text-white font-mono">{formatInr(busVehicle.basePriceInr)}</span>
              <span className="text-[9px] font-mono text-slate-500 block">Subject to homologation &amp; prototype validation</span>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/pre-book?model=${busVehicle.slug}`}
                className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
              >
                <span>Municipal RFP / Order</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
