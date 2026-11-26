export * from "@/data/vehicles";
import { VEHICLES_DATA, VehicleModelData } from "@/data/vehicles";
import { PATENT_STATEMENT } from "@/lib/claims";

export { VEHICLES_DATA };
export type { VehicleModelData };

export const PATENTS_DATA = [
  {
    refNumber: "202511050655",
    title:
      "Dual-Pack Kinetic Energy Recovery Architecture & Alternator Energy Harvesting System for Electric Vehicles",
    abstract:
      "High-level public architectural summary: An electric powertrain energy-management system comprising Dual Battery Packs (Pack A & Pack B), an Alternator Control Module (ACM), and solid-state bus switching configured to decouple tractive discharge loads from decelerative and glide kinetic recovery currents (full pre-disclosure claims available under NDA).",
    status: "Patent-Pending (Filed with Indian Patent Office; not yet published or granted)",
    category: "Dual-Pack Power Management",
    claimsSummary: "24 claims as filed (text under NDA; subject to examination)",
    filingDate: "May 2025 (Exact date confirmed under NDA)",
    designObjective:
      "Targets reduction of single-pack thermal stress while recovering kinetic energy during deceleration and glide cycles (Simulated / TRL 3/4 Bench Stage).",
  },
  {
    refNumber: "CONFIDENTIAL-FW",
    title:
      "Proprietary Alternator Control & State-of-Health Estimator Algorithms",
    abstract:
      "Embedded microcontroller firmware and electrochemical estimation algorithms governing synchronous AC-to-DC bus matching and dual-pack balancing thresholds, maintained internally as confidential engineering know-how.",
    status: "Confidential Engineering Know-How",
    category: "Control Firmware & Estimation",
    claimsSummary: "Non-public technical documentation (NDA Data Room)",
    filingDate: "Ongoing R&D",
    designObjective:
      "Maintained as proprietary software/firmware know-how for battery state monitoring and switching control.",
  },
];

export const RND_METRICS = {
  totalSimulatedKm: "Computer simulation duty cycles (Numerical Model)",
  dynamometerTestHours: "Stage 1 ACM Lab Rig Testing (Bench Validation Stage)",
  energyEfficiencyGainPct: "Simulation model target (Independent track validation pending)",
  patentsFiled: PATENT_STATEMENT,
  prototypeStage: "TRL 3/4 (ACM Lab Bench; Bus Switcher in Simulation; Vehicle in CAD/CFD)",
  labFacilities: "R&D Engineering Workbench & Digital Simulation Environment",
};

export const INVESTOR_METRICS = {
  tamIndianEvTransition:
    "Targeting India's expanding commercial & passenger EV market (Supporting citations available under NDA)",
  targetSegmentSam:
    "Commercial fleet & intercity passenger EV segment (Assumptions unaudited)",
  currentRound: "Seed Round Seeking Capital (Subject to change; not an offer of securities)",
  leadInvestorStatus: "Early-Stage Capital Raising (Details available under NDA)",
  prototypeMilestone: "TRL 3/4 Stage 1 ACM Bench Rig (Vehicle Chassis in CAD Concept Stage)",
  projectedGrossMargin: "28.5% (Illustrative Phase-2 gross-margin assumption — unaudited, not a financial forecast)",
  breakEvenTimeline: "Management internal target model (Unaudited; available under NDA)",
};

export const DEALER_TIERS = [
  {
    id: "flagship",
    name: "Tier 1: Flagship Experience Center",
    minSpaceSqFt: "4,500 - 8,000 sq.ft (Target Format)",
    minInvestmentInr: 25000000,
    annualRoiProjection: "Illustrative target model (Unaudited)",
    features: [
      "Proposed Metro Territory Allocation (Subject to Agreement)",
      "3D Configurator Customer Experience Lounge",
      "Authorized High-Voltage Service & Diagnostic Bays (Planned)",
      "Priority Model Demonstration Slot (Post-Homologation)",
      "Dedicated Factory Technical Support Channel",
    ],
  },
  {
    id: "regional",
    name: "Tier 2: Regional Sales & Service Hub",
    minSpaceSqFt: "2,500 - 4,000 sq.ft (Target Format)",
    minInvestmentInr: 12500000,
    annualRoiProjection: "Illustrative target model (Unaudited)",
    features: [
      "Proposed District Territory Format",
      "Vehicle Display Showroom & Delivery Bay",
      "Quick Service & High-Voltage Diagnostic Station (Planned)",
      "Commercial Fleet Support Framework",
      "Integrated CRM & Lead Allocation Support",
    ],
  },
  {
    id: "service-node",
    name: "Tier 3: Authorized Self-Volt Service Node",
    minSpaceSqFt: "1,200 - 2,000 sq.ft (Target Format)",
    minInvestmentInr: 5000000,
    annualRoiProjection: "Illustrative target model (Unaudited)",
    features: [
      "After-Sales & Battery Health Diagnostic Bay (Planned)",
      "Authorized High-Voltage BRC Diagnostic Toolkits",
      "Warranty & Service Claim Workflow Integration",
      "Annual Maintenance Support Participation",
    ],
  },
];
