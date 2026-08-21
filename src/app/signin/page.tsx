"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Zap, Lock, Mail, ArrowRight, Shield, CheckCircle2, AlertCircle, Eye, EyeOff, UserCheck } from "lucide-react";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/v1/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Trigger a hard reload/navigation to update navbar state
        window.location.href = callbackUrl;
      } else {
        setError(data.message || "Invalid credentials. Please verify your email and password.");
      }
    } catch (err) {
      setError("Network or server connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  const setDemoAccount = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword("Password123!");
    setError("");
  };

  return (
    <div className="pt-28 pb-20 min-h-[90vh] flex flex-col justify-center max-w-xl mx-auto px-4 sm:px-6">
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
            <span>SECURE ACCESS GATEWAY</span>
            <span className="h-px w-6 bg-cyan-400"></span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Sign In to BRC <span className="text-gradient">STAR</span>
          </h1>
          <p className="text-xs text-slate-400 font-sans">
            Access authorized Customer, Investor, Dealer, and Enterprise platforms.
          </p>
        </div>
      </div>

      {/* Main Sign-In Card */}
      <div className="p-7 sm:p-9 rounded-2xl bg-[#050814]/90 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-black/80 space-y-6">
        {error && (
          <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300 text-xs flex items-center gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="text-xs font-mono text-slate-300 block mb-1.5 flex items-center justify-between">
              <span>Account Email</span>
              <span className="text-[10px] text-slate-500 font-mono">Corporate or Personal</span>
            </label>
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

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono text-slate-300">Password</label>
              <Link href="/forgot-password" className="text-[11px] font-mono text-cyan-400 hover:text-cyan-300 hover:underline">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-white text-xs font-sans focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-500 hover:text-slate-300 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-300 font-sans">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded bg-slate-950 border-slate-800 text-cyan-500 focus:ring-0 focus:ring-offset-0"
              />
              <span>Remember this device (30 days)</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
          >
            <span>{loading ? "Authenticating Session..." : "Sign In to BRC STAR"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Demo Quick-Fill Roles for Instant Evaluation */}
        <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Demo Test Profiles:</span>
            <span className="text-[10px] text-cyan-400">Click to autofill</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => setDemoAccount("founder@brcstar.in")}
              className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-left text-slate-300 hover:text-white transition-colors"
            >
              <div className="font-semibold text-white">Super Admin</div>
              <div className="text-[10px] text-cyan-400 truncate">founder@brcstar.in</div>
            </button>

            <button
              type="button"
              onClick={() => setDemoAccount("investor@brcstar.in")}
              className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-left text-slate-300 hover:text-white transition-colors"
            >
              <div className="font-semibold text-white">Investor Data Room</div>
              <div className="text-[10px] text-cyan-400 truncate">investor@brcstar.in</div>
            </button>

            <button
              type="button"
              onClick={() => setDemoAccount("dealer@brcstar.in")}
              className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-left text-slate-300 hover:text-white transition-colors"
            >
              <div className="font-semibold text-white">Dealer Hub</div>
              <div className="text-[10px] text-cyan-400 truncate">dealer@brcstar.in</div>
            </button>

            <button
              type="button"
              onClick={() => setDemoAccount("customer@brcstar.in")}
              className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 text-left text-slate-300 hover:text-white transition-colors"
            >
              <div className="font-semibold text-white">Customer App</div>
              <div className="text-[10px] text-cyan-400 truncate">customer@brcstar.in</div>
            </button>
          </div>
        </div>

        {/* Link to Sign Up */}
        <div className="pt-2 text-center text-xs font-sans text-slate-400">
          <span>Don&apos;t have an account yet? </span>
          <Link href="/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold underline">
            Create an Account →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="pt-36 text-center text-xs font-mono text-cyan-400">Loading Secure Gateway...</div>}>
      <SignInForm />
    </Suspense>
  );
}
