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
  priceLabel: "INDICATIVE EX-SHOWROOM (ESTIMATED)",
  homologationNotice: "Subject to homologation & prototype validation",
  tokenAmountInr: 25000,
  tokenBadge: "Refundable Reservation Token: ₹25,000",
  targetDelivery: "Target Delivery: 2027",
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
      `Dual-pack closed-loop continuous kinetic recoup with active A/B battery bus isolation (${range} km range).`,
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
      "Engineered for uncompromising high-speed grand touring. Featuring BRC STAR's Dual-Pack Kinetic Energy Recovery Architecture, achieving up to 850 km of simulated real-world endurance with minimized grid dependency.",
    imageUrl: "/brc-starcraft-gt-suv.png",
    sideImageUrl: "/brc-starcraft-gt-side.png",
    aeroImageUrl: "/brc-starcraft-gt-aero.png",
    basePriceInr: 1650000, // Base Standard Trim: ₹16,50,000
    acceleration: "0-100 km/h in 3.2s",
    topSpeedKmh: 240,
    ratedRangeKm: 850,
    batteryCapacityKwh: 88,
    selfVoltRegenKw: 42,
    motorPowerKw: 380,
    dragCoefficientCd: "0.198 Cd",
    drivetrainBadge: "Dual Motor AWD • 800V Solid-State",
    specsUrl: "/vehicles/passenger",
    dimensions: {
      lengthMm: 4980,
      widthMm: 1960,
      heightMm: 1410,
      wheelbaseMm: 2990,
    },
    features: [
      "Dual-Pack A/B Active Energy Re-routing",
      "Alternator Control Module (ACM) with 98.4% Peak Inverter Efficiency",
      "High-Efficiency Kinetic PMG Alternator Mechanical Coupling",
      "Adaptive Active Aerodynamics & Low-drag Underbody Diffuser",
      "Level 2.9+ ADAS with 8 HD Cameras & 4D Imaging Radar",
      "Immersion Liquid Battery Cooling & Thermochemical State Estimator",
    ],
    colorways: [
      { name: "Cosmic Obsidian", hex: "#0a0d14", bgClass: "bg-slate-950" },
      { name: "Electric Cyan Pearl", hex: "#00e5ff", bgClass: "bg-cyan-400" },
      { name: "Titanium Nebula", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Solar Plasma Gold", hex: "#f59e0b", bgClass: "bg-amber-500" },
    ],
    portfolioSpecs: [
      { label: "Power Output", value: "380 kW Dual Drive" },
      { label: "Architecture", value: "800V Dual Bus" },
      { label: "Acceleration", value: "0–100 km/h in 3.2s" },
      { label: "Self-Volt Range", value: "Up to 850 km" },
      { label: "Kinetic Harvest", value: "+42 kW Peak Recoup" },
      { label: "Drivetrain", value: "Dual Motor Intelligent AWD" },
    ],
    specsList: [
      { label: "Powertrain", value: "Dual Motor All-Wheel Drive (AWD)", category: "Powertrain" },
      { label: "Combined Peak Torque", value: "760 Nm", category: "Powertrain" },
      { label: "Kinetic Architecture", value: "Dual Pack A/B with ACM Power Bus Switching", category: "Self Volt System" },
      { label: "Continuous Harvesting", value: "Up to 32.8% in-motion kinetic recoup (TRL 3/4)", category: "Self Volt System" },
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
    segmentBadge: "Luxury All-Terrain SUV",
    tagline: "Next-Gen Intelligent Luxury SUV for Extreme Long-Haul Mobility",
    description:
      "A commanding luxury electric SUV built to conquer intercity highways and rough terrain. Powered by dual high-torque motors, intelligent torque vectoring, and the proprietary Self-Volt kinetic regeneration system.",
    imageUrl: "/starpulse-suv.jpg",
    basePriceInr: 2950000, // Standardized: ₹29,50,000
    acceleration: "0-100 km/h in 4.4s",
    topSpeedKmh: 205,
    ratedRangeKm: 720,
    batteryCapacityKwh: 78,
    selfVoltRegenKw: 36,
    motorPowerKw: 310,
    dragCoefficientCd: "0.245 Cd",
    drivetrainBadge: "Intelligent e-AWD • 800V Architecture",
    specsUrl: "/vehicles/passenger",
    dimensions: {
      lengthMm: 4760,
      widthMm: 1920,
      heightMm: 1670,
      wheelbaseMm: 2880,
    },
    features: [
      "Dynamic Ride-Height Air Suspension (50mm variable travel)",
      "High-Ground Clearance Rugged Sealed Battery Pack",
      "Self-Volt Continuous Harvest in Stop-and-Go Urban & Ghat Regimes",
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
    portfolioSpecs: [
      { label: "Architecture", value: "800V System Architecture" },
      { label: "Drivetrain", value: "Dual Motor Intelligent AWD" },
      { label: "Range", value: "Up to 720 km" },
      { label: "Energy Management", value: "Intelligent ACM Control" },
      { label: "Kinetic Harvest", value: "+36 kW Continuous" },
      { label: "Cabin", value: "Premium Connected 7-Seater" },
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
    tagline: "Zero-Downtime Commercial Electric Platform for Enterprise Logistics",
    description:
      "Engineered specifically for fleet operators, e-commerce networks, and cold-chain supply chains. Self-Volt technology reduces electricity consumption by up to 38%, slashing fleet total cost of ownership (TCO) below diesel benchmarks.",
    imageUrl: "/starfleet-commercial.jpg",
    basePriceInr: 2450000, // Standardized: ₹24,50,000
    acceleration: "0-60 km/h in 5.8s (Full Load)",
    topSpeedKmh: 120,
    ratedRangeKm: 520,
    batteryCapacityKwh: 65,
    selfVoltRegenKw: 28,
    motorPowerKw: 150,
    dragCoefficientCd: "0.290 Cd",
    drivetrainBadge: "Fleet Duty • High-Torque PMSM",
    specsUrl: "/vehicles/commercial",
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
      "Ultra-Reinforced Galvanized Steel Chassis with 1,850 kg Payload",
      "Fleet Central Management OS Integration via Enterprise API",
      "Self-Volt Low-RPM High-Torque Regeneration in City Delivery Cycles",
    ],
    colorways: [
      { name: "Fleet Pure White", hex: "#ffffff", bgClass: "bg-white" },
      { name: "Industrial Slate", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Cyan Star Delivery", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    portfolioSpecs: [
      { label: "Powertrain", value: "High-Torque Electric Drive" },
      { label: "Battery Chemistry", value: "Commercial High-Cycle LFP" },
      { label: "Energy Recovery", value: "Self-Volt Dual-Pack Recoup" },
      { label: "Fleet Intelligence", value: "5G Cloud CAN-Bus Gateway" },
      { label: "Regen System", value: "+28 kW Auxiliary PMG" },
      { label: "Operating Cost", value: "₹4.8L/yr Fuel Savings vs Diesel" },
    ],
    specsList: [
      { label: "Payload Capacity", value: "1,850 kg / 12.5 cubic meters volume", category: "Cargo" },
      { label: "Motor Spec", value: "Permanent Magnet Synchronous Motor (PMSM)", category: "Powertrain" },
      { label: "Peak Torque", value: "390 Nm from 0 RPM", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "Kinetic PMG Alternator + Deceleration Recoup", category: "Self Volt System" },
      { label: "Telematics", value: "5G Cloud CAN-Bus Gateway with Geofencing", category: "Fleet OS" },
      { label: "Fleet TCO Savings", value: "₹4.8 Lakhs/year vs ICE Diesel Van", category: "Economics" },
    ],
  },
  {
    slug: "starfleet-logistic",
    vehicleNumber: "03-L",
    name: "BRC StarFleet Commercial",
    category: "Commercial",
    segmentBadge: "High-Uptime Logistics Van",
    tagline: "Zero-Downtime Commercial Electric Platform for Enterprise Logistics",
    description:
      "Engineered specifically for fleet operators, e-commerce networks, and cold-chain supply chains. Self-Volt technology reduces electricity consumption by up to 38%, slashing fleet total cost of ownership (TCO) below diesel benchmarks.",
    imageUrl: "/starfleet-commercial.jpg",
    basePriceInr: 2450000,
    acceleration: "0-60 km/h in 5.8s (Full Load)",
    topSpeedKmh: 120,
    ratedRangeKm: 520,
    batteryCapacityKwh: 65,
    selfVoltRegenKw: 28,
    motorPowerKw: 150,
    dragCoefficientCd: "0.290 Cd",
    drivetrainBadge: "Fleet Duty • High-Torque PMSM",
    specsUrl: "/vehicles/commercial",
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
      "Ultra-Reinforced Galvanized Steel Chassis with 1,850 kg Payload",
      "Fleet Central Management OS Integration via Enterprise API",
      "Self-Volt Low-RPM High-Torque Regeneration in City Delivery Cycles",
    ],
    colorways: [
      { name: "Fleet Pure White", hex: "#ffffff", bgClass: "bg-white" },
      { name: "Industrial Slate", hex: "#475569", bgClass: "bg-slate-600" },
      { name: "Cyan Star Delivery", hex: "#00e5ff", bgClass: "bg-cyan-400" },
    ],
    portfolioSpecs: [
      { label: "Powertrain", value: "High-Torque Electric Drive" },
      { label: "Battery Chemistry", value: "Commercial High-Cycle LFP" },
      { label: "Energy Recovery", value: "Self-Volt Dual-Pack Recoup" },
      { label: "Fleet Intelligence", value: "5G Cloud CAN-Bus Gateway" },
      { label: "Regen System", value: "+28 kW Auxiliary PMG" },
      { label: "Operating Cost", value: "₹4.8L/yr Fuel Savings vs Diesel" },
    ],
    specsList: [
      { label: "Payload Capacity", value: "1,850 kg / 12.5 cubic meters volume", category: "Cargo" },
      { label: "Motor Spec", value: "Permanent Magnet Synchronous Motor (PMSM)", category: "Powertrain" },
      { label: "Peak Torque", value: "390 Nm from 0 RPM", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "Kinetic PMG Alternator + Deceleration Recoup", category: "Self Volt System" },
      { label: "Telematics", value: "5G Cloud CAN-Bus Gateway with Geofencing", category: "Fleet OS" },
      { label: "Fleet TCO Savings", value: "₹4.8 Lakhs/year vs ICE Diesel Van", category: "Economics" },
    ],
  },
  {
    slug: "starhauler-truck",
    vehicleNumber: "04",
    name: "BRC StarHauler Heavy Electric Truck",
    category: "Commercial",
    segmentBadge: "Multi-Axle Heavy Truck",
    tagline: "Heavy-Duty Multi-Axle Electric Cargo Truck for Regional Freight & Intercity Supply Chains",
    description:
      "Built for high-tonnage regional freight and intercity logistics. Equipped with high-torque dual motors, tri-axle kinetic PMG regenerative harvest, and thermal-regulated LFP packs delivering uninterrupted uptime and 44% lower operating costs.",
    imageUrl: "/starhauler-truck.png",
    basePriceInr: 4950000, // Standardized: ₹49,50,000
    acceleration: "0-60 km/h in 6.4s (Full Load)",
    topSpeedKmh: 110,
    ratedRangeKm: 640,
    batteryCapacityKwh: 160,
    selfVoltRegenKw: 55,
    motorPowerKw: 420,
    dragCoefficientCd: "0.315 Cd",
    drivetrainBadge: "Multi-Axle Heavy • 6x4 E-Drive",
    specsUrl: "/vehicles/commercial",
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
    portfolioSpecs: [
      { label: "Powertrain", value: "420 kW Dual High-Torque Motors" },
      { label: "Gross Payload", value: "8,500 kg / 38.5 m³ High-Cube" },
      { label: "Kinetic Harvest", value: "Tri-Axle PMG (+55 kW Peak)" },
      { label: "Thermal Control", value: "Immersion Liquid Loop" },
      { label: "TCO Benefit", value: "₹11.2L/yr Operating Cost Saving" },
      { label: "Charging", value: "800V Mega-Watt Interface (350 kW)" },
    ],
    specsList: [
      { label: "Gross Payload", value: "8,500 kg / 38.5 cubic meters High-Cube", category: "Cargo & Chassis" },
      { label: "Axle Configuration", value: "6x4 Multi-Axle with Electronic Differential Lock", category: "Powertrain" },
      { label: "Combined Peak Torque", value: "1,250 Nm Continuous", category: "Powertrain" },
      { label: "Kinetic Harvester", value: "Tri-Axle Kinetic PMG + High-Load Decel Recoup", category: "Self Volt System" },
      { label: "Fleet TCO Savings", value: "₹11.2 Lakhs/year vs Heavy Diesel Rig", category: "Economics" },
      { label: "Fast DC Charging", value: "800V Mega-Watt architecture, up to 350 kW", category: "Charging" },
    ],
  },
  {
    slug: "startitan-semi-truck",
    vehicleNumber: "05",
    name: "BRC StarTitan Heavy Semi-Trailer Truck",
    category: "Commercial",
    segmentBadge: "Long-Haul Semi-Trailer",
    tagline: "Ultra-Heavy Long-Haul Electric Semi-Trailer & Inter-State Freight Prime Mover",
    description:
      "Built for cross-country heavy cargo corridors and high-payload enterprise freight. Powered by multi-axle kinetic PMG regenerators across tractor and trailer axles, delivering 750 km continuous long-haul range and massive 52% diesel fuel substitution.",
    imageUrl: "/startitan-semi-truck.png",
    basePriceInr: 7950000, // Standardized: ₹79,50,000
    acceleration: "0-60 km/h in 7.2s (24-Ton Load)",
    topSpeedKmh: 105,
    ratedRangeKm: 750,
    batteryCapacityKwh: 320,
    selfVoltRegenKw: 110,
    motorPowerKw: 650,
    dragCoefficientCd: "0.330 Cd",
    drivetrainBadge: "24-Ton Freight • 2,400 Nm Torque",
    specsUrl: "/vehicles/commercial",
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
    portfolioSpecs: [
      { label: "Powertrain", value: "Dual E-Axles (650 kW Peak)" },
      { label: "Gross Payload", value: "24,000 kg / 85 m³ Semi-Trailer" },
      { label: "Kinetic Harvester", value: "Quad PMG Array (+110 kW)" },
      { label: "System Torque", value: "2,400 Nm Combined" },
      { label: "Fuel Substitution", value: "₹21.5L/yr vs Long-Haul Diesel" },
      { label: "Mega-Watt Interface", value: "500 kW MCS Mega-Watt Support" },
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
    vehicleNumber: "06",
    name: "BRC StarTransit Electric Bus",
    category: "Heavy Transit",
    segmentBadge: "12M Municipal Electric Coach",
    tagline: "High-Capacity 12-Meter Electric Municipal & Intercity Transit Coach",
    description:
      "Revolutionizing public transport with closed-loop Self-Volt energy recovery. Designed for high passenger density and continuous 18-hour daily operational duty with minimal intermediate depot charging.",
    imageUrl: "/startransit-bus.png",
    basePriceInr: 6500000, // Standardized: ₹65,00,000
    acceleration: "Smooth Stepless Urban Acceleration",
    topSpeedKmh: 95,
    ratedRangeKm: 480,
    batteryCapacityKwh: 240,
    selfVoltRegenKw: 85,
    motorPowerKw: 350,
    dragCoefficientCd: "0.360 Cd",
    drivetrainBadge: "12M Monocoque • 72 Passengers",
    specsUrl: "/vehicles/bus",
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
    portfolioSpecs: [
      { label: "Battery Pack", value: "High-Capacity 240 kWh LFP" },
      { label: "Energy Harvest", value: "Dual-Axle Harvester (+85 kW)" },
      { label: "Motor Power", value: "350 kW Peak High-Torque" },
      { label: "Rider Capacity", value: "42 Seated + 30 Standees (72+)" },
      { label: "Transit Duty", value: "18-Hour Continuous Operation" },
      { label: "Compliance", value: "AIS 052 / AIS 153 / UN ECE R100" },
    ],
    specsList: [
      { label: "Seating Capacity", value: "42 Seated + 30 Standees + Wheelchair Bay", category: "Capacity" },
      { label: "Continuous Motor Power", value: "260 kW (Peak 350 kW)", category: "Powertrain" },
      { label: "Axle System", value: "Portal Axle with Integrated Dual In-Wheel Hub Motors", category: "Powertrain" },
      { label: "Self-Volt Harvester", value: "Kinetic PMG on Dual Axle Shafts (85 kW Peak)", category: "Self Volt System" },
      { label: "Safety Compliance", value: "AIS 052 / AIS 153 / UN ECE R100 Rev.3", category: "Compliance" },
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
