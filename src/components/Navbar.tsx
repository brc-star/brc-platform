"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Zap,
  ChevronDown,
  Menu,
  X,
  Shield,
  Layers,
  Car,
  Truck,
  Bus,
  Cpu,
  Leaf,
  Newspaper,
  TrendingUp,
  FileText,
  Users,
  ArrowRight,
  Lock,
  LogOut,
  User,
  LayoutDashboard,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AuthUser } from "@/lib/auth";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Check auth state
  useEffect(() => {
    fetch("/api/v1/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null))
      .finally(() => setAuthLoading(false));
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setUserMenuOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    try {
      await fetch("/api/v1/auth/signout", { method: "POST" });
      setUser(null);
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const navLinks = [
    {
      title: "Technology",
      href: "/technology",
      badge: "Self Volt",
      sublinks: [
        {
          name: "Self Volt Architecture",
          desc: "Dual-pack closed loop battery switching & dynamic charge balancing",
          href: "/technology/self-volt",
          icon: Zap,
        },
        {
          name: "Energy Recovery System",
          desc: "Permanent magnet generator kinetic recoup & SiC inverter dynamics",
          href: "/technology/energy-recovery",
          icon: Cpu,
        },
        {
          name: "Patent & IP Portfolio",
          desc: "Certified patent claims, IPO filings, and defensibility moat",
          href: "/technology/patent-ip",
          icon: Shield,
        },
      ],
    },
    {
      title: "Vehicles",
      href: "/vehicles",
      sublinks: [
        {
          name: "Passenger EV Series",
          desc: "StarCraft GT hyper-sedan & StarPulse luxury SUV",
          href: "/vehicles/passenger",
          icon: Car,
        },
        {
          name: "Commercial Fleet",
          desc: "StarFleet logistics carrier — high uptime urban cargo",
          href: "/vehicles/commercial",
          icon: Truck,
        },
        {
          name: "Electric Bus (Transit)",
          desc: "StarTransit 12M high-capacity municipal & intercity coach",
          href: "/vehicles/bus",
          icon: Bus,
        },
      ],
    },
    {
      title: "Innovation",
      href: "/innovation",
      sublinks: [
        {
          name: "R&D & Test Rigs",
          desc: "Simulation test-beds, dynamometer metrics & TRL-6 track logs",
          href: "/innovation/rnd",
          icon: Layers,
        },
        {
          name: "Sustainability & ESG",
          desc: "Net-zero lifecycle, green supply chain & battery circularity",
          href: "/innovation/sustainability",
          icon: Leaf,
        },
        {
          name: "News & Media Center",
          desc: "Official press releases, media kits & executive statements",
          href: "/innovation/news",
          icon: Newspaper,
        },
      ],
    },
    {
      title: "Invest",
      href: "/invest",
      badge: "Series A",
      sublinks: [
        {
          name: "Investor Relations",
          desc: "Vision, $50B TAM market capture, and capital roadmap",
          href: "/invest",
          icon: TrendingUp,
        },
        {
          name: "Pitch Deck Request",
          desc: "Gated digital NDA verification & instant Data Room access",
          href: "/invest/pitch-deck",
          icon: FileText,
        },
        {
          name: "Dealer & Strategic Partners",
          desc: "Exclusive territory dealership franchise & partner onboarding",
          href: "/invest/partners",
          icon: Users,
        },
      ],
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-[env(safe-area-inset-top,0px)]",
        isScrolled
          ? "bg-[#02040a]/90 backdrop-blur-xl border-b border-cyan-500/20 py-2 shadow-2xl shadow-cyan-950/20"
          : "bg-gradient-to-b from-[#02040a]/90 via-[#02040a]/40 to-transparent py-3 sm:py-3.5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-cyan-400/40 via-amber-400/30 to-blue-600/40 p-[1px] shadow-lg shadow-cyan-500/10">
              <div className="w-full h-full bg-[#050814] rounded-lg flex items-center justify-center p-1 group-hover:bg-[#090d22] transition-colors overflow-hidden">
                <Image
                  src="/brc-star-symbol.png"
                  alt="BRC STAR Emblem"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold tracking-[0.12em] text-lg text-white font-display">
                  BRC<span className="text-cyan-400"> STAR</span>
                </span>
                <span className="text-[8px] font-bold uppercase font-display px-1 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  EV
                </span>
              </div>
              <span className="text-[8px] tracking-[0.2em] text-cyan-400/70 uppercase font-display font-medium -mt-0.5">
                Self Volt EV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Compact & Narrower */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            <Link
              href="/"
              className={cn(
                "px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors font-mono tracking-tight",
                pathname === "/"
                  ? "text-cyan-400 bg-cyan-950/40 border border-cyan-500/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-900/60"
              )}
            >
              01 Home
            </Link>

            {navLinks.map((item, index) => {
              const isActive = pathname.startsWith(item.href);
              const numPrefix = `0${index + 2}`;

              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[13px] font-medium transition-colors font-mono tracking-tight",
                      isActive
                        ? "text-cyan-400 bg-cyan-950/40 border border-cyan-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                    )}
                  >
                    <span>{numPrefix} {item.title}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </Link>

                  {/* Dropdown Menu - Narrower Width (w-72) */}
                  {openDropdown === item.title && (
                    <div className="absolute top-full left-0 pt-1.5 w-72 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      <div className="bg-[#050814]/95 backdrop-blur-2xl border border-cyan-500/20 rounded-xl p-2.5 shadow-2xl shadow-black/80">
                        <div className="text-[9px] font-mono uppercase tracking-widest text-slate-400 px-2.5 py-1 border-b border-slate-800/80 mb-1.5 flex justify-between items-center">
                          <span>{item.title} Modules</span>
                          {item.badge && (
                            <span className="text-[8px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>

                        <div className="space-y-0.5">
                          {item.sublinks.map((sub) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-900/80 transition-colors group/item"
                              >
                                <div className="p-1.5 rounded-md bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 group-hover/item:border-cyan-400 group-hover/item:scale-105 transition-all shrink-0">
                                  <SubIcon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold text-white group-hover/item:text-cyan-300 transition-colors truncate">
                                    {sub.name}
                                  </div>
                                  <div className="text-[10px] text-slate-400 line-clamp-1">
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right-Hand Action CTAs & Auth Controls - Compact */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Theme Toggle (Dark / Light Mode) */}
            <ThemeToggle />

            {/* Authenticated User Control or Public Sign Up / Sign In */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono text-white bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 transition-colors shadow-lg shadow-cyan-950/30"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-slate-200">{user.name.split(" ")[0]}</span>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-500/30">
                    {user.role}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {userMenuOpen && (
                  <div
                    className="absolute right-0 top-full mt-2 w-64 bg-[#050814]/98 backdrop-blur-2xl border border-cyan-500/30 rounded-xl p-3 shadow-2xl shadow-black z-50 animate-in fade-in"
                    onMouseLeave={() => setUserMenuOpen(false)}
                  >
                    <div className="px-2 py-1.5 border-b border-slate-800 mb-2 space-y-0.5">
                      <div className="text-xs font-bold text-white font-display truncate">{user.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono truncate">{user.email}</div>
                    </div>

                    <div className="space-y-1">
                      <Link
                        href="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2 p-2 rounded-lg text-xs font-mono text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors"
                      >
                        <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                        <span>Portal Dashboard</span>
                      </Link>

                      {user.role === "CUSTOMER" || user.role === "ADMIN" ? (
                        <Link
                          href="/app"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg text-xs font-mono text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors"
                        >
                          <Car className="w-4 h-4 text-cyan-400" />
                          <span>Customer App</span>
                        </Link>
                      ) : null}

                      {user.role === "INVESTOR" || user.role === "ADMIN" ? (
                        <Link
                          href="/investor-portal"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg text-xs font-mono text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors"
                        >
                          <TrendingUp className="w-4 h-4 text-cyan-400" />
                          <span>Investor Data Room</span>
                        </Link>
                      ) : null}

                      {user.role === "DEALER" || user.role === "ADMIN" ? (
                        <Link
                          href="/partner"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg text-xs font-mono text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors"
                        >
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span>Dealer Hub</span>
                        </Link>
                      ) : null}

                      {user.role === "ENTERPRISE_STAFF" || user.role === "ADMIN" ? (
                        <Link
                          href="/operations"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2 p-2 rounded-lg text-xs font-mono text-slate-200 hover:text-cyan-300 hover:bg-slate-900/80 transition-colors"
                        >
                          <Layers className="w-4 h-4 text-cyan-400" />
                          <span>Enterprise CRM/ERP</span>
                        </Link>
                      ) : null}
                    </div>

                    <div className="pt-2 mt-2 border-t border-slate-800">
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2 p-2 rounded-lg text-xs font-mono text-red-300 hover:bg-red-950/50 transition-colors text-left"
                      >
                        <LogOut className="w-3.5 h-3.5 text-red-400" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/signin"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold tracking-wide text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 transition-all shadow-md shadow-cyan-950/40 hover:scale-[1.02]"
              >
                <User className="w-3 h-3 text-cyan-400" />
                <span>Sign Up / Sign In</span>
                <ArrowRight className="w-3 h-3 text-cyan-400" />
              </Link>
            )}

            {/* Pre-Book Primary CTA - Sleek & Compact */}
            <Link
              href="/pre-book"
              className="relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold font-mono tracking-wide text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-cyan-200 transition-all duration-200 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Pre-Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            {user ? (
              <Link
                href="/dashboard"
                className="px-2.5 py-1.5 rounded-md text-xs font-semibold font-mono text-cyan-300 bg-cyan-950 border border-cyan-500/40"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                href="/signin"
                className="px-2.5 py-1.5 rounded-md text-xs font-semibold font-mono text-slate-950 bg-cyan-400"
              >
                Sign In
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-cyan-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#02040a]/95 backdrop-blur-2xl border-t border-cyan-500/20 z-40 overflow-y-auto p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-4 max-w-md mx-auto pb-12">
            <Link
              href="/"
              className="block px-4 py-3 rounded-lg text-base font-semibold font-mono text-white bg-slate-900/60 border border-slate-800"
            >
              01 Home
            </Link>

            {navLinks.map((item, index) => (
              <div key={item.title} className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-3">
                <div className="flex items-center justify-between text-sm font-semibold font-mono text-cyan-400 px-2 py-1">
                  <span>0{index + 2} {item.title}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="mt-2 space-y-1.5 pl-2">
                  {item.sublinks.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block p-2 rounded-lg text-sm text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80"
                    >
                      <div className="font-medium">{sub.name}</div>
                      <div className="text-xs text-slate-400 line-clamp-1">{sub.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* Auth Section in Mobile Menu */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              {user ? (
                <div className="space-y-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30">
                    <div className="text-xs font-bold text-white font-display">{user.name}</div>
                    <div className="text-[10px] text-cyan-400 font-mono">{user.email} • {user.role}</div>
                  </div>
                  <Link
                    href="/dashboard"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold font-mono text-white bg-slate-900 border border-cyan-500/40"
                  >
                    <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                    <span>My Portals Dashboard</span>
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold font-mono text-red-300 bg-red-950/60 border border-red-800"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    href="/signin"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold font-mono text-cyan-300 bg-cyan-950/80 border border-cyan-500/40"
                  >
                    <User className="w-4 h-4 text-cyan-400" />
                    <span>Sign Up / Sign In</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

            <div className="pt-3">
              <Link
                href="/pre-book"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold font-mono text-slate-950 bg-cyan-400 shadow-lg shadow-cyan-500/20"
              >
                <span>Pre-Book BRC STAR EV</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
