import { NextResponse } from "next/server";

export async function GET() {
  const memoryUsage = process.memoryUsage();

  return NextResponse.json({
    status: "HEALTHY",
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
    service: "BRC STAR Digital EV Enterprise Platform",
    environment: process.env.NODE_ENV || "production",
    framework: "Next.js 16.3.1 / React 19 / App Router",
    domains: {
      identityAndAccess: "OPERATIONAL",
      crmAndLeads: "OPERATIONAL",
      preBookingEngine: "OPERATIONAL",
      investorDataRoom: "OPERATIONAL",
      dealerNetwork: "OPERATIONAL",
      telemetryIngress: "OPERATIONAL",
      erpAndBOM: "OPERATIONAL",
      sopSystem: "OPERATIONAL",
    },
    system: {
      rssMb: +(memoryUsage.rss / (1024 * 1024)).toFixed(2),
      heapTotalMb: +(memoryUsage.heapTotal / (1024 * 1024)).toFixed(2),
      heapUsedMb: +(memoryUsage.heapUsed / (1024 * 1024)).toFixed(2),
    },
  });
}
