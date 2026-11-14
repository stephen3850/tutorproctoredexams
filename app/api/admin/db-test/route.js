import { NextResponse } from 'next/server';
import { testDbConnection } from '@/lib/db';
import { verifySession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    // Secure Session Authorization Check
    const session = verifySession();
    if (!session.authenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Administrator session required' },
        { status: 401 }
      );
    }

    const testResult = await testDbConnection();
    return NextResponse.json({
      success: testResult.success,
      data: testResult,
    });
  } catch (error) {
    console.error('[DB Test Endpoint Error]:', error.message || error);
    return NextResponse.json(
      { success: false, error: 'Failed to run database diagnostic' },
      { status: 500 }
    );
  }
}
