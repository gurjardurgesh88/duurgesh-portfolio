// generate-sitemap.js
const fs = require("fs");
const path = require("path");

const BASE_URL = "https://iamdurgesh.vercel.app"; // ← change if needed

const pages = [
  "/", // homepage
  "/#about",
  "/#skills",
  "/#projects",
  "/#experience",
  "/#contact",
];

const today = new Date().toISOString().split("T")[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page === "/" ? "1.0" : "0.7"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
console.log("✅ Sitemap generated!");
