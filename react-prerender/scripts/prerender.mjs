// @ts-check
import { spawn } from "node:child_process";
import fs from "node:fs";
import puppeteer from "puppeteer";

const URL = "http://localhost:4173";

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

const vite = spawn("pnpm", ["preview"]);

// wait for vite to start
const timer = setTimeout(() => {
  throw Error("timeout");
}, 10000);
// eslint-disable-next-line no-constant-condition
while (true) {
  const res = await fetch(URL).catch(() => ({ ok: false }));
  if (res.ok) {
    clearTimeout(timer);
    break;
  }
}

await page.goto(URL);
await page.waitForNetworkIdle();
const html = await page.content();
fs.writeFileSync("dist/index.html", html);
console.log("🚀 Prerendered!!");

await browser.close();
vite.kill();
