/**
 * Retry helper to avoid flaky assertions without hardcoded waits.
 * Prefer Playwright's built-in auto-waiting and toPass/expect.poll where possible.
 */
async function retry(fn, options = {}) {
  const { maxAttempts = 3, delayMs = 500 } = options;
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt < maxAttempts) {
        await new Promise((r) => setTimeout(r, delayMs));
      }
    }
  }
  throw lastError;
}

module.exports = { retry };
