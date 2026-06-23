import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://taptappun.dev/sitemap.xml",
  };
}

export const dynamic = "force-static";
