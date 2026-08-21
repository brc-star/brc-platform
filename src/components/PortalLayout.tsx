"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, LogOut, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortalLayoutProps {
  children: React.ReactNode;
  portalName: string;
  subdomain: string;
  roleBadge: string;
}

export const PortalLayout: React.FC<PortalLayoutProps> = ({
  children,
  portalName,
  subdomain,
  roleBadge,
}) => {
  const pathname = usePathname();

  const portalNav = [
    { name: "Customer App", href: "/app", sub: "app.brcstar.in" },
    { name: "Investor Room", href: "/investor-portal", sub: "investor.brcstar.in" },
    { name: "Dealer Hub", href: "/partner", sub: "partner.brcstar.in" },
    { name: "Operations CRM/ERP", href: "/operations", sub: "ops.brcstar.in" },
  ];

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 flex flex-col font-sans pt-24 sm:pt-28">
      {/* Enterprise Top Banner */}
      <div className="bg-[#050814]/95 border-b border-cyan-500/20 px-4 sm:px-6 lg:px-8 py-3.5 sticky top-[68px] sm:top-[76px] z-30 backdrop-blur-xl portal-sub-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              href="/"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors shrink-0 portal-back-btn"
              title="Return to Public Platform"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-extrabold font-mono text-sm sm:text-base text-white tracking-tight portal-header-title">
                  {portalName}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-semibold shrink-0 portal-subdomain-badge">
                  {subdomain}
                </span>
              </div>
              <div className="text-[11px] font-mono text-slate-400 portal-role-subtitle mt-0.5">
                Enterprise Subsystem Mode &bull; Auth: <strong className="text-slate-300 portal-role-strong">{roleBadge}</strong>
              </div>
            </div>
          </div>

          {/* Quick Sub-Platform Switcher */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <Link
              href="/dashboard"
              className="px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 flex items-center gap-1.5 transition-colors portal-nav-tab"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Portal Hub</span>
            </Link>

            {portalNav.map((nav) => (
              <Link
                key={nav.name}
                href={nav.href}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-mono transition-colors border portal-nav-tab",
                  pathname === nav.href
                    ? "bg-cyan-950 text-cyan-300 border-cyan-500/50 font-bold shadow-sm"
                    : "text-slate-400 hover:text-white bg-slate-900/80 border-slate-800"
                )}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={async () => {
                await fetch("/api/v1/auth/signout", { method: "POST" });
                window.location.href = "/";
              }}
              className="px-3 py-1.5 rounded-xl font-mono text-xs text-red-300 bg-red-950/60 hover:bg-red-900/60 border border-red-800/80 transition-colors flex items-center gap-1.5 portal-signout-btn"
              title="Sign Out of Session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Subsystem Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>
    </div>
  );
};
