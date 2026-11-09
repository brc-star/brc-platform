"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  Car,
  TrendingUp,
  Calendar,
  CheckCircle2,
  Search,
  Filter,
  Building,
  ShieldCheck,
  MapPin,
  Briefcase,
  ArrowRight,
  Printer,
  ChevronRight,
  AlertCircle,
  Loader2,
  DollarSign,
  FileCheck2,
  PhoneCall,
  Clock,
  Sparkles,
} from "lucide-react";
import { formatInr } from "@/lib/utils";
import { ResponsiveTable } from "@/components/ResponsiveTable";
import { PortalLayout } from "@/components/PortalLayout";

type ViewMode = "EXPANSION_FRANCHISE" | "OPERATING_PORTAL";
type FranchiseTier = "TIER_1_METRO_3S" | "TIER_2_REGIONAL_2S" | "TIER_3_DEPOT_FLEET";

interface TerritoryItem {
  id: string;
  name: string;
  state: string;
  status: "ALLOCATION_OPEN" | "HIGH_DEMAND" | "FINAL_TRIAGE" | "PILOT_ACTIVE";
  demandIndex: string;
  minTier: FranchiseTier;
  slotsRemaining: number;
}

const TERRITORIES: TerritoryItem[] = [
  { id: "BLR", name: "Bengaluru Urban & Tech Corridor", state: "Karnataka", status: "HIGH_DEMAND", demandIndex: "98/100", minTier: "TIER_1_METRO_3S", slotsRemaining: 2 },
  { id: "MUM", name: "Mumbai & MMR Commercial Belt", state: "Maharashtra", status: "ALLOCATION_OPEN", demandIndex: "96/100", minTier: "TIER_1_METRO_3S", slotsRemaining: 3 },
  { id: "NCR", name: "Delhi NCR (Gurugram & Noida)", state: "Delhi NCR", status: "FINAL_TRIAGE", demandIndex: "99/100", minTier: "TIER_1_METRO_3S", slotsRemaining: 1 },
  { id: "AMD", name: "Ahmedabad & Sanand Auto Hub", state: "Gujarat", status: "ALLOCATION_OPEN", demandIndex: "92/100", minTier: "TIER_2_REGIONAL_2S", slotsRemaining: 2 },
  { id: "JAI", name: "Jaipur & North Rajasthan Corridor", state: "Rajasthan", status: "PILOT_ACTIVE", demandIndex: "90/100", minTier: "TIER_2_REGIONAL_2S", slotsRemaining: 2 },
  { id: "HYD", name: "Hyderabad & Cyberabad Highway", state: "Telangana", status: "HIGH_DEMAND", demandIndex: "95/100", minTier: "TIER_1_METRO_3S", slotsRemaining: 2 },
  { id: "PUN", name: "Pune & Chakan Industrial Zone", state: "Maharashtra", status: "ALLOCATION_OPEN", demandIndex: "94/100", minTier: "TIER_2_REGIONAL_2S", slotsRemaining: 2 },
  { id: "CHN", name: "Chennai & Oragadam Mobility Belt", state: "Tamil Nadu", status: "ALLOCATION_OPEN", demandIndex: "91/100", minTier: "TIER_2_REGIONAL_2S", slotsRemaining: 3 },
];

