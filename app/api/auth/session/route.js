import { NextResponse } from 'next/server';
import { verifySession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const session = verifySession();
    return NextResponse.json({
      authenticated: session.authenticated,
    });
  } catch (error) {
    return NextResponse.json({
      authenticated: false,
    });
  }
}
