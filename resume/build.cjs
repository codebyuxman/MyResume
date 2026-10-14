// Renders resume/resume.html to the downloadable CV and its page-1 preview.
//
//   node resume/build.cjs
//
// Needs Playwright with Chromium (set PLAYWRIGHT_MODULE if it isn't resolvable
// from here) and pdftoppm from poppler-utils.
const path = require("path");
const { execFileSync } = require("child_process");
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || "playwright");

const root = path.resolve(__dirname, "..");
const src = path.join(__dirname, "resume.html");
const pdf = path.join(root, "assets", "Usman-Khalid-Resume.pdf");
const preview = path.join(root, "assets", "img", "resume-preview");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("file://" + src, { waitUntil: "load" });
  await page.pdf({ path: pdf, format: "A4", preferCSSPageSize: true, printBackground: true });
  await browser.close();

  // -singlefile writes <prefix>.jpg without a page-number suffix
  execFileSync("pdftoppm", ["-jpeg", "-jpegopt", "quality=84", "-scale-to", "1018", "-f", "1", "-l", "1", "-singlefile", pdf, preview]);
  console.log("Wrote", path.relative(root, pdf), "and", path.relative(root, preview + ".jpg"));
})();
