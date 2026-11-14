import { NextResponse } from 'next/server';
import { testDbConnection } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const password = searchParams.get('password');

    // Secure Admin Password Verification
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin12345';
    if (password !== adminPassword) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid administrator credentials' },
        { status: 401 }
      );
    }

    const testResult = await testDbConnection();
    return NextResponse.json({
      success: testResult.success,
      data: testResult,
    });
  } catch (error) {
    console.error('[DB Test Endpoint Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to run database diagnostic' },
      { status: 500 }
    );
  }
}
