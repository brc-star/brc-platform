"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/PortalLayout";
import { LiveTelemetryWidget } from "@/components/LiveTelemetryWidget";
import { BatteryCharging, Shield, Wrench, FileText, Bell, Zap, MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import { formatInr } from "@/lib/utils";

export default function CustomerPlatformPage() {
  const [activeTab, setActiveTab] = useState<"telemetry" | "service" | "documents">("telemetry");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  return (
    <PortalLayout
      portalName="BRC STAR Customer Operating System"
      subdomain="app.brcstar.in"
      roleBadge="VERIFIED OWNER"
    >
      <div className="space-y-8">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
          <div>
            <div className="text-xs font-mono text-cyan-400">VEHICLE VIN: BRC-2026-ST-0042</div>
            <h1 className="text-2xl font-bold text-white font-mono mt-0.5">
              StarCraft GT — Cosmic Obsidian
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Firmware: BRC-OS 1.0.4-LTS • Battery Health: 100% Solid-State • Warranty: Active (8 Years)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === "telemetry"
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-300 border border-slate-800"
              }`}
            >
              Live Telematics
            </button>
            <button
              onClick={() => setActiveTab("service")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === "service"
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-300 border border-slate-800"
              }`}
            >
              Service Booking
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === "documents"
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "bg-slate-900 text-slate-300 border border-slate-800"
              }`}
            >
              Digital Vault
            </button>
          </div>
        </div>

        {/* Tab 1: Telemetry */}
        {activeTab === "telemetry" && (
          <div className="space-y-6">
            <LiveTelemetryWidget />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Estimated Remaining Range</div>
                <div className="text-3xl font-extrabold text-cyan-400 font-mono">684 km</div>
                <div className="text-[11px] text-slate-400">Based on active highway kinetic recoup rate</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Lifetime Kinetic Harvested</div>
                <div className="text-3xl font-extrabold text-emerald-400 font-mono">1,482 kWh</div>
                <div className="text-[11px] text-slate-400">Equivalent to ₹11,850 in grid electricity saved</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Next Scheduled Calibration</div>
                <div className="text-2xl font-bold text-white font-mono">10,000 km</div>
                <div className="text-[11px] text-slate-400">Immersion coolant &amp; ACM inspection</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Service Booking */}
        {activeTab === "service" && (
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
            <h3 className="text-xl font-bold text-white font-mono">
              Schedule Certified Self-Volt Maintenance
            </h3>
            {bookingConfirmed ? (
              <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                <div className="text-emerald-400 font-mono font-bold text-lg">
                  Service Appointment Reserved: Ticket #BRC-SRV-2026-089
                </div>
                <p className="text-xs text-slate-300">
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
                  <label className="text-xs font-mono text-slate-300 block mb-1">Service Type</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs font-sans">
                    <option>Periodic 10,000 km Inspection &amp; Coolant Check</option>
                    <option>BMS Neural Calibration &amp; Cell Balancing</option>
                    <option>OTA Firmware Update Flash (BRC-OS v1.1 Beta)</option>
                    <option>Tire Rotation &amp; Active Aero Calibration</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Preferred Center</label>
                  <select className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white text-xs font-sans">
                    <option>Bengaluru Flagship Experience &amp; Service Hub (Indiranagar)</option>
                    <option>Mumbai Regional High-Voltage Service Center (BKC)</option>
                    <option>Delhi NCR Authorized Node (Gurugram)</option>
                  </select>
                </div>
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
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
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyan-400">DIGITAL CERTIFICATE</div>
              <h4 className="text-base font-bold text-white">Vehicle Registration &amp; Fastag</h4>
              <p className="text-xs text-slate-400">Encrypted RC vault linked with Parivahan National DB.</p>
              <button
                onClick={() => alert("Viewing Digital RC Certificate")}
                className="text-xs font-mono text-cyan-400 hover:underline pt-2 block"
              >
                View Document
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyan-400">WARRANTY POLICY</div>
              <h4 className="text-base font-bold text-white">8-Year / 200,000 km Pack Warranty</h4>
              <p className="text-xs text-slate-400">Covers Pack A, Pack B, and ACM Inverter matrix.</p>
              <button
                onClick={() => alert("Viewing Warranty Certificate")}
                className="text-xs font-mono text-cyan-400 hover:underline pt-2 block"
              >
                View Document
              </button>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyan-400">INSURANCE VAULT</div>
              <h4 className="text-base font-bold text-white">Zero-Depreciation Comprehensive Cover</h4>
              <p className="text-xs text-slate-400">Policy active through March 2027.</p>
              <button
                onClick={() => alert("Viewing Insurance Policy")}
                className="text-xs font-mono text-cyan-400 hover:underline pt-2 block"
              >
                View Document
              </button>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
