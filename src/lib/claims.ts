/**
 * SINGLE SOURCE OF TRUTH — BRC STAR TECHNICAL, PERFORMANCE, IP & FINANCIAL CLAIMS
 *
 * Every numeric or technical claim rendered across the platform must trace back to this registry
 * with an explicit EvidenceStatus so claims never drift or appear unlabelled.
 */

export type EvidenceStatus = "verified" | "bench" | "simulated" | "target" | "planned";

export interface Claim {
  id: string;
  category: "IP & Corporate" | "Powertrain & ACM" | "Battery & Thermal" | "Vehicle Performance" | "Economics & Market" | "Regulatory";
  label: string;
  value: string;
  status: EvidenceStatus;
  methodology: string;
  date?: string;
  source?: string;
  docLink?: string;
  note?: string;
  nextMilestone?: string;
}

/**
 * Canonical Patent Disclosure Statement used identically across
 * Footer, Metadata, OpenGraph, Twitter Cards, JSON-LD, and Disclosures.
 */
export const PATENT_STATEMENT =
  "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office; awaiting examination, not yet granted)." as const;

export const PATENT_STATEMENT_SHORT =
  "Indian Patent Application No. 202511050655 (patent-pending, filed with IPO)" as const;

export const PATENT_STATUS_BOX = {
  applicationNumber: "202511050655",
  applicant: "BRC STAR (OPC) PRIVATE LIMITED",
  filingDate: "May 2025 (Exact date: TODO_FOUNDER_VERIFY)",
  claimCountSummary: "24 claims as filed (subject to examination; scope may change or be rejected — TODO_FOUNDER_VERIFY exact count)",
  disclosureStatus: "Confidential — Awaiting IPO statutory disclosure",
  examinationStatus: "TODO_FOUNDER_VERIFY (Form 18 examination status pending confirmation)",
  grantStatus: "Not granted (Application Pending)",
  jurisdictionScope: "India (Indian Patent Office filing only; no granted foreign patent rights)",
} as const;

export const VOLTAGE_ARCHITECTURE_EXPLAINER =
  "Modular 800V system architecture integrates two isolated 400V packs (Pack A & Pack B) paired with a 400V regulated ACM harvest output bus and 1200V-rated Silicon Carbide (SiC) commutation switches (TODO_FOUNDER_CONFIRM_SPEC for final series/parallel switching topology)." as const;

export const ENERGY_PHYSICS_NOTE =
  "The Alternator Control Module (ACM) and Permanent Magnet Generator (PMG) recover a portion of the vehicle's own kinetic energy during deceleration, downhill grades, and coasting/glide phases (mechanical recovery imposes drivetrain load and does not create net energy). Claimed architecture goals focus on charge acceptance decoupling, reduced thermal stress in the propulsion pack, and decelerative recoup. Net range benefit depends on drive cycle and is being quantified on the test bench." as const;

export const STANDARD_CLAIM_DISCLAIMER =
  "Figures are simulated, bench-tested or target values at TRL 3/4. Real-world results will vary. Not a commitment of performance, delivery or price." as const;

export const INVESTOR_RISK_DISCLAIMER =
  "Early-stage, pre-revenue, TRL 3/4 deep-tech R&D entity. All statements, roadmaps, and market figures are forward-looking, unaudited management assumptions and do not constitute an offer or solicitation of securities." as const;

