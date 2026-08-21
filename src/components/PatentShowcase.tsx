"use client";

import React, { useState } from "react";
import { ShieldCheck, FileCheck, Layers, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { PATENTS_DATA } from "@/lib/data";
import { cn } from "@/lib/utils";

export const PatentShowcase = () => {
  const [selectedPatentIndex, setSelectedPatentIndex] = useState<number>(0);

  const selectedPatent = PATENTS_DATA[selectedPatentIndex];

  return (
    <div className="w-full bg-[#050814]/90 border border-cyan-500/30 rounded-2xl p-6 lg:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-2">
        <ShieldCheck className="w-4 h-4 text-cyan-400" />
        <span>Proprietary Intellectual Property &amp; Patent Fortress</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
        Self-Volt Defensible IP Portfolio
      </h3>
      <p className="text-xs sm:text-sm text-slate-400 mb-8 max-w-2xl">
        Protected under formal utility patents and PCT international priority filings covering closed-loop dual-battery switching, permanent magnet kinetic coupling, and smart thermochemical BMS algorithms.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Patent Filing List */}
        <div className="lg:col-span-5 space-y-3">
          {PATENTS_DATA.map((pat, idx) => (
            <button
              key={pat.refNumber}
              onClick={() => setSelectedPatentIndex(idx)}
              className={cn(
                "w-full text-left p-4 rounded-xl border transition-all space-y-2 block",
                selectedPatentIndex === idx
                  ? "bg-cyan-950/50 border-cyan-400 shadow-lg shadow-cyan-950/60"
                  : "bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300"
              )}
            >
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-cyan-400 font-bold">{pat.refNumber}</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                  {pat.claimsCount} Claims
                </span>
              </div>
              <h5 className="font-bold text-white text-xs sm:text-sm line-clamp-2">
                {pat.title}
              </h5>
              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>Filing: {pat.filingDate}</span>
                <span className="text-emerald-400">{pat.status.split(" ")[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Right: Detailed Claim & Moat Analysis Card */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 relative overflow-hidden space-y-5">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 block">
                Official Patent Reference Number
              </span>
              <span className="text-base font-extrabold text-cyan-400 font-mono">
                {selectedPatent.refNumber}
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
              {selectedPatent.category}
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-white leading-snug">
              {selectedPatent.title}
            </h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {selectedPatent.abstract}
            </p>
          </div>

          {/* Moat & Strategic Value */}
          <div className="p-4 rounded-xl bg-[#030611] border border-cyan-500/20 space-y-2">
            <div className="text-xs font-mono uppercase text-cyan-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              <span>Commercial Defensibility Moat</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedPatent.moatFactor}
            </p>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800">
            <span>Status: <strong className="text-emerald-400">{selectedPatent.status}</strong></span>
            <span>IPO / PCT Jurisdiction</span>
          </div>
        </div>
      </div>
    </div>
  );
};
