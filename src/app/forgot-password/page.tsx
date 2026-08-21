"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Zap, Mail, Lock, KeyRound, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState<"REQUEST_OTP" | "VERIFY_RESET" | "SUCCESS">("REQUEST_OTP");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, step: "REQUEST_OTP" }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setInfoMessage(data.message);
        setStep("VERIFY_RESET");
      } else {
        setError(data.message || "Failed to dispatch recovery code.");
      }
    } catch (err) {
      setError("Network or server connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/v1/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, step: "VERIFY_RESET", otp, newPassword }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStep("SUCCESS");
      } else {
        setError(data.message || "Failed to reset password.");
      }
    } catch (err) {
      setError("Network error. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-[90vh] flex flex-col justify-center max-w-lg mx-auto px-4 sm:px-6">
      {/* Brand Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/25 mx-auto">
          <div className="w-full h-full bg-[#050814] rounded-xl flex items-center justify-center">
            <KeyRound className="w-6 h-6 text-cyan-400" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="eyebrow justify-center">
            <span className="h-px w-6 bg-cyan-400"></span>
            <span>CREDENTIAL RECOVERY</span>
            <span className="h-px w-6 bg-cyan-400"></span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Account Recovery
          </h1>
          <p className="text-xs text-slate-400 font-sans">
            Reset your BRC STAR enterprise authentication credentials.
          </p>
        </div>
      </div>

      {/* Card */}
      <div className="p-7 sm:p-9 rounded-2xl bg-[#050814]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-black/80 space-y-6">
        {error && (
          <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {infoMessage && step === "VERIFY_RESET" && (
          <div className="p-3.5 rounded-xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs flex items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-cyan-400" />
            <span>{infoMessage}</span>
          </div>
        )}

        {step === "REQUEST_OTP" && (
          <form onSubmit={handleRequestOtp} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Registered Email</label>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <span>{loading ? "Dispatching OTP..." : "Send Verification Code"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === "VERIFY_RESET" && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">6-Digit Authorization Code</label>
              <input
                type="text"
                required
                placeholder="e.g. 202688"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-mono text-center tracking-widest focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">New Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Min 6 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1.5">Confirm New Password</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400"
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
            >
              <span>{loading ? "Updating Credentials..." : "Update Password & Continue"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {step === "SUCCESS" && (
          <div className="text-center space-y-4 py-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-lg font-bold text-white font-display">
              Password Reset Complete
            </h3>
            <p className="text-xs text-slate-300">
              Your authentication credentials have been successfully updated.
            </p>
            <Link
              href="/signin"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300"
            >
              <span>Sign In Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        <div className="pt-2 text-center text-xs font-sans text-slate-400 border-t border-slate-800/80">
          <Link href="/signin" className="text-cyan-400 hover:text-cyan-300 font-semibold">
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
