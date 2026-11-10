import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { MapPin, Mail, Phone, Shield, ChevronRight } from "lucide-react";
import { ContactFormClient } from "@/components/ContactFormClient";

export const metadata: Metadata = {
  title: "Contact & Corporate Headquarters | BRC STAR",
  description: "Get in touch with BRC STAR (OPC) Private Limited leadership, R&D labs, institutional investor relations, or pre-booking advisory.",
  alternates: {
    canonical: "https://www.brcstar.in/contact",
  },
  openGraph: {
    title: "Contact & Corporate Headquarters | BRC STAR",
    description: "Get in touch with BRC STAR leadership, R&D labs, and investor relations.",
    url: "https://www.brcstar.in/contact",
    type: "website",
  },
};

export default function ContactPage() {
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
                  <div className="text-[10px] text-slate-400 mt-0.5">CIN: U34100RJ2019OPC066948 • GSTIN: 08AAICB7401R1Z7</div>
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
          <ContactFormClient />
        </div>
      </div>
    </div>
  );
}
