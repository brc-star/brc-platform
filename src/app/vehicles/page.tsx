import React from "react";
import Link from "next/link";
import { Car, Zap, Gauge, Compass, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { VehiclesTopEmptyVideoContainer } from "@/components/VehiclesTopEmptyVideoContainer";
import { VehicleStudioEmpty } from "@/components/VehicleStudioEmpty";
import { VehiclePortfolioVideoContainer } from "@/components/VehiclePortfolioVideoContainer";
import { VehiclePortfolioNoImage } from "@/components/VehiclePortfolioNoImage";
import { VEHICLES_DATA } from "@/lib/data";
import { formatInr } from "@/lib/utils";
import { CLAIMS_REGISTRY } from "@/lib/claims";
import { ClaimDisclaimer } from "@/components/ClaimDisclaimer";

export const metadata = {
  title: "Vehicle Portfolio | BRC STAR Self Volt Electric Vehicles",
  description: "Explore BRC STAR's full electric vehicle portfolio: StarCraft GT Hyper-Sedan, StarPulse Luxury SUV, StarFleet Commercial, and StarTransit Electric Bus.",
  alternates: {
    canonical: "https://www.brcstar.in/vehicles",
  },
  openGraph: {
    title: "Vehicle Portfolio | BRC STAR",
    description: "BRC STAR electric mobility portfolio: flagship vehicles and future roadmap.",
    url: "https://www.brcstar.in/vehicles",
    type: "website",
  },
};

export default function VehiclesPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Section 03 Empty Video Container (At the very top) */}
      <VehiclesTopEmptyVideoContainer />

      {/* Header (Headline & Text moved below the top video container) */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Car className="w-3.5 h-3.5 text-cyan-400" />
          <span>03 VEHICLE PORTFOLIO</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Next-Generation Electric Vehicles for Every Sector
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          From ultra-aerodynamic luxury passenger hyper-sedans to heavy-duty commercial logistics vans and municipal electric transit coaches.
        </p>
      </div>

      {/* Active Studio Configurator */}
      <VehicleStudioEmpty />

      {/* Dedicated Empty Video Container (Ready for future visual video) */}
      <VehiclePortfolioVideoContainer />

      {/* New Dedicated No-Image Vehicle Portfolio Container */}
      <VehiclePortfolioNoImage />

      {/* 3 Categories Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Passenger EV */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              Passenger Segment
            </span>
            <h3 className="text-xl font-bold text-white font-mono">
              StarCraft GT &amp; StarPulse SUV
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              CAD/CFD passenger concept lineup targeting high intercity range and 0–100 km/h in {CLAIMS_REGISTRY.accel_starcraft_gt.metric} acceleration with dual-pack deceleration recoup (simulation target).
            </p>
            <div className="text-xs font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-800">
              <div>• Indicative target from {formatInr(1650000)} (Not binding)</div>
              <div>• Up to {CLAIMS_REGISTRY.range_starcraft_gt.metric} Target Range (Simulated)</div>
            </div>
          </div>
          <Link
            href="/vehicles/passenger"
            className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-center flex items-center justify-center gap-2"
          >
            <span>Explore Passenger EVs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Commercial EV */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
              Commercial Concept
            </span>
            <h3 className="text-xl font-bold text-white font-mono">
              StarFleet &amp; StarHauler Heavy Trucks
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Concept commercial platforms targeting illustrative operating cost reductions vs diesel benchmarks (subject to fleet tariff &amp; utilization assumptions).
            </p>
            <div className="text-xs font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-800">
              <div>• Indicative target from {formatInr(2450000)} (Not binding)</div>
              <div>• Up to 8,500 kg Payload Target</div>
            </div>
          </div>
          <Link
            href="/vehicles/commercial"
            className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-center flex items-center justify-center gap-2"
          >
            <span>Explore Commercial Fleet</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Electric Bus */}
        <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
              Heavy Municipal Transit
            </span>
            <h3 className="text-xl font-bold text-white font-mono">
              StarTransit 12M Electric Bus
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              12-meter low-floor high-capacity electric bus with dual-axle kinetic harvesters for 18-hour continuous municipal duty.
            </p>
            <div className="text-xs font-mono text-slate-400 space-y-1 pt-2 border-t border-slate-800">
              <div>• Indicative target from {formatInr(6500000)} (Not binding)</div>
              <div>• 72+ Passenger Concept Capacity</div>
            </div>
          </div>
          <Link
            href="/vehicles/bus"
            className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors text-center flex items-center justify-center gap-2"
          >
            <span>Explore Electric Bus</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <ClaimDisclaimer />
    </div>
  );
}
