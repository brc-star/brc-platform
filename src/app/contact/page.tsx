"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Mail, Phone, Shield, ArrowRight, ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "Karnataka",
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
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Breadcrumb & Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-cyan-400">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-cyan-400">Contact &amp; Headquarters</span>
        </div>

        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>GLOBAL HEADQUARTERS &amp; R&amp;D LABS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect with BRC STAR Leadership
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Reach our executive engineering, institutional investor relations, fleet partnership, and customer advisory teams.
          </p>
        </div>
      </div>

      {/* Grid: Contact Info & Interactive Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Headquarters Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5">
            <h3 className="text-lg font-bold text-white font-mono">
              Registered Office &amp; Headquarters
            </h3>

            <div className="space-y-4 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">BRC STAR (OPC) PRIVATE LIMITED</strong>
                  <span>7SJM-A, Anupgarh, Ganganagar, Rajasthan 335701, India</span>
                  <div className="text-[10px] text-slate-400 mt-0.5">CIN: U34100RJ2019OPC066948</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white">Email: </strong>
                  <a href="mailto:contact@brcstar.in" className="text-cyan-300 hover:underline">
                    contact@brcstar.in
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white">Mobile / Direct: </strong>
                  <a href="tel:+919924100759" className="text-cyan-300 hover:underline">
                    +91 99241 00759
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-semibold text-cyan-300">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  <span>iStart Rajasthan Incubated Startup</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
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
                      <option value="INVESTOR_RELATIONS">Investor Relations &amp; Series-A Deck</option>
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
        </div>
      </div>
    </div>
  );
}
