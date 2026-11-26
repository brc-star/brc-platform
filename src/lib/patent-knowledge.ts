/**
 * BRC STAR - Public Architecture & Compliance Knowledge Engine
 * Grounded strictly in verified TRL 3/4 status and patent-pending disclosures.
 */

import {
  PATENT_STATEMENT,
  PATENT_STATUS_BOX,
  ENERGY_PHYSICS_NOTE,
  VOLTAGE_ARCHITECTURE_EXPLAINER,
  STANDARD_CLAIM_DISCLAIMER,
} from "@/lib/claims";

export interface TechnicalDesignGoal {
  id: number;
  title: string;
  evidenceStatus: "bench" | "simulated" | "target" | "planned";
  engineeringSummary: string;
  designGoalMetric: string;
  singleBusComparison: string;
}

export interface TargetStandardSpec {
  code: string;
  title: string;
  targetStatus: string;
  scopeSummary: string;
}

export const PATENT_METADATA = {
  applicationNumber: PATENT_STATUS_BOX.applicationNumber,
  filingDate: PATENT_STATUS_BOX.filingDate,
  jurisdiction: "Indian Patent Office (IPO)",
  jurisdictionScope: PATENT_STATUS_BOX.jurisdictionScope,
  disclosureStatus: PATENT_STATUS_BOX.disclosureStatus,
  grantStatus: PATENT_STATUS_BOX.grantStatus,
  applicant: "BRC STAR (OPC) PRIVATE LIMITED",
  cin: "U34100RJ2019OPC066948",
  gstin: "08AAICB7401R1Z7",
  incubation: "DPIIT Recognized • iStart Rajasthan Incubatee",
  trlStage: "TRL 3/4 (Stage 1 ACM Bench Rig; Bus Switcher Simulation; Vehicle CAD/CFD)",
  status: PATENT_STATEMENT,
};

/**
 * High-level public technical architecture goals (NO verbatim unpublished patent claim text).
 * Detailed patent specification and claim breakdown reside exclusively in the NDA Data Room.
 */
export const TECHNICAL_DESIGN_GOALS: TechnicalDesignGoal[] = [
  {
    id: 1,
    title: "Dual-Pack Sequential Energy Routing Architecture",
    evidenceStatus: "simulated",
    engineeringSummary:
      "Architectural topology pairing a primary propulsion pack (Pack A) with an auxiliary kinetic recovery buffer (Pack B) so regenerative/deceleration currents do not directly clash with high-current traction discharge.",
    designGoalMetric: "800V Dual-Bus System Target (< 2.4 ms simulated handover latency)",
    singleBusComparison:
      "Differs from conventional single-bus EV architectures where propulsion discharge and kinetic regenerative currents share a single high-voltage pack bus simultaneously.",
  },
  {
    id: 2,
    title: "Alternator Control Module (ACM) Rectification Stage",
    evidenceStatus: "bench",
    engineeringSummary:
      "Variable-frequency active rectifier and boost stage designed to convert variable RPM alternator AC output into regulated DC charging power matched to Pack B open-circuit voltage.",
    designGoalMetric: "Up to 98.4% peak lab-rig conversion yield (Stage 1 ACM bench test; TODO_FOUNDER_EVIDENCE)",
    singleBusComparison:
      "Designed to expand usable harvest across wider RPM bands than uncompensated passive bridge rectifiers.",
  },
  {
    id: 3,
    title: "Decelerative & Glide Kinetic Recovery Coupling",
    evidenceStatus: "target",
    engineeringSummary:
      "Electromechanical PMG coupling actuated primarily during deceleration, downhill grades, and coasting phases to recover part of the vehicle's kinetic energy (recovery imposes mechanical drag and does not create net propulsion energy).",
    designGoalMetric: "Up to +42 kW peak deceleration recovery target (Drive-cycle dependent)",
    singleBusComparison:
      "Supplements motor regenerative braking during mechanical glide/coasting phases while isolating recovery heat inside the auxiliary buffer pack.",
  },
  {
    id: 4,
    title: "Solid-State Silicon Carbide (SiC) Bus Commutation",
    evidenceStatus: "simulated",
    engineeringSummary:
      "Back-to-back Silicon Carbide (SiC) semiconductor switching matrix designed to manage dual-pack role transitions without mechanical relay arcing.",
    designGoalMetric: "1.8 µs gate switching target (Stage 2 SPICE / HIL simulation)",
    singleBusComparison:
      "Targets faster non-arcing solid-state isolation compared with electromechanical high-voltage contactors.",
  },
  {
    id: 5,
    title: "Dielectric Immersion Thermal Isolation Concept",
    evidenceStatus: "simulated",
    engineeringSummary:
      "Separate thermal enclosures for Pack A and Pack B intended to reduce thermal stress buildup and cross-heating during alternating duty cycles.",
    designGoalMetric: "Target < 1.8 °C cell delta & 34.2 °C simulated operating window (Not yet road tested)",
    singleBusComparison:
      "Physically separates traction discharge heat from recovery absorption heat rather than combining both thermal loads inside a single pack casing.",
  },
  {
    id: 6,
    title: "Embedded State-of-Health (SoH) Firmware Estimator",
    evidenceStatus: "simulated",
    engineeringSummary:
      "Proprietary software and impedance-estimation firmware maintained as confidential internal know-how for estimating pack aging and guiding switching thresholds.",
    designGoalMetric: "> 99.4% benchmark accuracy against synthetic/lab cycler dataset (Model only)",
    singleBusComparison:
      "Combines multi-pack load balancing logic with proprietary estimator routines rather than simple single-pack Coulomb counting.",
  },
];

