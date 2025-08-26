import { NextResponse } from 'next/server';
import { navigaitonList } from '@/api/modules/botChat';

export const revalidate = 300; // seconds

export async function GET() {
  try {
    const list = await navigaitonList();
    return NextResponse.json(list, { status: 200 });
  } catch (_e) {
    console.error(_e);
    return NextResponse.json({ message: 'failed to load tools' }, { status: 500 });
  }
}


