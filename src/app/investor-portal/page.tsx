"use client";

import React from "react";
import { PortalLayout } from "@/components/PortalLayout";
import { InvestorDataRoomGate } from "@/components/InvestorDataRoomGate";
import { TrendingUp, Lock, ShieldCheck, PieChart, FileText, Download } from "lucide-react";
import { INVESTOR_METRICS } from "@/lib/data";

export default function InvestorPortalPage() {
  return (
    <PortalLayout
      portalName="BRC STAR Investor Data Room"
      subdomain="investor.brcstar.in"
      roleBadge="INSTITUTIONAL INVESTOR"
    >
      <div className="space-y-8">
        {/* Cap Table & Financial Memo Overview */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono text-cyan-400">ACTIVE FINANCING ROUND</div>
              <h2 className="text-2xl font-bold text-white font-mono mt-0.5">
                Seed Stage Financing Overview (Target To Be Confirmed)
              </h2>
            </div>
            <div className="text-xs font-mono text-cyan-300 px-3 py-1.5 rounded-lg bg-cyan-950/60 border border-cyan-500/30">
              Allocation Status: Open for Seed Discussions (Indicative)
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Illustrative use-of-proceeds plan: TRL 4-to-6 prototype fabrication &amp; bench-to-track validation (40%), pilot electronics &amp; assembly preparation (35%), and core powertrain engineering hiring (25%). All financial terms subject to NDA term-sheet review.
          </p>
        </div>

        {/* Gated Data Room & Verified Document Browser */}
        <InvestorDataRoomGate />
      </div>
    </PortalLayout>
  );
}
