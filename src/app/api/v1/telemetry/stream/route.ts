import { NextRequest } from "next/server";
import { generateLiveTelemetry } from "@/lib/telemetry";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const vin = searchParams.get("vin") || "BRC-2026-ST-0042";
  const requestedHz = parseInt(searchParams.get("hz") || "2", 10);
  const rateHz = Math.min(10, Math.max(1, isNaN(requestedHz) ? 2 : requestedHz));
  const intervalMs = Math.round(1000 / rateHz);

  let sequence = 1;
  let intervalId: NodeJS.Timeout | null = null;
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      // Send handshake packet
      const initData = JSON.stringify({
        event: "CONNECTED",
        vin,
        rateHz,
        protocol: "BRC-CAN-J1939-OVER-SSE-V1",
        connectedAt: new Date().toISOString(),
      });
      controller.enqueue(encoder.encode(`event: ready\ndata: ${initData}\n\n`));

      intervalId = setInterval(() => {
        try {
          const packet = generateLiveTelemetry(vin, sequence++);
          controller.enqueue(
            encoder.encode(`event: telemetry\ndata: ${JSON.stringify(packet)}\n\n`)
          );
        } catch {
          if (intervalId) clearInterval(intervalId);
          try {
            controller.close();
          } catch {
            // Already closed
          }
        }
      }, intervalMs);
    },
    cancel() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
