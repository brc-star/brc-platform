"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/PortalLayout";
import {
  Layers,
  Database,
  TrendingUp,
  FileCheck,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Shield,
  Activity,
  ArrowRight,
  Plus,
} from "lucide-react";
import { formatInr, formatNumber } from "@/lib/utils";

export default function EnterpriseOperationsPage() {
  const [activeModule, setActiveModule] = useState<"crm" | "bom" | "sop" | "telemetry">("crm");

  const bomComponents = [
    { partNumber: "BRC-ACM-700V-01", name: "Alternator Control Module (SiC Inverter)", stock: 120, reorder: 50, cost: 48000, supplier: "Semiconductor Foundry" },
    { partNumber: "BRC-PMG-42KW-02", name: "Permanent Magnet Generator Rotor Assembly", stock: 85, reorder: 40, cost: 62000, supplier: "Electromechanical Works" },
    { partNumber: "BRC-BAT-400V-A", name: "Primary 400V Solid-State Pack A Module", stock: 64, reorder: 30, cost: 285000, supplier: "Battery Cell Matrix" },
    { partNumber: "BRC-BAT-400V-B", name: "Secondary 400V Recovery Pack B Module", stock: 64, reorder: 30, cost: 240000, supplier: "Battery Cell Matrix" },
    { partNumber: "BRC-BMS-NEURAL-01", name: "Smart Thermochemical EIS BMS Controller", stock: 210, reorder: 100, cost: 18500, supplier: "Edge Silicon Labs" },
  ];

  const sopDocuments = [
    { code: "SOP-MFG-BAT-004", title: "Dual-Pack High-Voltage Dielectric Immersion Assembly", version: "v1.4", department: "Battery Assembly", status: "APPROVED" },
    { code: "SOP-QC-ACM-012", title: "ACM High-Frequency SiC Inverter Harmonics Test", version: "v2.1", department: "Quality Control", status: "APPROVED" },
    { code: "SOP-SRV-HV-007", title: "Emergency High-Voltage Disconnect & Pack Balancing SOP", version: "v1.0", department: "Field Service", status: "PENDING_AUDIT" },
  ];

  return (
    <PortalLayout
      portalName="BRC STAR Digital Operating System (ERP / CRM / SOP)"
      subdomain="ops.brcstar.in"
      roleBadge="EXECUTIVE / CTO / OPERATIONS"
    >
      <div className="space-y-8">
        {/* Module Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-4">
          {[
            ["crm", "Sales CRM & Pipeline"],
            ["bom", "Manufacturing BOM & Components"],
            ["sop", "Enterprise SOP System"],
            ["telemetry", "Fleet CAN-Bus Health"],
          ].map(([mod, label]) => (
            <button
              key={mod}
              onClick={() => setActiveModule(mod as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeModule === mod
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 1. SALES CRM PIPELINE */}
        {activeModule === "crm" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-center">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Total Inbound Leads</div>
                <div className="text-2xl font-bold text-cyan-400 mt-1">1,248</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Test Drives Scheduled</div>
                <div className="text-2xl font-bold text-white mt-1">312</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Pre-Booking Orders</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">428 Units</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase">Gross Pipeline Value</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">₹142.6 Cr</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white font-mono">
                Enterprise Sales Flow: Lead → Enquiry → Test Drive → Booking → Delivery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono text-center">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-cyan-400 font-bold">1. Inbound Leads</div>
                  <div className="text-slate-400 mt-1">508 Unassigned</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-cyan-400 font-bold">2. Qualified</div>
                  <div className="text-slate-400 mt-1">312 In Evaluation</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-cyan-400 font-bold">3. Test Drives</div>
                  <div className="text-slate-400 mt-1">94 This Week</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-emerald-400 font-bold">4. Token Paid</div>
                  <div className="text-slate-400 mt-1">428 Reservations</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="text-amber-400 font-bold">5. Production Allocated</div>
                  <div className="text-slate-400 mt-1">Target Batch 2027</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. MANUFACTURING BOM */}
        {activeModule === "bom" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-mono">
                Bill of Materials (BOM) &amp; Component Inventory
              </h3>
              <button
                onClick={() => alert("Creating new BOM component item")}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Component</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase">
                    <th className="py-3 px-4">Part #</th>
                    <th className="py-3 px-4">Description</th>
                    <th className="py-3 px-4">Current Stock</th>
                    <th className="py-3 px-4">Unit Cost</th>
                    <th className="py-3 px-4">Supplier</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {bomComponents.map((comp) => (
                    <tr key={comp.partNumber} className="hover:bg-slate-800/30">
                      <td className="py-3.5 px-4 font-bold text-cyan-400">{comp.partNumber}</td>
                      <td className="py-3.5 px-4 text-white">{comp.name}</td>
                      <td className="py-3.5 px-4 font-bold">{comp.stock} units</td>
                      <td className="py-3.5 px-4">{formatInr(comp.cost)}</td>
                      <td className="py-3.5 px-4 text-slate-400">{comp.supplier}</td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px]">
                          OPTIMAL
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. ENTERPRISE SOP SYSTEM */}
        {activeModule === "sop" && (
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white font-mono">
              Enterprise Standard Operating Procedures (SOP Revision &amp; Audit Logs)
            </h3>
            <div className="space-y-3">
              {sopDocuments.map((sop) => (
                <div
                  key={sop.code}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="text-cyan-400 font-bold">{sop.code}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{sop.department}</span>
                      <span className="px-1.5 rounded bg-slate-900 text-slate-300 text-[10px] border border-slate-800">
                        {sop.version}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1">{sop.title}</h4>
                  </div>
                  <button
                    onClick={() => alert(`Reviewing document ${sop.code}`)}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 self-start sm:self-center"
                  >
                    View Revision History
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. TELEMETRY HEALTH */}
        {activeModule === "telemetry" && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white font-mono">
                Fleet Edge Telemetry Broker &amp; API Ingestion Gateway
              </h3>
              <p className="text-xs text-slate-300">
                Connected Vehicle Instances: <strong>14 Test Mules &amp; Track Prototypes</strong> • Data Ingestion Latency: <strong>&lt;45 ms</strong>
              </p>
            </div>
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
