"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Car, Zap, CheckCircle2, ArrowRight, ShieldCheck, CreditCard, ChevronRight, AlertCircle } from "lucide-react";
import {
  VEHICLES_DATA,
  VehicleModelData,
  STANDARD_DRIVETRAIN_TRIMS,
  COMMON_DISCLAIMERS,
  calculateVehiclePrice,
} from "@/data/vehicles";
import { formatInr } from "@/lib/utils";

// Exclude aliases for model selection tabs
const PRIMARY_PREBOOK_VEHICLES = VEHICLES_DATA.filter((v) => v.slug !== "starfleet-logistic");

function PreBookContent() {
  const searchParams = useSearchParams();
  const initialModel = searchParams.get("model") || "starcraft-gt";
  const initialTrim = searchParams.get("trim") || "standard";

  const [selectedModelSlug, setSelectedModelSlug] = useState(initialModel);
  const [selectedTrim, setSelectedTrim] = useState(initialTrim);
  const [selectedColor, setSelectedColor] = useState("Electric Cyan Pearl");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "Karnataka",
    deliveryYear: "2027",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const modelParam = searchParams.get("model");
    const trimParam = searchParams.get("trim");
    if (modelParam && VEHICLES_DATA.some((v) => v.slug === modelParam)) {
      setSelectedModelSlug(modelParam);
    }
    if (trimParam && STANDARD_DRIVETRAIN_TRIMS.some((t) => t.id === trimParam)) {
      setSelectedTrim(trimParam);
    }
  }, [searchParams]);

  const currentVehicle: VehicleModelData =
    VEHICLES_DATA.find((v) => v.slug === selectedModelSlug) || VEHICLES_DATA[0];

  const activeTrim =
    STANDARD_DRIVETRAIN_TRIMS.find((t) => t.id === selectedTrim) || STANDARD_DRIVETRAIN_TRIMS[0];

  const calculatedTotal = calculateVehiclePrice(currentVehicle.basePriceInr, activeTrim.priceOffset);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/v1/pre-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          vehicleModelSlug: selectedModelSlug,
          trimLevel: selectedTrim,
          exteriorColor: selectedColor,
          tokenAmountInr: 25000,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBookingConfirmed(data.booking);
      } else {
        setErrorMessage(data.message || "Failed to confirm reservation.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Zap className="w-3.5 h-3.5" />
          <span>Priority Assembly Allocation • Series 2027</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Reserve Your <span className="text-gradient">BRC STAR Build Slot</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Lock in priority manufacturing queue placement with a 100% refundable token of ₹25,000.
        </p>
      </div>

      {bookingConfirmed ? (
        /* Confirmation State */
        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyan-950/80 via-[#050814] to-slate-950 border border-cyan-500/40 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-400/40 shadow-lg shadow-cyan-500/25">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
              OFFICIAL RESERVATION CERTIFICATE
            </span>
            <h2 className="text-3xl font-extrabold text-white font-mono">
              {bookingConfirmed.bookingReference || "BRC-2026-8821"}
            </h2>
            <p className="text-xs text-slate-300">
              Congratulations, {formData.fullName || "Driver"}. Your build slot for the <strong>{currentVehicle.name}</strong> ({activeTrim.name}) has been recorded.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono text-left space-y-2 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Selected Drivetrain:</span>
              <span className="text-cyan-400 font-bold">{activeTrim.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Indicative Price:</span>
              <span className="text-white font-bold">{formatInr(calculatedTotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Refundable Token Amount:</span>
              <span className="text-emerald-400 font-bold">₹25,000 (PAID)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Target Delivery Window:</span>
              <span className="text-white font-bold">Q2 2027</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Assigned Delivery State:</span>
              <span className="text-white font-bold">{formData.state}</span>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-center gap-4">
            <Link
              href="/app"
              className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              Open Customer App
            </Link>
            <Link
              href="/"
              className="px-6 py-3 rounded-xl font-mono text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      ) : (
        /* Multi-Step Interactive Checkout Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Model & Trim Selection */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase">Step 1: Choose Vehicle Model</div>
              <div className="grid grid-cols-2 gap-3">
                {PRIMARY_PREBOOK_VEHICLES.map((v) => (
                  <button
                    key={v.slug}
                    type="button"
                    onClick={() => {
                      setSelectedModelSlug(v.slug);
                    }}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedModelSlug === v.slug
                        ? "bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950"
                        : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-white font-mono">{v.name}</div>
                    <div className="text-[11px] text-cyan-400 font-mono mt-0.5">{formatInr(v.basePriceInr)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Drivetrain Trim */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase">Step 2: Choose Drivetrain Architecture</div>
              <div className="space-y-2">
                {STANDARD_DRIVETRAIN_TRIMS.map((trim) => (
                  <button
                    key={trim.id}
                    type="button"
                    onClick={() => setSelectedTrim(trim.id)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                      selectedTrim === trim.id
                        ? "bg-cyan-950/60 border-cyan-400 shadow-md shadow-cyan-950"
                        : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                        <span>{trim.name}</span>
                        {trim.badge && (
                          <span className="text-[8px] px-1 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/40 font-bold">
                            {trim.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {trim.description(currentVehicle.name, currentVehicle.ratedRangeKm)}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-semibold text-cyan-400 shrink-0 ml-3">
                      {trim.priceOffset === 0 ? "Base Included" : `+${formatInr(trim.priceOffset)}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact & Reservation Intake */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase">Step 3: Driver Details &amp; Priority Slot</div>

              <div>
                <label className="text-xs font-mono text-slate-300 block mb-1">Full Legal Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Rao"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">City / Municipality</label>
                  <input
                    type="text"
                    required
                    placeholder="Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-1">Delivery State</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Order Summary Inset */}
              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs font-mono">
                <div className="w-full h-36 rounded-xl bg-gradient-to-b from-[#0a1024] via-[#050814] to-[#02040a] border border-slate-800 p-2 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={currentVehicle.imageUrl || "/brc-starcraft-gt-suv.png"}
                    alt={currentVehicle.name}
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,229,255,0.2)]"
                  />
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Selected Model:</span>
                  <span className="font-bold text-white">{currentVehicle.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Selected Drivetrain:</span>
                  <span className="font-bold text-cyan-300">{activeTrim.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Indicative Vehicle Price:</span>
                  <span className="font-bold text-cyan-400">{formatInr(calculatedTotal)}</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {COMMON_DISCLAIMERS.homologationNotice}
                </div>
                <div className="flex justify-between text-emerald-400 font-bold pt-1 border-t border-slate-800">
                  <span>Token Payable Now (Refundable):</span>
                  <span>₹25,000</span>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <span>{isSubmitting ? "Generating Certificate..." : "Pay ₹25,000 Refundable Token"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PreBookPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <Suspense fallback={<div className="text-center py-20 font-mono text-cyan-400">Loading BRC STAR Configurator...</div>}>
        <PreBookContent />
      </Suspense>
    </div>
  );
}
