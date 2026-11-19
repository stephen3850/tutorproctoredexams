import { NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';
import { verifySession } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    // 1. Session verification or Secret Token verification
    const session = verifySession();
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');
    const isValidSecret = secret && secret === process.env.REVALIDATION_SECRET;

    if (!session.authenticated && !isValidSecret) {
      return NextResponse.json({ success: false, error: 'Unauthorized revalidation request' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const { path, tag, routes } = body;

    // Revalidate single path
    if (path) {
      revalidatePath(path);
    }

    // Revalidate cache tag
    if (tag) {
      revalidateTag(tag);
    }

    // Revalidate array of routes
    if (Array.isArray(routes)) {
      routes.forEach((r) => {
        if (typeof r === 'string') {
          revalidatePath(r);
        }
      });
    }

    // Revalidate root layout and main hubs by default
    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath('/blog');
    revalidatePath('/certifications');
    revalidatePath('/exam-platforms');
    revalidatePath('/study-resources');

    return NextResponse.json({
      success: true,
      message: 'Next.js cache revalidated successfully for requested routes',
      revalidatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[Revalidation API Error]:', error.message || error);
    return NextResponse.json(
      { success: false, error: 'Cache revalidation failed' },
      { status: 500 }
    );
  }
}
