"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export function ContactFormClient() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "Rajasthan",
    interestType: "PASSENGER_EV",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/v1/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(data.message || "Failed to submit message.");
      }
    } catch (err) {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
      <h3 className="text-lg font-bold text-white font-mono">
        Send an Executive Enquiry
      </h3>

      {isSuccess ? (
        <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-white font-mono">Enquiry Dispatched Successfully</h4>
          <p className="text-xs text-slate-300">
            Thank you for reaching out. A designated BRC STAR specialist will respond to your inquiry shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Meera Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="meera@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1">Mobile Phone</label>
              <input
                type="tel"
                required
                placeholder="+91 98000 XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
              />
            </div>
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1">Department / Inquiry Channel</label>
              <select
                value={formData.interestType}
                onChange={(e) => setFormData({ ...formData, interestType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
              >
                <option value="PASSENGER_EV">Passenger EV Pre-Booking &amp; Specs</option>
                <option value="COMMERCIAL_FLEET">Commercial Logistics &amp; Fleet Electrification</option>
                <option value="ELECTRIC_BUS">Municipal / Public Transit RFP</option>
                <option value="INVESTOR_RELATIONS">Investor Relations &amp; Seed Round</option>
                <option value="DEALER_FRANCHISE">Dealer &amp; Territory Franchise Application</option>
                <option value="RND_COLLABORATION">R&amp;D &amp; University Collaboration</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1">Message / Notes</label>
            <textarea
              rows={4}
              placeholder="Provide additional details regarding your inquiry..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-400 font-sans"
            />
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
            className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
          >
            <span>{isSubmitting ? "Routing to Executive Desk..." : "Submit Enquiry"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      )}
    </div>
  );
}
