import { NextResponse } from "next/server";

export function GET(): NextResponse {
  return NextResponse.redirect(process.env.NEXT_PUBLIC_WORKSPACE_URL ?? "");
}