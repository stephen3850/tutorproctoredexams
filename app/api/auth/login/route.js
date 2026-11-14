import { NextResponse } from 'next/server';
import { verifyPassword, createSessionCookie } from '@/lib/auth';
import { checkLoginRateLimit, recordFailedLogin, resetLoginRateLimit } from '@/lib/rateLimit';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request) {
  try {
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || '127.0.0.1';

    // Rate Limiting Check
    const rateCheck = checkLoginRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        { success: false, error: rateCheck.error },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, error: 'Password is required' },
        { status: 400 }
      );
    }

    const isValid = verifyPassword(password);
    if (isValid) {
      resetLoginRateLimit(clientIp);
      createSessionCookie();
      return NextResponse.json({
        success: true,
        message: 'Administrator authentication successful',
      });
    } else {
      recordFailedLogin(clientIp);
      return NextResponse.json(
        { success: false, error: 'Invalid administrator credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('[Auth Login Error]:', error.message || error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
