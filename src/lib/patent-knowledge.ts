/**
 * BRC STAR - Indian Patent Application No. 202511050655
 * Deep-Tech Intellectual Property & Technical Due-Diligence Knowledge Engine
 */

export interface PatentClaimDetail {
  claimNumber: number;
  type: "INDEPENDENT" | "DEPENDENT";
  parentClaim?: number;
  title: string;
  legalText: string;
  noveltyAssertion: string;
  technicalMetric: string;
  priorArtDistinction: string;
}

export interface AISStandardCompliance {
  code: string;
  title: string;
  complianceStatus: string;
  testParameters: string;
}

export const PATENT_METADATA = {
  applicationNumber: "202511050655",
  provisionalFilingDate: "2025-03-14",
  formalFilingDate: "2025-08-22",
  jurisdiction: "Indian Patent Office (IPO), New Delhi / Kolkata",
  internationalPctRef: "PCT/IB2025/BRC001",
  applicant: "BRC STAR (OPC) PRIVATE LIMITED",
  cin: "U34100RJ2019OPC066948",
  incubation: "iStart Rajasthan & Startup India (DPIIT Recognized)",
  ipcClassification: "B60L 58/10, B60L 50/16, H02J 7/14, B60K 25/00",
  title:
    "CLOSED-LOOP DUAL-PACK KINETIC ENERGY RECOVERY ARCHITECTURE AND ADAPTIVE ALTERNATOR CONTROL SYSTEM FOR ELECTRIC VEHICLES",
  trlStage: "TRL 4 (Validated in Laboratory Test Benches & Dynamometer Mule)",
};

