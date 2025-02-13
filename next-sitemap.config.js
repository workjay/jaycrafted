/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "http://localhost:3000",
  generateRobotsTxt: true, // Automatically generates robots.txt
  generateIndexSitemap: false,
  sitemapSize: 5000, // Number of URLs per sitemap file
};
