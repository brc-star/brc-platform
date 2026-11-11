"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  X,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  Lock,
  Sparkles,
  CheckCircle2,
  Sliders,
} from "lucide-react";
import {
  usePreBookDrawer,
  RAZORPAY_PREBOOK_PAYMENT_LINK,
  PREBOOK_TOKEN_AMOUNT_INR,
} from "@/components/PreBookContext";
import {
  VEHICLES_DATA,
  STANDARD_DRIVETRAIN_TRIMS,
  COMMON_DISCLAIMERS,
  calculateVehiclePrice,
  getVehicleBySlug,
} from "@/data/vehicles";
import { formatInr } from "@/lib/utils";

export function PreBookingDrawer() {
  const { isOpen, options, closeDrawer } = usePreBookDrawer();

  const [selectedSlug, setSelectedSlug] = useState<string>(
    options.modelSlug || "starcraft-gt"
  );
  const [selectedTrim, setSelectedTrim] = useState<string>(
    options.trim || "standard"
  );

  // Sync local selection when caller opens the drawer with prefilled options
  useEffect(() => {
    if (options.modelSlug) {
      setSelectedSlug(options.modelSlug);
    }
    if (options.trim) {
      setSelectedTrim(options.trim);
    }
  }, [options.modelSlug, options.trim, isOpen]);

  // Close on Escape and lock background scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeDrawer]);

  if (!isOpen) return null;

  const currentVehicle =
    getVehicleBySlug(selectedSlug) || VEHICLES_DATA[0];
  const activeTrim =
    STANDARD_DRIVETRAIN_TRIMS.find((t) => t.id === selectedTrim) ||
    STANDARD_DRIVETRAIN_TRIMS[0];
  const indicativePrice = calculateVehiclePrice(
    currentVehicle.basePriceInr,
    activeTrim.priceOffset
  );

  const fullConfiguratorHref = `/pre-book?model=${encodeURIComponent(
    currentVehicle.slug
  )}&trim=${encodeURIComponent(activeTrim.id)}${
    options.color ? `&color=${encodeURIComponent(options.color)}` : ""
  }${options.wheels ? `&wheels=${encodeURIComponent(options.wheels)}` : ""}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="prebook-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Slide-over Panel */}
      <aside className="relative z-10 w-full max-w-md h-full overflow-y-auto bg-white dark:bg-[#060913] border-l border-slate-200 dark:border-cyan-500/25 shadow-2xl flex flex-col text-slate-900 dark:text-slate-100">
        {/* Top Accent Strip */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 shrink-0" />

        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-[#060913]/95 backdrop-blur-md z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-cyan-700 dark:text-cyan-400 font-bold">
              <Sparkles className="w-3 h-3" />
              <span>Priority Build Slot</span>
            </div>
            <h2
              id="prebook-drawer-title"
              className="font-display font-bold text-lg text-slate-900 dark:text-white tracking-tight"
            >
              Reserve Your BRC STAR EV
            </h2>
          </div>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close Pre-Booking Drawer"
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 flex-1">
          {/* Token Summary Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-cyan-950/40 dark:via-[#0A0E1A] dark:to-blue-950/30 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                Priority Reservation Token
              </span>
              <span className="text-2xl font-display font-extrabold text-slate-900 dark:text-white">
                {formatInr(PREBOOK_TOKEN_AMOUNT_INR)}
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-950/70 dark:text-emerald-300 dark:border-emerald-500/40 shrink-0">
              100% Refundable
            </span>
          </div>

          {/* Model Preview */}
          <div className="rounded-2xl bg-slate-50 dark:bg-[#0A0E1A] border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="h-32 w-full rounded-xl bg-gradient-to-b from-slate-100 to-slate-200/70 dark:from-[#0a1024] dark:to-[#02040a] border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-center p-2 overflow-hidden">
              <img
                src={currentVehicle.imageUrl}
                alt={currentVehicle.name}
                className="h-full w-full object-contain drop-shadow-[0_10px_18px_rgba(0,229,255,0.2)]"
              />
            </div>

            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-700 dark:text-cyan-400 font-semibold">
                  {currentVehicle.segmentBadge}
                </span>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white">
                  {currentVehicle.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono uppercase text-slate-500 block">
                  Est. Ex-Showroom
                </span>
                <span className="font-mono font-bold text-sm text-slate-900 dark:text-cyan-300">
                  {formatInr(indicativePrice)}
                </span>
              </div>
            </div>

            {options.color && (
              <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-200/80 dark:border-slate-800">
                <span>
                  Finish:{" "}
                  <strong className="text-slate-900 dark:text-slate-200 capitalize">
                    {options.color.replace(/-/g, " ")}
                  </strong>
                </span>
                {options.wheels && (
                  <span>
                    • Spec:{" "}
                    <strong className="text-slate-900 dark:text-slate-200 uppercase">
                      {options.wheels}
                    </strong>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Model Selector */}
          <div className="space-y-2">
            <label
              htmlFor="drawer-vehicle-select"
              className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block"
            >
              Select Vehicle Architecture
            </label>
            <select
              id="drawer-vehicle-select"
              value={currentVehicle.slug}
              onChange={(e) => setSelectedSlug(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-mono focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
            >
              {VEHICLES_DATA.map((v) => (
                <option key={v.slug} value={v.slug}>
                  {v.name} — {formatInr(v.basePriceInr)}
                </option>
              ))}
            </select>
          </div>

          {/* Trim Selector */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 block">
              Select Self-Volt Powertrain Trim
            </span>
            <div className="grid grid-cols-1 gap-2">
              {STANDARD_DRIVETRAIN_TRIMS.map((trim) => {
                const isSelected = activeTrim.id === trim.id;
                return (
                  <button
                    key={trim.id}
                    type="button"
                    onClick={() => setSelectedTrim(trim.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 text-slate-900 dark:bg-cyan-950/60 dark:border-cyan-400 dark:text-white ring-1 ring-cyan-500/30"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-mono font-bold truncate">
                        {trim.name}
                      </div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">
                        {trim.priceOffset === 0
                          ? "Included Base Spec"
                          : `+ ${formatInr(trim.priceOffset)}`}
                      </div>
                    </div>
                    {trim.badge && (
                      <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 text-[9px] font-mono font-bold shrink-0">
                        {trim.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Guarantees & Compliance */}
          <ul className="space-y-2 text-[11px] text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#0A0E1A] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <span>
                Priority manufacturing queue allocation ({COMMON_DISCLAIMERS.targetDelivery}).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <span>
                100% refundable ₹25,000 token within 7 business days upon cancellation request.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Lock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>
                Processed in compliance with India DPDPA 2023. {COMMON_DISCLAIMERS.homologationNotice}.
              </span>
            </li>
          </ul>
        </div>

        {/* Sticky Footer CTAs */}
        <div className="p-6 pt-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#060913] space-y-2.5 sticky bottom-0">
          <a
            href={RAZORPAY_PREBOOK_PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 rounded-xl font-mono text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-300 hover:from-cyan-300 hover:to-emerald-200 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 active:scale-[0.99]"
          >
            <span>Pay ₹25,000 Token via Razorpay</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={fullConfiguratorHref}
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-xl font-mono text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Full Configurator</span>
            </Link>
            <Link
              href={`/pre-book/success?model=${encodeURIComponent(
                currentVehicle.slug
              )}`}
              onClick={closeDrawer}
              className="py-2.5 px-3 rounded-xl font-mono text-[11px] font-semibold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/40 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 border border-cyan-200 dark:border-cyan-500/30 flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Already Paid? Verify</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-[10px] font-mono text-center text-slate-500">
            BRC STAR (OPC) PRIVATE LIMITED • GSTIN: 08AAICB7401R1Z7
          </p>
        </div>
      </aside>
    </div>
  );
}

export default PreBookingDrawer;
