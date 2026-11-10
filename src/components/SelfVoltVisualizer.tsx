"use client";

import React, { useState, useEffect } from "react";
import { Zap, Activity, RefreshCw, ArrowRight, ShieldCheck, Cpu, BatteryCharging, Gauge } from "lucide-react";
import { cn } from "@/lib/utils";

type OperationMode = "GLIDE_HARVEST" | "HIGH_TORQUE_ACCEL" | "HEAVY_REGEN_BRAKE" | "PACK_BALANCING";

export const SelfVoltVisualizer = () => {
  const [activeMode, setActiveMode] = useState<OperationMode>("GLIDE_HARVEST");
  const [acmEfficiency, setAcmEfficiency] = useState(98.4);
  const [harvestKw, setHarvestKw] = useState(38.5);
  const [packASoc, setPackASoc] = useState(84);
  const [packBSoc, setPackBSoc] = useState(62);
  const [isAutoCycle, setIsAutoCycle] = useState(true);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsAutoCycle(false);
    }
  }, []);

  // Auto-cycle through operating modes
  useEffect(() => {
    if (!isAutoCycle) return;
    const modes: OperationMode[] = ["GLIDE_HARVEST", "HIGH_TORQUE_ACCEL", "HEAVY_REGEN_BRAKE", "PACK_BALANCING"];
    let index = 0;
    const timer = setInterval(() => {
      index = (index + 1) % modes.length;
      setActiveMode(modes[index]);
    }, 4500);
    return () => clearInterval(timer);
  }, [isAutoCycle]);

  // Adjust metrics based on active mode
  useEffect(() => {
    if (activeMode === "GLIDE_HARVEST") {
      setHarvestKw(41.2);
      setAcmEfficiency(98.6);
      setPackASoc(82);
      setPackBSoc(68);
    } else if (activeMode === "HIGH_TORQUE_ACCEL") {
      setHarvestKw(12.4);
      setAcmEfficiency(97.9);
      setPackASoc(79);
      setPackBSoc(67);
    } else if (activeMode === "HEAVY_REGEN_BRAKE") {
      setHarvestKw(64.8);
      setAcmEfficiency(99.1);
      setPackASoc(80);
      setPackBSoc(74);
    } else {
      setHarvestKw(28.0);
      setAcmEfficiency(98.4);
      setPackASoc(76);
      setPackBSoc(76);
    }
  }, [activeMode]);

  const modeDetails = {
    GLIDE_HARVEST: {
      title: "Closed-Loop Glide Kinetic Harvest",
      desc: "Battery Pack A drives high-efficiency PMSM while kinetic rotation through the Permanent Magnet Generator (PMG) continuously charges Battery Pack B via the ACM controller.",
      flowColor: "text-cyan-400",
      accentBorder: "border-cyan-500/40",
      badge: "Normal Highway Glide",
    },
    HIGH_TORQUE_ACCEL: {
      title: "Dual-Pack Parallel Power Boost",
      desc: "Bidirectional Drive Assist (BDA) couples both Pack A and Pack B in sub-millisecond parallel synchronization to deliver maximum 760 Nm instant torque with zero thermal lag.",
      flowColor: "text-amber-400",
      accentBorder: "border-amber-500/40",
      badge: "Peak Acceleration / Overtake",
    },
    HEAVY_REGEN_BRAKE: {
      title: "High-Amp Kinetic Recovery Surge",
      desc: "During deceleration, electromagnetic retarder and dual axle harvesters surge up to 65+ kW back into the secondary cell matrix, eliminating brake pad wear and extending driving range.",
      flowColor: "text-emerald-400",
      accentBorder: "border-emerald-500/40",
      badge: "Deceleration & Downhill",
    },
    PACK_BALANCING: {
      title: "Smart Thermochemical Equalization",
      desc: "Dynamic solid-state switching redirects auxiliary load, balancing state-of-charge (SOC) and thermal gradients across both packs without any mechanical disconnect.",
      flowColor: "text-blue-400",
      accentBorder: "border-blue-500/40",
      badge: "Active Battery Balancing",
    },
  };

  return (
    <div className="w-full bg-[#050814]/90 border border-cyan-500/30 rounded-2xl p-6 lg:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl shadow-cyan-950/40">
      {/* Decorative Circuit Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Header & Controls */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400">
            <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Interactive Self-Volt Energy Flow Simulator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            Closed-Loop Dual-Pack Architecture
          </h3>
        </div>

        {/* Mode Selector Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              ["GLIDE_HARVEST", "Glide Harvest"],
              ["HIGH_TORQUE_ACCEL", "Power Boost"],
              ["HEAVY_REGEN_BRAKE", "Braking Regen"],
              ["PACK_BALANCING", "Pack Balancing"],
            ] as [OperationMode, string][]
          ).map(([mode, label]) => (
            <button
              key={mode}
              onClick={() => {
                setActiveMode(mode);
                setIsAutoCycle(false);
              }}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all",
                activeMode === mode
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800"
              )}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => setIsAutoCycle(!isAutoCycle)}
            className={cn(
              "p-1.5 rounded-lg text-xs border transition-colors",
              isAutoCycle
                ? "bg-cyan-950/60 text-cyan-400 border-cyan-500/40"
                : "bg-slate-900 text-slate-500 border-slate-800"
            )}
            title={isAutoCycle ? "Auto-cycling active" : "Auto-cycle paused"}
          >
            <RefreshCw className={cn("w-3.5 h-3.5", isAutoCycle && "animate-spin")} />
          </button>
        </div>
      </div>

      {/* Schematic Diagram Area */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Side: Battery Pack A */}
        <div className="lg:col-span-3 space-y-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4 text-cyan-400" />
                <span>PACK A (PRIMARY)</span>
              </span>
              <span className="text-cyan-400 font-bold">{packASoc}% SOC</span>
            </div>
            <div className="mt-2 text-lg font-bold text-white font-mono">
              400V Solid-State Matrix
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Main discharge stream supplying primary inverter and high-voltage bus.
            </p>
            {/* Battery bar indicator */}
            <div className="w-full bg-slate-950 rounded-full h-2 mt-3 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${packASoc}%` }}
              />
            </div>
          </div>
        </div>

        {/* Center: ACM, BDA & Permanent Magnet Harvester Hub */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#030611] border border-cyan-500/30 rounded-xl p-5 text-center relative overflow-hidden">
            {/* Animated Flow Ring */}
            <div className="absolute -top-12 -left-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>PATENTED ACM &amp; BDA ENERGY CONTROLLER</span>
            </div>

            <div className="grid grid-cols-3 gap-3 my-4">
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono uppercase text-slate-400">Kinetic Harvest</div>
                <div className="text-base sm:text-lg font-extrabold text-cyan-400 font-mono mt-0.5">
                  +{harvestKw} kW
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono uppercase text-slate-400">ACM Inverter Eff.</div>
                <div className="text-base sm:text-lg font-extrabold text-emerald-400 font-mono mt-0.5">
                  {acmEfficiency}%
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono uppercase text-slate-400">Continuous Loop</div>
                <div className="text-base sm:text-lg font-extrabold text-amber-400 font-mono mt-0.5">
                  Active
                </div>
              </div>
            </div>

            {/* Simulated Animated Schematic Graphic */}
            <div className="py-2 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Pack A</span>
              <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                ACM + PMG Harvester
              </span>
              <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">Pack B</span>
            </div>
          </div>
        </div>

        {/* Right Side: Battery Pack B */}
        <div className="lg:col-span-3 space-y-3">
          <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4 text-emerald-400" />
                <span>PACK B (RECOVERY)</span>
              </span>
              <span className="text-emerald-400 font-bold">{packBSoc}% SOC</span>
            </div>
            <div className="mt-2 text-lg font-bold text-white font-mono">
              400V Harvest Array
            </div>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Dynamically receives PMG alternator energy flow and decelerative recovery.
            </p>
            {/* Battery bar indicator */}
            <div className="w-full bg-slate-950 rounded-full h-2 mt-3 overflow-hidden border border-slate-800">
              <div
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${packBSoc}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mode Narrative Card */}
      <div className={cn("mt-6 p-4 rounded-xl bg-slate-900/70 border transition-all duration-300", modeDetails[activeMode].accentBorder)}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
            {modeDetails[activeMode].badge}
          </span>
          <span className="text-sm font-bold text-white font-mono">
            {modeDetails[activeMode].title}
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {modeDetails[activeMode].desc}
        </p>
      </div>
    </div>
  );
};
