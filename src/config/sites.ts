export interface SiteConfig {
  slug: string;
  domain: string;
  name: string;
  shortName: string;
  description: string;
  dbEnvVar: string;
  smtpUserEnvVar: string;
  smtpPassEnvVar: string;
  smtpFromEnvVar: string;
  r2BucketEnvVar: string;
  r2PublicUrlEnvVar: string;
  nextauthSecretEnvVar: string;
}

const sites: Record<string, SiteConfig> = {
  ijlscl: {
    slug: 'ijlscl',
    domain: 'ijlscl.com',
    name: 'International Journal of Legal Studies and Contemporary Law',
    shortName: 'IJLSCL',
    description: 'Legal Studies and Contemporary Law Research',
    dbEnvVar: 'DATABASE_URL_IJLSCL',
    smtpUserEnvVar: 'SMTP_USER_IJLSCL',
    smtpPassEnvVar: 'SMTP_PASS_IJLSCL',
    smtpFromEnvVar: 'SMTP_FROM_IJLSCL',
    r2BucketEnvVar: 'R2_BUCKET_IJLSCL',
    r2PublicUrlEnvVar: 'R2_PUBLIC_URL_IJLSCL',
    nextauthSecretEnvVar: 'NEXTAUTH_SECRET_IJLSCL',
  },
};

const DEV_SITE_SLUG = 'ijlscl';

export function getSiteConfig(slug: string): SiteConfig | null {
  return sites[slug] ?? null;
}

export function getSiteConfigByDomain(host: string): SiteConfig | null {
  const domain = host.split(':')[0];

  for (const site of Object.values(sites)) {
    if (site.domain === domain) return site;
  }

  if (domain === 'localhost' || domain === '127.0.0.1') {
    return sites[DEV_SITE_SLUG];
  }

  return null;
}

export function getAllSites(): SiteConfig[] {
  return Object.values(sites);
}
