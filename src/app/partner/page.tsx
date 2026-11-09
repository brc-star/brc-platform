"use client";

import React, { useState } from "react";
import { PortalLayout } from "@/components/PortalLayout";
import { Users, Car, TrendingUp, Calendar, CheckCircle2, Search, Filter } from "lucide-react";
import { formatInr } from "@/lib/utils";
import { ResponsiveTable } from "@/components/ResponsiveTable";

export default function DealerHubPage() {
  const [leadList, setLeadList] = useState([
    { id: "L-1092", name: "Anand Rathi", phone: "+91 98450 11234", vehicle: "StarCraft GT", status: "TEST_DRIVE_SCHEDULED", time: "Today 11:30 AM" },
    { id: "L-1093", name: "Sunil Agro Logistics", phone: "+91 97312 88472", vehicle: "StarFleet Commercial (10 Units)", status: "QUOTATION_SENT", time: "Yesterday" },
    { id: "L-1094", name: "Pooja Hegde", phone: "+91 99001 44521", vehicle: "StarPulse Luxury SUV", status: "TOKEN_PAID", time: "2 days ago" },
  ]);

  return (
    <PortalLayout
      portalName="BRC STAR Dealer Operating System"
      subdomain="partner.brcstar.in"
      roleBadge="FRANCHISE PRINCIPAL"
    >
      <div className="space-y-8">
        {/* Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-center">
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Monthly Lead Volume</div>
            <div className="text-2xl font-bold text-cyan-400 mt-1">142 Leads</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Active Pre-Bookings</div>
            <div className="text-2xl font-bold text-white mt-1">38 Units</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Commission Accrued</div>
            <div className="text-2xl font-bold text-emerald-400 mt-1">{formatInr(554000)}</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] text-slate-400 uppercase">Demo Fleet Status</div>
            <div className="text-2xl font-bold text-amber-400 mt-1">3/3 Active</div>
          </div>
        </div>

        {/* Lead Management Triage Table */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-white font-mono">
              Regional Lead Pipeline &amp; Customer Triage
            </h3>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search leads..."
                className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>
          </div>

          <ResponsiveTable>
            <table className="w-full text-xs font-mono text-left">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase">
                  <th className="py-3 px-4">Lead Ref</th>
                  <th className="py-3 px-4">Customer Name</th>
                  <th className="py-3 px-4">Vehicle Model</th>
                  <th className="py-3 px-4">Stage</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {leadList.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-800/30">
                    <td className="py-3.5 px-4 font-bold text-cyan-400">{lead.id}</td>
                    <td className="py-3.5 px-4 text-white">
                      <div>{lead.name}</div>
                      <div className="text-[10px] text-slate-500">{lead.phone}</div>
                    </td>
                    <td className="py-3.5 px-4">{lead.vehicle}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/30 text-[10px]">
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => alert(`Calling customer ${lead.name} (${lead.phone})`)}
                        className="px-2.5 py-1 rounded bg-cyan-500 text-slate-950 font-bold text-[10px] hover:bg-cyan-400"
                      >
                        Contact
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ResponsiveTable>
        </div>
      </div>
    </PortalLayout>
  );
}
