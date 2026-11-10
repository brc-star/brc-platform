"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, AlertCircle } from "lucide-react";

export function DealerPartnerFormClient() {
  const [formData, setFormData] = useState({
    applicantName: "",
    companyName: "",
    email: "",
    phone: "",
    proposedTerritory: "",
    proposedState: "Rajasthan",
    tierInterested: "REGIONAL_SALES_AND_SERVICE",
    liquidCapitalInr: "12500000",
    commercialSpaceSqFt: "3000",
    automotiveExpYears: "5",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
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
      if (res.ok && data.success) {
        setSubmitSuccess(true);
      } else {
        setErrorMessage(data.message || "Submission failed. Please check details.");
      }
    } catch (err) {
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 lg:p-12 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-8">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-bold text-white font-mono">
          Apply for Exclusive Dealership / Territory License
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Our Business Development Team evaluates applications based on commercial location viability, capital backing, and automotive operational track record.
        </p>
      </div>

      {submitSuccess ? (
        <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white font-mono">
            Dealer Franchise Application Received
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Thank you, {formData.applicantName}. Our Senior Network Expansion Director will review your application for {formData.proposedTerritory}, {formData.proposedState} and contact you within 48 business hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5">Applicant / Managing Director Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Rajesh Vardhan"
              value={formData.applicantName}
              onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5">Company / Entity Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Vardhan Automotive Ventures LLP"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5">Official Email</label>
            <input
              type="email"
              required
              placeholder="rajesh@vardhanauto.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5">Mobile Phone (Direct)</label>
            <input
              type="tel"
              required
              placeholder="+91 98450 XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5">Proposed District / City Territory</label>
            <input
              type="text"
              required
              placeholder="e.g. Jaipur / Ganganagar / Delhi NCR"
              value={formData.proposedTerritory}
              onChange={(e) => setFormData({ ...formData, proposedTerritory: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            />
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5">State</label>
            <select
              value={formData.proposedState}
              onChange={(e) => setFormData({ ...formData, proposedState: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            >
              <option value="Rajasthan">Rajasthan</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Delhi NCR">Delhi NCR</option>
              <option value="Telangana">Telangana</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Punjab">Punjab</option>
              <option value="Haryana">Haryana</option>
              <option value="Other">Other States</option>
            </select>
          </div>

          {errorMessage && (
            <div className="md:col-span-2 p-3 rounded-lg bg-red-950/60 border border-red-800 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>{isSubmitting ? "Submitting Application Dossier..." : "Submit Territory Franchise Application"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
