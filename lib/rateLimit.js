import 'server-only';

const loginAttempts = new Map();

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

/**
 * Checks if the request IP is allowed to attempt login or is currently rate-limited
 */
export function checkLoginRateLimit(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip);

  if (!record) {
    return { allowed: true };
  }

  // Clear expired lockout
  if (now > record.resetTime) {
    loginAttempts.delete(ip);
    return { allowed: true };
  }

  if (record.count >= MAX_FAILED_ATTEMPTS) {
    const retryAfterSeconds = Math.ceil((record.resetTime - now) / 1000);
    return {
      allowed: false,
      retryAfterSeconds,
      error: `Too many failed login attempts. Please try again in ${Math.ceil(retryAfterSeconds / 60)} minutes.`,
    };
  }

  return { allowed: true };
}

/**
 * Records a failed login attempt for the given IP address
 */
export function recordFailedLogin(ip) {
  const now = Date.now();
  const record = loginAttempts.get(ip) || { count: 0, resetTime: now + LOCKOUT_WINDOW_MS };

  record.count += 1;
  record.resetTime = now + LOCKOUT_WINDOW_MS;
  loginAttempts.set(ip, record);

  return record.count;
}

/**
 * Clears failed login attempts for an IP upon successful authentication
 */
export function resetLoginRateLimit(ip) {
  loginAttempts.delete(ip);
}
