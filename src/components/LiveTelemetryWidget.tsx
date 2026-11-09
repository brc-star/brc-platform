"use client";

import React, { useState, useEffect } from "react";
import { Gauge, Zap, Thermometer, Activity } from "lucide-react";

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
    <div className="w-full bg-white/80 border border-slate-200/80 shadow-md backdrop-blur-xl dark:bg-[#040714] dark:border-cyan-500/30 dark:shadow-2xl rounded-2xl p-3 sm:p-5 relative overflow-hidden font-mono text-xs transition-colors duration-300">
      {/* Live Indicator Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-2.5 mb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
            CAN-Bus High-Speed Telemetry Stream
          </span>
        </div>
        <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-2">
          <span>VIN: {telemetry.vin}</span>
          <span className="px-1.5 py-0.5 rounded bg-cyan-100/80 text-cyan-800 border border-cyan-300/60 dark:bg-cyan-950 dark:text-cyan-400 dark:border-cyan-500/30">
            50 Hz Rate
          </span>
        </div>
      </div>

      {/* Primary Metrics Grid (2x2 on mobile, 4-col on desktop) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {/* Speed */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-2.5 sm:p-3 rounded-xl transition-colors">
          <div className="text-slate-500 dark:text-slate-400 text-[9px] sm:text-[10px] uppercase flex items-center gap-1 truncate">
            <Gauge className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span className="truncate">Chassis Velocity</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            {telemetry.speedKmh}{" "}
            <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">km/h</span>
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
            PMSM: {telemetry.motorRpm} RPM
          </div>
        </div>

        {/* Kinetic Harvest */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-2.5 sm:p-3 rounded-xl transition-colors">
          <div className="text-slate-500 dark:text-slate-400 text-[9px] sm:text-[10px] uppercase flex items-center gap-1 truncate">
            <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span className="truncate">Kinetic Harvest</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-cyan-600 dark:text-cyan-400 mt-1">
            +{telemetry.regenKw}{" "}
            <span className="text-[10px] font-normal text-cyan-700 dark:text-cyan-300">kW</span>
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
            ACM Transfer: {telemetry.acmCurrentTransferA} A
          </div>
        </div>

        {/* Dual Pack Status */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-2.5 sm:p-3 rounded-xl transition-colors">
          <div className="text-slate-500 dark:text-slate-400 text-[9px] sm:text-[10px] uppercase flex items-center gap-1 truncate">
            <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="truncate">Pack A / B Bus</span>
          </div>
          <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 truncate">
            {telemetry.packAVoltage}V / {telemetry.packBVoltage}V
          </div>
          <div className="text-[9px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 truncate">
            SOC: {telemetry.packASoc}% | {telemetry.packBSoc}%
          </div>
        </div>

        {/* Thermal Telemetry */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-2.5 sm:p-3 rounded-xl transition-colors">
          <div className="text-slate-500 dark:text-slate-400 text-[9px] sm:text-[10px] uppercase flex items-center gap-1 truncate">
            <Thermometer className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
            <span className="truncate">Thermal Matrix</span>
          </div>
          <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
            {telemetry.batteryCellMaxTempC}°C
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
            Motor Core: {telemetry.motorTempC}°C
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveTelemetryWidget;
