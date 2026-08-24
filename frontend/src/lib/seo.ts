import {
  EDUCATION,
  EXPERIENCE,
  PORTFOLIO_CONFIG,
  SKILLS,
} from "@/data/portfolio";

/**
 * Canonical origin of the deployed site, used for metadataBase, the sitemap,
 * robots.txt and the absolute URLs inside the JSON-LD graph. Override per
 * environment with NEXT_PUBLIC_SITE_URL (e.g. a preview deployment).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://nornsochetra.vercel.app"
).replace(/\/$/, "");

/** Full sentence used verbatim as the meta description and og:description. */
export const SITE_DESCRIPTION = `${PORTFOLIO_CONFIG.role} based in ${PORTFOLIO_CONFIG.location}. ${PORTFOLIO_CONFIG.tagline} — from React/Next.js interfaces to Spring Boot backends.`;

/**
 * schema.org graph describing the person and the site itself. Search engines
 * use this to associate the name, role, employer, schools and social profiles
 * with one entity rather than inferring it from prose.
 */
export function buildJsonLd() {
  const personId = `${SITE_URL}/#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: PORTFOLIO_CONFIG.name,
        jobTitle: PORTFOLIO_CONFIG.role,
        description: SITE_DESCRIPTION,
        email: `mailto:${PORTFOLIO_CONFIG.email}`,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressCountry: "KH",
        },
        sameAs: PORTFOLIO_CONFIG.socials.map((s) => s.href),
        knowsAbout: SKILLS.map((s) => s.name),
        worksFor: EXPERIENCE.map((job) => ({
          "@type": "Organization",
          name: job.company,
        })),
        // Two KSHRD courses share one school, so dedupe before emitting.
        alumniOf: [...new Set(EDUCATION.map((entry) => entry.school))].map(
          (school) => ({
            "@type": "EducationalOrganization",
            name: school,
          }),
        ),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${PORTFOLIO_CONFIG.name} — Portfolio`,
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
    ],
  };
}
