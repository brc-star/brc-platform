"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Lock, Mail, User, Phone, Building, ArrowRight, Shield, CheckCircle2, AlertCircle } from "lucide-react";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "CUSTOMER",
    organization: "",
    password: "",
    confirmPassword: "",
    agreeTerms: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match. Please verify.");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          organization: formData.organization,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        window.location.href = "/dashboard";
      } else {
        setError(data.message || (data.errors && data.errors[0]?.message) || "Registration failed.");
      }
    } catch (err) {
      setError("Network or server connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-[90vh] flex flex-col justify-center max-w-2xl mx-auto px-4 sm:px-6">
      {/* Brand Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/25 mx-auto">
          <div className="w-full h-full bg-[#050814] rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="eyebrow justify-center">
            <span className="h-px w-6 bg-cyan-400"></span>
            <span>CREATE YOUR BRC STAR IDENTITY</span>
            <span className="h-px w-6 bg-cyan-400"></span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Register Account
          </h1>
          <p className="text-xs text-slate-400 font-sans">
            Join the BRC STAR deep-tech ecosystem and access authorized enterprise portals.
          </p>
        </div>
      </div>

      {/* Main Sign-Up Card */}
      <div className="p-7 sm:p-9 rounded-2xl bg-[#050814]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-black/80 space-y-6">
        {error && (
          <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Full Name</label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="e.g. Meera Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="meera@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Phone Number</label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="+91 98000 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Primary Portal Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
              >
                <option value="CUSTOMER">Customer &amp; Vehicle Reservation (app.brcstar.in)</option>
                <option value="INVESTOR">Institutional / Angel Investor (investor.brcstar.in)</option>
                <option value="DEALER">Franchise Dealership Candidate (partner.brcstar.in)</option>
                <option value="ENTERPRISE_STAFF">BRC Staff &amp; Operations (ops.brcstar.in)</option>
              </select>
            </div>
          </div>

          {formData.role !== "CUSTOMER" && (
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Organization / Legal Entity Name</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. Nexus Capital Partners / Apex Mobility LLP"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Create Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Min 6 characters"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Confirm Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>
          </div>

          <div className="pt-2 text-xs">
            <label className="flex items-start gap-2.5 cursor-pointer text-slate-300 font-sans">
              <input
                type="checkbox"
                required
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                className="mt-0.5 rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-0"
              />
              <span className="leading-relaxed text-[11px]">
                I agree to the BRC STAR <Link href="/terms" className="text-cyan-400 underline">Terms &amp; Conditions</Link> and acknowledge the <Link href="/privacy" className="text-cyan-400 underline">Privacy Policy</Link>.
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
          >
            <span>{loading ? "Creating Identity & Session..." : "Create Account & Enter Portal"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs font-sans text-slate-400">
          <span>Already have an account? </span>
          <Link href="/signin" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">
            Sign In Here →
          </Link>
        </div>
      </div>
    </div>
  );
}