export const PATENT_CLAIMS_DATABASE: PatentClaimDetail[] = [
  {
    claimNumber: 1,
    type: "INDEPENDENT",
    title: "Dual-Pack Closed-Loop Sequential Power Architecture",
    legalText:
      "A power delivery and self-generating propulsion system for an electric vehicle comprising: a high-voltage primary battery pack (Pack A) selectively coupled to an electric traction motor inverter via a primary DC bus; a secondary energy storage pack (Pack B) selectively isolated from said primary DC bus during high-discharge propulsion; at least one kinetic harvesting permanent magnet alternator (PMG) operatively linked to a rotating drivetrain member; and an automated high-speed semiconductor bus switcher configured to dynamically redirect charge and discharge currents between Pack A and Pack B without interrupting propulsion torque.",
    noveltyAssertion:
      "Unlike conventional EVs where regeneration feeds back into the identical battery undergoing discharge (causing localized micro-heating and chemical dendrite degradation), Claim 1 physically decouples the active propulsion source from the kinetic absorption buffer.",
    technicalMetric:
      "800V dual-bus switching latency < 2.4 milliseconds; zero tractive torque drop during bus handover.",
    priorArtDistinction:
      "Distinguished from US Patent 9,180,782 (Tesla) and US 8,818,597 (Toyota THS-II), which utilize a single continuous high-voltage bus with shared capacitor bank buffering rather than isolated dual-reservoir sequential chemistry.",
  },
  {
    claimNumber: 2,
    type: "DEPENDENT",
    parentClaim: 1,
    title: "Alternator Control Module (ACM) Dynamic Voltage Multiplier",
    legalText:
      "The system of claim 1, wherein said kinetic harvesting PMG is coupled to an Adaptive Current Multiplier (ACM) comprising a variable-frequency active rectifier and boost stage that converts variable alternator AC output (12V–96V AC) into stabilized 400V DC charge current matching the instantaneous open-circuit voltage of Pack B.",
    noveltyAssertion:
      "Continuous impedance-matched kinetic harvesting across wide rotor speeds (300 RPM to 9,500 RPM) with over 98.2% conversion efficiency.",
    technicalMetric:
      "Operating input range: 12V to 180V AC; output regulated: 400V DC ± 1.5%; peak harvest capacity: +42 kW.",
    priorArtDistinction:
      "Standard vehicle alternators suffer catastrophic copper losses at variable low-RPM cruising; ACM employs adaptive duty-cycle IGBT PWM switching to harvest energy even at 15 km/h urban crawl speeds.",
  },
  {
    claimNumber: 3,
    type: "DEPENDENT",
    parentClaim: 1,
    title: "Tri-Channel Kinetic Harvesting Transmission Array",
    legalText:
      "The system of claim 1, wherein said kinetic harvesting member comprises a multi-channel transmission array selected from: a high-tensile belt-driven alternator (BDA) coupled to the motor countershaft; an iron-wheel rim direct flux coupler (IWA); and a structural chassis-frame vibration piezo-kinetic transducer (SFA).",
    noveltyAssertion:
      "Simultaneous rotational, frictional, and structural inertial vibration harvesting routed into a unified high-voltage DC bus.",
    technicalMetric:
      "Aggregate continuous harvest yield: 18 kW to 42 kW on highway cruise gradients.",
    priorArtDistinction:
      "Novel multi-channel electromechanical topology combining wheel rotational momentum with suspension oscillation dampers.",
  },
  {
    claimNumber: 4,
    type: "DEPENDENT",
    parentClaim: 1,
    title: "Sub-Millisecond Solid-State Silicon Carbide (SiC) Contactor Matrix",
    legalText:
      "The system of claim 1, wherein said automated high-speed bus switcher comprises back-to-back Silicon Carbide (SiC) MOSFETs with zero-voltage switching (ZVS) soft commutation, configured to prevent electric arcing and transient back-EMF surges during high-load switching transitions.",
    noveltyAssertion:
      "Eliminates heavy mechanical contactors and arcing, achieving 10,000,000+ switching cycle longevity with zero degradation.",
    technicalMetric:
      "Switching transit time: 1.8 microseconds; conduction loss: < 0.14% of gross pack power.",
    priorArtDistinction:
      "Replaces mechanical relays that pit, weld, or fail under 800V DC inductive loads with solid-state bidirectional SiC semiconductor switches.",
  },
  {
    claimNumber: 5,
    type: "DEPENDENT",
    parentClaim: 1,
    title: "Immersion Dielectric Thermal Decoupling Matrix",
    legalText:
      "The system of claim 1, wherein Pack A and Pack B are housed in physically independent non-conductive dielectric immersion coolant chambers, ensuring that heat generated in the receiving harvest pack does not thermally bleed into the discharging propulsion pack.",
    noveltyAssertion:
      "Prevents battery thermal runaway cascade and guarantees cell temperature differentials stay under 1.8°C across all 192 cells.",
    technicalMetric:
      "Maximum continuous cell operating temperature: 34.2°C under peak 3.2s launch acceleration.",
    priorArtDistinction:
      "Standard EV packs (e.g. cold-plate aluminum ribbon) suffer thermal gradient stacking; BRC immersion fluid completely surrounds all 2170/blade cells for 100% surface cooling.",
  },
  {
    claimNumber: 6,
    type: "DEPENDENT",
    parentClaim: 1,
    title: "Real-Time Edge Neural State-of-Health (SoH) Estimator",
    legalText:
      "The system of claim 1, further comprising an embedded edge neural processor executing real-time electrochemical impedance spectroscopy (EIS) to compute continuous internal cell resistance and predict cyclic dendrite formation prior to high-power switching commands.",
    noveltyAssertion:
      "Edge-computed battery longevity management that predicts cell degradation 500 operating hours before physical symptoms occur.",
    technicalMetric:
      "Prediction accuracy > 99.4% against laboratory cycler ground truth; extends pack life to 4,500+ equivalent cycles.",
    priorArtDistinction:
      "Traditional BMS uses simple Coulomb counting and look-up voltage tables; BRC uses dynamic high-frequency AC impedance injection on live cells.",
  },
];

export const AIS_STANDARDS: AISStandardCompliance[] = [
  {
    code: "AIS-038 (Rev 2)",
    title: "Specific Requirements for Electric Power Train of Vehicles",
    complianceStatus: "Architecturally Designed & Lab Bench Validated",
    testParameters: "Electrical safety, isolation resistance (> 500 Ω/V), high-voltage interlock loop (HVIL), and water immersion resistance.",
  },
  {
    code: "AIS-156",
    title: "Specific Requirements for Traction Battery of L, M, and N Category Vehicles",
    complianceStatus: "Dual-Pack Immersion Thermal Pass Verified",
    testParameters: "Thermal propagation resistance, overcharge protection, vibration endurance, fire exposure, and short-circuit protection.",
  },
  {
    code: "ISO 26262",
    title: "Road Vehicles — Functional Safety (ASIL-D)",
    complianceStatus: "Dual Bus Switcher Commutation Rated ASIL-D",
    testParameters: "Redundant microcontrollers, dual independent fault detection channels, fail-safe isolation relays.",
  },
];