const FRANCHISE_TIERS = [
  {
    id: "TIER_1_METRO_3S" as FranchiseTier,
    name: "Tier-1 Metro 3S Flagship Hub",
    facility: "Sales, Service & Spares (3S)",
    minArea: "4,500 – 6,000 sq.ft.",
    capitalReq: "₹1.20 Cr – ₹2.00 Cr",
    depositInr: 1500000,
    targetVolume: "45–70 Units/Month",
    marginPerVehicle: "6.5% – 8.2% + Telematics Subscriptions",
    badge: "PRIMARY METRO ALLOCATION",
    desc: "Complete luxury passenger EV showroom, heavy commercial service bays, and dedicated battery swap depot.",
  },
  {
    id: "TIER_2_REGIONAL_2S" as FranchiseTier,
    name: "Tier-2 Regional Dealership",
    facility: "Sales & Rapid Service (2S)",
    minArea: "2,500 – 4,000 sq.ft.",
    capitalReq: "₹60 Lakh – ₹1.00 Cr",
    depositInr: 800000,
    targetVolume: "25–40 Units/Month",
    marginPerVehicle: "6.0% – 7.8% Gross Margin",
    badge: "HIGH GROWTH REGIONAL",
    desc: "Regional territory hub optimized for fast passenger EV delivery, test drives, and municipal bus fleet support.",
  },
  {
    id: "TIER_3_DEPOT_FLEET" as FranchiseTier,
    name: "Tier-3 Fleet Logistics & Charging Depot",
    facility: "Heavy Fleet Maintenance & Swap",
    minArea: "1,500 – 2,500 sq.ft.",
    capitalReq: "₹35 Lakh – ₹60 Lakh",
    depositInr: 500000,
    targetVolume: "Commercial Fleet Support",
    marginPerVehicle: "Per-km Maintenance & Spares Margin",
    badge: "B2B LOGISTICS PARTNER",
    desc: "Dedicated staging center supporting StarFleet cargo haulers, transit fleet charging, and certified technician dispatch.",
  },
];

