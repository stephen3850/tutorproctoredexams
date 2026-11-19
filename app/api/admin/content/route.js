import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import { verifySession } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const CONTENT_DIR = path.join(process.cwd(), 'content');

// Whitelist of allowed JSON files to prevent path traversal vulnerability
const ALLOWED_CONTENT_FILES = [
  'blog.json',
  'services.json',
  'faqs.json',
  'pages.json',
  'settings.json',
  'inquiries.json',
  'platforms.json',
  'certifications.json',
  'study-resources.json',
  'navigation.json',
  'partnerships.json',
  'theme.json',
];

function sanitizeFilename(requestedFile) {
  const safeName = path.basename(requestedFile || '');
  if (!ALLOWED_CONTENT_FILES.includes(safeName)) {
    return null;
  }
  return safeName;
}

// Map content JSON filenames to public Next.js routes for cache revalidation
function triggerRouteRevalidation(filename) {
  try {
    revalidatePath('/');
    if (filename === 'navigation.json' || filename === 'settings.json' || filename === 'pages.json') {
      revalidatePath('/', 'layout');
      revalidatePath('/about');
      revalidatePath('/services');
      revalidatePath('/exam-platforms');
      revalidatePath('/certifications');
      revalidatePath('/study-resources');
      revalidatePath('/blog');
      revalidatePath('/faq');
      revalidatePath('/contact');
    } else if (filename === 'services.json') {
      revalidatePath('/services');
      revalidatePath('/services/[slug]', 'page');
    } else if (filename === 'blog.json') {
      revalidatePath('/blog');
      revalidatePath('/blog/[slug]', 'page');
    } else if (filename === 'certifications.json') {
      revalidatePath('/certifications');
      revalidatePath('/certifications/[slug]', 'page');
    } else if (filename === 'platforms.json') {
      revalidatePath('/exam-platforms');
      revalidatePath('/exam-platforms/[slug]', 'page');
    } else if (filename === 'study-resources.json') {
      revalidatePath('/study-resources');
      revalidatePath('/study-resources/[slug]', 'page');
    } else if (filename === 'faqs.json') {
      revalidatePath('/faq');
    }
  } catch (err) {
    console.error('[Revalidation Error]:', err.message || err);
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const requestedFile = searchParams.get('file') || 'blog.json';
    const safeFile = sanitizeFilename(requestedFile);

    if (!safeFile) {
      return NextResponse.json({ success: false, error: 'Invalid content file requested' }, { status: 400 });
    }

    // Require authentication only for sensitive inquiries file
    if (safeFile === 'inquiries.json') {
      const session = verifySession();
      if (!session.authenticated) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const filePath = path.join(CONTENT_DIR, safeFile);
    try {
      const fileData = await fs.readFile(filePath, 'utf8');
      const json = JSON.parse(fileData);
      return NextResponse.json({ success: true, data: json });
    } catch (readErr) {
      return NextResponse.json({ success: true, data: {} });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to read content file' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // 1. Server-side session verification MUST happen FIRST before writing request payload or files
    const session = verifySession();
    if (!session.authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { file, data } = body;

    if (!file || !data) {
      return NextResponse.json({ success: false, error: 'Missing file or data payload' }, { status: 400 });
    }

    const safeFile = sanitizeFilename(file);
    if (!safeFile) {
      return NextResponse.json({ success: false, error: 'Directory traversal or unauthorized file path blocked' }, { status: 403 });
    }

    const filePath = path.join(CONTENT_DIR, safeFile);
    await fs.mkdir(CONTENT_DIR, { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

    // Trigger instant cache revalidation for live website routes
    triggerRouteRevalidation(safeFile);

    return NextResponse.json({
      success: true,
      message: 'Content saved and live routes revalidated successfully',
      file: safeFile,
      savedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('[Content API Error]:', error.message || error);
    return NextResponse.json({ success: false, error: 'Failed to save content file' }, { status: 500 });
  }
}
