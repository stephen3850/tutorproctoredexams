import 'server-only';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import crypto from 'crypto';

const SESSION_COOKIE_NAME = 'cms_session';
const SESSION_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 Hours

function getSessionSecret() {
  return process.env.SESSION_SECRET || 'fallback_session_secret_change_in_production_hostinger_env';
}

/**
 * Signs payload data with HMAC SHA256 using SESSION_SECRET
 */
function signToken(payloadStr) {
  const secret = getSessionSecret();
  const signature = crypto.createHmac('sha256', secret).update(payloadStr).digest('hex');
  return `${Buffer.from(payloadStr).toString('base64url')}.${signature}`;
}

/**
 * Verifies HMAC SHA256 token and returns decoded payload if valid and not expired
 */
function decodeAndVerifyToken(tokenStr) {
  if (!tokenStr || typeof tokenStr !== 'string') return null;

  const parts = tokenStr.split('.');
  if (parts.length !== 2) return null;

  const [base64Payload, signature] = parts;
  try {
    const payloadStr = Buffer.from(base64Payload, 'base64url').toString('utf8');
    const secret = getSessionSecret();
    const expectedSignature = crypto.createHmac('sha256', secret).update(payloadStr).digest('hex');

    if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
      return null;
    }

    const payload = JSON.parse(payloadStr);
    if (!payload.exp || Date.now() > payload.exp) {
      return null; // Token expired
    }

    return payload;
  } catch (err) {
    return null;
  }
}

/**
 * Verifies submitted password against ADMIN_PASSWORD_HASH using bcrypt
 */
export function verifyPassword(inputPassword) {
  if (!inputPassword || typeof inputPassword !== 'string') return false;

  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  if (passwordHash) {
    try {
      return bcrypt.compareSync(inputPassword, passwordHash);
    } catch (err) {
      console.error('[Auth Error]: Bcrypt comparison failed:', err.message);
      return false;
    }
  }

  // Fallback to ADMIN_PASSWORD environment variable if ADMIN_PASSWORD_HASH is not configured
  const plainAdminPass = process.env.ADMIN_PASSWORD;
  if (plainAdminPass) {
    return inputPassword === plainAdminPass;
  }

  return false;
}

/**
 * Creates and sets an HttpOnly, Secure, SameSite session cookie
 */
export function createSessionCookie() {
  const payloadStr = JSON.stringify({
    role: 'admin',
    exp: Date.now() + SESSION_EXPIRY_MS,
  });

  const token = signToken(payloadStr);
  const isProd = process.env.NODE_ENV === 'production';

  cookies().set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: 'lax',
    path: '/',
    maxAge: 86400, // 24 Hours
  });

  return token;
}

/**
 * Verifies active session from HttpOnly cookie
 */
export function verifySession() {
  try {
    const cookieStore = cookies();
    const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
    if (!sessionCookie || !sessionCookie.value) {
      return { authenticated: false };
    }

    const payload = decodeAndVerifyToken(sessionCookie.value);
    if (!payload || payload.role !== 'admin') {
      return { authenticated: false };
    }

    return { authenticated: true, role: 'admin' };
  } catch (err) {
    return { authenticated: false };
  }
}

/**
 * Destroys the active HttpOnly session cookie
 */
export function destroySessionCookie() {
  try {
    cookies().delete(SESSION_COOKIE_NAME);
  } catch (err) {
    // Ignore error
  }
}
