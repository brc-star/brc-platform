"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  ShieldCheck,
  Lock,
  Printer,
  ArrowRight,
  Clock,
  FileCheck2,
  Car,
} from "lucide-react";
import { getVehicleBySlug, VEHICLES_DATA, COMMON_DISCLAIMERS } from "@/data/vehicles";
import { PREBOOK_TOKEN_AMOUNT_INR } from "@/components/PreBookContext";
import { formatInr } from "@/lib/utils";

function PreBookSuccessContent() {
  const searchParams = useSearchParams();
  const refParam = searchParams.get("ref") || searchParams.get("razorpay_payment_link_reference_id") || "";
  const paymentIdParam = searchParams.get("payment_id") || searchParams.get("razorpay_payment_id") || "";
  const modelSlugParam = searchParams.get("model") || "starcraft-gt";
  const vehicle = getVehicleBySlug(modelSlugParam) || VEHICLES_DATA[0];

  const bookingReference =
    refParam ||
    (paymentIdParam ? `BRC-${paymentIdParam.slice(-6).toUpperCase()}` : "BRC-2026-PRIORITY");

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      {/* Main Confirmation Certificate Card */}
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0A0E1A] border border-emerald-300 dark:border-emerald-500/40 shadow-2xl space-y-8 text-slate-900 dark:text-slate-100">
        {/* Status Header */}
        <div className="text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-700 dark:text-emerald-400 shadow-lg shadow-emerald-500/15">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            <span>Priority Build Slot Confirmed</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Your BRC STAR Priority Reservation is Locked
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Thank you for reserving a priority manufacturing build slot with{" "}
            <strong className="text-slate-900 dark:text-white">BRC STAR (OPC) PRIVATE LIMITED</strong>. Your{" "}
            <strong className="text-emerald-700 dark:text-emerald-400">
              {formatInr(PREBOOK_TOKEN_AMOUNT_INR)}
            </strong>{" "}
            booking token is protected under our 100% refundable escrow policy.
          </p>
        </div>

        {/* Reservation Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 font-mono text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
              Priority Slot Reference
            </span>
            <span className="font-bold text-slate-900 dark:text-cyan-300 text-sm break-all">
              {bookingReference}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
              Reserved Vehicle Model
            </span>
            <span className="font-bold text-slate-900 dark:text-white inline-flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{vehicle.name}</span>
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
              Token Value &amp; Status
            </span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              {formatInr(PREBOOK_TOKEN_AMOUNT_INR)} • 100% Refundable
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block mb-1">
              Delivery Window
            </span>
            <span className="font-bold text-slate-900 dark:text-white inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
              <span>{COMMON_DISCLAIMERS.targetDelivery}</span>
            </span>
          </div>

          {paymentIdParam && (
            <div className="sm:col-span-2 lg:col-span-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px]">
              <span className="text-slate-500">Razorpay Transaction Reference:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200">{paymentIdParam}</span>
            </div>
          )}
        </div>

        {/* Refundable Token Terms & DPDPA 2023 Compliance Note */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/25 border border-cyan-200 dark:border-cyan-500/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-800 dark:text-cyan-300">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Refundable Token Terms</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Your ₹25,000 priority booking token confers a non-binding manufacturing queue allocation and is{" "}
              <strong>100% refundable at any time prior to vehicle invoicing</strong>. Refund requests are processed back to the original payment source within{" "}
              <strong>7 business days</strong> with zero cancellation fees, subject to ARAI / ICAT homologation schedules.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              <Lock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>DPDPA 2023 Data Compliance Note</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              In strict compliance with the{" "}
              <strong className="text-slate-900 dark:text-slate-200">
                Digital Personal Data Protection Act, 2023 (DPDPA)
              </strong>
              , your personal &amp; transaction metadata is processed exclusively for vehicle slot allocation, statutory invoicing, and homologation updates by BRC STAR (OPC) PRIVATE LIMITED. You retain full rights to access, correct, or erase your consent record via{" "}
              <Link href="/privacy" className="text-cyan-700 dark:text-cyan-400 underline">
                Privacy &amp; Data Governance
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Statutory Entity Footer */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <FileCheck2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>BRC STAR (OPC) PRIVATE LIMITED</span>
          </span>
          <span>CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB7401R1Z7</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 print:hidden">
          <button
            type="button"
            onClick={() => window.print()}
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Booking Confirmation</span>
          </button>

          <Link
            href="/vehicles"
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all inline-flex items-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <span>Explore Vehicle Lineup</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PreBookSuccessClient() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-16 text-center font-mono text-xs text-slate-500">
          Loading priority booking confirmation...
        </div>
      }
    >
      <PreBookSuccessContent />
    </Suspense>
  );
}

export default PreBookSuccessClient;
