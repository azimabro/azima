/**
 * Detects search engine crawlers and bots from user-agent string.
 * Returns true for known bots so we can skip redirects / tracking.
 */
export function isBot() {
  const ua = (navigator.userAgent || '').toLowerCase();
  return /googlebot|bingbot|baiduspider|yandexbot|duckduckbot|applebot|ahrefsbot|claudebot|claude-searchbot|mediapartners|yisouspider|petalbot|slurp|facebookexternalhit|twitterbot|bytespider/i.test(ua);
}
