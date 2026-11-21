import { describe, expect, it } from 'vitest';
import { formatInterests, profile } from './profile';

describe('formatInterests', () => {
  it('uses an Oxford comma for three or more items', () => {
    expect(formatInterests(['A', 'B', 'C'])).toBe('A, B, and C');
  });

  it('joins two items with "and"', () => {
    expect(formatInterests(['A', 'B'])).toBe('A and B');
  });

  it('returns a single item unchanged and handles empty input', () => {
    expect(formatInterests(['A'])).toBe('A');
    expect(formatInterests([])).toBe('');
  });
});

describe('profile content', () => {
  it('points LinkedIn at an https linkedin.com profile', () => {
    const url = new URL(profile.linkedInUrl);
    expect(url.protocol).toBe('https:');
    expect(url.hostname).toBe('www.linkedin.com');
    expect(url.pathname).toMatch(/^\/in\/[^/]+\/?$/);
  });

  it('keeps the email obfuscated so scrapers cannot harvest it', () => {
    expect(profile.emailDisplay).not.toContain('@');
  });
});
