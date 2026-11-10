export * from "@/data/vehicles";
import { VEHICLES_DATA, VehicleModelData } from "@/data/vehicles";

export { VEHICLES_DATA };
export type { VehicleModelData };

export const PATENTS_DATA = [
  {
    refNumber: "202511050655",
    title: "Dual-Pack Kinetic Energy Recovery Architecture & Alternator Energy Harvesting System for Electric Vehicles",
    abstract: "A high-voltage energy management system comprising Primary Battery Pack A, Secondary Battery Pack B, an Alternator Control Module (ACM), and a dynamic bus controller configured to isolate discharge load and route auxiliary mechanical harvesting seamlessly without high-voltage power disruption.",
    status: "Indian Patent Application No. 202511050655, Filed/Published with IPO",
    category: "Dual-Pack Power Management",
    claimsCount: 22,
    filingDate: "2025-03-14",
    moatFactor: "High — Prevents single-pack thermal saturation and unlocks auxiliary kinetic recapture during deceleration and cruising gradients (Simulated).",
  },
  {
    refNumber: "[PCT details pending]",
    title: "High-Efficiency Permanent Magnet Generator (PMG) Kinetic Linkage for Secondary Battery Recharging",
    abstract: "A synchronized electromechanical transmission link coupling vehicle drivetrain inertia to a specialized PMG alternator, optimizing electrical harvest at variable vehicle RPM while maintaining aerodynamic glide efficiency.",
    status: "Provisional Application Filed • [PCT details pending]",
    category: "Kinetic Harvesting Electromechanics",
    claimsCount: 16,
    filingDate: "[Filing pending confirmation]",
    moatFactor: "Proprietary magnetic tooth alignment reduces mechanical drag resistance compared to standard industrial alternators (Simulated lab test).",
  },
  {
    refNumber: "[Application details pending]",
    title: "Smart Thermochemical BMS with Sub-Millisecond Cell Balancing & State-of-Health Neural Estimator",
    abstract: "An embedded distributed hardware architecture utilizing edge tensor processors for real-time electrochemical impedance spectroscopy (EIS) across battery cell strings.",
    status: "In Development / Application Preparation",
    category: "Intelligent Battery Management",
    claimsCount: 14,
    filingDate: "[Filing pending confirmation]",
    moatFactor: "Targeted to extend usable battery cycle life in simulated cycling conditions.",
  },
];

export const RND_METRICS = {
  totalSimulatedKm: "2,450,000+ (Simulated)",
  dynamometerTestHours: "8,600 hrs (Lab Rig)",
  energyEfficiencyGainPct: "32.8% (Simulated Lab Test)",
  patentsFiled: "Indian Patent App No. 202511050655 • [PCT details pending]",
  prototypeStage: "TRL 3/4 (Laboratory Simulation & Proof-of-Concept Test Bench)",
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
