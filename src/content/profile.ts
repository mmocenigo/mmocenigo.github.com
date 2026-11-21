/**
 * All of the site's copy lives here so content edits never require touching
 * component code. Components render whatever this object describes.
 */
export interface Profile {
  name: string;
  title: string;
  interests: readonly string[];
  bio: readonly string[];
  /** Displayed verbatim; deliberately obfuscated to deter address scrapers. */
  emailDisplay: string;
  linkedInUrl: string;
}

export const profile: Profile = {
  name: 'Marissa Mocenigo',
  title: 'Software Engineering Manager',
  interests: ['Good Food Enthusiast', 'Dedicated Cat Parent', 'Hobby Crafter'],
  bio: [
    'Marissa has 15+ years of experience in software engineering, with experience across robotics, IoT, fintech, and beyond.',
    'She has a proven track record in engineering leadership, spanning roles from Head of Software in a small startup to leading a department of 40+ direct and indirect reports. Most recently, she has returned to an engineering manager role to pursue her passion working with small teams and coaching engineers in their career growth and development.',
  ],
  emailDisplay: 'marissa (at) mocenigo (dot) me',
  linkedInUrl: 'https://www.linkedin.com/in/mmocenigo/',
};

/** Joins interests the way the copy reads: "A, B, and C". */
export function formatInterests(interests: readonly string[]): string {
  if (interests.length <= 2) return interests.join(' and ');
  return `${interests.slice(0, -1).join(', ')}, and ${interests.at(-1)}`;
}
