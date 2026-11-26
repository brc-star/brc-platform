/**
 * Centralized Vehicle Data Store - Single Source of Truth for BRC STAR Powertrain & Commercial Lineup
 * All prices are standardized in Indian Rupees (INR) across the Configurator, Portfolio Cards, and Spec Sheets.
 */

export interface DrivetrainTrim {
  id: "standard" | "long_range" | "performance";
  name: string;
  badge?: string;
  priceOffset: number;
  description: (vehicleName: string, ratedRangeKm: number) => string;
}

export interface VehicleSpecItem {
  label: string;
  value: string;
  category?: string;
}

export interface VehicleColorway {
  name: string;
  hex: string;
  bgClass: string;
}

export interface VehicleModelData {
  slug: string;
  vehicleNumber: string;
  name: string;
  category: "Passenger" | "Commercial" | "Heavy Transit";
  segmentBadge: string;
  tagline: string;
  description: string;
  imageUrl: string;
  sideImageUrl?: string;
  aeroImageUrl?: string;
  basePriceInr: number;
  acceleration: string;
  topSpeedKmh: number;
  ratedRangeKm: number;
  batteryCapacityKwh: number;
  selfVoltRegenKw: number;
  motorPowerKw: number;
  dragCoefficientCd: string;
  drivetrainBadge: string;
  specsUrl: string;
  dimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
    wheelbaseMm: number;
  };
  features: string[];
  colorways: VehicleColorway[];
  specsList: VehicleSpecItem[];
  portfolioSpecs: { label: string; value: string }[];
}

export const COMMON_DISCLAIMERS = {
  priceLabel: "INDICATIVE TARGET PRICE (NOT A BINDING QUOTATION)",
  homologationNotice:
    "TRL 3/4 Concept • No commercial vehicle exists yet; subject to homologation",
  tokenAmountInr: 25000,
  tokenBadge: "Refundable Token: ₹25,000 (Interest Allocation)",
  targetDelivery: "Indicative Target: 2027 (Subject to Certification)",
};

export const STANDARD_DRIVETRAIN_TRIMS: DrivetrainTrim[] = [
  {
    id: "standard",
    name: "Standard Self-Volt Edition",
    priceOffset: 0,
    description: (name, range) =>
      `Baseline single/dual motor architecture with standard Self-Volt kinetic circulation (${Math.round(range * 0.85)} km range).`,
  },
  {
    id: "long_range",
    name: "Dual-Pack Extended Range",
    badge: "RECOMMENDED",
    priceOffset: 350000, // +₹3.50L
    description: (name, range) =>
      `Dual-pack kinetic energy recovery and efficiency improvement with active A/B battery bus isolation (${range} km range).`,
  },
  {
    id: "performance",
    name: "Hyper-Performance Track Edition",
    badge: "AWD TRACK",
    priceOffset: 650000, // +₹6.50L
    description: (name) =>
      `High-output dual-drive traction motors, torque vectoring, upgraded thermal dielectric cooling & launch control.`,
  },
];

