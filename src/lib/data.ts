export interface VehicleModelData {
  slug: string;
  name: string;
  category: "Passenger" | "Commercial" | "Heavy Transit";
  tagline: string;
  description: string;
  imageUrl?: string;
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
  dimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
    wheelbaseMm: number;
  };
  features: string[];
  colorways: { name: string; hex: string; bgClass: string }[];
  specsList: { label: string; value: string; category: string }[];
}

export const VEHICLES_DATA: VehicleModelData[] = [
  {
    slug: "starcraft-gt",
    name: "BRC StarCraft GT",
    category: "Passenger",
    tagline: "Ultra-Aerodynamic Deep-Tech Hyper-Sedan with Self-Volt Closed Loop",
    description: "Engineered for uncompromising high-speed grand touring. Featuring the BRC Dual-Pack Closed Loop energy circulation, achieving up to 850 km of real-world endurance with minimized grid dependency.",
    imageUrl: "/brc-starcraft-gt-suv.png",
    sideImageUrl: "/brc-starcraft-gt-side.png",
    aeroImageUrl: "/brc-starcraft-gt-aero.png",
    basePriceInr: 3450000,
    acceleration: "0-100 km/h in 3.2s",
    topSpeedKmh: 240,
    ratedRangeKm: 850,
    batteryCapacityKwh: 88,
    selfVoltRegenKw: 42,
    motorPowerKw: 380,
    dragCoefficientCd: "0.198 Cd",
    dimensions: {
      lengthMm: 4980,
      widthMm: 1960,
      heightMm: 1410,
      wheelbaseMm: 2990,
    },
    features: [
      "Dual-Pack A/B Active Energy Re-routing",
      "Alternator Control Module (ACM) with 98.4% Inverter Efficiency",
      "High-Efficiency Kinetic PMG Alternator Link",
      "Adaptive Active Aerodynamics & Low-drag Underbody",
      "Level 2.9+ ADAS with 8 HD Cameras & 4D Imaging Radar",
      "Immersion Liquid Battery Cooling & Thermochemical Stability",
    ],
    colorways: [
      { name: "Cosmic Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Electric Cyan Pearl", hex: "#00e5ff", bgClass: "bg-cyan-400" },
      { name: "Titanium Nebula", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Solar Plasma Gold", hex: "#f59e0b", bgClass: "bg-amber-500" },
    ],
    specsList: [
      { label: "Powertrain", value: "Dual Motor All-Wheel Drive (AWD)", category: "Powertrain" },
      { label: "Combined Peak Torque", value: "760 Nm", category: "Powertrain" },
      { label: "Self-Volt Architecture", value: "Dual Pack A/B with BDA & ACM Switching", category: "Self Volt System" },
      { label: "Continuous Self-Regen", value: "Up to 35-45% in-motion kinetic recoup", category: "Self Volt System" },
      { label: "Battery Chemistry", value: "High-Energy Solid-State Lithium Matrix", category: "Battery & Thermal" },
      { label: "DC Ultra-Fast Charging", value: "10% to 80% in 18 minutes (800V Architecture)", category: "Charging" },
      { label: "Chassis", value: "Carbon-Fiber Reinforced Aluminum Monocoque", category: "Structure" },
      { label: "Infotainment", value: "15.6-inch Cinematic OLED + Heads-Up Holographic Display", category: "Cabin" },
    ],
  },
  {
    slug: "starpulse-suv",
    name: "BRC StarPulse",
    category: "Passenger",
    tagline: "Next-Gen Intelligent Luxury SUV for Extreme Long-Haul Mobility",
    description: "A commanding luxury electric SUV built to conquer intercity highways and rough terrains alike. Powered by dual high-torque motors, intelligent torque vectoring, and the proprietary Self Volt kinetic regeneration system.",
    imageUrl: "/starpulse-suv.jpg",
    basePriceInr: 2850000,
    acceleration: "0-100 km/h in 4.4s",
    topSpeedKmh: 205,
    ratedRangeKm: 720,
    batteryCapacityKwh: 78,
    selfVoltRegenKw: 36,
    motorPowerKw: 310,
    dragCoefficientCd: "0.245 Cd",
    dimensions: {
      lengthMm: 4760,
      widthMm: 1920,
      heightMm: 1670,
      wheelbaseMm: 2880,
    },
    features: [
      "Dynamic Ride-Height Air Suspension (50mm variable travel)",
      "High-Ground Clearance Rugged Sealed Battery Pack",
      "Self Volt Continuous Harvest in Stop-and-Go Urban & Ghat Regimes",
      "Panoramic Acoustic Solar Roof with Auxiliary Solar Trickle",
      "Surround 360° LiDAR & Thermal Night Vision",
      "Smart V2L (Vehicle-to-Load) 6.6 kW Power Output",
    ],
    colorways: [
      { name: "Obsidian Deep", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Cyber Alpine White", hex: "#f1f5f9", bgClass: "bg-slate-100" },
      { name: "Matrix Emerald", hex: "#059669", bgClass: "bg-emerald-600" },
      { name: "Stealth Steel Grey", hex: "#334155", bgClass: "bg-slate-700" },
    ],
    specsList: [
      { label: "Powertrain", value: "Dual Motor Intelligent e-AWD", category: "Powertrain" },
      { label: "Combined Peak Torque", value: "620 Nm", category: "Powertrain" },
      { label: "Self-Volt Architecture", value: "Dual Pack A/B with Intelligent Energy Balancer", category: "Self Volt System" },
      { label: "Wading Depth", value: "600 mm (IP68 Submersible Enclosure)", category: "Structure" },
      { label: "Luggage Space", value: "650 Litres + 85 Litre Front Trunk (Frunk)", category: "Cabin" },
      { label: "Fast Charging", value: "800V Architecture, up to 250 kW DC", category: "Charging" },
    ],
  },
  {
    slug: "starfleet-logistic",
    name: "BRC StarFleet Commercial",
    category: "Commercial",
    tagline: "Zero-Downtime Commercial Electric Platform for Enterprise Logistics",
    description: "Engineered specifically for fleet operators, e-commerce giants, and cold-chain logistics. Self Volt technology reduces fleet electricity consumption by up to 38%, slashing total cost of ownership (TCO) below diesel benchmarks.",
    imageUrl: "/starfleet-commercial.jpg",
    basePriceInr: 1650000,
    acceleration: "0-60 km/h in 5.8s (Full Load)",
    topSpeedKmh: 120,
    ratedRangeKm: 520,
    batteryCapacityKwh: 65,
    selfVoltRegenKw: 28,
    motorPowerKw: 150,
    dragCoefficientCd: "0.290 Cd",
    dimensions: {
      lengthMm: 5400,
      widthMm: 1980,
      heightMm: 2450,
      wheelbaseMm: 3450,
    },
    features: [
      "Heavy-Duty High-Cycle LFP Dual-Pack Architecture",
      "24/7 Remote Telematics & Real-Time Battery Health Diagnostics",
      "Modular Cargo Bay with Dual-Zone Active Refrigeration Support",
      "Ultra-Reinforced Galvanized Steel Chassis with 1,800 kg Payload",
      "Fleet Central Management OS Integration via Enterprise API",
      "Self Volt Low-RPM High-Torque Regeneration in City Delivery Cycles",
    ],
    colorways: [
      { name: "Fleet Pure White", hex: "#ffffff", bgClass: "bg-white" },
      { name: "Industrial Slate", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Cyan Star Delivery", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    specsList: [
      { label: "Payload Capacity", value: "1,850 kg / 12.5 cubic meters volume", category: "Cargo" },
      { label: "Motor Spec", value: "Permanent Magnet Synchronous Motor (PMSM)", category: "Powertrain" },
      { label: "Peak Torque", value: "390 Nm from 0 RPM", category: "Powertrain" },
      { label: "Self Volt Harvester", value: "Kinetic PMG Alternator + Deceleration Recoup", category: "Self Volt System" },
      { label: "Telematics", value: "5G Cloud CAN-Bus Gateway with Geofencing", category: "Fleet OS" },
      { label: "Fleet TCO Savings", value: "₹4.8 Lakhs/year vs ICE Diesel Van", category: "Economics" },
    ],
  },
  {
    slug: "starhauler-truck",
    name: "BRC StarHauler Heavy Electric Truck",
    category: "Commercial",
    tagline: "Heavy-Duty Multi-Axle Electric Cargo Truck for Long-Haul Freight & Intercity Supply Chain",
    description: "Built for high-tonnage regional freight and intercity logistics. Equipped with high-torque dual motors, tri-axle kinetic PMG regenerative harvest, and thermal-regulated LFP packs delivering uninterrupted uptime and 44% lower operating costs.",
    imageUrl: "/starhauler-truck.png",
    basePriceInr: 3850000,
    acceleration: "0-60 km/h in 6.4s (Full Load)",
    topSpeedKmh: 110,
    ratedRangeKm: 640,
    batteryCapacityKwh: 160,
    selfVoltRegenKw: 55,
    motorPowerKw: 420,
    dragCoefficientCd: "0.315 Cd",
    dimensions: {
      lengthMm: 8900,
      widthMm: 2500,
      heightMm: 3650,
      wheelbaseMm: 5200,
    },
    features: [
      "Heavy-Duty 3-Axle Kinetic PMG Energy Harvesting System",
      "Active Dual-Zone Reefer & Insulated High-Cube Cargo Container (38.5 m³)",
      "High-Tonnage 8,500 kg Payload with Air Suspension Load Equalizer",
      "Level 2.9+ ADAS Commercial Blind-Spot, Lane & Collision Mitigation",
      "800V Mega-Watt Fast Charging (10% to 80% in 28 mins)",
      "Fleet Central OS 5G Cloud Telematics & Dynamic Route Power Optimizer",
    ],
    colorways: [
      { name: "Stealth Freight Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Polar Logistics White", hex: "#f8fafc", bgClass: "bg-slate-50" },
      { name: "Cyber Fleet Cyan", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    specsList: [
      { label: "Gross Payload", value: "8,500 kg / 38.5 cubic meters High-Cube", category: "Cargo & Chassis" },
      { label: "Axle Configuration", value: "6x4 Multi-Axle with Electronic Differential Lock", category: "Powertrain" },
      { label: "Combined Peak Torque", value: "1,250 Nm Continuous", category: "Powertrain" },
      { label: "Self Volt Harvester", value: "Tri-Axle Kinetic PMG + High-Load Decel Recoup", category: "Self Volt System" },
      { label: "Fleet TCO Savings", value: "₹11.2 Lakhs/year vs Heavy Diesel Rig", category: "Economics" },
      { label: "Fast DC Charging", value: "800V Mega-Watt architecture, up to 350 kW", category: "Charging" },
    ],
  },
  {
    slug: "startitan-semi-truck",
    name: "BRC StarTitan Heavy Semi-Trailer Truck",
    category: "Commercial",
    tagline: "Ultra-Heavy Long-Haul Electric Semi-Trailer & Inter-State Freight Prime Mover",
    description: "Built for cross-country heavy cargo corridors and high-payload enterprise freight. Powered by multi-axle kinetic PMG regenerators across tractor and trailer axles, delivering 750 km continuous long-haul range and massive 52% diesel fuel substitution.",
    imageUrl: "/startitan-semi-truck.png",
    basePriceInr: 6800000,
    acceleration: "0-60 km/h in 7.2s (24-Ton Load)",
    topSpeedKmh: 105,
    ratedRangeKm: 750,
    batteryCapacityKwh: 320,
    selfVoltRegenKw: 110,
    motorPowerKw: 650,
    dragCoefficientCd: "0.330 Cd",
    dimensions: {
      lengthMm: 16500,
      widthMm: 2600,
      heightMm: 3950,
      wheelbaseMm: 7200,
    },
    features: [
      "Multi-Axle PMG Kinetic Regeneration on Tractor & Trailer Axles (110 kW Harvester)",
      "24,000 kg (24-Ton) Gross Payload with 85 m³ High-Cube Aerodynamic Semi-Trailer",
      "Dual High-Torque E-Axles Generating 2,400 Nm Combined Continuous Torque",
      "Active Smart Trailer Dynamic Sway & Electronic Braking Control (EBS)",
      "Dual Mega-Watt Fast Charging Inlets (10% to 80% in 35 mins)",
      "5G Autonomous Platoon-Ready Highway Cruising & Real-Time Fleet OS",
    ],
    colorways: [
      { name: "Stealth Freight Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Polar Logistics White", hex: "#f8fafc", bgClass: "bg-slate-50" },
      { name: "Cyber Fleet Cyan", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    specsList: [
      { label: "Gross Payload", value: "24,000 kg / 85 cubic meters Semi-Trailer", category: "Cargo & Chassis" },
      { label: "Axle Setup", value: "Multi-Axle Articulated Heavy Prime Mover", category: "Powertrain" },
      { label: "Peak System Torque", value: "2,400 Nm Dual E-Axle Drive", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "Tractor + Trailer Quad PMG (110 kW continuous)", category: "Self Volt System" },
      { label: "Annual Fuel Savings", value: "₹21.5 Lakhs/year vs Long-Haul Diesel Trailer", category: "Economics" },
      { label: "Mega-Watt Charging", value: "Up to 500 kW MCS Mega-Watt Interface", category: "Charging" },
    ],
  },
  {
    slug: "startransit-bus",
    name: "BRC StarTransit Electric Bus",
    category: "Heavy Transit",
    tagline: "High-Capacity 12-Meter Electric Municipal & Intercity Coach",
    description: "Revolutionizing public transport with closed-loop Self Volt energy recovery. Designed for high passenger density and continuous 18-hour daily operational duty with minimal intermediate depot charging.",
    imageUrl: "/startransit-bus.png",
    basePriceInr: 9800000,
    acceleration: "Smooth Stepless Urban Acceleration",
    topSpeedKmh: 95,
    ratedRangeKm: 480,
    batteryCapacityKwh: 240,
    selfVoltRegenKw: 85,
    motorPowerKw: 350,
    dragCoefficientCd: "0.360 Cd",
    dimensions: {
      lengthMm: 12000,
      widthMm: 2550,
      heightMm: 3350,
      wheelbaseMm: 5900,
    },
    features: [
      "Ultra-Safe LiFePO4 Thermal Runaway-Immune Battery Modules",
      "Dual Alternator Kinetic Harvesting on Heavy Axle Rotations",
      "Electronic Braking System (EBS) with Integrated Multi-Stage Retarder",
      "Low-Floor Ultra-Accessible Stepless Entry for Urban Rapid Transit",
      "Smart Depot Charging + Overhead Pantograph Fast-Charge Compatible",
      "Continuous HVAC Multi-Zone Energy Optimizer",
    ],
    colorways: [
      { name: "Municipal Transit Blue", hex: "#0284c7", bgClass: "bg-sky-600" },
      { name: "Eco Green Fleet", hex: "#16a34a", bgClass: "bg-green-600" },
      { name: "Electric White / Cyan", hex: "#f8fafc", bgClass: "bg-slate-50" },
    ],
    specsList: [
      { label: "Seating Capacity", value: "42 Seated + 30 Standees + Wheelchair Bay", category: "Capacity" },
      { label: "Continuous Motor Power", value: "260 kW (Peak 350 kW)", category: "Powertrain" },
      { label: "Axle System", value: "Portal Axle with Integrated Dual In-Wheel Hub Motors", category: "Powertrain" },
      { label: "Self Volt Heavy Harvester", value: "Kinetic PMG on Dual Axle Shafts (85 kW Peak)", category: "Self Volt System" },
      { label: "Safety Compliance", value: "AIS 052 / AIS 153 / UN ECE R100 Rev.3", category: "Compliance" },
    ],
  },
];

export const PATENTS_DATA = [
  {
    refNumber: "IN-PAT-2025-BRC-009",
    title: "Closed-Loop Dual-Battery Pack Dynamic Switching & Alternator Energy Harvesting System for Electric Vehicles",
    abstract: "A high-voltage energy management system comprising Battery Pack A, Battery Pack B, an Alternator Control Module (ACM), and a Bidirectional Drive Assist (BDA) controller configured to alternate discharge and kinetic recoup cycles seamlessly without power disruption.",
    status: "Published & In Final Examination (IPO)",
    category: "Dual-Pack Power Management",
    claimsCount: 22,
    filingDate: "2025-03-14",
    moatFactor: "High — Prevents single-pack thermal saturation and unlocks continuous kinetic recapture during high-load driving.",
  },
  {
    refNumber: "IN-PAT-2025-BRC-014",
    title: "High-Efficiency Permanent Magnet Generator (PMG) Kinetic Linkage for Secondary Battery Recharging",
    abstract: "A synchronized electromechanical transmission link coupling vehicle drivetrain inertia to a specialized PMG alternator, optimizing electrical harvest at variable vehicle RPM while maintaining aerodynamic glide efficiency.",
    status: "Provisional Filed & International PCT Request",
    category: "Kinetic Harvesting Electromechanics",
    claimsCount: 16,
    filingDate: "2025-06-20",
    moatFactor: "Critical — Proprietary magnetic tooth alignment reduces mechanical drag resistance by 74% compared to standard industrial alternators.",
  },
  {
    refNumber: "IN-PAT-2025-BRC-021",
    title: "Smart Thermochemical BMS with Sub-Millisecond Cell Balancing & State-of-Health Neural Estimator",
    abstract: "An embedded distributed hardware architecture utilizing edge tensor processors for real-time electrochemical impedance spectroscopy (EIS) across battery cell strings.",
    status: "Provisional Registered",
    category: "Intelligent Battery Management",
    claimsCount: 14,
    filingDate: "2025-09-08",
    moatFactor: "High — Extends usable battery cycle life to over 4,500 full equivalent cycles (>1.2 Million Kilometers).",
  },
];

export const RND_METRICS = {
  totalSimulatedKm: "2,450,000+",
  dynamometerTestHours: "8,600 hrs",
  energyEfficiencyGainPct: "32.8%",
  patentsFiled: "3 Primary + 5 Secondary",
  prototypeStage: "TRL-6 (System Prototype Validated on Test Tracks)",
  labFacilities: "Bengaluru Deep-Tech R&D Facility & Automotive Testing Ground",
};

export const INVESTOR_METRICS = {
  tamIndianEvTransition: "$50 Billion+ (by 2030 across 2W/4W/Commercial)",
  targetSegmentSam: "$12.4 Billion (Premium Passenger & Fleet Logistics)",
  currentRound: "Seed / Pre-Series A ($3.5M - $5.0M Target)",
  leadInvestorStatus: "Term Sheet Negotiations in Progress",
  prototypeMilestone: "Functional Track Demonstrator Completed",
  projectedGrossMargin: "28.5% at Phase 2 Production Scale",
  breakEvenTimeline: "Month 26 Post Series-A Deployment",
};

export const DEALER_TIERS = [
  {
    id: "flagship",
    name: "Tier 1: Flagship Experience Center",
    minSpaceSqFt: "4,500 - 8,000 sq.ft",
    minInvestmentInr: 25000000,
    annualRoiProjection: "32% - 40%",
    features: [
      "Exclusive Metro Territory Rights",
      "State-of-the-art 3D Holographic Configurator Lounge",
      "Full 4-Bay Self Volt Certified Service Center",
      "Priority Allocation on StarCraft GT & StarPulse SUV",
      "Direct Factory Engineering Hotline & Dedicated Spares Depot",
    ],
  },
  {
    id: "regional",
    name: "Tier 2: Regional Sales & Service Hub",
    minSpaceSqFt: "2,500 - 4,000 sq.ft",
    minInvestmentInr: 12500000,
    annualRoiProjection: "28% - 35%",
    features: [
      "Tier 2/3 District Exclusive Operating License",
      "3-Car Display Showroom & Customer Delivery Bay",
      "2-Bay Quick Service & High-Voltage Diagnosis Station",
      "Fleet Support Agreement for Commercial Logistics",
      "Comprehensive Digital CRM & Lead Generation Support",
    ],
  },
  {
    id: "service-node",
    name: "Tier 3: Authorized Self-Volt Service Node",
    minSpaceSqFt: "1,200 - 2,000 sq.ft",
    minInvestmentInr: 5000000,
    annualRoiProjection: "35% - 48%",
    features: [
      "High Margin After-Sales & Battery Health Re-Certification",
      "Certified High-Voltage BRC Diagnostic Toolkits",
      "Rapid Warranty & Insurance Claim Processing Pipeline",
      "Annual Maintenance Contract (AMC) Revenue Share",
    ],
  },
];