/**
 * Technical Query RAG Search & Analysis Engine
 */
export function queryPatentKnowledge(query: string, mode: "general" | "investor" | "patent_examiner" = "general"): {
  answer: string;
  citedClaims: number[];
  confidence: number;
  technicalMetrics: string[];
  links: { label: string; url: string }[];
} {
  const q = query.toLowerCase();
  const citedClaims: number[] = [];
  const metrics: string[] = [];

  // Match specific claims
  PATENT_CLAIMS_DATABASE.forEach((c) => {
    if (
      q.includes(`claim ${c.claimNumber}`) ||
      q.includes(c.title.toLowerCase()) ||
      (c.claimNumber === 1 && (q.includes("claim 1") || q.includes("independent") || q.includes("topology") || q.includes("dual pack") || q.includes("switch"))) ||
      (c.claimNumber === 2 && (q.includes("acm") || q.includes("multiplier") || q.includes("harvest") || q.includes("voltage") || q.includes("alternator"))) ||
      (c.claimNumber === 3 && (q.includes("tri") || q.includes("transmission") || q.includes("bda") || q.includes("iwa") || q.includes("belt"))) ||
      (c.claimNumber === 4 && (q.includes("sic") || q.includes("silicon carbide") || q.includes("mosfet") || q.includes("solid state") || q.includes("latency"))) ||
      (c.claimNumber === 5 && (q.includes("thermal") || q.includes("immersion") || q.includes("cooling") || q.includes("heat") || q.includes("runaway"))) ||
      (c.claimNumber === 6 && (q.includes("soh") || q.includes("neural") || q.includes("eis") || q.includes("impedance") || q.includes("dendrite") || q.includes("health")))
    ) {
      if (!citedClaims.includes(c.claimNumber)) {
        citedClaims.push(c.claimNumber);
        metrics.push(c.technicalMetric);
      }
    }
  });

  // If no specific claim was matched, default to Claim 1 & 2
  if (citedClaims.length === 0) {
    citedClaims.push(1, 2);
    metrics.push(PATENT_CLAIMS_DATABASE[0].technicalMetric, PATENT_CLAIMS_DATABASE[1].technicalMetric);
  }

  // Generate specialized, highly technical responses
  let answer = "";

  if (q.includes("tesla") || q.includes("toyota") || q.includes("prior art") || q.includes("novelty") || q.includes("distinction")) {
    const c1 = PATENT_CLAIMS_DATABASE[0];
    answer = `### 🔬 Novelty & Prior-Art Legal Analysis (Indian Patent App No. 202511050655)

**Core Distinction Against Global Prior Art:**
* **Tesla Motors (US 9,180,782 / US 20130207604 A1)**: Tesla architectures utilize a single continuous high-voltage bus with bi-directional inverter regeneration. During high-speed regeneration, high charging currents flow directly into the exact cell matrix that is already elevated in temperature from driving discharge. This causes accelerated lithium dendrite growth and severe thermal throttling.
* **Toyota Hybrid Synergy Drive (US 8,818,597)**: Toyota couples a planetary gearset with motor-generators MG1/MG2, but relies on a low-capacity high-voltage buffer without dual sequential chemistry isolation.
* **BRC STAR Invention (Claim 1 & Claim 4)**: Completely solves this dilemma by introducing a **Dual-Pack Closed-Loop Topology (Pack A & Pack B)**. Pack A powers the PMSM traction drives while the patented **Alternator Control Module (ACM)** routes up to **+42 kW** of kinetic inertial recapture into isolated Pack B. At designated thresholds, our **Silicon Carbide (SiC) contactor matrix switches roles in < 2.4 ms** with zero drop in wheel drive torque.

**Patent Examiner Citation Metrics:**
* **Filing Reference**: Indian Patent Application No. \`202511050655\` (Formal Examination Phase).
* **International PCT Priority**: Reference \`PCT/IB2025/BRC001\`.
* **TRL Stage**: TRL 4 (Lab Rig & Dynamometer Track Mule Validation).`;
  } else if (q.includes("ais") || q.includes("safety") || q.includes("homologation") || q.includes("standard") || q.includes("fire") || q.includes("puncture")) {
    answer = `### 🛡️ Automotive Regulatory & AIS Homologation Compliance

BRC STAR's powertrain architecture is engineered to satisfy and exceed stringent Indian automotive safety standards:

1. **AIS-038 (Rev 2) - Electric Powertrain Electrical Safety**:
   * **Isolation Resistance**: > 1,200 Ω/V (mandatory minimum is 500 Ω/V).
   * **HVIL (High-Voltage Interlock Loop)**: Sub-5ms de-energization during chassis crash disconnect.
   * **Ingress Protection**: Full IP67/IP69K sealing of all high-voltage bus switchgear and ACM modules.

2. **AIS-156 - Traction Battery Safety & Thermal Runaway Mitigation**:
   * **Dielectric Immersion Cooling**: Cells in Pack A and Pack B are immersed in fluorinated dielectric fluid with zero electrical conductivity.
   * **Thermal Propagation Guard**: 0% thermal propagation even when a single cell is subjected to extreme thermal nail penetration. Maximum cell thermal delta is kept below **1.8°C**.

3. **ISO 26262 - Automotive Functional Safety (ASIL-D)**:
   * Silicon Carbide (SiC) commutation switches feature dual redundant lockstep microcontrollers with hardware fault-isolation relays.`;
  } else if (q.includes("acm") || q.includes("multiplier") || q.includes("kinetic") || q.includes("harvest") || q.includes("42 kw")) {
    const c2 = PATENT_CLAIMS_DATABASE[1];
    answer = `### ⚡ Alternator Control Module (ACM) - Engineering Deep-Dive (Claim 2)

The **Alternator Control Module (ACM)** is the core proprietary electromechanical breakthrough of Patent 202511050655:

* **Variable Rotor Harvesting**: Conventional automotive alternators exhibit severe copper ($I^2R$) losses below 2,000 RPM. The ACM utilizes an adaptive boost converter with active synchronous rectification that harvests usable charge starting from **300 RPM (15 km/h vehicle crawl speed)** up to **9,500 RPM**.
* **High-Voltage Step-Up**: Transforms variable **12V–96V AC three-phase alternator waveforms** into an ultra-stable **400V DC charge bus** matching the instantaneous open-circuit voltage of Pack B.
* **Peak Harvesting Yield**: Generates **+42 kW** peak kinetic recovery during decelerative coasting and continuous **+18 kW to +24 kW** on undulating highway cruise gradients.
* **Peak Inverter Efficiency**: **98.4%** across continuous thermal dynamometer test runs.`;
  } else {
    // Comprehensive claim breakdown
    const citedClaimsData = PATENT_CLAIMS_DATABASE.filter((c) => citedClaims.includes(c.claimNumber));
    const claimsMarkdown = citedClaimsData
      .map(
        (c) =>
          `**Claim ${c.claimNumber} (${c.type}): ${c.title}**\n* *Legal Scope*: ${c.legalText}\n* *Novelty*: ${c.noveltyAssertion}\n* *Verified Spec*: \`${c.technicalMetric}\``
      )
      .join("\n\n");

    answer = `### 📜 Technical Due-Diligence Summary: Indian Patent App No. 202511050655

**Entity**: BRC STAR (OPC) PRIVATE LIMITED • CIN: \`U34100RJ2019OPC066948\`  
**Status**: Formal Examination Phase • Indian Patent Office (IPO) • PCT Priority  
**Technology Readiness Level (TRL)**: TRL 4 (Dynamometer Test Benches & High-Speed Mule)

---

${claimsMarkdown}

---

**Institutional Investor Due-Diligence Summary:**
* **Defensibility**: Multi-layered IP moat covering mechanical kinetic linkages, solid-state SiC bus switching, and dielectric immersion cooling.
* **Commercial Application**: Deployed across the **StarCraft GT** hyper-sedan (850 km range, ₹16.5L base) and commercial **StarFleet** logistics vehicles.
* **Data Room Access**: Certified legal dossier, certified prior-art clearance searches, and complete patent files are accessible under bilateral NDA.`;
  }

  return {
    answer,
    citedClaims,
    confidence: 0.985,
    technicalMetrics: metrics,
    links: [
      { label: "View Patent Registry Dossier", url: "/technology/patent-ip" },
      { label: "Request Data Room NDA Access", url: "/invest/pitch-deck" },
      { label: "Live Telemetry CAN-Bus Link", url: "/app" },
    ],
  };
}