export default function PartnerDealershipPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("EXPANSION_FRANCHISE");
  const [selectedTerritory, setSelectedTerritory] = useState<TerritoryItem>(TERRITORIES[0]);
  const [selectedTier, setSelectedTier] = useState<FranchiseTier>("TIER_1_METRO_3S");

  // Application Form State
  const [formData, setFormData] = useState({
    applicantName: "",
    companyName: "",
    email: "",
    phone: "",
    proposedTerritory: TERRITORIES[0].name,
    proposedState: TERRITORIES[0].state,
    tierInterested: "TIER_1_METRO_3S" as FranchiseTier,
    liquidCapitalInr: "₹1.00 Cr - ₹2.00 Cr",
    commercialSpaceSqFt: "5,000 sq.ft.",
    automotiveExpYears: "7+ Years (Multi-Brand Auto)",
    facilityOwnership: "OWNED",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationResult, setApplicationResult] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // CRM Lead Pipeline for Operating Portal
  const [leadList, setLeadList] = useState([
    { id: "L-1092", name: "Anand Rathi", phone: "+91 98450 11234", vehicle: "StarCraft GT", status: "TEST_DRIVE_SCHEDULED", time: "Today 11:30 AM", territory: "Bengaluru Central" },
    { id: "L-1093", name: "Sunil Agro Logistics", phone: "+91 97312 88472", vehicle: "StarFleet Commercial (10 Units)", status: "QUOTATION_SENT", time: "Yesterday", territory: "Sanand Hub" },
    { id: "L-1094", name: "Pooja Hegde", phone: "+91 99001 44521", vehicle: "StarPulse Luxury SUV", status: "TOKEN_PAID", time: "2 days ago", territory: "Mumbai MMR" },
    { id: "L-1095", name: "Kalyan Transways LLP", phone: "+91 94140 33882", vehicle: "StarTransit Electric Bus (2 Units)", status: "FEASIBILITY_STUDY", time: "3 days ago", territory: "Jaipur Express" },
  ]);

  const handleTerritorySelect = (territory: TerritoryItem) => {
    setSelectedTerritory(territory);
    setSelectedTier(territory.minTier);
    setFormData((prev) => ({
      ...prev,
      proposedTerritory: territory.name,
      proposedState: territory.state,
      tierInterested: territory.minTier,
    }));
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/v1/dealers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success && data.application) {
        setApplicationResult(data.application);
      } else {
        setErrorMessage(data.message || "Submission failed. Please verify form details.");
      }
    } catch (err) {
      setErrorMessage("Network error connecting to BRC STAR expansion desk.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] text-slate-900 dark:text-white transition-colors duration-300 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Header & Context Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300/60 text-cyan-800 dark:bg-cyan-950/80 dark:border-cyan-500/30 dark:text-cyan-300 text-xs font-mono font-semibold shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>NATIONAL DEALER &amp; FRANCHISE ALLOCATION NETWORK</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-slate-900 dark:text-white">
              BRC STAR <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Franchise &amp; Partner Hub</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-2xl leading-relaxed">
              Acquire exclusive regional territory rights for BRC STAR Self-Volt passenger, commercial, and transit electric vehicles.
            </p>
          </div>

          {/* Segmented Mode Switcher */}
          <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center shrink-0 font-mono text-xs">
            <button
              type="button"
              onClick={() => setViewMode("EXPANSION_FRANCHISE")}
              className={`py-2 px-4 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === "EXPANSION_FRANCHISE"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-500/40"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              <span>Franchise Opportunity</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("OPERATING_PORTAL")}
              className={`py-2 px-4 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                viewMode === "OPERATING_PORTAL"
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-500/40"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Dealer Operating CRM</span>
            </button>
          </div>
        </div>

        {viewMode === "EXPANSION_FRANCHISE" ? (
          /* ====================================================================
             1. FRANCHISE EXPANSION & TERRITORY ALLOCATION VIEW
             ==================================================================== */
          <div className="space-y-12">
            {/* Franchise Economics Summary HUD */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 font-mono text-center">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800">
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 dark:text-slate-400 font-medium">Territory Payback Window</span>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">14 – 18 Months</div>
                <span className="text-[9px] text-slate-500 mt-0.5 block">IRR: 34.2% (Audited Model)</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800">
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 dark:text-slate-400 font-medium">Gross Vehicle Margins</span>
                <div className="text-xl sm:text-2xl font-bold text-cyan-600 dark:text-cyan-300 mt-1">6.5% – 8.2%</div>
                <span className="text-[9px] text-slate-500 mt-0.5 block">+ Recurring Software Share</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800">
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 dark:text-slate-400 font-medium">Security Escrow Token</span>
                <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">₹8.0L – ₹15.0L</div>
                <span className="text-[9px] text-slate-500 mt-0.5 block">100% Refundable Deposit</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/60 dark:border-slate-800">
                <span className="text-[10px] sm:text-xs uppercase text-slate-500 dark:text-slate-400 font-medium">Network Expansion Slots</span>
                <div className="text-xl sm:text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">18 Regional Hubs</div>
                <span className="text-[9px] text-slate-500 mt-0.5 block">Phase-1 Allocation Active</span>
              </div>
            </div>

            {/* Franchise Tier Selection Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Dealership Tier Architectures
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Choose the facility footprint best suited to your commercial investment capacity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {FRANCHISE_TIERS.map((tier) => (
                  <div
                    key={tier.id}
                    onClick={() => {
                      setSelectedTier(tier.id);
                      setFormData((prev) => ({ ...prev, tierInterested: tier.id }));
                    }}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                      selectedTier === tier.id
                        ? "bg-cyan-50/70 border-cyan-500 shadow-xl shadow-cyan-500/10 dark:bg-cyan-950/40 dark:border-cyan-400 dark:shadow-cyan-950/40 ring-1 ring-cyan-500/30"
                        : "bg-white/80 border-slate-200 hover:border-slate-300 dark:bg-slate-900/50 dark:border-slate-800 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 font-bold uppercase">
                          {tier.badge}
                        </span>
                        {selectedTier === tier.id && (
                          <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        )}
                      </div>
                      <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                        {tier.name}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed min-h-[44px]">
                        {tier.desc}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 space-y-2 font-mono text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Facility Area:</span>
                        <span className="text-slate-800 dark:text-slate-200 font-semibold">{tier.minArea}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Capital Band:</span>
                        <span className="text-slate-900 dark:text-white font-bold">{tier.capitalReq}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Security Deposit:</span>
                        <span className="text-emerald-700 dark:text-emerald-400 font-bold">{formatInr(tier.depositInr)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 dark:text-slate-400 text-[11px]">Target Run-Rate:</span>
                        <span className="text-cyan-700 dark:text-cyan-400 font-semibold">{tier.targetVolume}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Regional Territory Bidding Grid */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Available Regional Territories (Phase-1 Allocation)
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Select a territory to inspect demand index, allocation status, and queue your franchise application.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {TERRITORIES.map((territory) => {
                  const isSelected = selectedTerritory.id === territory.id;
                  return (
                    <button
                      key={territory.id}
                      type="button"
                      onClick={() => handleTerritorySelect(territory)}
                      className={`p-4 rounded-xl text-left border transition-all space-y-2.5 ${
                        isSelected
                          ? "bg-cyan-50/90 border-cyan-500 shadow-md ring-1 ring-cyan-500/30 dark:bg-cyan-950/60 dark:border-cyan-400"
                          : "bg-white/80 border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-slate-900 dark:text-white flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          <span>{territory.name}</span>
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {territory.state} • Demand: <strong className="text-emerald-600 dark:text-emerald-400">{territory.demandIndex}</strong>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono pt-1 border-t border-slate-200 dark:border-slate-800/80">
                        <span className="text-cyan-700 dark:text-cyan-300">{territory.status.replace("_", " ")}</span>
                        <span className="text-slate-500">{territory.slotsRemaining} Hubs Available</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Franchise Application Form / Confirmation Docket */}
            <div className="rounded-3xl bg-white/90 border border-slate-200 shadow-xl dark:bg-[#0A0E1A]/80 dark:border-cyan-500/30 p-6 sm:p-10 transition-all">
              {applicationResult ? (
                /* Application Confirmed Docket */
                <div className="max-w-2xl mx-auto text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest block">
                      OFFICIAL TERRITORY ALLOCATION DOCKET
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {applicationResult.applicationReference}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Application logged for <strong>{applicationResult.proposedTerritory}</strong> ({applicationResult.proposedState}).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left font-mono text-xs space-y-2 text-slate-700 dark:text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Applicant Entity:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{applicationResult.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Tier:</span>
                      <span className="font-semibold text-cyan-700 dark:text-cyan-400">{applicationResult.tierInterested}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Security Deposit Escrow:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{formatInr(applicationResult.refundableSecurityDepositInr)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Triage SLA:</span>
                      <span className="font-semibold text-slate-900 dark:text-white">&lt; 48 Hours via {applicationResult.assignedDesk}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                    A formal Bilateral Dealership Non-Disclosure Agreement (NDA) and territory feasibility prospectus have been dispatched to <strong className="text-slate-800 dark:text-slate-200 font-mono">{formData.email}</strong>.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition-colors flex items-center gap-2"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Docket</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setApplicationResult(null)}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
                    >
                      Submit Another Territory
                    </button>
                  </div>
                </div>
              ) : (
                /* Franchise Application Intake Form */
                <form onSubmit={handleApplicationSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      Territory Franchise Application
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      Targeting: <strong className="text-cyan-700 dark:text-cyan-300">{selectedTerritory.name}</strong> ({selectedTerritory.state}) • Tier: <strong className="text-slate-800 dark:text-slate-200">{selectedTier}</strong>
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/70 dark:border-red-500/40 dark:text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                        Principal / Applicant Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Rajesh Automotive Ventures"
                        value={formData.applicantName}
                        onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                        Registered Entity / Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="RAV Mobility LLP / Pvt Ltd"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                        Corporate Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="principal@ravmobility.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                        Direct Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98450 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                        Liquid Capital Deployment *
                      </label>
                      <select
                        value={formData.liquidCapitalInr}
                        onChange={(e) => setFormData({ ...formData, liquidCapitalInr: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                      >
                        <option value="₹50 Lakhs - ₹1.00 Crore">₹50 Lakhs - ₹1.00 Crore</option>
                        <option value="₹1.00 Crore - ₹2.00 Crores">₹1.00 Crore - ₹2.00 Crores</option>
                        <option value="₹2.00 Crores - ₹5.00 Crores">₹2.00 Crores - ₹5.00 Crores (Multi-District)</option>
                        <option value="₹5.00 Crores+">₹5.00 Crores+ (State Master Franchise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                        Proposed Facility Space *
                      </label>
                      <select
                        value={formData.commercialSpaceSqFt}
                        onChange={(e) => setFormData({ ...formData, commercialSpaceSqFt: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-300 text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                      >
                        <option value="2,000 - 3,500 sq.ft. (Regional 2S)">2,000 - 3,500 sq.ft. (Regional 2S)</option>
                        <option value="4,000 - 6,000 sq.ft. (Metro 3S)">4,000 - 6,000 sq.ft. (Metro 3S Flagship)</option>
                        <option value="6,000 - 10,000+ sq.ft. (Commercial Depot)">6,000 - 10,000+ sq.ft. (Heavy CV Depot)</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 font-mono">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Formal Non-Disclosure Protected Application • DPDPA 2023 Aligned</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-[0.99] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                          <span>Routing to Expansion Board...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Territory Franchise Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        ) : (
          /* ====================================================================
             2. OPERATING FRANCHISE PRINCIPAL PORTAL & CRM TABLE
             ==================================================================== */
          <div className="space-y-8">
            {/* Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-center">
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/80 dark:border-slate-800">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Monthly Lead Volume</div>
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mt-1">142 Leads</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/80 dark:border-slate-800">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Active Pre-Bookings</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">38 Units</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/80 dark:border-slate-800">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Commission Accrued</div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">{formatInr(554000)}</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm dark:bg-slate-900/80 dark:border-slate-800">
                <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase">Demo Fleet Status</div>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mt-1">3/3 Active</div>
              </div>
            </div>

            {/* Lead Management Triage Table */}
            <div className="bg-white/90 border border-slate-200/90 shadow-lg dark:bg-slate-900/60 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                    Regional Lead Pipeline &amp; Customer Triage
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Live pre-orders and test drive requests assigned to your regional showroom.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Search leads..."
                    className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 dark:bg-slate-950 dark:border-slate-800 dark:text-white focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <ResponsiveTable>
                <table className="w-full text-xs font-mono text-left">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase">
                      <th className="py-3 px-4">Lead Ref</th>
                      <th className="py-3 px-4">Customer Name</th>
                      <th className="py-3 px-4">Vehicle Model</th>
                      <th className="py-3 px-4">Territory</th>
                      <th className="py-3 px-4">Stage</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200/80 dark:divide-slate-800/60 text-slate-700 dark:text-slate-300">
                    {leadList.map((lead) => (
                      <tr key={lead.id} className="hover:bg-slate-100/60 dark:hover:bg-slate-800/30">
                        <td className="py-3.5 px-4 font-bold text-cyan-600 dark:text-cyan-400">{lead.id}</td>
                        <td className="py-3.5 px-4 text-slate-900 dark:text-white">
                          <div>{lead.name}</div>
                          <div className="text-[10px] text-slate-500">{lead.phone}</div>
                        </td>
                        <td className="py-3.5 px-4">{lead.vehicle}</td>
                        <td className="py-3.5 px-4 text-[11px] text-slate-500">{lead.territory}</td>
                        <td className="py-3.5 px-4">
                          <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-slate-900 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 text-[10px] font-semibold">
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            onClick={() => alert(`Connecting with customer ${lead.name} (${lead.phone})`)}
                            className="px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 font-bold text-[10px] hover:bg-cyan-400 transition-colors"
                          >
                            Dispatch SOP
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ResponsiveTable>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
