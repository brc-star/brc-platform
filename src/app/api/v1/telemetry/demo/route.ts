import { NextResponse } from "next/server";
import { generateLiveTelemetry } from "@/lib/telemetry";

export const dynamic = "force-dynamic";

export async function GET() {
  const telemetry = generateLiveTelemetry("BRC-2026-ST-0042", Math.floor(Date.now() / 1000));

  return NextResponse.json({
    success: true,
    stream: "CAN_BUS_HIGH_SPEED_V1",
    protocol: "ISO 11898-1 / SAE J1939-21",
    data: telemetry,
  });
}
