"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2,
  ShieldCheck,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";
import {
  DealerApplicationSchema,
  DealerApplicationInput,
  INVESTMENT_TIERS,
  TARGET_DEALER_HUBS,
  TARGET_STATES,
  BUSINESS_SECTORS,
} from "@/lib/validations/dealer";

type FieldErrors = Partial<Record<keyof DealerApplicationInput, string>>;

interface ApplicationReceipt {
  applicationId: string;
  persistedToDb: boolean;
  auditHash: string;
  applicant: {
    applicantName: string;
    companyName: string;
    operatingCity: string;
    operatingState: string;
    investmentTierLabel: string;
    investmentAmountDisplay: string;
  };
}

const INITIAL_FORM: DealerApplicationInput = {
  applicantName: "",
  companyName: "",
  operatingCity: TARGET_DEALER_HUBS[0].city,
  operatingState: TARGET_DEALER_HUBS[0].state,
  businessSector: BUSINESS_SECTORS[0],
  commercialLandSqFt: 4500,
  investmentTier: "TIER_1_2_5_CR",
  phone: "",
  email: "",
};

export function DealershipApplicationForm() {
  const [formData, setFormData] = useState<DealerApplicationInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof DealerApplicationInput, boolean>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<ApplicationReceipt | null>(null);

  const validateSingleField = (
    field: keyof DealerApplicationInput,
    value: DealerApplicationInput[keyof DealerApplicationInput]
  ) => {
    const candidate = { ...formData, [field]: value };
    const result = DealerApplicationSchema.safeParse(candidate);
    if (result.success) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
      return;
    }
    const issue = result.error.issues.find((i) => i.path[0] === field);
    setErrors((prev) => {
      const next = { ...prev };
      if (issue) {
        next[field] = issue.message;
      } else {
        delete next[field];
      }
      return next;
    });
  };

  const handleFieldChange = <K extends keyof DealerApplicationInput>(
    field: K,
    value: DealerApplicationInput[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field] || errors[field]) {
      validateSingleField(field, value);
    }
  };

  const handleBlur = (field: keyof DealerApplicationInput) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateSingleField(field, formData[field]);
  };

  const handleHubChange = (selectedCity: string) => {
    const matchedHub = TARGET_DEALER_HUBS.find((h) => h.city === selectedCity);
    setFormData((prev) => ({
      ...prev,
      operatingCity: selectedCity,
      operatingState: matchedHub ? matchedHub.state : prev.operatingState,
    }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next.operatingCity;
      delete next.operatingState;
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const parsed = DealerApplicationSchema.safeParse(formData);
    if (!parsed.success) {
      const nextErrors: FieldErrors = {};
      const nextTouched: Partial<Record<keyof DealerApplicationInput, boolean>> =
        {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof DealerApplicationInput;
        if (key && !nextErrors[key]) {
          nextErrors[key] = issue.message;
          nextTouched[key] = true;
        }
      }
      setErrors(nextErrors);
      setTouched((prev) => ({ ...prev, ...nextTouched }));
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/dealers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const json = await res.json();
      if (!res.ok) {
        setSubmitError(json.error || "Unable to submit dealership application.");
        return;
      }
      setReceipt(json);
    } catch {
      setSubmitError(
        "Network error while submitting application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (receipt) {
    return (
      <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#0A0E1A] border border-emerald-300 dark:border-emerald-500/40 shadow-2xl space-y-6 text-slate-900 dark:text-slate-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
              Dealership Dossier Registered
            </span>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Territory Qualification Under Review
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Our Channel Expansion Board has logged your franchise dossier for{" "}
              <strong className="text-slate-900 dark:text-white">
                {receipt.applicant.operatingCity}, {receipt.applicant.operatingState}
              </strong>
              .
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 font-mono text-xs">
          <div>
            <span className="text-[10px] uppercase text-slate-500 block">
              Application Ref
            </span>
            <span className="font-bold text-cyan-700 dark:text-cyan-300">
              {receipt.applicationId}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-slate-500 block">
              Applicant &amp; Entity
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              {receipt.applicant.applicantName} ({receipt.applicant.companyName})
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-slate-500 block">
              Selected Capital Tier
            </span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400">
              {receipt.applicant.investmentTierLabel}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-slate-500 block">
              Target Capital
            </span>
            <span className="font-bold text-slate-900 dark:text-white">
              {receipt.applicant.investmentAmountDisplay}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500">
          <span>Audit Hash: {receipt.auditHash.slice(0, 24)}...</span>
          <button
            type="button"
            onClick={() => {
              setReceipt(null);
              setFormData(INITIAL_FORM);
              setTouched({});
            }}
            className="text-cyan-700 dark:text-cyan-400 hover:underline font-semibold"
          >
            Submit Another Territory Application →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-cyan-500/25 shadow-2xl space-y-8 text-slate-900 dark:text-slate-100"
    >
      {/* Card Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Franchise Partner Qualification</span>
          </div>
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Apply for a BRC STAR Experience Hub &amp; Dealership
          </h2>
        </div>
        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
          Phase I Allocation: FY 2026–27
        </span>
      </div>

      {/* 1. Applicant & Entity Name */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
          <Building2 className="w-4 h-4" />
          <span>1. Applicant &amp; Business Entity</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dealer-applicant-name"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Authorized Applicant Name *
            </label>
            <input
              id="dealer-applicant-name"
              type="text"
              value={formData.applicantName}
              onChange={(e) => handleFieldChange("applicantName", e.target.value)}
              onBlur={() => handleBlur("applicantName")}
              placeholder="e.g. Rajeshwar Rathore"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
            />
            {errors.applicantName && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.applicantName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="dealer-company-name"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Legal Entity / Firm Name *
            </label>
            <input
              id="dealer-company-name"
              type="text"
              value={formData.companyName}
              onChange={(e) => handleFieldChange("companyName", e.target.value)}
              onBlur={() => handleBlur("companyName")}
              placeholder="e.g. Rathore Mobility Ventures Pvt Ltd"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-950 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
            />
            {errors.companyName && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.companyName}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 2. Operating City & State (Dropdown of Target Hubs) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
          <MapPin className="w-4 h-4" />
          <span>2. Operating City &amp; State (Target Hubs)</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dealer-hub-city"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Target Hub City *
            </label>
            <select
              id="dealer-hub-city"
              value={formData.operatingCity}
              onChange={(e) => handleHubChange(e.target.value)}
              onBlur={() => handleBlur("operatingCity")}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
            >
              {TARGET_DEALER_HUBS.map((hub) => (
                <option key={`${hub.city}-${hub.state}`} value={hub.city}>
                  {hub.city} ({hub.zone})
                </option>
              ))}
            </select>
            {errors.operatingCity && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.operatingCity}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="dealer-state"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Operating State / UT *
            </label>
            <select
              id="dealer-state"
              value={formData.operatingState}
              onChange={(e) => handleFieldChange("operatingState", e.target.value)}
              onBlur={() => handleBlur("operatingState")}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
            >
              {TARGET_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
            {errors.operatingState && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.operatingState}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 3. Existing Business Sector & Commercial Land Availability */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
          <Briefcase className="w-4 h-4" />
          <span>3. Business Background &amp; Commercial Footprint</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dealer-sector"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Existing Business Sector *
            </label>
            <select
              id="dealer-sector"
              value={formData.businessSector}
              onChange={(e) => handleFieldChange("businessSector", e.target.value)}
              onBlur={() => handleBlur("businessSector")}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
            >
              {BUSINESS_SECTORS.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
            {errors.businessSector && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.businessSector}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="dealer-land-sqft"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Commercial Land Availability (Sq Ft) *
            </label>
            <input
              id="dealer-land-sqft"
              type="number"
              min={500}
              max={1000000}
              step={250}
              value={
                Number.isNaN(formData.commercialLandSqFt)
                  ? ""
                  : formData.commercialLandSqFt
              }
              onChange={(e) =>
                handleFieldChange(
                  "commercialLandSqFt",
                  e.target.value === "" ? 0 : Number(e.target.value)
                )
              }
              onBlur={() => handleBlur("commercialLandSqFt")}
              placeholder="e.g. 4500"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all font-mono"
            />
            {errors.commercialLandSqFt && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.commercialLandSqFt}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 4. Investment Tier Selection */}
      <div className="space-y-3">
        <span className="block text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
          4. Franchise Investment Tier Selection *
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {INVESTMENT_TIERS.map((tier) => {
            const isSelected = formData.investmentTier === tier.id;
            return (
              <button
                key={tier.id}
                type="button"
                onClick={() => handleFieldChange("investmentTier", tier.id)}
                className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between gap-2 ${
                  isSelected
                    ? "bg-cyan-50 border-cyan-500 ring-2 ring-cyan-500/25 dark:bg-cyan-950/60 dark:border-cyan-400"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-950 dark:border-slate-800 dark:hover:border-slate-700"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                      {tier.badge}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Min {tier.minSqFt.toLocaleString("en-IN")} sq ft
                    </span>
                  </div>
                  <div className="font-display text-lg font-extrabold text-slate-900 dark:text-white">
                    {tier.title}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {tier.format}
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {tier.highlights}
                </p>
              </button>
            );
          })}
        </div>
        {errors.investmentTier && (
          <p className="text-xs font-mono text-red-600 dark:text-red-400">
            {errors.investmentTier}
          </p>
        )}
      </div>

      {/* 5. Phone & Work Email */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
          <Phone className="w-4 h-4" />
          <span>5. Executive Contact Coordinates</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dealer-phone"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Direct Phone / WhatsApp *
            </label>
            <input
              id="dealer-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleFieldChange("phone", e.target.value)}
              onBlur={() => handleBlur("phone")}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all font-mono"
            />
            {errors.phone && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="dealer-email"
              className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
            >
              Work Email Address *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
              <input
                id="dealer-email"
                type="email"
                value={formData.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                placeholder="director@company.in"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none transition-all"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs font-mono text-red-600 dark:text-red-400">
                {errors.email}
              </p>
            )}
          </div>
        </div>
      </div>

      {submitError && (
        <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs font-mono flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Submit Action & Compliance Footer */}
      <div className="space-y-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-xl font-mono text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-300 hover:from-cyan-300 hover:to-emerald-200 transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Encrypting &amp; Submitting Dealership Dossier...</span>
            </>
          ) : (
            <>
              <span>Submit Franchise Application</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>
              Non-binding franchise evaluation • Protected under{" "}
              <Link
                href="/privacy"
                className="text-cyan-700 dark:text-cyan-400 underline"
              >
                DPDPA 2023
              </Link>
            </span>
          </span>
          <span className="font-mono">
            BRC STAR (OPC) PRIVATE LIMITED • GSTIN: 08AAICB7401R1Z7
          </span>
        </div>
      </div>
    </form>
  );
}

export default DealershipApplicationForm;
