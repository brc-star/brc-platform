"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Zap,
  Shield,
  LogOut,
  Car,
  TrendingUp,
  Users,
  Layers,
  ArrowRight,
  ExternalLink,
  Lock,
  CheckCircle2,
  Activity,
  Cpu,
  Building,
  Key,
} from "lucide-react";
import { AuthUser } from "@/lib/auth";

export default function AuthenticatedDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          router.push("/signin?callbackUrl=/dashboard");
        }
      })
      .catch(() => {
        router.push("/signin?callbackUrl=/dashboard");
      })
      .finally(() => setLoading(false));
  }, [router]);

  const handleSignOut = async () => {
    try {
      await fetch("/api/v1/auth/signout", { method: "POST" });
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  if (loading) {
    return (
      <div className="pt-36 pb-20 text-center space-y-4">
        <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
        <div className="font-mono text-xs text-cyan-400">Verifying Enterprise Session Authorization...</div>
      </div>
    );
  }

  if (!user) return null;

  const portals = [
    {
      id: "customer",
      name: "Customer Experience Platform",
      subdomain: "app.brcstar.in",
      href: "/app",
      icon: Car,
      color: "cyan",
      badge: "Connected EV",
      desc: "Live CAN-Bus telemetry, dual-pack health tracking, charging history, and service scheduler.",
      allowedRoles: ["CUSTOMER", "ENTERPRISE_STAFF", "ADMIN"],
      metrics: "Live Telemetry • 50Hz Link",
    },
    {
      id: "investor",
      name: "Investor Relations & Data Room",
      subdomain: "investor.brcstar.in",
      href: "/investor-portal",
      icon: TrendingUp,
      color: "blue",
      badge: "Gated NDA",
      desc: "Series-A financial models, $50B TAM market capture, patent dossiers, and Cap Table data.",
      allowedRoles: ["INVESTOR", "ENTERPRISE_STAFF", "ADMIN"],
      metrics: "Tier 3 Data Room • SHA-256 Watermarked",
    },
    {
      id: "dealer",
      name: "Dealer Management Hub",
      subdomain: "partner.brcstar.in",
      href: "/partner",
      icon: Users,
      color: "emerald",
      badge: "Franchise",
      desc: "Exclusive territory allocation, regional lead triage, demo fleet status, and commission tracking.",
      allowedRoles: ["DEALER", "ENTERPRISE_STAFF", "ADMIN"],
      metrics: "Dealership Network • Tier 1 / 2 / 3",
    },
    {
      id: "operations",
      name: "Enterprise CRM & ERP Operations",
      subdomain: "ops.brcstar.in",
      href: "/operations",
      icon: Layers,
      color: "amber",
      badge: "Mission Control",
      desc: "Unified customer pipeline, SiC inverter & battery BOM inventory, and technician SOP revision audits.",
      allowedRoles: ["ENTERPRISE_STAFF", "ADMIN"],
      metrics: "12-Domain Monolith • ISO 26262 Rig",
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Top Banner / User Identity Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#050814]/95 via-slate-900/90 to-[#02040a] border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>AUTHENTICATED IDENTITY</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
              Role: <strong className="text-cyan-400">{user.role}</strong>
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Welcome, {user.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <span>Email: <strong className="text-slate-200">{user.email}</strong></span>
            <span>•</span>
            <span>Organization: <strong className="text-slate-200">{user.organization || "BRC STAR Partner"}</strong></span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Active Session Valid</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleSignOut}
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-semibold text-red-300 bg-red-950/60 hover:bg-red-900/60 border border-red-800/80 transition-colors flex items-center gap-2"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Authorized Portal Selector Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Authorized BRC STAR Portals
            </h2>
            <p className="text-xs text-slate-400 mt-0.5 font-sans">
              Select an authorized sub-platform to launch your specialized dashboard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portals.map((portal) => {
            const hasAccess = portal.allowedRoles.includes(user.role) || user.role === "ADMIN";
            const Icon = portal.icon;

            return (
              <div
                key={portal.id}
                className={`p-7 rounded-2xl border transition-all flex flex-col justify-between space-y-6 ${
                  hasAccess
                    ? "bg-slate-900/60 border-slate-800 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/10"
                    : "bg-slate-950/40 border-slate-900 opacity-60"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-white">
                          {portal.name}
                        </h3>
                        <span className="font-mono text-xs text-cyan-400">
                          {portal.subdomain}
                        </span>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-slate-950 border border-slate-800 text-slate-300">
                      {portal.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {portal.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{portal.metrics}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  {hasAccess ? (
                    <Link
                      href={portal.href}
                      className="w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20"
                    >
                      <span>Launch {portal.name.split(" ")[0]} Portal</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <div className="w-full py-2.5 px-4 rounded-xl font-mono text-xs text-slate-500 bg-slate-950 border border-slate-800 flex items-center justify-center gap-2">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Access Restricted ({portal.allowedRoles.join(" / ")} Only)</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Session Security & Cryptographic Audit Info */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-slate-400">
        <div className="space-y-1">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cryptographic Session</span>
          </div>
          <p className="text-[11px] text-slate-400">
            HMAC-SHA256 authenticated JWT with HttpOnly cookie protection.
          </p>
        </div>

        <div className="space-y-1">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Zero-Trust Boundary</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Routes verified by Edge Middleware prior to server-side component rendering.
          </p>
        </div>

        <div className="space-y-1">
          <div className="text-white font-semibold flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enterprise Subdomains</span>
          </div>
          <p className="text-[11px] text-slate-400">
            Mapped to modular monolith domains with isolated state boundaries.
          </p>
        </div>
      </div>
    </div>
  );
}
