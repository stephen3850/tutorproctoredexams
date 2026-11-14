import { NextResponse } from 'next/server';
import { checkDbConnection } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const health = await checkDbConnection();

    if (health.connected) {
      return NextResponse.json({
        database: 'connected',
        status: 'healthy',
        timestamp: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        {
          database: 'disconnected',
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
        },
        { status: 503 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        database: 'error',
        status: 'error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
