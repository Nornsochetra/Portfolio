import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Single-page portfolio: the in-page sections are hash anchors, which search
 * engines resolve from the one document, so only the root URL belongs here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
