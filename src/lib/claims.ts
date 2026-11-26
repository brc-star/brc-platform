/**
 * SINGLE SOURCE OF TRUTH — BRC STAR TECHNICAL, PERFORMANCE, IP & FINANCIAL CLAIMS
 *
 * Every numeric or technical claim rendered across the platform must trace back to this registry
 * with an explicit EvidenceStatus so claims never drift or appear unlabelled.
 */

export type EvidenceStatus = "verified" | "bench" | "simulated" | "illustrative" | "target" | "planned";

export interface Claim {
  id: string;
  category: "IP & Corporate" | "Powertrain & ACM" | "Battery & Thermal" | "Vehicle Performance" | "Economics & Market" | "Regulatory";
  label: string;
  value: string;
  metric?: string;
  status: EvidenceStatus;
  methodology: string;
  date?: string;
  source?: string;
  docLink?: string;
  note?: string;
  nextMilestone?: string;
}

export const SYSTEM_VOLTAGES = {
  packNominal: "400V",
  acmHarvestBus: "400V",
  systemArchitecture: "800V",
  sicSwitchRating: "1200V",
} as const;

/**
 * Canonical Patent Disclosure Statement used identically across
 * Footer, Metadata, OpenGraph, Twitter Cards, JSON-LD, and Disclosures.
 */
export const PATENT_STATEMENT =
  "Indian Patent Application No. 202511050655 (patent-pending, filed with the Indian Patent Office; not yet published or granted)." as const;

export const PATENT_STATEMENT_SHORT =
  "Indian Patent Application No. 202511050655 (patent-pending, filed with IPO; not yet published or granted)" as const;

export const PATENT_STATUS_BOX = {
  applicationNumber: "202511050655",
  applicant: "BRC STAR (OPC) PRIVATE LIMITED",
  filingDate: "May 2025 (Exact date confirmed under NDA)",
  claimCountSummary: "24 claims as filed (text under NDA; subject to examination; scope may change or be rejected)",
  disclosureStatus: "Not yet published (Confidential pre-disclosure status)",
  examinationStatus: "Not yet examined (Form 18 status pending founder confirmation)",
  grantStatus: "Not granted (Application Pending)",
  jurisdictionScope: "India (Indian Patent Office filing only; no foreign patent granted)",
} as const;

