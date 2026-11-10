"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Car,
  Zap,
  Gauge,
  Compass,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wind,
  Eye,
  Sliders,
  Cpu,
  Share2,
  Check,
  Rotate3d,
  Activity,
  Sparkles,
} from "lucide-react";
import {
  VEHICLES_DATA,
  VehicleModelData,
  STANDARD_DRIVETRAIN_TRIMS,
  COMMON_DISCLAIMERS,
  calculateVehiclePrice,
} from "@/data/vehicles";
import { cn, formatInr } from "@/lib/utils";

// Filter out alias entries
const PRIMARY_VEHICLES = VEHICLES_DATA.filter((v) => v.slug !== "starfleet-logistic");

export interface PaintColorOption {
  id: string;
  name: string;
  hex: string;
  accentHex: string;
  priceOffset: number;
}

export const BESPOKE_PAINT_FINISHES: PaintColorOption[] = [
  { id: "cosmic-obsidian", name: "Cosmic Obsidian", hex: "#0b0f19", accentHex: "#00e5ff", priceOffset: 0 },
  { id: "quantum-cyan", name: "Quantum Cyan Metallic", hex: "#00c8e6", accentHex: "#ffffff", priceOffset: 25000 },
  { id: "apex-white", name: "Apex Stellar Pearl", hex: "#f1f5f9", accentHex: "#00e5ff", priceOffset: 20000 },
  { id: "hyper-red", name: "Hyper Crimson Gloss", hex: "#dc2626", accentHex: "#fca5a5", priceOffset: 35000 },
  { id: "stealth-titanium", name: "Stealth Titanium Matte", hex: "#334155", accentHex: "#38bdf8", priceOffset: 30000 },
];

export interface WheelOption {
  id: "carbon-aero" | "forged-monoblock";
  name: string;
  size: string;
  rangeBonusKm: number;
  priceOffset: number;
  description: string;
}

export const WHEEL_OPTIONS: WheelOption[] = [
  {
    id: "carbon-aero",
    name: "20\" Carbon-Aero Enclosed Disc",
    size: "20 inch",
    rangeBonusKm: 18,
    priceOffset: 0,
    description: "Vortex-shedding carbon disc with 0.008 Cd drag reduction",
  },
  {
    id: "forged-monoblock",
    name: "21\" Ultra-Light Forged Monoblock",
    size: "21 inch",
    rangeBonusKm: -5,
    priceOffset: 45000,
    description: "High-rigidity lightweight alloy for maximum lateral grip (1.18g)",
  },
];

interface XRayHotspot {
  id: string;
  name: string;
  xPct: number;
  yPct: number;
  patentRef: string;
  description: string;
  spec: string;
}

const XRAY_HOTSPOTS: XRayHotspot[] = [
  {
    id: "front-pmsm",
    name: "Front Axial Flux PMSM Motor",
    xPct: 22,
    yPct: 56,
    patentRef: "Claim 1: High-Torque Synchronous Drive",
    description: "Direct-drive permanent magnet motor providing instant torque vectoring.",
    spec: "240 kW • 480 Nm • 97.4% Efficiency",
  },
  {
    id: "acm-shunt",
    name: "ACM Alternator Control Module",
    xPct: 38,
    yPct: 44,
    patentRef: "Patent App No. 202511050655 (Core)",
    description: "Kinetic energy recovery module (Patent application filed) converting rotor inertia into continuous DC reserve charge.",
    spec: "+42 kW Peak Harvest • 98.4% Inverter Yield",
  },
  {
    id: "pack-a",
    name: "Solid-State Pack A (Primary Drive)",
    xPct: 52,
    yPct: 62,
    patentRef: "Claim 2: Dual Solid-State Architecture",
    description: "Underbody structural battery pack powering front/rear high-voltage inverters.",
    spec: "400V Nominal • Immersion Thermal Cooling",
  },
  {
    id: "pack-b",
    name: "Solid-State Pack B (Harvest Buffer)",
    xPct: 68,
    yPct: 62,
    patentRef: "Claim 3: Autonomous Closed-Loop Bus Switching",
    description: "Dedicated kinetic harvest buffer that receives ACM energy without degrading primary cells.",
    spec: "400V Nominal • Zero-Thermal Strain Shunt",
  },
  {
    id: "rear-diffuser",
    name: "Active Aero Vortex Diffuser",
    xPct: 84,
    yPct: 54,
    patentRef: "Aerodynamic Drag Minimization",
    description: "Venturi undertray with dynamic flap actuators suppressing high-speed turbulence.",
    spec: "0.19 Cd • 185 kg Downforce @ 160 km/h",
  },
];

