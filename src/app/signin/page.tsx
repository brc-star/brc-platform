"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Zap,
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Eye,
  EyeOff,
  Building,
  Briefcase,
  Cpu,
  Shield,
  Loader2,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { AccessRequestModal } from "@/components/AccessRequestModal";

type PortalRole = "INVESTOR" | "DEALER" | "RND" | "ENTERPRISE";

interface PortalConfig {
  id: PortalRole;
  label: string;
  badge: string;
  subhead: string;
  emailPlaceholder: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PORTAL_ROLES: PortalConfig[] = [
  {
    id: "INVESTOR",
    label: "Investor Room",
    badge: "INSTITUTIONAL DATA ROOM",
    subhead: "Access Series-A cap table, patent claims, and audited financials",
    emailPlaceholder: "partner@fund.com",
    icon: Building,
  },
  {
    id: "DEALER",
    label: "Dealer Hub",
    badge: "AUTHORIZED DEALER NETWORK",
    subhead: "Regional territory allocations, pre-order queues, and service telemetry",
    emailPlaceholder: "dealer@automotive.in",
    icon: Briefcase,
  },
  {
    id: "RND",
    label: "R&D Lab",
    badge: "POWERTRAIN ENGINEERING",
    subhead: "CAN-Bus logs, dyno test profiles, and ACM controller telemetry",
    emailPlaceholder: "engineer@institution.org",
    icon: Cpu,
  },
  {
    id: "ENTERPRISE",
    label: "Enterprise",
    badge: "OPERATIONS & GOVERNANCE",
    subhead: "Executive board, fleet logistics triage, and compliance administration",
    emailPlaceholder: "officer@brcstar.in",
    icon: Shield,
  },
];

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const [activeRole, setActiveRole] = useState<PortalRole>("INVESTOR");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  const activePortal = PORTAL_ROLES.find((r) => r.id === activeRole) || PORTAL_ROLES[0];

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
        // Trigger hard navigation to cleanly re-hydrate auth state
        window.location.href = callbackUrl;
      } else {
        setError(data.message || "Invalid credentials. Please verify your corporate email and password.");
      }
    } catch (err) {
      setError("Network or server connection failed. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-[90vh] flex flex-col justify-center max-w-xl mx-auto px-4 sm:px-6 relative z-10">
      {/* Ambient Radial Accent */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Brand Header */}
      <div className="text-center space-y-3 mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/40 via-amber-400/30 to-blue-600/40 p-[1px] shadow-lg shadow-cyan-500/25 mx-auto">
          <div className="w-full h-full bg-slate-950 dark:bg-[#050814] rounded-xl flex items-center justify-center p-2 overflow-hidden">
            <Image
              src="/brc-star-symbol.png"
              alt="BRC STAR Emblem"
              width={36}
              height={36}
              className="w-full h-full object-contain drop-shadow"
              priority
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-100/80 text-cyan-800 border border-cyan-300/60 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-500/30 shadow-sm transition-colors">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>SECURE ACCESS GATEWAY</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors">
            Sign In to BRC <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-blue-600 dark:from-cyan-300 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">STAR</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans max-w-md mx-auto transition-colors">
            Enterprise role-based authentication portal for institutional investors, dealer networks, and research partners.
          </p>
        </div>
      </div>

      {/* Auth Card Container */}
      <div className="p-6 sm:p-9 rounded-2xl bg-white/90 border border-slate-200 shadow-2xl shadow-slate-200/60 backdrop-blur-xl dark:bg-[#0A0E1A]/80 dark:border-cyan-500/20 dark:shadow-2xl dark:shadow-cyan-950/30 dark:backdrop-blur-xl space-y-6 transition-all duration-300">
        
        {/* Role / Portal Selector Tabs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-600 dark:text-slate-400 font-medium">Select Portal Realm:</span>
            <span className="text-[10px] text-cyan-700 dark:text-cyan-400 uppercase font-semibold">
              {activePortal.badge}
            </span>
          </div>

          <div 
            className="p-1 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-1"
            role="tablist"
            aria-label="Portal Selection"
          >
            {PORTAL_ROLES.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveRole(role.id);
                    setError("");
                  }}
                  className={`py-2 px-2 text-center rounded-lg font-mono text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-500/40"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50 border border-transparent dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800/40"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400 dark:text-slate-500"}`} />
                  <span className="truncate">{role.label}</span>
                </button>
              );
            })}
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">
            {activePortal.subhead}
          </p>
        </div>

        {/* Error Alert Box */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/70 dark:border-red-500/40 dark:text-red-300 text-xs flex items-center gap-2.5 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Sign In Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 block mb-1.5 flex items-center justify-between">
              <span>Authorized Email</span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Corporate Domain Required</span>
            </label>
            <div className="relative">
              <input
                type="email"
                required
                placeholder={activePortal.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-sans bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-[#060913] dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:ring-2 dark:focus:ring-cyan-400/20 focus:outline-none transition-all"
              />
              <Mail className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300">Password</label>
              <Link 
                href="/forgot-password" 
                className="text-[11px] font-mono text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 hover:underline"
              >
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
                className="w-full pl-10 pr-10 py-2.5 rounded-xl text-xs font-sans bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-cyan-600 focus:ring-2 focus:ring-cyan-500/20 dark:bg-[#060913] dark:border-slate-800 dark:text-white dark:placeholder-slate-500 dark:focus:border-cyan-400 dark:focus:ring-2 dark:focus:ring-cyan-400/20 focus:outline-none transition-all"
              />
              <Lock className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-3" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-xs">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 dark:text-slate-300 font-sans">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-slate-300 dark:border-slate-800 text-cyan-600 focus:ring-cyan-500"
              />
              <span>Remember this trusted device (30 days)</span>
            </label>
          </div>

          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl font-mono text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99]"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Authenticating Session...</span>
              </>
            ) : (
              <>
                <span>Sign In to {activePortal.label}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Secondary Verification Request for Uncredentialed Users */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-center space-y-2">
          <p className="text-xs text-slate-700 dark:text-slate-300 font-sans">
            Need institutional or dealer data room access?
          </p>
          <button
            type="button"
            onClick={() => setIsAccessModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-xs font-semibold text-cyan-700 dark:text-cyan-300 hover:text-cyan-800 dark:hover:text-white bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/80 border border-cyan-300/80 dark:border-cyan-500/40 transition-colors shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Request Verification / Apply for Access</span>
          </button>
        </div>

        {/* Security & DPDPA Governance Badges */}
        <div className="space-y-3 pt-2">
          {/* 256-bit TLS Badge */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/80 dark:border-slate-800/80 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>Enterprise 256-bit TLS Encrypted Session • ISO/IEC 27001 Aligned</span>
          </div>

          {/* Rate-limiting & WAF Indicator */}
          <div className="text-[10px] font-mono text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5">
            <Lock className="w-3 h-3 text-cyan-600 dark:text-cyan-400 shrink-0" />
            <span>Protected by adaptive rate limiting &amp; geo-fenced enterprise WAF</span>
          </div>

          {/* DPDPA Disclaimer */}
          <p className="text-[10px] leading-relaxed text-slate-500 dark:text-slate-400 text-center font-sans">
            By signing in, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-slate-700 dark:hover:text-slate-200 font-medium">
              Terms of Access
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-200 font-medium">
              Privacy Policy
            </Link>
            . Unauthorized access is strictly prohibited, monitored, and logged under the Indian Digital Personal Data Protection Act (DPDPA 2023).
          </p>

          {/* Customer Self-Serve Registration Link */}
          <div className="pt-1 text-center text-xs font-sans text-slate-500 dark:text-slate-400">
            <span>Customer vehicle owner? </span>
            <Link href="/signup" className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-semibold underline">
              Create an Account →
            </Link>
          </div>
        </div>
      </div>

      {/* Access Request Modal Drawer */}
      <AccessRequestModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        defaultRole={activeRole}
      />
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
