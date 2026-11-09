"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/PortalLayout";
import { LiveTelemetryWidget } from "@/components/LiveTelemetryWidget";
import {
  BatteryCharging,
  Shield,
  Wrench,
  FileText,
  Bell,
  Zap,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Cpu,
  Layers,
  Key,
  Code2,
  Copy,
  Check,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { formatInr } from "@/lib/utils";

export default function CustomerPlatformPage() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "service" | "documents" | "api">("telemetry");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);

  const sampleApiKey = "brc_iot_live_can_2026";

  const handleCopyKey = () => {
    navigator.clipboard.writeText(sampleApiKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 2000);
  };

  return (
    <PortalLayout
      portalName="BRC STAR Vehicle Operating System & Fleet Hub"
      subdomain="app.brcstar.in"
      roleBadge="VERIFIED CHASSIS OWNER & FLEET OPERATOR"
    >
      <div className="space-y-6 sm:space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white/90 border border-slate-200/90 shadow-sm backdrop-blur-xl dark:bg-slate-900/60 dark:border-slate-800 p-5 sm:p-6 rounded-2xl transition-colors">
          <div>
            <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
              CHASSIS VIN: BRC-2026-ST-0042 • STATUS: TELEMETRY STREAMING
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono mt-1">
              StarCraft GT — Cosmic Obsidian (Track Mule 02)
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Firmware: BRC-OS 1.0.4-LTS • Battery Health: 99.8% Solid-State • Warranty: Active (8 Years / 200,000 km)
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                activeTab === "telemetry"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:border-slate-800"
              }`}
            >
              Live Telematics
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                activeTab === "service"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:border-slate-800"
              }`}
            >
              Service Booking
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all font-semibold ${
                activeTab === "documents"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:border-slate-800"
              }`}
            >
              Digital Vault
            </button>
            <button
              onClick={() => setActiveTab("api")}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono transition-all font-semibold flex items-center gap-1.5 ${
                activeTab === "api"
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:border-slate-800"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Fleet IoT API</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Live Telemetry */}
        {activeTab === "telemetry" && (
          <div className="space-y-6">
            <LiveTelemetryWidget />

            {/* Predictive Fleet Telemetry HUD */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2 transition-colors">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Estimated Remaining Range</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">HIGHWAY DYNAMICS</span>
                </div>
                <div className="text-3xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                  684 km
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Calculated from real-time ACM kinetic recovery &amp; dual-pack bus voltage.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2 transition-colors">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Lifetime Kinetic Harvested</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">ACM EFFICIENCY</span>
                </div>
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  1,482 kWh
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Equivalent to ₹11,850 in grid electricity saved with zero degradation.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2 transition-colors">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Next Scheduled Calibration</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">HEALTH 99.8%</span>
                </div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
                  10,000 km
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  Immersion coolant circulation &amp; ACM inverter harmonic check.
                </div>
              </div>
            </div>

            {/* Dual Solid-State Pack Balancing Architecture Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="font-mono text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Indian Patent App No. 202511050655: Dynamic Bus Switching Telemetry
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  PASSIVE MATRIX CELL BALANCER: ACTIVE
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600 dark:text-slate-400 font-semibold">Solid-State Pack A (Drive Bus)</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">402.4 V • 81.4% SoC</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full transition-all" style={{ width: "81.4%" }} />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Directly powering the front and rear PMSM permanent magnet axial flux drives.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-600 dark:text-slate-400 font-semibold">Solid-State Pack B (Harvest Bus)</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">398.1 V • 73.2% SoC</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-500 h-full rounded-full transition-all" style={{ width: "73.2%" }} />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Accepting high-inflow kinetic energy harvested via ACM during vehicle deceleration and coasting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Service Booking */}
        {activeTab === "service" && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-6 transition-colors">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-mono">
              Schedule Certified High-Voltage &amp; ACM Maintenance
            </h3>
            {bookingConfirmed ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-500/40 text-center space-y-2">
                <div className="text-emerald-700 dark:text-emerald-400 font-mono font-bold text-lg flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  Service Appointment Reserved: Ticket #BRC-SRV-2026-089
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300">
                  A certified High-Voltage BRC technician will service your vehicle at Bengaluru Flagship Hub.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingConfirmed(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">Service Type</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white text-xs font-sans">
                    <option>Periodic 10,000 km Inspection &amp; Immersion Coolant Check</option>
                    <option>BMS Neural Calibration &amp; Cell Balancing</option>
                    <option>OTA Firmware Update Flash (BRC-OS v1.1 Beta)</option>
                    <option>Tire Rotation &amp; Active Aero Calibration</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">Preferred Hub</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white text-xs font-sans">
                    <option>Bengaluru Flagship Experience &amp; Service Hub (Indiranagar)</option>
                    <option>Mumbai Regional High-Voltage Service Center (BKC)</option>
                    <option>Delhi NCR Authorized Node (Gurugram)</option>
                  </select>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
                  >
                    Confirm Service Booking
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Tab 3: Digital Vault */}
        {activeTab === "documents" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2 transition-colors">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">DIGITAL CERTIFICATE</div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Vehicle Registration &amp; Fastag</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Encrypted RC vault linked with Parivahan National DB.</p>
              <button
                onClick={() => alert("Viewing Digital RC Certificate")}
                className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline pt-2 block font-semibold"
              >
                View Document
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2 transition-colors">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">WARRANTY POLICY</div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">8-Year / 200,000 km Pack Warranty</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Covers Pack A, Pack B, and ACM Inverter matrix.</p>
              <button
                onClick={() => alert("Viewing Warranty Certificate")}
                className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline pt-2 block font-semibold"
              >
                View Document
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-2 transition-colors">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">INSURANCE VAULT</div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Zero-Depreciation Comprehensive Cover</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">Policy active through March 2027.</p>
              <button
                onClick={() => alert("Viewing Insurance Policy")}
                className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:underline pt-2 block font-semibold"
              >
                View Document
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Fleet IoT API Documentation */}
        {activeTab === "api" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800 space-y-4 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="font-mono text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Key className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    Commercial Fleet Telematics &amp; OBD-II Ingest Credentials
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Stream high-speed CAN frames from test benches, physical OBD-II dongles, or fleet dispatch nodes.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                    API STATUS: LIVE
                  </span>
                </div>
              </div>

              {/* API Key Box */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center justify-between">
                  <span>Hardware Telemetry Authorization Token (Bearer)</span>
                  <button
                    onClick={handleCopyKey}
                    className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline text-xs font-mono font-semibold"
                  >
                    {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey ? "Copied to clipboard" : "Copy Token"}</span>
                  </button>
                </div>
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-900 dark:text-emerald-400 flex items-center justify-between">
                  <code>{sampleApiKey}</code>
                  <span className="text-[10px] text-slate-400 font-sans">Expires: Dec 2027</span>
                </div>
              </div>

              {/* Endpoints specification */}
              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Available Fleet Endpoints
                </h4>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-400 text-[10px] font-bold">
                          GET (SSE)
                        </span>
                        <code className="text-slate-900 dark:text-white font-bold">
                          /api/v1/telemetry/stream?vin=BRC-2026-ST-0042&amp;hz=5
                        </code>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-sans">
                        Server-Sent Events real-time broadcast stream with J1939 hex frames and dual-bus packet telemetry.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-400 text-[10px] font-bold">
                          POST
                        </span>
                        <code className="text-slate-900 dark:text-white font-bold">
                          /api/v1/telemetry/ingest
                        </code>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-sans">
                        Hardware edge ingestion endpoint for OBD-II / CAN dongles and test benches to submit telemetry batches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
