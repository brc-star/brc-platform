import { NextResponse } from "next/server";

export async function GET() {
  const timestamp = new Date().toISOString();
  const time = Date.now();

  const telemetry = {
    vin: "BRC-2026-ST-0042",
    vehicleModel: "StarCraft GT Track Mule 02",
    isOnline: true,
    firmware: "BRC-OS-1.0.4-LTS",
    speedKmh: +(94 + Math.sin(time / 2000) * 12).toFixed(1),
    motorRpm: Math.round(6800 + Math.sin(time / 2000) * 800),
    packAVoltage: +(402 + (Math.random() - 0.5) * 2).toFixed(1),
    packBVoltage: +(398 + (Math.random() - 0.5) * 2).toFixed(1),
    packASoc: 81.4,
    packBSoc: 73.2,
    regenKw: +(36.5 + Math.cos(time / 1500) * 8).toFixed(1),
    acmEfficiencyPct: 98.4,
    motorTempC: 48.5,
    inverterTempC: 42.1,
    batteryCellMaxTempC: 32.8,
    timestamp,
  };

  return NextResponse.json({
    success: true,
    stream: "CAN_BUS_HIGH_SPEED_V1",
    data: telemetry,
  });
}