export const TARGET_REGULATORY_FRAMEWORKS: TargetStandardSpec[] = [
  {
    code: "AIS-038 (Rev 2)",
    title: "Electric Powertrain Electrical Safety Framework (Planned Target)",
    targetStatus: "Planned Target — Certification not yet started/obtained",
    scopeSummary:
      "Design targets include > 500 Ω/V insulation resistance, high-voltage interlock loop (HVIL), and IP67/IP69K ingress protection guidelines prior to homologation.",
  },
  {
    code: "AIS-156",
    title: "Traction Battery Safety Guidelines (Planned Target)",
    targetStatus: "Planned Target — Formal ARAI/ICAT testing not yet started",
    scopeSummary:
      "Dual-pack architecture is being designed to target AIS-156 thermal management, overcharge protection, and vibration requirements upon future prototype testing.",
  },
  {
    code: "AIS-052 / AIS-153 / UN ECE R100",
    title: "Commercial Bus & Electric Vehicle Type Approval (Planned Target)",
    targetStatus: "Planned Target — Concept Stage Requirements Only",
    scopeSummary:
      "Conceptual chassis specifications target Indian passenger/commercial type-approval norms; no vehicle certification has been obtained.",
  },
];

/**
 * Technical Query RAG Search & Disclosure Engine
 */
