import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/app/", "/investor-portal/", "/partner/", "/operations/", "/dashboard/"],
    },
    sitemap: "https://brcstar.in/sitemap.xml",
  };
}
