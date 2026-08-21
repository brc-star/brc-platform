"use client";

import React, { useState, useEffect } from "react";
import { Gauge, Zap, Thermometer, Radio, Cpu, Activity, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export const LiveTelemetryWidget = () => {
  const [telemetry, setTelemetry] = useState({
    vin: "BRC-2026-ST-0042",
    model: "StarCraft GT (Prototype V2)",
    speedKmh: 94.2,
    motorRpm: 6820,
    packAVoltage: 402.4,
    packBVoltage: 398.1,
    packASoc: 81.4,
    packBSoc: 73.2,
    regenKw: 36.8,
    motorTempC: 48.5,
    inverterTempC: 42.1,
    batteryCellMaxTempC: 32.8,
    acmCurrentTransferA: 92.4,
    timestamp: new Date().toISOString(),
  });

  // Simulated live CAN-Bus streaming feed
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry((prev) => ({
        ...prev,
        speedKmh: +(92 + Math.sin(Date.now() / 1500) * 8).toFixed(1),
        motorRpm: Math.round(6600 + Math.sin(Date.now() / 1500) * 550),
        packAVoltage: +(402 + (Math.random() - 0.5) * 1.5).toFixed(1),
        packBVoltage: +(398 + (Math.random() - 0.5) * 1.2).toFixed(1),
        regenKw: +(34 + Math.cos(Date.now() / 1200) * 7.5).toFixed(1),
        acmCurrentTransferA: +(88 + Math.sin(Date.now() / 1000) * 12).toFixed(1),
        motorTempC: +(48 + Math.random() * 0.4).toFixed(1),
        batteryCellMaxTempC: +(32.8 + Math.random() * 0.2).toFixed(1),
        timestamp: new Date().toISOString(),
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#040714] border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden shadow-2xl font-mono text-xs">
      {/* Live Indicator Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
            CAN-Bus High-Speed Telemetry Stream
          </span>
        </div>
        <div className="text-[10px] text-slate-400 flex items-center gap-2">
          <span>VIN: {telemetry.vin}</span>
          <span className="px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
            50 Hz Rate
          </span>
        </div>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Speed */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Gauge className="w-3.5 h-3.5 text-cyan-400" />
            <span>Chassis Velocity</span>
          </div>
          <div className="text-xl font-bold text-white mt-1">
            {telemetry.speedKmh}{" "}
            <span className="text-[11px] font-normal text-slate-400">km/h</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            PMSM: {telemetry.motorRpm} RPM
          </div>
        </div>

        {/* Kinetic Harvest */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Kinetic Harvest</span>
          </div>
          <div className="text-xl font-bold text-cyan-400 mt-1">
            +{telemetry.regenKw}{" "}
            <span className="text-[11px] font-normal text-cyan-300">kW</span>
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            ACM Transfer: {telemetry.acmCurrentTransferA} A
          </div>
        </div>

        {/* Dual Pack Status */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pack A / B Bus</span>
          </div>
          <div className="text-base font-bold text-white mt-1">
            {telemetry.packAVoltage}V / {telemetry.packBVoltage}V
          </div>
          <div className="text-[10px] text-emerald-400 mt-0.5">
            SOC: {telemetry.packASoc}% | {telemetry.packBSoc}%
          </div>
        </div>

        {/* Thermal Telemetry */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl">
          <div className="text-slate-400 text-[10px] uppercase flex items-center gap-1">
            <Thermometer className="w-3.5 h-3.5 text-amber-400" />
            <span>Thermal Matrix</span>
          </div>
          <div className="text-xl font-bold text-white mt-1">
            {telemetry.batteryCellMaxTempC}°C
          </div>
          <div className="text-[10px] text-slate-500 mt-0.5">
            Motor Core: {telemetry.motorTempC}°C
          </div>
        </div>
      </div>
    </div>
  );
};