export const VEHICLES_DATA: VehicleModelData[] = [
  {
    slug: "starcraft-gt",
    vehicleNumber: "01",
    name: "BRC StarCraft GT",
    category: "Passenger",
    segmentBadge: "Aerodynamic Hyper-Sedan",
    tagline: "Ultra-Aerodynamic Deep-Tech Hyper-Sedan with Dual-Pack Kinetic Architecture",
    description:
      "CAD/CFD concept engineered for high-speed grand touring. Models BRC STAR's Dual-Pack Kinetic Energy Recovery Architecture targeting up to 850 km simulated endurance (not yet track-validated).",
    imageUrl: "/brc-starcraft-gt-suv.png",
    sideImageUrl: "/brc-starcraft-gt-side.png",
    aeroImageUrl: "/brc-starcraft-gt-aero.png",
    basePriceInr: 1650000, // Base Standard Trim Target: ₹16,50,000
    acceleration: "0-100 km/h in 3.2s (Target)",
    topSpeedKmh: 240,
    ratedRangeKm: 850,
    batteryCapacityKwh: 88,
    selfVoltRegenKw: 42,
    motorPowerKw: 380,
    dragCoefficientCd: "0.198 Cd (CFD Sim.)",
    drivetrainBadge: "Dual Motor AWD • 800V Target Spec",
    specsUrl: "/vehicles/passenger",
    dimensions: {
      lengthMm: 4980,
      widthMm: 1960,
      heightMm: 1410,
      wheelbaseMm: 2990,
    },
    features: [
      "Dual-Pack A/B Active Energy Re-routing Concept",
      "Alternator Control Module (ACM) Targeting 98.4% Peak Lab-Rig Yield",
      "Kinetic PMG Mechanical Coupling for Deceleration & Glide Recoup",
      "CFD-Modeled Adaptive Aero Underbody Diffuser (0.198 Cd)",
      "ADAS Sensor Suite Hardware Architecture (Planned)",
      "Immersion Liquid Cooling & Firmware State Estimator (Simulated)",
    ],
    colorways: [
      { name: "Cosmic Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Electric Cyan Pearl", hex: "#00e5ff", bgClass: "bg-cyan-400" },
      { name: "Titanium Nebula", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Solar Plasma Gold", hex: "#f59e0b", bgClass: "bg-amber-500" },
    ],
    portfolioSpecs: [
      { label: "Power Target", value: "380 kW Dual Drive (Target)" },
      { label: "Architecture", value: "800V Dual 400V Packs (Target)" },
      { label: "Accel. Target", value: "0–100 km/h in 3.2s (Sim.)" },
      { label: "Target Range", value: "Up to 850 km (Simulated)" },
      { label: "Peak Decel Recoup", value: "Up to +42 kW (Peak Target)" },
      { label: "Drivetrain", value: "Dual Motor AWD Concept" },
    ],
    specsList: [
      { label: "Powertrain Target", value: "Dual Motor All-Wheel Drive (AWD Concept)", category: "Powertrain" },
      { label: "Peak Torque Target", value: "760 Nm (Target)", category: "Powertrain" },
      { label: "Kinetic Architecture", value: "Dual Pack A/B with ACM Bus Switching (TRL 3/4)", category: "Self Volt System" },
      { label: "Simulated Energy Recoup", value: "Up to 32.8% drive-cycle model (Sim. only)", category: "Self Volt System" },
      { label: "Battery Chemistry", value: "High-Energy Solid-State Lithium Matrix", category: "Battery & Thermal" },
      { label: "DC Ultra-Fast Charging", value: "10% to 80% in 18 minutes (800V Architecture)", category: "Charging" },
      { label: "Chassis", value: "Carbon-Fiber Reinforced Aluminum Monocoque", category: "Structure" },
      { label: "Infotainment", value: "15.6-inch Cinematic OLED + Heads-Up Holographic Display", category: "Cabin" },
    ],
  },
  {
    slug: "starpulse-suv",
    vehicleNumber: "02",
    name: "BRC StarPulse",
    category: "Passenger",
    segmentBadge: "Concept SUV (Not in Development)",
    tagline: "Conceptual Long-Haul Electric SUV Design Roadmap",
    description:
      "Concept — not in physical development stage. Envisions dual-motor torque delivery paired with the Self-Volt deceleration and glide recovery framework.",
    imageUrl: "/starpulse-suv.jpg",
    basePriceInr: 2950000, // Indicative Target: ₹29,50,000
    acceleration: "0-100 km/h in 4.4s (Target)",
    topSpeedKmh: 205,
    ratedRangeKm: 720,
    batteryCapacityKwh: 78,
    selfVoltRegenKw: 36,
    motorPowerKw: 310,
    dragCoefficientCd: "0.245 Cd (Target)",
    drivetrainBadge: "Concept • 800V Target Architecture",
    specsUrl: "/vehicles/passenger",
    dimensions: {
      lengthMm: 4760,
      widthMm: 1920,
      heightMm: 1670,
      wheelbaseMm: 2880,
    },
    features: [
      "Adaptive Air Suspension Concept",
      "High Ground Height Sealed Battery Pack Concept",
      "Deceleration & Glide Kinetic Recovery Architecture",
      "Panoramic Roof Design Concept",
      "Connected Sensor Suite Architecture (Planned)",
      "Vehicle-to-Load (V2L) Output Target (6.6 kW)",
    ],
    colorways: [
      { name: "Obsidian Deep", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Cyber Alpine White", hex: "#f1f5f9", bgClass: "bg-slate-100" },
      { name: "Matrix Emerald", hex: "#059669", bgClass: "bg-emerald-600" },
      { name: "Stealth Steel Grey", hex: "#334155", bgClass: "bg-slate-700" },
    ],
    portfolioSpecs: [
      { label: "Architecture", value: "800V Target System" },
      { label: "Drivetrain", value: "Dual Motor AWD (Concept)" },
      { label: "Target Range", value: "Up to 720 km (Simulated)" },
      { label: "Energy Management", value: "ACM Control Concept" },
      { label: "Peak Decel Recoup", value: "+36 kW Peak Target" },
      { label: "Stage", value: "Concept — Planning Phase" },
    ],
    specsList: [
      { label: "Powertrain", value: "Dual Motor Intelligent e-AWD", category: "Powertrain" },
      { label: "Combined Peak Torque", value: "620 Nm", category: "Powertrain" },
      { label: "Kinetic Architecture", value: "Dual Pack A/B with Intelligent Energy Balancer", category: "Self Volt System" },
      { label: "Wading Depth", value: "600 mm (IP68 Submersible Enclosure)", category: "Structure" },
      { label: "Luggage Space", value: "650 Litres + 85 Litre Front Trunk (Frunk)", category: "Cabin" },
      { label: "Fast Charging", value: "800V Architecture, up to 250 kW DC", category: "Charging" },
    ],
  },
  {
    slug: "starfleet-commercial",
    vehicleNumber: "03",
    name: "BRC StarFleet Commercial",
    category: "Commercial",
    segmentBadge: "High-Uptime Logistics Van",
    tagline: "High-Uptime Commercial Electric Concept for Enterprise Logistics",
    description:
      "Designed for logistics fleets and cold-chain supply chains. Dual-pack kinetic recovery targets illustrative electricity savings of up to 38% (approx. ₹4.8 Lakh/yr illustrative fuel savings assuming 150 km/day, ₹95/L diesel vs ₹8/kWh tariff — illustrative model; see /evidence#fleet_tco_illustrative).",
    imageUrl: "/starfleet-commercial.jpg",
    basePriceInr: 2450000, // Indicative Target: ₹24,50,000
    acceleration: "0-60 km/h in 5.8s (Target)",
    topSpeedKmh: 120,
    ratedRangeKm: 520,
    batteryCapacityKwh: 65,
    selfVoltRegenKw: 28,
    motorPowerKw: 150,
    dragCoefficientCd: "0.290 Cd (Target)",
    drivetrainBadge: "Fleet Concept • Target High-Torque PMSM",
    specsUrl: "/vehicles/commercial",
    dimensions: {
      lengthMm: 5400,
      widthMm: 1980,
      heightMm: 2450,
      wheelbaseMm: 3450,
    },
    features: [
      "High-Cycle LFP Dual-Pack Concept Architecture",
      "Remote CAN-Bus Telematics Framework",
      "Modular Cargo Bay with Auxiliary Refrigeration Support",
      "1,850 kg Payload Target Chassis Design",
      "Enterprise Fleet OS API Integration Concept",
      "Low-Speed Urban Stop-Go Kinetic Recovery Target",
    ],
    colorways: [
      { name: "Fleet Pure White", hex: "#ffffff", bgClass: "bg-white" },
      { name: "Industrial Slate", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Cyan Star Delivery", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    portfolioSpecs: [
      { label: "Powertrain", value: "150 kW Electric Drive (Target)" },
      { label: "Battery Chemistry", value: "High-Cycle LFP (Planned)" },
      { label: "Energy Recovery", value: "Dual-Pack Decel Recoup" },
      { label: "Fleet Telematics", value: "Cloud CAN-Bus Gateway" },
      { label: "Peak Decel Recoup", value: "+28 kW Target" },
      { label: "Illustrative TCO*", value: "Up to ₹4.8L/yr (*See /evidence assumptions)" },
    ],
    specsList: [
      { label: "Payload Target", value: "1,850 kg / 12.5 cubic meters volume", category: "Cargo" },
      { label: "Motor Spec", value: "Permanent Magnet Synchronous Motor (PMSM)", category: "Powertrain" },
      { label: "Peak Torque Target", value: "390 Nm (Target)", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "PMG Alternator + Deceleration Recoup", category: "Self Volt System" },
      { label: "Telematics", value: "Cloud CAN-Bus Gateway Architecture", category: "Fleet OS" },
      { label: "Illustrative TCO*", value: "Up to ₹4.8L/yr (*Illustrative; see /evidence#fleet_tco_illustrative)", category: "Economics (Illustrative)" },
    ],
  },
  {
    slug: "starfleet-logistic",
    vehicleNumber: "03-L",
    name: "BRC StarFleet Commercial",
    category: "Commercial",
    segmentBadge: "High-Uptime Logistics Van",
    tagline: "High-Uptime Commercial Electric Concept for Enterprise Logistics",
    description:
      "Designed for logistics fleets and cold-chain supply chains. Dual-pack kinetic recovery targets illustrative electricity savings of up to 38% (approx. ₹4.8 Lakh/yr illustrative fuel savings assuming 150 km/day, ₹95/L diesel vs ₹8/kWh tariff — illustrative model; see /evidence#fleet_tco_illustrative).",
    imageUrl: "/starfleet-commercial.jpg",
    basePriceInr: 2450000,
    acceleration: "0-60 km/h in 5.8s (Target)",
    topSpeedKmh: 120,
    ratedRangeKm: 520,
    batteryCapacityKwh: 65,
    selfVoltRegenKw: 28,
    motorPowerKw: 150,
    dragCoefficientCd: "0.290 Cd (Target)",
    drivetrainBadge: "Fleet Concept • Target High-Torque PMSM",
    specsUrl: "/vehicles/commercial",
    dimensions: {
      lengthMm: 5400,
      widthMm: 1980,
      heightMm: 2450,
      wheelbaseMm: 3450,
    },
    features: [
      "High-Cycle LFP Dual-Pack Concept Architecture",
      "Remote CAN-Bus Telematics Framework",
      "Modular Cargo Bay with Auxiliary Refrigeration Support",
      "1,850 kg Payload Target Chassis Design",
      "Enterprise Fleet OS API Integration Concept",
      "Low-Speed Urban Stop-Go Kinetic Recovery Target",
    ],
    colorways: [
      { name: "Fleet Pure White", hex: "#ffffff", bgClass: "bg-white" },
      { name: "Industrial Slate", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Cyan Star Delivery", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    portfolioSpecs: [
      { label: "Powertrain", value: "150 kW Electric Drive (Target)" },
      { label: "Battery Chemistry", value: "High-Cycle LFP (Planned)" },
      { label: "Energy Recovery", value: "Dual-Pack Decel Recoup" },
      { label: "Fleet Telematics", value: "Cloud CAN-Bus Gateway" },
      { label: "Peak Decel Recoup", value: "+28 kW Target" },
      { label: "Illustrative TCO*", value: "Up to ₹4.8L/yr (*See /evidence assumptions)" },
    ],
    specsList: [
      { label: "Payload Target", value: "1,850 kg / 12.5 cubic meters volume", category: "Cargo" },
      { label: "Motor Spec", value: "Permanent Magnet Synchronous Motor (PMSM)", category: "Powertrain" },
      { label: "Peak Torque Target", value: "390 Nm (Target)", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "PMG Alternator + Deceleration Recoup", category: "Self Volt System" },
      { label: "Telematics", value: "Cloud CAN-Bus Gateway Architecture", category: "Fleet OS" },
      { label: "Illustrative TCO*", value: "Up to ₹4.8L/yr (*Illustrative; see /evidence#fleet_tco_illustrative)", category: "Economics (Illustrative)" },
    ],
  },
  {
    slug: "starhauler-truck",
    vehicleNumber: "04",
    name: "BRC StarHauler Heavy Electric Truck",
    category: "Commercial",
    segmentBadge: "Concept Heavy Truck (Not in Development)",
    tagline: "Heavy-Duty Multi-Axle Electric Cargo Concept Roadmap",
    description:
      "Concept — not in physical development stage. Explores tri-axle kinetic PMG recovery and thermal-regulated LFP packs targeting illustrative up to 44% operating cost savings under fleet duty assumptions (see /evidence#fleet_tco_illustrative).",
    imageUrl: "/starhauler-truck.png",
    basePriceInr: 4950000, // Indicative Target: ₹49,50,000
    acceleration: "0-60 km/h in 6.4s (Target)",
    topSpeedKmh: 110,
    ratedRangeKm: 640,
    batteryCapacityKwh: 160,
    selfVoltRegenKw: 55,
    motorPowerKw: 420,
    dragCoefficientCd: "0.315 Cd (Target)",
    drivetrainBadge: "Concept • 6x4 E-Drive Roadmap",
    specsUrl: "/vehicles/commercial",
    dimensions: {
      lengthMm: 8900,
      widthMm: 2500,
      heightMm: 3650,
      wheelbaseMm: 5200,
    },
    features: [
      "Multi-Axle Kinetic Recovery Concept Architecture",
      "Insulated High-Cube Cargo Body Concept (38.5 m³)",
      "8,500 kg Payload Target Chassis Framework",
      "Planned Commercial Safety & Collision Systems",
      "High-Voltage Fast Charging Target (350 kW)",
      "Cloud Telematics Integration Concept",
    ],
    colorways: [
      { name: "Stealth Freight Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Polar Logistics White", hex: "#f8fafc", bgClass: "bg-slate-50" },
      { name: "Cyber Fleet Cyan", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    portfolioSpecs: [
      { label: "Power Target", value: "420 kW Dual Motors (Target)" },
      { label: "Payload Target", value: "8,500 kg / 38.5 m³" },
      { label: "Peak Decel Recoup", value: "+55 kW Peak Target" },
      { label: "Thermal Control", value: "Immersion Liquid Concept" },
      { label: "Illustrative TCO*", value: "Up to ₹11.2L/yr (Illustrative)" },
      { label: "Stage", value: "Concept — Planning Phase" },
    ],
    specsList: [
      { label: "Payload Target", value: "8,500 kg / 38.5 cubic meters High-Cube", category: "Cargo & Chassis" },
      { label: "Axle Concept", value: "6x4 Multi-Axle E-Drive", category: "Powertrain" },
      { label: "Peak Torque Target", value: "1,250 Nm (Target)", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "Tri-Axle Decel Recoup Concept", category: "Self Volt System" },
      { label: "Illustrative TCO*", value: "Up to ₹11.2L/yr vs Diesel (*Illustrative Assumptions)", category: "Economics (Illustrative)" },
      { label: "Charging Target", value: "800V Architecture, up to 350 kW DC", category: "Charging" },
    ],
  },
  {
    slug: "startitan-semi-truck",
    vehicleNumber: "05",
    name: "BRC StarTitan Heavy Semi-Trailer Truck",
    category: "Commercial",
    segmentBadge: "Concept Semi-Trailer (Not in Development)",
    tagline: "Long-Haul Electric Semi-Trailer Concept Roadmap",
    description:
      "Concept — not in physical development stage. Envisions multi-axle decelerative kinetic recovery targeting up to 750 km simulated freight range and illustrative up to 52% diesel fuel substitution under modeled freight duty assumptions (see /evidence#fleet_tco_illustrative).",
    imageUrl: "/startitan-semi-truck.png",
    basePriceInr: 7950000, // Indicative Target: ₹79,50,000
    acceleration: "0-60 km/h in 7.2s (Target)",
    topSpeedKmh: 105,
    ratedRangeKm: 750,
    batteryCapacityKwh: 320,
    selfVoltRegenKw: 110,
    motorPowerKw: 650,
    dragCoefficientCd: "0.330 Cd (Target)",
    drivetrainBadge: "Concept • Heavy Freight Roadmap",
    specsUrl: "/vehicles/commercial",
    dimensions: {
      lengthMm: 16500,
      widthMm: 2600,
      heightMm: 3950,
      wheelbaseMm: 7200,
    },
    features: [
      "Multi-Axle Decelerative Kinetic Recovery Concept (110 kW Peak Target)",
      "24,000 kg Payload Target Chassis Architecture",
      "Dual E-Axle 2,400 Nm Torque Target Spec",
      "Electronic Braking System (EBS) Integration Planned",
      "High-Capacity Fast Charging Architecture Target",
      "Telemetry & Fleet Management Interface Planned",
    ],
    colorways: [
      { name: "Stealth Freight Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Polar Logistics White", hex: "#f8fafc", bgClass: "bg-slate-50" },
      { name: "Cyber Fleet Cyan", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    portfolioSpecs: [
      { label: "Power Target", value: "Dual E-Axles (650 kW Target)" },
      { label: "Payload Target", value: "24,000 kg / 85 m³" },
      { label: "Peak Decel Recoup", value: "Quad PMG (110 kW Peak)" },
      { label: "Torque Target", value: "2,400 Nm (Target)" },
      { label: "Illustrative Savings*", value: "Up to ₹21.5L/yr (*Illustrative)" },
      { label: "Stage", value: "Concept — Planning Phase" },
    ],
    specsList: [
      { label: "Payload Target", value: "24,000 kg / 85 cubic meters Semi-Trailer", category: "Cargo & Chassis" },
      { label: "Axle Concept", value: "Articulated Prime Mover Concept", category: "Powertrain" },
      { label: "Torque Target", value: "2,400 Nm Dual E-Axle Target", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "Quad PMG Decel Recoup (110 kW peak target)", category: "Self Volt System" },
      { label: "Illustrative TCO*", value: "Up to ₹21.5L/yr vs Diesel (*Illustrative Model)", category: "Economics (Illustrative)" },
      { label: "Charging Target", value: "Up to 500 kW MCS Target", category: "Charging" },
    ],
  },
  {
    slug: "startransit-bus",
    vehicleNumber: "06",
    name: "BRC StarTransit Electric Bus",
    category: "Heavy Transit",
    segmentBadge: "Concept Transit Coach (Not in Development)",
    tagline: "12-Meter Electric Municipal & Intercity Transit Concept Roadmap",
    description:
      "Concept — not in physical development stage. Designed around urban braking and stop-go kinetic energy recovery targeting extended daily transit duty with lower intermediate charging frequency.",
    imageUrl: "/startransit-bus.png",
    basePriceInr: 6500000, // Indicative Target: ₹65,00,000
    acceleration: "Stepless Urban Drive Target",
    topSpeedKmh: 95,
    ratedRangeKm: 480,
    batteryCapacityKwh: 240,
    selfVoltRegenKw: 85,
    motorPowerKw: 350,
    dragCoefficientCd: "0.360 Cd (Target)",
    drivetrainBadge: "Concept • 12M 72-Rider Coach",
    specsUrl: "/vehicles/bus",
    dimensions: {
      lengthMm: 12000,
      widthMm: 2550,
      heightMm: 3350,
      wheelbaseMm: 5900,
    },
    features: [
      "LFP Thermal-Stable Battery Architecture Concept",
      "Dual-Axle Braking Kinetic Recovery Target",
      "Electronic Braking System (EBS) Integration Planned",
      "Low-Floor Stepless Entry Chassis Concept",
      "Depot & Fast-Charge Interface Compatibility Target",
      "Multi-Zone HVAC Power Management Target",
    ],
    colorways: [
      { name: "Municipal Transit Blue", hex: "#0284c7", bgClass: "bg-sky-600" },
      { name: "Eco Green Fleet", hex: "#16a34a", bgClass: "bg-green-600" },
      { name: "Electric White / Cyan", hex: "#f8fafc", bgClass: "bg-slate-50" },
    ],
    portfolioSpecs: [
      { label: "Battery Pack Target", value: "240 kWh LFP (Target)" },
      { label: "Peak Decel Recoup", value: "Dual-Axle (+85 kW Peak Target)" },
      { label: "Motor Target", value: "350 kW Peak High-Torque" },
      { label: "Rider Capacity Target", value: "42 Seated + 30 Standees" },
      { label: "Stage", value: "Concept — Planning Phase" },
      { label: "Target Standards", value: "Targets AIS 052 / AIS 153 / UN ECE R100 (Planned)" },
    ],
    specsList: [
      { label: "Seating Concept", value: "42 Seated + 30 Standees + Wheelchair Bay", category: "Capacity" },
      { label: "Motor Target", value: "260 kW Continuous (Peak 350 kW Target)", category: "Powertrain" },
      { label: "Axle Concept", value: "Portal Axle Hub Architecture", category: "Powertrain" },
      { label: "Self-Volt Harvester", value: "Dual Axle Decel Recoup (+85 kW Peak Target)", category: "Self Volt System" },
      {
        label: "Target Frameworks (Planned)",
        value: "Designed to target AIS 052 / AIS 153 / UN ECE R100; certification not yet started/obtained",
        category: "Planned Regulatory Targets",
      },
    ],
  },
];

/**
 * Calculates total dynamic price combining vehicle base price and selected trim offset.
 */
export function calculateVehiclePrice(basePriceInr: number, trimOffset: number = 0): number {
  return basePriceInr + trimOffset;
}

/**
 * Helper to fetch a vehicle by its URL slug. Supports legacy aliases.
 */
export function getVehicleBySlug(slug: string): VehicleModelData | undefined {
  if (slug === "starfleet-logistic") {
    slug = "starfleet-commercial";
  }
  return VEHICLES_DATA.find((v) => v.slug === slug);
}
