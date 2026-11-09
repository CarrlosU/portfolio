import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carlosurrego.onrender.com";
  const slugs = ["dimeloia", "jumpproxy-engine", "captcha-bypass", "jetx-collector"];
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/es/`, lastModified: new Date() },
    { url: `${base}/en/`, lastModified: new Date() },
  ];
  for (const locale of ["es", "en"]) {
    for (const slug of slugs) {
      routes.push({ url: `${base}/${locale}/projects/${slug}/`, lastModified: new Date() });
    }
  }
  return routes;
}
