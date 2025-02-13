export async function GET() {
  const fields = [
    {
      loc: `http://localhost:3000`,
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
  ];

  // Generate sitemap XML response
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${fields
        .map(
          (field) => `
        <url>
          <loc>${field.loc}</loc>
          <lastmod>${field.lastmod}</lastmod>
          <changefreq>${field.changefreq}</changefreq>
          <priority>${field.priority}</priority>
        </url>`
        )
        .join("")}
    </urlset>
  `?.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
