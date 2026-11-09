"use client";

import React, { useState } from "react";
import { X, ShieldCheck, CheckCircle2, AlertCircle, Loader2, Building, Mail, Phone, User, FileText } from "lucide-react";

interface AccessRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const AccessRequestModal: React.FC<AccessRequestModalProps> = ({
  isOpen,
  onClose,
  defaultRole = "INVESTOR_RELATIONS",
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [city, setCity] = useState("");
  const [portalType, setPortalType] = useState<string>(
    defaultRole === "DEALER" ? "DEALER_FRANCHISE" : 
    defaultRole === "RND" ? "RND_COLLABORATION" : 
    defaultRole === "ENTERPRISE" ? "COMMERCIAL_FLEET" : "INVESTOR_RELATIONS"
  );
  const [notes, setNotes] = useState("");
  const [dpdpaConsent, setDpdpaConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dpdpaConsent) {
      setError("Please confirm institutional verification and DPDPA consent.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/v1/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          city: city || "New Delhi",
          state: "Institutional / Corporate",
          interestType: portalType,
          notes: `Organization: ${organization}. Access request note: ${notes || "Standard access request"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedId(data.lead?.id || `REQ-${Date.now().toString(36).toUpperCase()}`);
      } else {
        setError(data.message || data.errors?.[0]?.message || "Submission failed. Please check form inputs.");
      }
    } catch (err) {
      setError("Network error connecting to BRC STAR identity service. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmittedId(null);
    setFullName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setCity("");
    setNotes("");
    setDpdpaConsent(false);
    setError("");
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="access-request-title"
    >
      <div 
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#0A0E1A] border border-slate-200 dark:border-cyan-500/30 p-6 sm:p-8 shadow-2xl text-slate-900 dark:text-white transition-all"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedId ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-500/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-lg shadow-emerald-500/10">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                Verification Request Logged
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Your request has been routed to the BRC STAR Compliance &amp; Enterprise Triage Queue.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-left space-y-2 max-w-md mx-auto font-mono text-xs">
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Request ID:</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-400">{submittedId}</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>Target Portal:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{portalType}</span>
              </div>
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400">
                <span>SLA Triage:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 4 Hours (Business Days)</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              An institutional verification link and mutual non-disclosure agreement (NDA) will be delivered to <strong className="text-slate-800 dark:text-slate-200 font-mono">{email}</strong>.
            </p>

            <button
              type="button"
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-slate-900 dark:bg-cyan-500 hover:bg-slate-800 dark:hover:bg-cyan-400 dark:text-slate-950 transition-colors"
            >
              Back to Sign In
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Header */}
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100/80 dark:bg-cyan-950/80 border border-cyan-300/60 dark:border-cyan-500/40 text-[10px] font-mono font-semibold text-cyan-800 dark:text-cyan-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>INSTITUTIONAL ACCESS TRIAGE</span>
              </div>
              <h2 id="access-request-title" className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Apply for Enterprise Data Room Access
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                Access to proprietary CAD telemetry, Series-A data rooms, and Dealership CRM is strictly credential-gated under bilateral NDA.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-500/40 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Target Portal Selection */}
              <div>
                <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1.5">
                  Requested Portal Access Level
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {[
                    { id: "INVESTOR_RELATIONS", label: "Investor Data Room", sub: "Cap Table & Patent Deck" },
                    { id: "DEALER_FRANCHISE", label: "Authorized Dealership", sub: "Territory Allocation Hub" },
                    { id: "RND_COLLABORATION", label: "R&D / Academic Lab", sub: "Dyno Telemetry & KERS API" },
                    { id: "COMMERCIAL_FLEET", label: "Enterprise Fleet Ops", sub: "StarTransit / Fleet TCO" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setPortalType(option.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        portalType === option.id
                          ? "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 text-slate-900 dark:text-white shadow-sm ring-1 ring-cyan-500/30"
                          : "bg-slate-50 dark:bg-[#060913] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                      }`}
                    >
                      <div className="font-semibold text-xs text-slate-900 dark:text-white">{option.label}</div>
                      <div className="text-[10px] text-slate-500 dark:text-slate-400">{option.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">
                    Full Legal Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Dr. Siddharth Menon"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-[#060913] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    />
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">
                    Official Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="name@fund-or-corp.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-[#060913] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    />
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>
              </div>

              {/* Organization & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">
                    Firm / Organization Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Apex Venture Capital LLP"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-[#060913] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    />
                    <Building className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">
                    Official Contact Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-[#060913] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                    />
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>
              </div>

              {/* Brief Mandate / City */}
              <div>
                <label className="text-xs font-mono text-slate-700 dark:text-slate-300 block mb-1">
                  Jurisdiction / Headquarter City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai / Bangalore / Singapore"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-[#060913] border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* DPDPA Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    required
                    checked={dpdpaConsent}
                    onChange={(e) => setDpdpaConsent(e.target.checked)}
                    className="mt-0.5 rounded border-slate-300 dark:border-slate-700 text-cyan-600 focus:ring-cyan-500"
                  />
                  <span>
                    I confirm that I am an authorized corporate representative. I consent to identity screening and automated mutual NDA delivery under BRC STAR governance (Indian DPDPA 2023 compliant).
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Verifying Entity Credentials...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Submit Verification Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessRequestModal;
