"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, Leaf, Zap, ArrowRight } from "lucide-react";
import { formatInr, formatNumber } from "@/lib/utils";

export const RangeRoiCalculator = () => {
  const [dailyKm, setDailyKm] = useState<number>(80);
  const [currentVehicleType, setCurrentVehicleType] = useState<"petrol" | "diesel" | "standard_ev">("diesel");
  const [fuelPricePerLiter, setFuelPricePerLiter] = useState<number>(94);
  const [electricTariffPerKwh, setElectricTariffPerKwh] = useState<number>(8);

  const annualDistanceKm = dailyKm * 340; // 340 driving days/year

  // Benchmark consumptions
  const petrolMileageKmPerLiter = 13.5;
  const dieselMileageKmPerLiter = 16.0;
  const standardEvKwhPer100Km = 17.5;
  const selfVoltKwhPer100Km = 11.2; // 36% more efficient with closed-loop regeneration

  // Cost calculations
  let annualBaselineCost = 0;
  if (currentVehicleType === "petrol") {
    annualBaselineCost = (annualDistanceKm / petrolMileageKmPerLiter) * fuelPricePerLiter;
  } else if (currentVehicleType === "diesel") {
    annualBaselineCost = (annualDistanceKm / dieselMileageKmPerLiter) * fuelPricePerLiter;
  } else {
    annualBaselineCost = (annualDistanceKm / 100) * standardEvKwhPer100Km * electricTariffPerKwh;
  }

  const annualSelfVoltCost = (annualDistanceKm / 100) * selfVoltKwhPer100Km * electricTariffPerKwh;
  const annualSavingsInr = Math.max(0, annualBaselineCost - annualSelfVoltCost);
  const fiveYearSavingsInr = annualSavingsInr * 5;
  const co2AvoidedTonsPerYear = ((annualDistanceKm * 0.17) / 1000).toFixed(1);
  const regenKwhHarvestedPerYear = Math.round(annualDistanceKm * 0.063);

  return (
    <div className="w-full bg-[#050814]/90 border border-cyan-500/30 rounded-2xl p-6 lg:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
        <Calculator className="w-4 h-4 text-cyan-400" />
        <span>Economic &amp; Environmental Impact Analysis</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
        Total Cost of Ownership (TCO) &amp; Self-Volt ROI Engine
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
        Calculate your operating expense reduction when switching from conventional ICE or single-pack EVs to the BRC STAR Self-Volt regenerative powertrain.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Interactive Input Sliders & Controls */}
        <div className="lg:col-span-6 space-y-6">
          {/* Vehicle Type Switcher */}
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase text-slate-300">
              Current Benchmark Vehicle
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                ["petrol", "Petrol ICE (13.5 km/L)"],
                ["diesel", "Diesel ICE (16.0 km/L)"],
                ["standard_ev", "Conventional Single-Pack EV"],
              ].map(([type, label]) => (
                <button
                  key={type}
                  onClick={() => setCurrentVehicleType(type as any)}
                  className={`p-2.5 rounded-xl text-xs font-mono font-medium transition-all text-center border ${
                    currentVehicleType === type
                      ? "bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-950"
                      : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Daily Distance Slider */}
          <div className="space-y-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Daily Commute / Operation:</span>
              <span className="text-cyan-400 font-bold text-sm">{dailyKm} km / day</span>
            </div>
            <input
              type="range"
              min="20"
              max="350"
              step="5"
              value={dailyKm}
              onChange={(e) => setDailyKm(Number(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>20 km (Urban)</span>
              <span>180 km (Intercity)</span>
              <span>350 km (Fleet Commercial)</span>
            </div>
          </div>

          {/* Electricity Tariff */}
          <div className="space-y-2 bg-slate-900/50 p-4 rounded-xl border border-slate-800">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Electricity Tariff Rate:</span>
              <span className="text-cyan-400 font-bold text-sm">₹{electricTariffPerKwh} / kWh</span>
            </div>
            <input
              type="range"
              min="4"
              max="15"
              step="0.5"
              value={electricTariffPerKwh}
              onChange={(e) => setElectricTariffPerKwh(Number(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
          </div>
        </div>

        {/* Right: Calculated Metric Highlights */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-gradient-to-br from-cyan-950/60 via-[#090d1f] to-slate-950 border border-cyan-500/40 rounded-2xl p-6 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1 flex items-center justify-between">
              <span>Projected Annual Net Savings</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
              {formatInr(annualSavingsInr)}
              <span className="text-xs text-slate-400 font-normal font-sans ml-2">/ year</span>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">5-Year TCO Benefit</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">
                  {formatInr(fiveYearSavingsInr)}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Kinetic Energy Recouped</span>
                <span className="text-lg font-bold text-cyan-300 font-mono">
                  {formatNumber(regenKwhHarvestedPerYear)} kWh
                </span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Leaf className="w-4 h-4" />
                <span>{co2AvoidedTonsPerYear} MT CO₂ emissions prevented/yr</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