export function queryPatentKnowledge(
  query: string,
  _mode: "general" | "investor" | "patent_examiner" = "general"
): {
  answer: string;
  citedClaims: number[];
  confidence: number;
  technicalMetrics: string[];
  links: { label: string; url: string }[];
} {
  const q = query.toLowerCase();
  const citedTopics: number[] = [];
  const metrics: string[] = [];

  TECHNICAL_DESIGN_GOALS.forEach((goal) => {
    if (
      q.includes(goal.title.toLowerCase()) ||
      (goal.id === 1 && (q.includes("dual pack") || q.includes("switch") || q.includes("architecture") || q.includes("topology"))) ||
      (goal.id === 2 && (q.includes("acm") || q.includes("multiplier") || q.includes("rectif") || q.includes("alternator"))) ||
      (goal.id === 3 && (q.includes("kinetic") || q.includes("harvest") || q.includes("glide") || q.includes("drag") || q.includes("42"))) ||
      (goal.id === 4 && (q.includes("sic") || q.includes("silicon carbide") || q.includes("mosfet") || q.includes("latency"))) ||
      (goal.id === 5 && (q.includes("thermal") || q.includes("immersion") || q.includes("cooling") || q.includes("heat"))) ||
      (goal.id === 6 && (q.includes("soh") || q.includes("firmware") || q.includes("eis") || q.includes("health")))
    ) {
      citedTopics.push(goal.id);
      metrics.push(goal.designGoalMetric);
    }
  });

  if (citedTopics.length === 0) {
    citedTopics.push(1, 2);
    metrics.push(
      TECHNICAL_DESIGN_GOALS[0].designGoalMetric,
      TECHNICAL_DESIGN_GOALS[1].designGoalMetric
    );
  }

  let answer = "";

  if (q.includes("architecture") || q.includes("single bus") || q.includes("novel") || q.includes("differ")) {
    answer = `### 🔬 Dual-Pack Architecture Summary (${PATENT_METADATA.applicationNumber})

**Comparison vs. Conventional Single-Bus EV Topologies:**
* **Conventional Single-Bus EVs**: Route motor discharge and regenerative currents onto the same primary battery bus.
* **BRC STAR Architecture Goal**: Separates primary traction discharge (Pack A) from kinetic recovery capture (Pack B) via an Alternator Control Module (ACM) and solid-state switching controller, intended to reduce thermal concentration in a single pack.

**Disclosure Status:**
* **Patent Filing**: ${PATENT_STATEMENT}
* **Jurisdiction Scope**: ${PATENT_METADATA.jurisdictionScope}
* **Readiness Level**: ${PATENT_METADATA.trlStage}
* *${STANDARD_CLAIM_DISCLAIMER}*`;
  } else if (q.includes("ais") || q.includes("safety") || q.includes("homologation") || q.includes("standard")) {
    answer = `### 🛡️ Target Safety Frameworks (Planned — Certification Pending)

**Important Disclosure**: BRC STAR prototypes are currently at **TRL 3/4 (laboratory bench & simulation)**. **No AIS, ARAI, ICAT, or UN ECE certifications have been obtained yet.**

Future production prototypes are designed to target:
1. **AIS-038 (Rev 2) Targets**: Insulation resistance (> 500 Ω/V), HVIL interlock, and IP67/IP69K enclosure guidelines.
2. **AIS-156 Targets**: Cell thermal management, vibration, and electrical fault protection guidelines.
3. **AIS-052 / AIS-153 / UN ECE R100 Targets**: Commercial transit safety norms applicable post-fabrication.`;
  } else if (q.includes("acm") || q.includes("kinetic") || q.includes("harvest") || q.includes("42")) {
    answer = `### ⚡ Alternator Control Module (ACM) & Energy Recovery Physics

* **Bench Validation Stage (Stage 1)**: The ACM active rectifier rig has undergone laboratory bench evaluation targeting up to **98.4% peak conversion efficiency** (TODO_FOUNDER_EVIDENCE: bench log available under NDA).
* **Voltage Topology**: ${VOLTAGE_ARCHITECTURE_EXPLAINER}
* **Deceleration Recovery**: Peak **+42 kW** represents instantaneous deceleration/downhill harvest envelope, **not** net energy creation during steady cruise.

> ${ENERGY_PHYSICS_NOTE}`;
  } else {
    const selectedGoals = TECHNICAL_DESIGN_GOALS.filter((g) => citedTopics.includes(g.id));
    const goalsMarkdown = selectedGoals
      .map(
        (g) =>
          `**${g.id}. ${g.title}** [${g.evidenceStatus.toUpperCase()}]\n* *Summary*: ${g.engineeringSummary}\n* *Target / Bench Metric*: \`${g.designGoalMetric}\``
      )
      .join("\n\n");

    answer = `### 📜 BRC STAR Technical Summary (TRL 3/4)

**Entity**: ${PATENT_METADATA.applicant} • CIN: \`${PATENT_METADATA.cin}\` • GSTIN: \`${PATENT_METADATA.gstin}\`  
**Patent Status**: ${PATENT_STATEMENT}  
**Note on Claims**: Because the application is **in confidential pre-disclosure status**, verbatim legal claims are not displayed publicly and are accessible only under bilateral NDA.

---

${goalsMarkdown}

---

*${STANDARD_CLAIM_DISCLAIMER}*`;
  }

  return {
    answer,
    citedClaims: citedTopics,
    confidence: 0.96,
    technicalMetrics: metrics,
    links: [
      { label: "View IP & Filing Summary", url: "/technology/patent-ip" },
      { label: "Inspect Evidence & Status Ledger", url: "/evidence" },
      { label: "Request NDA Data Room", url: "/invest/pitch-deck" },
    ],
  };
}
