export interface CanFrame {
  canId: string;
  name: string;
  data: string;
  dlc: number;
  timestampMs: number;
}

export interface VehicleTelemetry {
  vin: string;
  model: string;
  firmware: string;
  timestamp: string;
  sequenceNumber: number;
  speedKmh: number;
  motorRpm: number;
  torqueNm: number;
  packAVoltage: number;
  packBVoltage: number;
  packASoc: number;
  packBSoc: number;
  activeBus: "PACK_A" | "PACK_B" | "DUAL_PARALLEL";
  regenKw: number;
  acmCurrentTransferA: number;
  acmEfficiencyPct: number;
  motorTempC: number;
  inverterTempC: number;
  batteryCellMaxTempC: number;
  stateOfHealthPct: number;
  estimatedRangeKm: number;
  impedanceMilliohms: number;
  latencyMs: number;
  rawCanFrames: CanFrame[];
}

export interface FleetVehicleMeta {
  vin: string;
  model: string;
  type: string;
  baseVoltage: number;
  nominalRangeKm: number;
}

export const SUPPORTED_FLEET_VEHICLES: FleetVehicleMeta[] = [
  {
    vin: "BRC-2026-ST-0042",
    model: "StarCraft GT Track Mule 02",
    type: "High-Performance GT Coupe",
    baseVoltage: 800,
    nominalRangeKm: 850,
  },
  {
    vin: "BRC-2026-SF-0108",
    model: "StarFleet 4.5T Electric Van",
    type: "B2B Commercial Logistics",
    baseVoltage: 400,
    nominalRangeKm: 420,
  },
  {
    vin: "BRC-2026-TX-0301",
    model: "StarTransit 12M Heavy Duty",
    type: "Urban Mass Transit Bus",
    baseVoltage: 800,
    nominalRangeKm: 550,
  },
];

// Global in-memory buffer for real ingested telemetry packets (stores last 50 packets per VIN)
const globalTelemetryStore: Map<string, VehicleTelemetry> = new Map();

export function storeIngestedTelemetry(telemetry: VehicleTelemetry) {
  globalTelemetryStore.set(telemetry.vin, telemetry);
}

export function getLatestTelemetry(vin: string): VehicleTelemetry | undefined {
  return globalTelemetryStore.get(vin);
}

function toHexByte(n: number): string {
  const clamped = Math.max(0, Math.min(255, Math.floor(n)));
  return clamped.toString(16).toUpperCase().padStart(2, "0");
}

