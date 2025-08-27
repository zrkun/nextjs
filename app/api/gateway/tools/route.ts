import { NextResponse } from 'next/server';

export const revalidate = 300; // seconds

export async function GET() {
  return NextResponse.json([], { status: 200 });
}


