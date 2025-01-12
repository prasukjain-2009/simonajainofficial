import { writeFileSync } from "fs";
import { resolve } from "path";

const domain = "https://yourwebsite.com";

const pages = [
  "",
  "/portfolio",
  "/portfolio/bridal",
  "/portfolio/fashion",
  "/portfolio/commercial",
  "/portfolio/personal-styling",
  "/contact",
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
    <url>
      <loc>${domain}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === "" ? "1.0" : "0.8"}</priority>
    </url>`;
    })
    .join("")}
</urlset>`;

writeFileSync(resolve(process.cwd(), "public/sitemap.xml"), sitemap);
