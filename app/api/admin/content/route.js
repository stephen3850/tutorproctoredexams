import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
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

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const requestedFile = searchParams.get('file') || 'blog.json';
    const safeFile = sanitizeFilename(requestedFile);

    if (!safeFile) {
      return NextResponse.json({ success: false, error: 'Invalid content file requested' }, { status: 400 });
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
    // Server-Side HttpOnly Session Authorization Check
    const session = verifySession();
    if (!session.authenticated) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Administrator session required' },
        { status: 401 }
      );
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

    return NextResponse.json({ success: true, message: 'Content saved successfully to persistent storage' });
  } catch (error) {
    console.error('[Content API Error]:', error.message || error);
    return NextResponse.json({ success: false, error: 'Failed to save content file' }, { status: 500 });
  }
}