export const CLAIMS_REGISTRY: Record<string, Claim> = {
  patent_app_202511050655: {
    id: "patent_app_202511050655",
    category: "IP & Corporate",
    label: "Indian Patent Application",
    value: "App. No. 202511050655",
    status: "verified",
    methodology: "Official filing receipt with Indian Patent Office (IPO)",
    date: "May 2025 (TODO_FOUNDER_VERIFY exact date)",
    source: "Indian Patent Office (IPO) Filing Record",
    docLink: "/invest/pitch-deck",
    note: "Application is patent-pending. Not open to public inspection and not granted.",
    nextMilestone: "Indian Patent Office statutory disclosure / Form 18 Examination",
  },
  corporate_recognition: {
    id: "corporate_recognition",
    category: "IP & Corporate",
    label: "DPIIT & State Incubation",
    value: "DPIIT Recognized • iStart Rajasthan",
    status: "verified",
    methodology: "Government of India DPIIT & DoIT&C Rajasthan Startup Registry",
    date: "Active (Est. Nov 2019)",
    source: "CIN U34100RJ2019OPC066948 / Startup India Certificate",
    docLink: "/about",
    note: "Bootstrapped entity headquartered in Anupgarh, Rajasthan.",
    nextMilestone: "Prototype track grant & state EV testing support",
  },
  acm_bench_efficiency: {
    id: "acm_bench_efficiency",
    category: "Powertrain & ACM",
    label: "ACM Rectifier & Boost Peak Yield",
    value: "98.4% (Peak Lab Rig)",
    status: "bench",
    methodology: "Stage 1 Alternator Control Module (ACM) laboratory bench rig testing",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/invest/pitch-deck",
    note: "Isolated component bench efficiency under steady-state resistive/capacitive load.",
    nextMilestone: "Integrated coupled dyno durability logging & independent third-party audit",
  },
  acm_peak_recoup: {
    id: "acm_peak_recoup",
    category: "Powertrain & ACM",
    label: "Peak Decelerative Kinetic Harvest",
    value: "Up to +42 kW (Peak Recoup)",
    status: "target",
    methodology: "Transient deceleration/downhill harvest envelope calculated from generator rating",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/technology/self-volt",
    note: "Peak instantaneous deceleration/downhill target—not continuous net cruise energy generation.",
    nextMilestone: "Full drivetrain dynamometer torque-vs-harvest mapping",
  },
  aux_energy_gain_sim: {
    id: "aux_energy_gain_sim",
    category: "Powertrain & ACM",
    label: "Auxiliary Energy Recoup Model",
    value: "Up to 32.8% (Simulation)",
    status: "simulated",
    methodology: "MATLAB/Simulink drive-cycle numerical simulation across urban stop-go & gradient profiles",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/technology/energy-recovery",
    note: "Simulation only; independent bench and physical vehicle track testing pending.",
    nextMilestone: "Closed-course track A/B comparison against baseline single-pack EV mule",
  },
  bus_switching_latency: {
    id: "bus_switching_latency",
    category: "Powertrain & ACM",
    label: "Solid-State SiC Bus Switchover",
    value: "< 2.4 ms (Bus) / 1.8 µs (Gate Target)",
    status: "simulated",
    methodology: "SPICE & embedded hardware-in-loop SiC MOSFET ZVS switching simulation",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/technology/self-volt",
    note: "Stage 2 solid-state commutator currently in simulation; physical full-load rig pending.",
    nextMilestone: "800V bench prototype fault-injection and transition oscilloscope trace",
  },
  dual_bus_architecture: {
    id: "dual_bus_architecture",
    category: "Powertrain & ACM",
    label: "System Bus Architecture",
    value: "800V Dual-Bus (2 × 400V Packs)",
    status: "target",
    methodology: "System electrical topology design spec",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/technology/self-volt",
    note: VOLTAGE_ARCHITECTURE_EXPLAINER,
    nextMilestone: "Full high-voltage wiring harness assembly on test mule",
  },
  pack_thermal_delta: {
    id: "pack_thermal_delta",
    category: "Battery & Thermal",
    label: "Cell Thermal Differential Target",
    value: "< 1.8 °C ΔT / 34.2 °C Peak Target",
    status: "simulated",
    methodology: "CFD dielectric immersion flow modeling",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/technology/self-volt",
    note: "Designed to reduce thermal stress during charge/discharge isolation. Not yet road tested.",
    nextMilestone: "Physical cell-module calorimeter & thermal chamber validation",
  },
  pack_cycle_life_target: {
    id: "pack_cycle_life_target",
    category: "Battery & Thermal",
    label: "Dual-Pack Cycle Life Target",
    value: "4,500+ Cycles (Target)",
    status: "target",
    methodology: "Projected duty-cycle sharing based on LFP/solid-state cell curves",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/innovation/sustainability",
    note: "Design target; depends heavily on cell chemistry, duty cycle & thermal management. Not yet accelerated-life tested.",
    nextMilestone: "1,000-cycle multi-month cell cycler validation",
  },
  soh_estimator_accuracy: {
    id: "soh_estimator_accuracy",
    category: "Battery & Thermal",
    label: "EIS State-of-Health Model",
    value: "> 99.4% (Lab Dataset)",
    status: "simulated",
    methodology: "Firmware estimator evaluated against synthetic/bench cycler dataset",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/technology/patent-ip",
    note: "Software/firmware estimator model; maintained as confidential know-how.",
    nextMilestone: "Blind dataset verification on aged automotive packs",
  },
  range_starcraft_gt: {
    id: "range_starcraft_gt",
    category: "Vehicle Performance",
    label: "StarCraft GT Target Endurance",
    value: "Up to 850 km (Target)",
    status: "simulated",
    methodology: "Vehicle longitudinal dynamics simulation combining 88 kWh capacity & drive-cycle model",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/vehicles/starcraft-gt",
    note: "Estimated target range on CAD/CFD concept. Real-world MIDC/WLTP range not yet measured.",
    nextMilestone: "Stage 3 rolling chassis prototype & track consumption test",
  },
  accel_starcraft_gt: {
    id: "accel_starcraft_gt",
    category: "Vehicle Performance",
    label: "StarCraft GT 0–100 km/h Target",
    value: "3.2 s (Simulation Target)",
    status: "target",
    methodology: "Calculated from 380 kW dual-drive peak traction torque & estimated curb weight",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/vehicles/starcraft-gt",
    note: "Conceptual performance target; no road-tested mule exists yet.",
    nextMilestone: "Chassis fabrication & VBOX timing runs",
  },
  aero_starcraft_cfd: {
    id: "aero_starcraft_cfd",
    category: "Vehicle Performance",
    label: "Aerodynamic Drag & Downforce",
    value: "0.198 Cd / 104 kg Downforce",
    status: "simulated",
    methodology: "Steady-state CFD airflow modeling on StarCraft GT CAD body",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/vehicles",
    note: "CFD CAD simulation values; wind tunnel scale verification pending.",
    nextMilestone: "Scale wind-tunnel correlation testing",
  },
  fleet_tco_illustrative: {
    id: "fleet_tco_illustrative",
    category: "Economics & Market",
    label: "Fleet Energy Cost Illustration",
    value: "Up to 38%–44% / ₹4.8L/yr (Illustrative)",
    status: "simulated",
    methodology: "Spreadsheet sensitivity model assuming 150 km/day, ₹95/L diesel vs ₹8/kWh grid tariff",
    source: "Internal Management Assumptions (Unaudited)",
    docLink: "/#tco-calculator",
    note: "Illustrative estimate based on stated assumptions; not a guaranteed financial outcome.",
    nextMilestone: "Pilot logistics fleet telemetry logging",
  },
  market_tam_target: {
    id: "market_tam_target",
    category: "Economics & Market",
    label: "India EV Market Focus",
    value: "Growing Indian EV Ecosystem",
    status: "target",
    methodology: "Macro sector sizing (Citation pending founder source verification)",
    source: "TODO_FOUNDER_EVIDENCE (Cite NITI Aayog / Bain / Industry report + year)",
    docLink: "/invest",
    note: "Addressable market assumptions unaudited; subject to commercial adoption.",
    nextMilestone: "Append verified industry research citations in investor deck",
  },
  phase2_gross_margin: {
    id: "phase2_gross_margin",
    category: "Economics & Market",
    label: "Phase-2 Gross Margin Assumption",
    value: "28.5% (Illustrative)",
    status: "target",
    methodology: "Internal pre-seed bill-of-materials target at scaled volume",
    source: "Unverified Internal Model (TODO_FOUNDER_EVIDENCE)",
    docLink: "/invest",
    note: "Illustrative Phase-2 gross-margin assumption (unverified; not a financial forecast).",
    nextMilestone: "Component vendor RFQs & CA-reviewed unit economics",
  },
  dealer_eois_nonbinding: {
    id: "dealer_eois_nonbinding",
    category: "Economics & Market",
    label: "Dealer Channel Interest",
    value: "18+ Non-Binding Inquiries",
    status: "planned",
    methodology: "Informal inbound expressions of interest logged via web & network outreach",
    source: "TODO_FOUNDER_EVIDENCE",
    docLink: "/partners",
    note: "Informal, non-binding expressions of interest; no commercial franchise deposits collected.",
    nextMilestone: "Execute formal territory qualification post-homologation",
  },
  ais_homologation_standards: {
    id: "ais_homologation_standards",
    category: "Regulatory",
    label: "AIS / UN ECE Type Approval",
    value: "AIS-038, AIS-052, AIS-153, AIS-156, UN ECE R100",
    status: "planned",
    methodology: "Engineering requirements target list for future ARAI / ICAT homologation",
    source: "MoRTH / Automotive Research Association of India (ARAI) Guidelines",
    docLink: "/docs",
    note: "Designed to target requirements; formal certification testing has not yet started or been obtained.",
    nextMilestone: "Submit full-vehicle prototype to ARAI/ICAT post TRL-6",
  },
};

export const ALL_CLAIMS_LIST: Claim[] = Object.values(CLAIMS_REGISTRY);

export function getClaim(id: string): Claim {
  return CLAIMS_REGISTRY[id];
}
