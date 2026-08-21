"use client";

import React, { useState } from "react";
import { Users, TrendingUp, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { DEALER_TIERS } from "@/lib/data";
import { formatInr, cn } from "@/lib/utils";

export const DealerRoiCalculator = () => {
  const [selectedTierId, setSelectedTierId] = useState<string>("regional");
  const [monthlyVehicleSales, setMonthlyVehicleSales] = useState<number>(25);

  const currentTier = DEALER_TIERS.find((t) => t.id === selectedTierId) || DEALER_TIERS[1];

  // Financial model formulas
  const avgVehiclePriceInr = 2650000;
  const dealerMarginPct = 0.055; // 5.5% dealer gross margin on EV sale
  const monthlyCarMarginInr = monthlyVehicleSales * avgVehiclePriceInr * dealerMarginPct;
  const monthlyServiceAftersalesInr = monthlyVehicleSales * 18000; // AMC + diagnostics + parts
  const monthlyGrossEarningsInr = monthlyCarMarginInr + monthlyServiceAftersalesInr;
  const annualGrossEarningsInr = monthlyGrossEarningsInr * 12;

  const estimatedAnnualOpEx = currentTier.minInvestmentInr * 0.22; // 22% rent + staff + utilities
  const annualNetProfitInr = Math.max(0, annualGrossEarningsInr - estimatedAnnualOpEx);
  const calculatedRoiPct = ((annualNetProfitInr / currentTier.minInvestmentInr) * 100).toFixed(1);
  const breakEvenMonths = Math.min(36, Math.max(8, Math.round((currentTier.minInvestmentInr / (annualNetProfitInr / 12)))));

  return (
    <div className="w-full bg-[#050814]/90 border border-cyan-500/30 rounded-2xl p-6 lg:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
        <Users className="w-4 h-4 text-cyan-400" />
        <span>Franchise &amp; Territory Investment Economics</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
        Dealer Network ROI &amp; Cash Flow Simulator
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
        Partner with BRC STAR to establish exclusive regional experience hubs and certified Self-Volt service stations across high-growth Indian metro and tier-2 markets.
      </p>

      {/* Tier Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {DEALER_TIERS.map((tier) => (
          <button
            key={tier.id}
            onClick={() => setSelectedTierId(tier.id)}
            className={cn(
              "p-4 rounded-xl text-left border transition-all space-y-1.5",
              selectedTierId === tier.id
                ? "bg-cyan-950/60 border-cyan-400 shadow-lg shadow-cyan-950/50"
                : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300"
            )}
          >
            <div className="text-xs font-bold text-white font-mono">{tier.name}</div>
            <div className="text-[11px] text-cyan-300 font-mono">
              CapEx: {formatInr(tier.minInvestmentInr)}
            </div>
            <div className="text-[10px] text-slate-400">Space: {tier.minSpaceSqFt}</div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: Input Slider */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Target Monthly Unit Deliveries:</span>
              <span className="text-cyan-400 font-bold text-sm">{monthlyVehicleSales} EVs / Month</span>
            </div>
            <input
              type="range"
              min="5"
              max="80"
              step="1"
              value={monthlyVehicleSales}
              onChange={(e) => setMonthlyVehicleSales(Number(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400">
              <span>5 units (Initial Ramp)</span>
              <span>30 units (Mature Metro)</span>
              <span>80 units (Mega Territory)</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-mono uppercase text-slate-300">
              Franchise Entitlements Included
            </div>
            <div className="space-y-1.5 text-xs text-slate-300 font-mono">
              {currentTier.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: ROI Summary Card */}
        <div className="lg:col-span-6">
          <div className="bg-gradient-to-br from-cyan-950/60 via-[#090d1f] to-slate-950 border border-cyan-500/40 rounded-2xl p-6 relative overflow-hidden shadow-xl space-y-5">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 block">
                Projected Annual Net Operating Profit
              </span>
              <span className="text-3xl font-extrabold text-white font-mono tracking-tight">
                {formatInr(annualNetProfitInr)}
                <span className="text-xs text-slate-400 font-normal font-sans ml-2">/ year</span>
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-800">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Projected First-Year ROI
                </span>
                <span className="text-2xl font-bold text-emerald-400 font-mono">
                  {calculatedRoiPct}%
                </span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  Est. CapEx Break-Even
                </span>
                <span className="text-2xl font-bold text-cyan-300 font-mono">
                  ~{breakEvenMonths} Months
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href="/invest/partners"
                className="w-full py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Apply for Territory Franchise</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
