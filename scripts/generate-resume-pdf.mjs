import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync, mkdirSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, '../public/resume.html');

// Output to dist/ in CI, public/ locally (so git tracks it)
const distDir = resolve(__dirname, '../dist');
if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true });
const pdfPath = resolve(__dirname, '../dist/resume.pdf');
const publicPdfPath = resolve(__dirname, '../public/resume.pdf');

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
const pdfBuffer = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: { top: '0', bottom: '0', left: '0', right: '0' },
});
await browser.close();

import { writeFileSync } from 'fs';
writeFileSync(pdfPath, pdfBuffer);
writeFileSync(publicPdfPath, pdfBuffer);
console.log('resume.pdf generated successfully');