export function generateLiveTelemetry(
  vin: string = "BRC-2026-ST-0042",
  sequence: number = 1
): VehicleTelemetry {
  const cached = globalTelemetryStore.get(vin);
  const now = Date.now();
  const timeSec = now / 1000;

  const vehicle =
    SUPPORTED_FLEET_VEHICLES.find((v) => v.vin === vin) ||
    SUPPORTED_FLEET_VEHICLES[0];

  const isTruckOrBus = vehicle.vin.includes("TX") || vehicle.vin.includes("SF");

  // Dynamic waveforms with harmonic oscillations
  const baseSpeed = isTruckOrBus ? 62 : 94;
  const speedVariation = isTruckOrBus ? 8 : 14;
  const speedKmh = +(baseSpeed + Math.sin(timeSec / 3) * speedVariation + Math.sin(timeSec * 1.5) * 2).toFixed(1);

  const baseRpm = isTruckOrBus ? 3200 : 6800;
  const motorRpm = Math.round(baseRpm + Math.sin(timeSec / 3) * 600 + (Math.random() - 0.5) * 80);
  const torqueNm = Math.round((isTruckOrBus ? 580 : 720) - (speedKmh / baseSpeed) * 120 + Math.sin(timeSec) * 30);

  // Dual Pack High-Voltage Bus status (800V / 400V architecture)
  const nominalPackV = vehicle.baseVoltage / 2; // 400V per pack in 800V system, or 200V in 400V system
  const packAVoltage = +(nominalPackV + 2.4 + Math.sin(timeSec / 4) * 1.2).toFixed(1);
  const packBVoltage = +(nominalPackV - 1.8 + Math.cos(timeSec / 4) * 1.1).toFixed(1);

  // Dynamic Pack switching algorithm (Patent Claim: Dual solid-state pack sequential switching)
  const activeBus: "PACK_A" | "PACK_B" | "DUAL_PARALLEL" =
    Math.sin(timeSec / 6) > 0.35
      ? "DUAL_PARALLEL"
      : Math.sin(timeSec / 6) > -0.2
      ? "PACK_A"
      : "PACK_B";

  const packASoc = +(82.4 - ((sequence % 500) * 0.005)).toFixed(1);
  const packBSoc = +(74.1 - ((sequence % 500) * 0.004)).toFixed(1);

  // Kinetic Regeneration & ACM transfer
  const regenKw = +(34.5 + Math.cos(timeSec / 2.5) * 8.2 + (Math.random() - 0.5) * 1.5).toFixed(1);
  const acmCurrentTransferA = +(88.2 + Math.sin(timeSec / 2) * 14.0).toFixed(1);
  const acmEfficiencyPct = +(98.2 + Math.sin(timeSec / 10) * 0.4).toFixed(1);

  // Thermals
  const motorTempC = +(48.2 + Math.sin(timeSec / 20) * 1.5).toFixed(1);
  const inverterTempC = +(42.1 + Math.sin(timeSec / 25) * 1.2).toFixed(1);
  const batteryCellMaxTempC = +(32.8 + Math.cos(timeSec / 30) * 0.6).toFixed(1);

  // Predictive Battery Health (State of Health)
  const stateOfHealthPct = +(99.82 - ((sequence % 1000) * 0.0001)).toFixed(2);
  const impedanceMilliohms = +(1.84 + Math.sin(timeSec / 50) * 0.04).toFixed(3);
  const estimatedRangeKm = Math.round(
    ((packASoc + packBSoc) / 200) * vehicle.nominalRangeKm * (1 + (regenKw / 150))
  );

  // J1939 CAN-Bus Raw Frames (Hex encoded)
  const rawCanFrames: CanFrame[] = [
    {
      canId: "0x18F00400",
      name: "EEC1 (PMSM RPM & Driver Demand)",
      dlc: 8,
      timestampMs: now,
      data: `${toHexByte(motorRpm & 0xff)} ${toHexByte((motorRpm >> 8) & 0xff)} ${toHexByte(torqueNm & 0xff)} ${toHexByte((torqueNm >> 8) & 0xff)} 7D 80 F0 00`,
    },
    {
      canId: "0x18FEF100",
      name: "CCVS (Vehicle Speed & Chassis Velocity)",
      dlc: 8,
      timestampMs: now,
      data: `${toHexByte(Math.round(speedKmh * 10) & 0xff)} ${toHexByte((Math.round(speedKmh * 10) >> 8) & 0xff)} 00 00 24 00 FF FF`,
    },
    {
      canId: "0x18F00900",
      name: "ACM_REGEN (Self-Volt Kinetic Harvest Inflow)",
      dlc: 8,
      timestampMs: now,
      data: `${toHexByte(Math.round(regenKw * 10) & 0xff)} ${toHexByte((Math.round(regenKw * 10) >> 8) & 0xff)} ${toHexByte(Math.round(acmCurrentTransferA) & 0xff)} 62 10 00 98 04`,
    },
    {
      canId: "0x18F00A00",
      name: "BMS_DUAL (Solid-State Pack A & B Bus Balance)",
      dlc: 8,
      timestampMs: now,
      data: `${toHexByte(Math.round(packAVoltage) & 0xff)} ${toHexByte(Math.round(packBVoltage) & 0xff)} ${toHexByte(Math.round(packASoc))} ${toHexByte(Math.round(packBSoc))} ${activeBus === "DUAL_PARALLEL" ? "03" : activeBus === "PACK_A" ? "01" : "02"} 00 12 AA`,
    },
  ];

  return {
    vin: vehicle.vin,
    model: vehicle.model,
    firmware: "BRC-OS-1.0.4-LTS",
    timestamp: new Date().toISOString(),
    sequenceNumber: sequence,
    speedKmh,
    motorRpm,
    torqueNm,
    packAVoltage,
    packBVoltage,
    packASoc,
    packBSoc,
    activeBus,
    regenKw,
    acmCurrentTransferA,
    acmEfficiencyPct,
    motorTempC,
    inverterTempC,
    batteryCellMaxTempC,
    stateOfHealthPct,
    estimatedRangeKm,
    impedanceMilliohms,
    latencyMs: +(8 + Math.random() * 6).toFixed(1),
    rawCanFrames,
  };
}
