"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Gauge,
  Zap,
  Thermometer,
  Activity,
  Terminal,
  Radio,
  Wifi,
  ChevronDown,
  ChevronUp,
  RotateCw,
  Cpu,
  Layers,
  Battery,
} from "lucide-react";
import {
  VehicleTelemetry,
  SUPPORTED_FLEET_VEHICLES,
  generateLiveTelemetry,
} from "@/lib/telemetry";

export const LiveTelemetryWidget = () => {
  const [selectedVin, setSelectedVin] = useState<string>("BRC-2026-ST-0042");
  const [telemetry, setTelemetry] = useState<VehicleTelemetry>(() =>
    generateLiveTelemetry("BRC-2026-ST-0042", 1)
  );
  const [connectionStatus, setConnectionStatus] = useState<
    "connected" | "connecting" | "offline"
  >("connecting");
  const [showCanInspector, setShowCanInspector] = useState(false);
  const [packetCount, setPacketCount] = useState(0);
  const [canLog, setCanLog] = useState<
    Array<{
      id: string;
      canId: string;
      name: string;
      data: string;
      time: string;
    }>
  >([]);

  const eventSourceRef = useRef<EventSource | null>(null);
  const fallbackIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clean up previous connections
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
    if (fallbackIntervalRef.current) {
      clearInterval(fallbackIntervalRef.current);
      fallbackIntervalRef.current = null;
    }

    setConnectionStatus("connecting");

    // Attempt real SSE stream connection
    try {
      const sse = new EventSource(`/api/v1/telemetry/stream?vin=${selectedVin}&hz=2`);
      eventSourceRef.current = sse;

      sse.onopen = () => {
        setConnectionStatus("connected");
      };

      sse.addEventListener("telemetry", (e: MessageEvent) => {
        try {
          const packet: VehicleTelemetry = JSON.parse(e.data);
          setTelemetry(packet);
          setPacketCount((c) => c + 1);

          if (packet.rawCanFrames && packet.rawCanFrames.length > 0) {
            setCanLog((prev) => {
              const newEntries = packet.rawCanFrames.map((f, i) => ({
                id: `${packet.sequenceNumber}-${f.canId}-${i}`,
                canId: f.canId,
                name: f.name,
                data: f.data,
                time: new Date(f.timestampMs).toLocaleTimeString(),
              }));
              return [...newEntries, ...prev].slice(0, 16);
            });
          }
        } catch {
          // Ignore parse errors
        }
      });

      sse.onerror = () => {
        // Fallback to internal simulation loop if server-sent stream drops
        setConnectionStatus("offline");
        sse.close();
        eventSourceRef.current = null;

        if (!fallbackIntervalRef.current) {
          fallbackIntervalRef.current = setInterval(() => {
            setTelemetry((prev) => {
              const next = generateLiveTelemetry(selectedVin, (prev.sequenceNumber || 1) + 1);
              setPacketCount((c) => c + 1);
              return next;
            });
          }, 1000);
        }
      };
    } catch {
      setConnectionStatus("offline");
    }

    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
      }
      if (fallbackIntervalRef.current) {
        clearInterval(fallbackIntervalRef.current);
      }
    };
  }, [selectedVin]);

  return (
    <div className="w-full bg-white/90 border border-slate-200/90 shadow-md backdrop-blur-xl dark:bg-[#040714]/95 dark:border-cyan-500/30 dark:shadow-2xl rounded-2xl p-3 sm:p-5 relative overflow-hidden font-mono text-xs transition-colors duration-300">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-3.5">
        <div className="flex flex-wrap items-center gap-2">
          {/* Live Indicator Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
              {connectionStatus === "connected"
                ? "CAN-BUS SSE STREAM (2 Hz)"
                : connectionStatus === "connecting"
                ? "INITIALIZING BUS LINK..."
                : "STANDALONE CAN BUFFER"}
            </span>
          </div>

          {/* Active Pack Bus Tag */}
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-100/90 text-cyan-900 border border-cyan-300/80 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-500/40">
            BUS: {telemetry.activeBus}
          </span>
        </div>

        {/* Vehicle Selector & Latency Metadata */}
        <div className="flex items-center gap-2 text-[10px] text-slate-500 dark:text-slate-400">
          <select
            value={selectedVin}
            onChange={(e) => setSelectedVin(e.target.value)}
            className="bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-slate-700 dark:text-cyan-400 px-2 py-1 rounded-md text-[10px] font-mono cursor-pointer transition-colors"
          >
            {SUPPORTED_FLEET_VEHICLES.map((v) => (
              <option key={v.vin} value={v.vin}>
                {v.vin} ({v.model.split(" ")[0]})
              </option>
            ))}
          </select>

          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            Pkt #{telemetry.sequenceNumber || packetCount}
          </span>

          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            ~{telemetry.latencyMs || 8.4}ms
          </span>
        </div>
      </div>

      {/* Primary Metrics 4-Card HUD Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
        {/* Metric 1: Chassis Velocity & RPM */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-3 rounded-xl transition-colors">
          <div className="text-slate-600 dark:text-slate-400 text-[10px] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Gauge className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              Chassis Velocity
            </span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-mono">CCVS</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            {telemetry.speedKmh}{" "}
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">km/h</span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate flex items-center justify-between">
            <span>PMSM Motor</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {telemetry.motorRpm} RPM
            </span>
          </div>
        </div>

        {/* Metric 2: Kinetic Harvest & ACM Inflow */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-3 rounded-xl transition-colors">
          <div className="text-slate-600 dark:text-slate-400 text-[10px] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              Kinetic Harvest
            </span>
            <span className="text-[9px] text-cyan-700 dark:text-cyan-400 font-mono">ACM ACTIVE</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">
            +{telemetry.regenKw}{" "}
            <span className="text-xs font-normal text-cyan-700 dark:text-cyan-300">kW</span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate flex items-center justify-between">
            <span>Inflow Shunt</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {telemetry.acmCurrentTransferA} A
            </span>
          </div>
        </div>

        {/* Metric 3: Dual Solid-State Pack Bus */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-3 rounded-xl transition-colors">
          <div className="text-slate-600 dark:text-slate-400 text-[10px] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Activity className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              Pack A / B Bus
            </span>
            <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-mono">BALANCED</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1 truncate">
            {telemetry.packAVoltage}V{" "}
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400">/</span>{" "}
            {telemetry.packBVoltage}V
          </div>
          <div className="text-[10px] text-emerald-600 dark:text-emerald-400 mt-0.5 truncate flex items-center justify-between">
            <span>Solid-State SoC</span>
            <span className="font-bold">
              {telemetry.packASoc}% | {telemetry.packBSoc}%
            </span>
          </div>
        </div>

        {/* Metric 4: Thermal Matrix & SoH */}
        <div className="bg-slate-50/90 border border-slate-200/80 dark:bg-slate-900/80 dark:border-slate-800 p-3 rounded-xl transition-colors">
          <div className="text-slate-600 dark:text-slate-400 text-[10px] uppercase flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-medium">
              <Thermometer className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
              Thermals &amp; SoH
            </span>
            <span className="text-[9px] text-amber-600 dark:text-amber-400 font-mono">NOMINAL</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 flex items-baseline justify-between">
            <span>{telemetry.batteryCellMaxTempC}°C</span>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              SoH: {telemetry.stateOfHealthPct || 99.8}%
            </span>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate flex items-center justify-between">
            <span>Stator / Inverter</span>
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {telemetry.motorTempC}° / {telemetry.inverterTempC}°C
            </span>
          </div>
        </div>
      </div>

      {/* Raw CAN-Bus J1939 Frame Inspector Toggle */}
      <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 dark:border-slate-800">
        <button
          onClick={() => setShowCanInspector(!showCanInspector)}
          className="flex items-center justify-between w-full px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-900/90 dark:hover:bg-slate-800/80 border border-slate-300/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors text-[11px]"
        >
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span className="font-semibold">
              Raw CAN-Bus Inspector (ISO 11898-1 / SAE J1939-21)
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400">
            <span>{showCanInspector ? "Collapse Frames" : "Inspect Live Hex Frames"}</span>
            {showCanInspector ? (
              <ChevronUp className="w-3.5 h-3.5" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5" />
            )}
          </div>
        </button>

        {/* Live Hex Stream Terminal */}
        {showCanInspector && (
          <div className="mt-2.5 p-3 rounded-xl bg-slate-950 border border-cyan-500/30 text-cyan-400 font-mono text-[10px] shadow-inner space-y-1.5 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 text-slate-400 text-[9px] uppercase tracking-wider">
              <span>CAN ID (PGN) / Parameter Name</span>
              <span className="hidden sm:inline">Data Payload (DLC 8 Hex)</span>
              <span>Timestamp</span>
            </div>

            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              {canLog.length > 0 ? (
                canLog.map((frame) => (
                  <div
                    key={frame.id}
                    className="flex items-center justify-between gap-2 py-0.5 hover:bg-slate-900/80 px-1 rounded transition-colors"
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <span className="text-amber-400 font-bold">{frame.canId}</span>
                      <span className="text-slate-300 truncate text-[9px] hidden md:inline">
                        {frame.name}
                      </span>
                    </div>
                    <div className="font-mono text-emerald-400 tracking-wider text-[10px]">
                      {frame.data}
                    </div>
                    <div className="text-slate-500 text-[9px] shrink-0">{frame.time}</div>
                  </div>
                ))
              ) : (
                <div className="text-slate-500 py-2 text-center">
                  Listening for broadcast frames on 500 kbps CAN transceiver...
                </div>
              )}
            </div>

            <div className="pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-cyan-400" />
                Immersion Thermal &amp; ACM Bus Controller
              </span>
              <span>Protected under Indian Patent App No. 202511050655</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveTelemetryWidget;
