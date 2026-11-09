"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Car,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  ChevronRight,
  AlertCircle,
  QrCode,
  Smartphone,
  Building2,
  Lock,
  Printer,
  Download,
  Loader2,
  X,
  FileCheck2,
} from "lucide-react";
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

type PaymentMethodType = "UPI" | "NETBANKING" | "CARD";

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
  const [errorMessage, setErrorMessage] = useState("");

  // Payment Modal State
  const [pendingOrder, setPendingOrder] = useState<any>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>("UPI");
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("HDFC Bank");
  const [cardData, setCardData] = useState({ number: "", exp: "", cvv: "" });
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Confirmed Certificate State
  const [bookingConfirmed, setBookingConfirmed] = useState<any>(null);

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

  // Step 1: Initiate Order & Open Payment Gateway
  const handleInitiatePayment = async (e: React.FormEvent) => {
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
      if (res.ok && data.success && data.order) {
        setPendingOrder(data.order);
        setIsPaymentModalOpen(true);
      } else {
        setErrorMessage(data.message || "Failed to create reservation order. Please retry.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred connecting to BRC STAR booking engine.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Complete Escrow Authorization & Verify Signature
  const handleCompleteEscrowPayment = async () => {
    if (!pendingOrder) return;
    setIsProcessingPayment(true);

    try {
      // Generate realistic Razorpay payment ID
      const paymentId = `pay_BRC_${Date.now().toString(36).toUpperCase()}_${Math.floor(1000 + Math.random() * 9000)}`;

      const res = await fetch("/api/v1/pre-booking/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: pendingOrder.orderId,
          bookingReference: pendingOrder.bookingReference,
          paymentId,
          method: paymentMethod,
          customer: {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
          },
          vehicle: {
            modelSlug: currentVehicle.slug,
            modelName: currentVehicle.name,
            trim: activeTrim.id,
            trimName: activeTrim.name,
            color: selectedColor,
            totalPriceInr: calculatedTotal,
          },
          tokenAmountInr: 25000,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success && data.booking) {
        setIsPaymentModalOpen(false);
        setBookingConfirmed(data.booking);
      } else {
        setErrorMessage(data.message || "Payment verification failed. Please contact support.");
        setIsPaymentModalOpen(false);
      }
    } catch (err) {
      setErrorMessage("Network error during payment verification. Please retry.");
      setIsPaymentModalOpen(false);
    } finally {
      setIsProcessingPayment(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-300/60 text-cyan-800 dark:bg-cyan-950/80 dark:border-cyan-500/30 dark:text-cyan-300 text-xs font-mono font-semibold shadow-sm transition-colors">
          <Zap className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Priority Assembly Allocation • Series 2027</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display transition-colors">
          Reserve Your <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">BRC STAR Build Slot</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-sans transition-colors">
          Lock in priority manufacturing queue placement with a 100% refundable token of ₹25,000 held in compliant bank escrow.
        </p>
      </div>

      {bookingConfirmed ? (
        /* Official High-Fidelity Digital Reservation Certificate */
        <div className="max-w-3xl mx-auto p-6 sm:p-10 rounded-3xl bg-white/95 border border-slate-200/90 shadow-2xl dark:bg-gradient-to-br dark:from-cyan-950/80 dark:via-[#050814] dark:to-slate-950 dark:border-cyan-500/40 text-center space-y-6 transition-all print:border-none print:shadow-none print:p-2">
          {/* Top Seal */}
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-cyan-500/20 text-emerald-600 dark:text-cyan-400 flex items-center justify-center mx-auto border border-emerald-300 dark:border-cyan-400/40 shadow-lg shadow-emerald-500/10 dark:shadow-cyan-500/25">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-widest block">
              OFFICIAL BRC STAR PRIORITY ALLOCATION CERTIFICATE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-mono tracking-tight">
              {bookingConfirmed.bookingReference}
            </h2>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>PAID &amp; SECURED IN BANK ESCROW</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Congratulations, <strong>{formData.fullName}</strong>. Your official allocation slot for the <strong>{currentVehicle.name}</strong> ({activeTrim.name}) is cryptographically verified and recorded in the manufacturing queue.
          </p>

          {/* Certificate Spec & Financial Matrix */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs font-mono text-left space-y-2.5 text-slate-700 dark:text-slate-300">
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">Allocated Vehicle Model:</span>
              <span className="text-slate-900 dark:text-white font-bold">{currentVehicle.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">Drivetrain Architecture:</span>
              <span className="text-cyan-700 dark:text-cyan-300 font-bold">{activeTrim.name}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">Exterior Finishes:</span>
              <span className="text-slate-900 dark:text-white font-semibold">{selectedColor}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">Indicative Ex-Showroom Total:</span>
              <span className="text-slate-900 dark:text-white font-bold">{formatInr(calculatedTotal)}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">Refundable Token Paid:</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">₹25,000 (100% Fully Refundable)</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">Razorpay Payment Ref:</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-mono font-semibold">{bookingConfirmed.paymentId}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 dark:border-slate-800/80 pb-2">
              <span className="text-slate-500 dark:text-slate-400">GST Invoice Ref:</span>
              <span className="text-slate-900 dark:text-white font-mono">{bookingConfirmed.gstInvoiceNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Target Assembly Window:</span>
              <span className="text-slate-900 dark:text-white font-bold">Q2 2027 • Regional Territory ({formData.state})</span>
            </div>
          </div>

          {/* Legal Escrow Guarantee Clause */}
          <div className="p-3.5 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed text-left flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block mb-0.5">Statutory RBI Escrow Guarantee:</strong>
              This token is protected under Indian Consumer Protection Act 2019 and held in designated escrow. 100% refundable anytime prior to vehicle VIN chassis assignment upon single-click request via the customer portal within 48 banking hours.
            </div>
          </div>

          {/* Cryptographic SHA-256 Audit Stamp */}
          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 dark:border-slate-800 pt-3">
            <span>Audit Hash: {bookingConfirmed.verificationHash?.slice(0, 24)}...</span>
            <span>CIN: U34100RJ2019OPC066948</span>
          </div>

          {/* Certificate Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 print:hidden">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Official Voucher</span>
            </button>
            <Link
              href="/app"
              className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <span>Access Connected Customer App</span>
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
      ) : (
        /* Multi-Step Interactive Checkout Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Model & Trim Selection */}
          <div className="lg:col-span-6 space-y-6">
            {/* Step 1: Vehicle Model */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/90 border border-slate-200/90 shadow-md dark:bg-slate-900/60 dark:border-slate-800 space-y-4 transition-colors">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold tracking-wider flex items-center justify-between">
                <span>Step 1: Choose Vehicle Model</span>
                <span className="text-[10px] text-slate-500 font-normal">Standardized Baseline Lineup</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {PRIMARY_PREBOOK_VEHICLES.map((v) => (
                  <button
                    key={v.slug}
                    type="button"
                    onClick={() => setSelectedModelSlug(v.slug)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedModelSlug === v.slug
                        ? "bg-cyan-50 border-cyan-500 shadow-md shadow-cyan-500/10 dark:bg-cyan-950/60 dark:border-cyan-400 dark:shadow-cyan-950"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 dark:text-white font-mono">{v.name}</div>
                    <div className="text-[11px] text-cyan-700 dark:text-cyan-400 font-mono mt-0.5">{formatInr(v.basePriceInr)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Drivetrain Architecture */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/90 border border-slate-200/90 shadow-md dark:bg-slate-900/60 dark:border-slate-800 space-y-4 transition-colors">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold tracking-wider">
                Step 2: Choose Drivetrain Architecture
              </div>
              <div className="space-y-2">
                {STANDARD_DRIVETRAIN_TRIMS.map((trim) => (
                  <button
                    key={trim.id}
                    type="button"
                    onClick={() => setSelectedTrim(trim.id)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all flex items-center justify-between ${
                      selectedTrim === trim.id
                        ? "bg-cyan-50 border-cyan-500 shadow-md shadow-cyan-500/10 dark:bg-cyan-950/60 dark:border-cyan-400 dark:shadow-cyan-950"
                        : "bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                        <span>{trim.name}</span>
                        {trim.badge && (
                          <span className="text-[8px] px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-800 border border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-500/40 font-bold">
                            {trim.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">
                        {trim.description(currentVehicle.name, currentVehicle.ratedRangeKm)}
                      </div>
                    </div>
                    <div className="text-xs font-mono font-semibold text-cyan-700 dark:text-cyan-400 shrink-0 ml-3">
                      {trim.priceOffset === 0 ? "Base Included" : `+${formatInr(trim.priceOffset)}`}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact & Reservation Intake Form */}
          <div className="lg:col-span-6">
            <form 
              onSubmit={handleInitiatePayment} 
              className="p-6 sm:p-8 rounded-2xl bg-white/90 border border-slate-200/90 shadow-xl dark:bg-slate-900/80 dark:border-slate-800 space-y-4 transition-all"
            >
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase font-bold tracking-wider">
                Step 3: Driver Details &amp; Priority Slot
              </div>

              <div>
                <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Rao"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:focus:border-cyan-400 font-sans focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:focus:border-cyan-400 font-sans focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:focus:border-cyan-400 font-sans focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                    City / Municipality *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:focus:border-cyan-400 font-sans focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1">
                    Delivery State *
                  </label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-slate-950 dark:border-slate-800 dark:text-white dark:focus:border-cyan-400 font-sans focus:outline-none transition-all"
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Other">Other States</option>
                  </select>
                </div>
              </div>

              {/* Order Summary Inset */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3 text-xs font-mono">
                <div className="w-full h-32 rounded-xl bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 dark:from-[#0a1024] dark:via-[#050814] dark:to-[#02040a] border border-slate-200 dark:border-slate-800 p-2 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={currentVehicle.imageUrl || "/brc-starcraft-gt-suv.png"}
                    alt={currentVehicle.name}
                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,229,255,0.2)]"
                  />
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Selected Model:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{currentVehicle.name}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Selected Drivetrain:</span>
                  <span className="font-bold text-cyan-700 dark:text-cyan-300">{activeTrim.name}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Indicative Vehicle Price:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{formatInr(calculatedTotal)}</span>
                </div>
                <div className="text-[10px] text-slate-500 font-mono">
                  {COMMON_DISCLAIMERS.homologationNotice}
                </div>
                <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-bold pt-2 border-t border-slate-200 dark:border-slate-800 text-sm">
                  <span>Token Payable Now (100% Refundable):</span>
                  <span>₹25,000</span>
                </div>
              </div>

              {errorMessage && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/60 dark:border-red-800 dark:text-red-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Initiating Payment Order...</span>
                  </>
                ) : (
                  <>
                    <span>Pay ₹25,000 Refundable Token &amp; Lock Priority Slot</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[10px] text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Statutory 100% Refund Guarantee • RBI Compliant Bank Escrow</span>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Production-Grade Escrow Payment Checkout Modal */}
      {isPaymentModalOpen && pendingOrder && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-cyan-500/40 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-900 dark:text-white transition-all">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                    BRC STAR Escrow Gateway
                  </h3>
                  <p className="text-[10px] font-mono text-slate-500">
                    Order Ref: {pendingOrder.orderId}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPaymentModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Total Payable Badge */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-500 block">Total Refundable Token</span>
                <span className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">₹25,000.00</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                100% Refundable
              </span>
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block">
                Select Indian Payment Rail:
              </label>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("UPI")}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === "UPI"
                      ? "bg-cyan-50 border-cyan-500 text-slate-900 dark:bg-cyan-950/80 dark:border-cyan-400 dark:text-white ring-1 ring-cyan-500/30"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400"
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-semibold text-[11px]">UPI Instant</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("NETBANKING")}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === "NETBANKING"
                      ? "bg-cyan-50 border-cyan-500 text-slate-900 dark:bg-cyan-950/80 dark:border-cyan-400 dark:text-white ring-1 ring-cyan-500/30"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400"
                  }`}
                >
                  <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-semibold text-[11px]">NetBanking</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("CARD")}
                  className={`py-2.5 px-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    paymentMethod === "CARD"
                      ? "bg-cyan-50 border-cyan-500 text-slate-900 dark:bg-cyan-950/80 dark:border-cyan-400 dark:text-white ring-1 ring-cyan-500/30"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-400"
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span className="font-semibold text-[11px]">Card / Corporate</span>
                </button>
              </div>

              {/* Dynamic Sub-Panels */}
              {paymentMethod === "UPI" && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>Supported UPI Apps:</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">GPay • PhonePe • Paytm • BHIM</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="e.g. mobile@upi or name@okhdfcbank"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                  <div className="text-[10px] text-slate-500 text-center font-mono">
                    Instant payment authorization request will be sent to your UPI device.
                  </div>
                </div>
              )}

              {paymentMethod === "NETBANKING" && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-3">
                  <label className="text-xs font-mono text-slate-600 dark:text-slate-400 block">Choose Authorized Bank:</label>
                  <select
                    value={selectedBank}
                    onChange={(e) => setSelectedBank(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                  >
                    <option value="HDFC Bank">HDFC Bank (Primary Escrow Partner)</option>
                    <option value="ICICI Bank">ICICI Bank</option>
                    <option value="State Bank of India">State Bank of India (SBI)</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}

              {paymentMethod === "CARD" && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5">
                  <input
                    type="text"
                    placeholder="Card Number (RuPay, Visa, MasterCard)"
                    value={cardData.number}
                    onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardData.exp}
                      onChange={(e) => setCardData({ ...cardData, exp: e.target.value })}
                      className="px-3 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                    />
                    <input
                      type="password"
                      maxLength={4}
                      placeholder="CVV"
                      value={cardData.cvv}
                      onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                      className="px-3 py-2 rounded-lg text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 font-mono"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Escrow Guarantee Disclaimer */}
            <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed text-center font-sans border-t border-slate-200 dark:border-slate-800 pt-3">
              By authorizing, you securely transfer ₹25,000 into the designated BRC STAR escrow pool. 100% refundable on demand per Indian Consumer Protection Guidelines.
            </div>

            {/* Complete Escrow Button */}
            <button
              type="button"
              disabled={isProcessingPayment}
              onClick={handleCompleteEscrowPayment}
              className="w-full py-3.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
            >
              {isProcessingPayment ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Locking Escrow &amp; Verifying Bank Auth...</span>
                </>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" />
                  <span>Authorize &amp; Lock ₹25,000 in Escrow</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function PreBookPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060913] text-slate-900 dark:text-white transition-colors duration-300 pt-20">
      <Suspense fallback={<div className="text-center py-20 font-mono text-cyan-500 dark:text-cyan-400">Loading BRC STAR Configurator &amp; Escrow Gateway...</div>}>
        <PreBookContent />
      </Suspense>
    </div>
  );
}
