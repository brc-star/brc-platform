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
                Seed / Pre-Series A ($3.5M - $5.0M Target)
              </h2>
            </div>
            <div className="text-xs font-mono text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-500/30">
              Allocation Status: 65% Committed
            </div>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Funds are earmarked for: Track durability testing certification (40%), pilot production tooling &amp; PCB assembly line (35%), and key engineering talent expansion (25%).
          </p>
        </div>

        {/* Gated Data Room & Verified Document Browser */}
        <InvestorDataRoomGate />
      </div>
    </PortalLayout>
  );
}
