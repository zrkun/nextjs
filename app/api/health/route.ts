import { NextResponse } from "next/server";
import type { ApiResponse } from "@/lib/api/types";

type HealthData = {
  status: "ok";
  timestamp: string;
};

export async function GET() {
  const payload: ApiResponse<HealthData> = {
    success: true,
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
    },
  };

  return NextResponse.json(payload);
}