export const Vehicle3DDigitalTwin = () => {
  const [selectedSlug, setSelectedSlug] = useState<string>("starcraft-gt");
  const [selectedTrim, setSelectedTrim] = useState<"standard" | "long_range" | "performance">("standard");
  const [selectedPaint, setSelectedPaint] = useState<string>("cosmic-obsidian");
  const [selectedWheel, setSelectedWheel] = useState<"carbon-aero" | "forged-monoblock">("carbon-aero");
  const [viewerMode, setViewerMode] = useState<"orbit" | "xray" | "windtunnel">("orbit");
  const [selectedAngle, setSelectedAngle] = useState<"front" | "side" | "aero">("front");
  const [windTunnelSpeed, setWindTunnelSpeed] = useState<number>(120); // km/h
  const [activeHotspot, setActiveHotspot] = useState<XRayHotspot | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Canvas ref for Wind Tunnel CFD simulation
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Single source of truth for active vehicle
  const currentVehicle: VehicleModelData =
    PRIMARY_VEHICLES.find((v) => v.slug === selectedSlug) || PRIMARY_VEHICLES[0];

  // Active trim
  const activeTrim =
    STANDARD_DRIVETRAIN_TRIMS.find((t) => t.id === selectedTrim) || STANDARD_DRIVETRAIN_TRIMS[0];

  // Active paint
  const activePaint =
    BESPOKE_PAINT_FINISHES.find((p) => p.id === selectedPaint) || BESPOKE_PAINT_FINISHES[0];

  // Active wheel
  const activeWheel =
    WHEEL_OPTIONS.find((w) => w.id === selectedWheel) || WHEEL_OPTIONS[0];

  // Derived price calculation
  const calculatedPrice = calculateVehiclePrice(
    currentVehicle.basePriceInr,
    activeTrim.priceOffset + activePaint.priceOffset + activeWheel.priceOffset
  );

  // Dynamic Range with Trim & Wheel aerodynamic modifier
  const calculatedRange = Math.round(
    (selectedTrim === "standard"
      ? currentVehicle.ratedRangeKm * 0.85
      : selectedTrim === "long_range"
      ? currentVehicle.ratedRangeKm * 1.15
      : currentVehicle.ratedRangeKm) + activeWheel.rangeBonusKm
  );

  // Dynamic image resolution
  const activeVehicleImage = (() => {
    if (selectedSlug === "starcraft-gt") {
      if (selectedAngle === "aero" && currentVehicle.aeroImageUrl) {
        return currentVehicle.aeroImageUrl;
      }
      if (selectedAngle === "side" && currentVehicle.sideImageUrl) {
        return currentVehicle.sideImageUrl;
      }
      return currentVehicle.imageUrl;
    }
    return currentVehicle.imageUrl;
  })();

  // Wind Tunnel CFD Particle Simulation
  useEffect(() => {
    if (viewerMode !== "windtunnel") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 360);

    // Particle streamlines
    interface Particle {
      x: number;
      y: number;
      speed: number;
      len: number;
      opacity: number;
      lane: number;
    }

    const particleCount = 75;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speed: (windTunnelSpeed / 40) * (2.5 + Math.random() * 2),
        len: 12 + Math.random() * 24,
        opacity: 0.2 + Math.random() * 0.7,
        lane: Math.random(),
      });
    }

    const render = () => {
      ctx.fillStyle = "rgba(4, 7, 20, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Render streamlines curving over the aerodynamic contour
      particles.forEach((p) => {
        p.x += p.speed;

        // Reset particle on right edge
        if (p.x > width) {
          p.x = 0;
          p.y = Math.random() * height;
        }

        // Apply aerodynamic deflection over central vehicle profile
        let drawY = p.y;
        const normalizedX = p.x / width;
        if (normalizedX > 0.2 && normalizedX < 0.85) {
          // Deflection arc simulating low drag laminar flow
          const arc = Math.sin((normalizedX - 0.2) * (Math.PI / 0.65));
          if (p.y > height * 0.35 && p.y < height * 0.75) {
            drawY -= arc * 28;
          }
        }

        ctx.beginPath();
        ctx.strokeStyle = `rgba(0, 229, 255, ${p.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.moveTo(p.x, drawY);
        ctx.lineTo(p.x + p.len, drawY);
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [viewerMode, windTunnelSpeed]);

  const handleShareConfig = () => {
    const configUrl = `${window.location.origin}/pre-book?model=${selectedSlug}&trim=${selectedTrim}&color=${selectedPaint}&wheels=${selectedWheel}`;
    navigator.clipboard.writeText(configUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="w-full bg-white/95 border border-slate-200/90 shadow-xl backdrop-blur-xl dark:bg-[#040714]/95 dark:border-cyan-500/25 dark:shadow-2xl rounded-2xl p-4 sm:p-6 lg:p-7 relative overflow-hidden transition-colors duration-300">
      {/* Background Studio Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Bar: Model Selector & Studio Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200/80 dark:border-slate-800 pb-3.5 mb-5">
        {/* Model Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {PRIMARY_VEHICLES.map((v) => (
            <button
              key={v.slug}
              onClick={() => {
                setSelectedSlug(v.slug);
                setActiveHotspot(null);
              }}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all flex items-center gap-1.5",
                selectedSlug === v.slug
                  ? "bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 font-bold"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800 dark:border-slate-800"
              )}
            >
              <Car className="w-3.5 h-3.5" />
              <span>{v.name}</span>
            </button>
          ))}
        </div>

        {/* Studio Viewport Mode Switcher (Orbit / X-Ray / Wind Tunnel) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-300 dark:border-slate-800 text-xs font-mono">
          <button
            onClick={() => setViewerMode("orbit")}
            className={cn(
              "px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5",
              viewerMode === "orbit"
                ? "bg-white text-slate-900 shadow-sm font-bold dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <Rotate3d className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>360° Studio</span>
          </button>

          <button
            onClick={() => setViewerMode("xray")}
            className={cn(
              "px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5",
              viewerMode === "xray"
                ? "bg-white text-slate-900 shadow-sm font-bold dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Patent X-Ray</span>
          </button>

          <button
            onClick={() => setViewerMode("windtunnel")}
            className={cn(
              "px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1.5",
              viewerMode === "windtunnel"
                ? "bg-white text-slate-900 shadow-sm font-bold dark:bg-cyan-950 dark:text-cyan-300 dark:border dark:border-cyan-500/40"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <Wind className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>CFD Tunnel</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Left Visual Viewport & Right Customizer Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
        {/* Left Column: Visual 3D Digital Twin Viewport */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          <div className="relative w-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-slate-950 border border-slate-300 dark:border-cyan-500/30 overflow-hidden group shadow-2xl flex flex-col justify-between">
            {/* Ambient Lighting & Metallic Floor Reflections */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/40 to-slate-950 pointer-events-none" />

            {/* Vehicle Image Layer */}
            <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center">
              <img
                src={activeVehicleImage || "/brc-starcraft-gt-suv.png"}
                alt={currentVehicle.name}
                className={cn(
                  "w-full h-full object-cover object-center transition-all duration-700",
                  viewerMode === "xray" ? "opacity-35 filter invert contrast-125" : "opacity-100",
                  viewerMode === "windtunnel" ? "opacity-50" : ""
                )}
                style={{
                  filter:
                    viewerMode === "orbit"
                      ? selectedPaint === "quantum-cyan"
                        ? "hue-rotate(15deg) saturate(1.2)"
                        : selectedPaint === "hyper-red"
                        ? "hue-rotate(330deg) saturate(1.3)"
                        : selectedPaint === "apex-white"
                        ? "brightness(1.15) contrast(1.05)"
                        : "none"
                      : undefined,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/30 pointer-events-none" />
            </div>

            {/* Mode C: Wind Tunnel CFD Particle Overlay */}
            {viewerMode === "windtunnel" && (
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
              />
            )}

            {/* Mode B: Patent X-Ray Hotspots Overlay */}
            {viewerMode === "xray" && (
              <div className="absolute inset-0 z-20 pointer-events-auto">
                {XRAY_HOTSPOTS.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                    style={{ left: `${spot.xPct}%`, top: `${spot.yPct}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/pin cursor-pointer focus:outline-none"
                    title={spot.name}
                  >
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 border-2 border-white items-center justify-center text-[9px] font-bold text-slate-950 shadow-lg">
                        +
                      </span>
                    </span>
                  </button>
                ))}

                {/* Hotspot Detailed Tooltip Box */}
                {activeHotspot && (
                  <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs p-3.5 rounded-xl bg-slate-900/95 border border-cyan-500/50 backdrop-blur-xl text-white shadow-2xl font-mono text-xs z-30 animate-fadeIn">
                    <div className="flex items-center justify-between text-cyan-400 text-[10px] uppercase font-bold border-b border-slate-800 pb-1 mb-1.5">
                      <span>{activeHotspot.patentRef}</span>
                      <button
                        onClick={() => setActiveHotspot(null)}
                        className="text-slate-400 hover:text-white"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="font-bold text-sm text-white mb-1">{activeHotspot.name}</div>
                    <p className="text-[11px] text-slate-300 font-sans leading-relaxed mb-2">
                      {activeHotspot.description}
                    </p>
                    <div className="px-2 py-1 rounded bg-slate-950 text-cyan-300 text-[10px] font-bold border border-cyan-500/30">
                      {activeHotspot.spec}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Viewport Top HUD Overlay */}
            <div className="relative z-20 p-3 sm:p-4 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 pointer-events-auto">
                <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono font-semibold uppercase tracking-wider text-cyan-300 shadow-md">
                  {currentVehicle.category} Architecture
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/40 text-[10px] font-mono font-bold text-emerald-400 shadow-md">
                  {currentVehicle.dragCoefficientCd}
                </span>
              </div>

              {/* Angle Controls (In Orbit Mode) */}
              {viewerMode === "orbit" && (
                <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md p-1 rounded-lg border border-slate-700 pointer-events-auto">
                  {(["front", "side", "aero"] as ("front" | "side" | "aero")[]).map((angle) => (
                    <button
                      key={angle}
                      onClick={() => setSelectedAngle(angle)}
                      className={cn(
                        "px-2 py-0.5 rounded text-[9px] font-mono uppercase transition-colors",
                        selectedAngle === angle
                          ? "bg-cyan-400 text-slate-950 font-bold shadow-sm"
                          : "text-slate-400 hover:text-slate-200"
                      )}
                    >
                      {angle}
                    </button>
                  ))}
                </div>
              )}

              {/* Wind Tunnel Speed Control */}
              {viewerMode === "windtunnel" && (
                <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/40 pointer-events-auto text-[10px] font-mono text-cyan-400">
                  <span>CFD Velocity:</span>
                  <input
                    type="range"
                    min="60"
                    max="240"
                    step="10"
                    value={windTunnelSpeed}
                    onChange={(e) => setWindTunnelSpeed(Number(e.target.value))}
                    className="w-20 accent-cyan-400 cursor-pointer"
                  />
                  <span className="font-bold text-white">{windTunnelSpeed} km/h</span>
                </div>
              )}
            </div>

            {/* Viewport Bottom HUD Overlay */}
            <div className="relative z-20 p-3.5 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-2 pointer-events-none">
              <div>
                <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight font-sans">
                  {currentVehicle.name}
                </h4>
                <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  PAINT: {activePaint.name} • WHEELS: {activeWheel.name.split(" ")[0]}
                </p>
              </div>

              <div className="text-right pointer-events-auto">
                <span className="text-[10px] font-mono text-emerald-400 block font-semibold">
                  +42 kW ACM Continuous Recoup
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Downforce: {Math.round(185 * Math.pow(windTunnelSpeed / 160, 2))} kg @ {windTunnelSpeed} km/h
                </span>
              </div>
            </div>
          </div>

          {/* Quick HUD Telemetry Bar */}
          <div className="grid grid-cols-3 gap-2 text-center font-mono">
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 dark:bg-slate-900/80 dark:border-slate-800 transition-colors">
              <span className="text-[9px] uppercase text-slate-500 dark:text-slate-400 block">0-100 km/h</span>
              <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {selectedTrim === "performance" ? "2.9s" : (currentVehicle.acceleration.match(/\d+(\.\d+)?s/)?.[0] || "3.2s")}
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 dark:bg-slate-900/80 dark:border-slate-800 transition-colors">
              <span className="text-[9px] uppercase text-slate-500 dark:text-slate-400 block">Target Range (Sim.)</span>
              <span className="text-sm sm:text-base font-bold text-cyan-600 dark:text-cyan-400">
                {calculatedRange} km
              </span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 dark:bg-slate-900/80 dark:border-slate-800 transition-colors">
              <span className="text-[9px] uppercase text-slate-500 dark:text-slate-400 block">Weight Dist.</span>
              <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
                49:51 F/R
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Precision Customizer Panel */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          {/* Section 1: Bespoke Paint Colorways */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span className="font-bold">1. Exterior Finish</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{activePaint.name}</span>
            </div>

            <div className="flex items-center gap-2.5">
              {BESPOKE_PAINT_FINISHES.map((paint) => (
                <button
                  key={paint.id}
                  onClick={() => setSelectedPaint(paint.id)}
                  className={cn(
                    "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center relative shadow-md",
                    selectedPaint === paint.id
                      ? "border-cyan-500 scale-110 ring-2 ring-cyan-500/30"
                      : "border-slate-300 dark:border-slate-700"
                  )}
                  style={{ backgroundColor: paint.hex }}
                  title={`${paint.name} (${paint.priceOffset === 0 ? "Included" : `+${formatInr(paint.priceOffset)}`})`}
                >
                  {selectedPaint === paint.id && (
                    <Check
                      className={cn(
                        "w-3.5 h-3.5",
                        paint.id === "apex-white" ? "text-slate-950" : "text-white"
                      )}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Wheel Architecture */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span className="font-bold">2. Wheel Architecture</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{activeWheel.size}</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {WHEEL_OPTIONS.map((wheel) => (
                <button
                  key={wheel.id}
                  onClick={() => setSelectedWheel(wheel.id)}
                  className={cn(
                    "p-2.5 rounded-xl border text-left transition-all",
                    selectedWheel === wheel.id
                      ? "bg-cyan-50 border-cyan-500/80 dark:bg-cyan-950/40 dark:border-cyan-500/60 shadow-sm"
                      : "bg-slate-50 border-slate-200 dark:bg-slate-900/60 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                  )}
                >
                  <div className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                    {wheel.name.split(" ")[0]}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {wheel.rangeBonusKm > 0 ? `+${wheel.rangeBonusKm} km range` : "Max Lateral Grip"}
                  </div>
                  <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 mt-1 font-semibold">
                    {wheel.priceOffset === 0 ? "Included" : `+${formatInr(wheel.priceOffset)}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Drivetrain Trim */}
          <div className="space-y-2">
            <div className="text-[11px] font-mono uppercase text-slate-600 dark:text-slate-400 flex items-center justify-between">
              <span className="font-bold">3. Drivetrain Architecture</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{currentVehicle.drivetrainBadge}</span>
            </div>

            <div className="space-y-1.5">
              {STANDARD_DRIVETRAIN_TRIMS.map((trim) => (
                <button
                  key={trim.id}
                  onClick={() => setSelectedTrim(trim.id)}
                  className={cn(
                    "w-full p-2.5 rounded-xl text-left border transition-all flex items-center justify-between",
                    selectedTrim === trim.id
                      ? "bg-cyan-50 border-cyan-500/80 dark:bg-cyan-950/40 dark:border-cyan-500/60 shadow-sm"
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 dark:bg-slate-900/60 dark:border-slate-800 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300"
                  )}
                >
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white font-mono flex items-center gap-1.5">
                      <span>{trim.name}</span>
                      {trim.badge && (
                        <span className="text-[8px] px-1 py-0.2 rounded bg-cyan-100 text-cyan-900 border border-cyan-300 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-500/40 font-bold">
                          {trim.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {trim.description(currentVehicle.name, calculatedRange)}
                    </div>
                  </div>
                  <div
                    className={cn(
                      "text-[11px] font-mono font-semibold shrink-0 ml-2",
                      trim.priceOffset > 0 ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-400"
                    )}
                  >
                    {trim.priceOffset === 0 ? "Base Included" : `+${formatInr(trim.priceOffset)}`}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Section 4: Price Summary & Checkout Action */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-slate-500 dark:text-slate-400 block tracking-wider font-semibold">
                  {COMMON_DISCLAIMERS.priceLabel}
                </span>
                <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {formatInr(calculatedPrice)}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block">
                  Ex-Showroom + Indian FAME III Green Subsidy Applicable
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block font-bold">
                  {COMMON_DISCLAIMERS.tokenBadge}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{COMMON_DISCLAIMERS.targetDelivery}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Link
                href={`/pre-book?model=${currentVehicle.slug}&trim=${selectedTrim}&color=${selectedPaint}&wheels=${selectedWheel}`}
                className="flex-1 min-h-[46px] py-2.5 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25"
              >
                <span>Reserve Custom Build Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={handleShareConfig}
                className="min-h-[46px] px-3.5 rounded-xl font-mono text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 dark:text-slate-300 dark:hover:text-white dark:bg-slate-900 dark:border-slate-800 dark:hover:border-cyan-500/40 transition-colors flex items-center justify-center gap-1.5"
                title="Share or copy build link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copiedLink ? "Link Copied" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vehicle3DDigitalTwin;