export const VOLTAGE_ARCHITECTURE_EXPLAINER =
  "Modular 800V system architecture integrates two isolated 400V packs (Pack A & Pack B) paired with a 400V regulated ACM harvest output bus and 1200V-rated Silicon Carbide (SiC) commutation switches (switching matrix details available under NDA)." as const;

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
    metric: "202511050655",
    status: "planned",
    methodology: "Official filing receipt with Indian Patent Office (IPO); exact date confirmation under NDA",
    date: "May 2025 (Exact date under NDA)",
    source: "Indian Patent Office (IPO) Filing Record (Under NDA)",
    docLink: "/invest/pitch-deck",
    note: "Patent-pending, filed with the Indian Patent Office; not yet published, not yet examined, and not granted.",
    nextMilestone: "Exact filing date publication / Form 18 Examination",
  },
  corporate_recognition: {
    id: "corporate_recognition",
    category: "IP & Corporate",
    label: "DPIIT & State Incubation",
    value: "DPIIT Recognized • iStart Rajasthan",
    metric: "DPIIT • iStart",
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
    value: "Up to 98.4% (Simulated / Rig Target)",
    metric: "98.4%",
    status: "simulated",
    methodology: "Alternator Control Module (ACM) laboratory rig modeling (test logs available under NDA)",
    source: "Evidence available under NDA",
    docLink: "/invest/pitch-deck",
    note: "Target peak rectifier efficiency under controlled load; public test logs/photos pending attachment.",
    nextMilestone: "Link witnessed bench test log & integrated coupled dyno durability audit",
  },
  acm_peak_recoup: {
    id: "acm_peak_recoup",
    category: "Powertrain & ACM",
    label: "Peak Decelerative Kinetic Harvest",
    value: "Up to +42 kW (Peak Deceleration Target)",
    metric: "+42 kW",
    status: "target",
    methodology: "Transient deceleration/downhill harvest envelope calculated from generator rating",
    source: "Evidence available under NDA",
    docLink: "/technology/self-volt",
    note: "Peak instantaneous deceleration/downhill recovery target—not continuous net cruise energy generation.",
    nextMilestone: "Full drivetrain dynamometer torque-vs-harvest mapping",
  },
  aux_energy_gain_sim: {
    id: "aux_energy_gain_sim",
    category: "Powertrain & ACM",
    label: "Auxiliary Energy Recoup Model",
    value: "Up to 32.8% (Simulation)",
    metric: "32.8%",
    status: "simulated",
    methodology: "MATLAB/Simulink drive-cycle numerical simulation across urban stop-go & gradient profiles",
    source: "Evidence available under NDA",
    docLink: "/technology/energy-recovery",
    note: "Simulation only; bench and physical vehicle track validation pending.",
    nextMilestone: "Closed-course track A/B comparison against baseline single-pack EV mule",
  },
  bus_switching_latency: {
    id: "bus_switching_latency",
    category: "Powertrain & ACM",
    label: "Solid-State SiC Bus Switchover",
    value: "< 2.4 ms (Bus) / 1.8 µs (Gate Target)",
    metric: "< 2.4 ms",
    status: "simulated",
    methodology: "SPICE & embedded hardware-in-loop SiC MOSFET ZVS switching simulation",
    source: "Evidence available under NDA",
    docLink: "/technology/self-volt",
    note: "Stage 2 solid-state commutator currently in simulation; physical full-load rig pending.",
    nextMilestone: "800V bench prototype fault-injection and transition oscilloscope trace",
  },
  dual_bus_architecture: {
    id: "dual_bus_architecture",
    category: "Powertrain & ACM",
    label: "System Bus Architecture",
    value: "800V Dual-Bus (2 × 400V Packs)",
    metric: "800V",
    status: "target",
    methodology: "System electrical topology design spec",
    source: "Evidence available under NDA",
    docLink: "/technology/self-volt",
    note: VOLTAGE_ARCHITECTURE_EXPLAINER,
    nextMilestone: "Full high-voltage wiring harness assembly on test mule",
  },
  pack_thermal_delta: {
    id: "pack_thermal_delta",
    category: "Battery & Thermal",
    label: "Cell Thermal Differential Target",
    value: "< 1.8 °C ΔT / 34.2 °C Peak Target",
    metric: "< 1.8 °C ΔT",
    status: "simulated",
    methodology: "CFD dielectric immersion flow modeling",
    source: "Evidence available under NDA",
    docLink: "/technology/self-volt",
    note: "Designed to reduce thermal stress during charge/discharge isolation (target, not yet tested).",
    nextMilestone: "Physical cell-module calorimeter & thermal chamber validation",
  },
  pack_cycle_life_target: {
    id: "pack_cycle_life_target",
    category: "Battery & Thermal",
    label: "Dual-Pack Cycle Life Target",
    value: "4,500+ Cycles (Target)",
    metric: "4,500+ cycles",
    status: "target",
    methodology: "Projected duty-cycle sharing based on cell curves (depends on chemistry & thermal control)",
    source: "Evidence available under NDA",
    docLink: "/innovation/sustainability",
    note: "Design target, not yet tested; depends heavily on cell chemistry, duty cycle & thermal management.",
    nextMilestone: "1,000-cycle multi-month cell cycler validation",
  },
  soh_estimator_accuracy: {
    id: "soh_estimator_accuracy",
    category: "Battery & Thermal",
    label: "EIS State-of-Health Model",
    value: "> 99.4% (Lab Dataset)",
    metric: "> 99.4%",
    status: "simulated",
    methodology: "Firmware estimator evaluated against synthetic/bench cycler dataset",
    source: "Evidence available under NDA",
    docLink: "/technology/patent-ip",
    note: "Software/firmware estimator model; maintained as confidential know-how.",
    nextMilestone: "Blind dataset verification on aged automotive packs",
  },
  range_starcraft_gt: {
    id: "range_starcraft_gt",
    category: "Vehicle Performance",
    label: "StarCraft GT Target Endurance",
    value: "Up to 850 km (Target)",
    metric: "850 km",
    status: "simulated",
    methodology: "Vehicle longitudinal dynamics simulation combining 88 kWh capacity & drive-cycle model",
    source: "Evidence available under NDA",
    docLink: "/vehicles/starcraft-gt",
    note: "Estimated target range on CAD/CFD concept. Real-world MIDC/WLTP range not yet measured.",
    nextMilestone: "Stage 3 rolling chassis prototype & track consumption test",
  },
  accel_starcraft_gt: {
    id: "accel_starcraft_gt",
    category: "Vehicle Performance",
    label: "StarCraft GT 0–100 km/h Target",
    value: "3.2 s (Simulation Target)",
    metric: "3.2 s",
    status: "target",
    methodology: "Calculated from 380 kW dual-drive peak traction torque & estimated curb weight",
    source: "Evidence available under NDA",
    docLink: "/vehicles/starcraft-gt",
    note: "Conceptual performance target; no road-tested mule exists yet.",
    nextMilestone: "Chassis fabrication & VBOX timing runs",
  },
  aero_starcraft_cfd: {
    id: "aero_starcraft_cfd",
    category: "Vehicle Performance",
    label: "Aerodynamic Drag & Downforce",
    value: "0.198 Cd / 104 kg Downforce",
    metric: "0.198 Cd",
    status: "simulated",
    methodology: "Steady-state CFD airflow modeling on StarCraft GT CAD body",
    source: "Evidence available under NDA",
    docLink: "/vehicles",
    note: "CFD CAD simulation values; wind tunnel scale verification pending.",
    nextMilestone: "Scale wind-tunnel correlation testing",
  },
  fleet_tco_illustrative: {
    id: "fleet_tco_illustrative",
    category: "Economics & Market",
    label: "Fleet Energy Cost Illustration",
    value: "Up to 38%–44% / ₹4.8L/yr (Illustrative)",
    metric: "Up to 38%–44% / ₹4.8L/yr",
    status: "illustrative",
    methodology: "Spreadsheet sensitivity model assuming 150 km/day, ₹95/L diesel vs ₹8/kWh grid tariff (up to 38%, 44%, and 52% illustrative freight estimates)",
    source: "Internal Management Assumptions (Evidence available under NDA)",
    docLink: "/#tco-calculator",
    note: "Illustrative estimate based on stated assumptions; not a guaranteed financial outcome.",
    nextMilestone: "Pilot logistics fleet telemetry logging",
  },
  market_tam_target: {
    id: "market_tam_target",
    category: "Economics & Market",
    label: "India EV Market Focus",
    value: "Growing Indian EV Ecosystem",
    metric: "India EV Market",
    status: "target",
    methodology: "Macro sector positioning (detailed third-party TAM citations in NDA data room)",
    source: "Evidence available under NDA",
    docLink: "/invest",
    note: "Addressable market assumptions unaudited; subject to commercial adoption.",
    nextMilestone: "Append verified industry research citations in investor deck",
  },
  phase2_gross_margin: {
    id: "phase2_gross_margin",
    category: "Economics & Market",
    label: "Phase-2 Gross Margin Assumption",
    value: "28.5% (Illustrative, Unaudited)",
    metric: "28.5%",
    status: "illustrative",
    methodology: "Internal pre-seed bill-of-materials target at scaled volume",
    source: "Evidence available under NDA (Unaudited internal model)",
    docLink: "/invest",
    note: "Phase-2 gross margin assumption (illustrative, unaudited; not a verified financial forecast).",
    nextMilestone: "Component vendor RFQs & CA-reviewed unit economics",
  },
  dealer_eois_nonbinding: {
    id: "dealer_eois_nonbinding",
    category: "Economics & Market",
    label: "Dealer Channel Interest",
    value: "18+ Non-Binding Inquiries",
    metric: "18+ Inquiries",
    status: "planned",
    methodology: "Informal inbound expressions of interest logged via web & network outreach",
    source: "Evidence available under NDA",
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
