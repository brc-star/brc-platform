import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Zap, Shield, FileText, Lock, Globe, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#02040a] border-t border-slate-800/80 text-slate-400 relative overflow-hidden">
      {/* Subtle Radial Glow in background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400/40 via-amber-400/30 to-blue-600/40 p-[1px] shadow-lg shadow-cyan-500/10">
                <div className="w-full h-full bg-[#050814] rounded-lg flex items-center justify-center p-1 overflow-hidden">
                  <Image
                    src="/brc-star-symbol.png"
                    alt="BRC STAR Emblem"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-[0.16em] text-lg text-white font-display">
                  BRC<span className="text-cyan-400"> STAR</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-cyan-400 uppercase font-display font-medium">
                  Self Volt EV
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Building a new energy architecture for electric mobility—engineered in India for a world in motion. Powered by tri-alternator kinetic energy recovery and closed-loop dual-battery switching (Indian Patent Application No. 202511050655, filed/published).
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>7SJM-A, Anupgarh, Ganganagar, Rajasthan 335701, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:contact@brcstar.in" className="hover:text-cyan-300 transition-colors">
                  contact@brcstar.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+919924100759" className="hover:text-cyan-300 transition-colors">
                  +91 99241 00759
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[10px] font-semibold text-cyan-300">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  <span>iStart Rajasthan Incubated</span>
                </span>
              </div>
            </div>
          </div>

          {/* 02 Technology */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              02 Technology
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/technology/self-volt" className="hover:text-cyan-300 transition-colors">
                  Self Volt Architecture
                </Link>
              </li>
              <li>
                <Link href="/technology/energy-recovery" className="hover:text-cyan-300 transition-colors">
                  Energy Recovery &amp; PMG
                </Link>
              </li>
              <li>
                <Link href="/technology/patent-ip" className="hover:text-cyan-300 transition-colors">
                  Patent &amp; IP Claims
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-cyan-300 transition-colors">
                  Engineering Overview
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <span>Whitepapers</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* 03 Vehicles */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              03 Vehicles
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/vehicles/starcraft-gt" className="hover:text-cyan-300 transition-colors">
                  StarCraft GT Sedan
                </Link>
              </li>
              <li>
                <Link href="/vehicles/starpulse-suv" className="hover:text-cyan-300 transition-colors">
                  StarPulse Luxury SUV
                </Link>
              </li>
              <li>
                <Link href="/vehicles/starfleet-commercial" className="hover:text-cyan-300 transition-colors">
                  StarFleet Logistics Van
                </Link>
              </li>
              <li>
                <Link href="/vehicles/startransit-bus" className="hover:text-cyan-300 transition-colors">
                  StarTransit 12M Bus
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="hover:text-cyan-300 transition-colors">
                  All 6 Vehicle Models
                </Link>
              </li>
              <li>
                <Link href="/pre-book" className="hover:text-cyan-300 transition-colors text-cyan-400 font-semibold">
                  Pre-Book Priority Slot
                </Link>
              </li>
            </ul>
          </div>

          {/* 04 Innovation & 05 Invest */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              04 Company &amp; Invest
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-cyan-300 transition-colors text-cyan-300 font-medium">
                  About BRC STAR &amp; Journey
                </Link>
              </li>
              <li>
                <Link href="/innovation/rnd" className="hover:text-cyan-300 transition-colors">
                  R&amp;D &amp; Test Benches
                </Link>
              </li>
              <li>
                <Link href="/innovation/sustainability" className="hover:text-cyan-300 transition-colors">
                  Sustainability &amp; ESG
                </Link>
              </li>
              <li>
                <Link href="/invest" className="hover:text-cyan-300 transition-colors font-medium text-slate-200">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/invest/pitch-deck" className="hover:text-cyan-300 transition-colors">
                  Pitch Deck (NDA Gate)
                </Link>
              </li>
              <li>
                <Link href="/invest/partners" className="hover:text-cyan-300 transition-colors">
                  Dealer Franchises
                </Link>
              </li>
            </ul>
          </div>

          {/* Secure Access & Portals Gateway */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              Access &amp; Security
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/signin" className="hover:text-cyan-300 transition-colors flex items-center justify-between text-cyan-300 font-medium">
                  <span>Sign In / Enter Portal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-cyan-300 transition-colors">
                  Create Partner Account
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-cyan-300 transition-colors">
                  Authorized Dashboard
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-cyan-300 transition-colors">
                  Engineering Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Corporate Headquarters
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Corporate & Intellectual Property Info */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-1 lg:grid-cols-3 gap-6 text-[11px] text-slate-400">
          <div className="lg:col-span-2 space-y-1.5">
            <div className="flex items-center gap-2 text-slate-300 font-mono font-semibold">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>INTELLECTUAL PROPERTY &amp; REGISTERED ENTITY</span>
            </div>
            <p className="leading-relaxed">
              <strong>BRC STAR (OPC) PRIVATE LIMITED</strong> (CIN: U34100RJ2019OPC066948). Key innovations including dual-pack closed-loop battery switching, Alternator Control Modules (ACM), and Permanent Magnet kinetic harvesting are covered by Indian Patent Application No. 202511050655 (filed/published); international [PCT details pending].
            </p>
          </div>
          <div className="space-y-1.5 bg-slate-900/40 p-3.5 rounded-lg border border-slate-800">
            <div className="font-mono text-slate-300 font-semibold flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>Incubation &amp; Support</span>
            </div>
            <p className="leading-relaxed text-[10px]">
              Incubated under <strong>iStart Rajasthan</strong>. Designed for a lower-dependency electric future with sustainable kinetic energy harvesting.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} BRC STAR (OPC) PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/technology/patent-ip" className="hover:text-cyan-400 transition-colors">
              Patent &amp; IP
            </Link>
            <Link href="/docs" className="hover:text-cyan-400 transition-colors">
              Safety &amp; Compliance
            </Link>
            <Link href="/invest/pitch-deck" className="hover:text-cyan-400 transition-colors">
              NDA Portal
            </Link>
            <Link href="/about" className="hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
