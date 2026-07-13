import { chromium } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://localhost:5173'

const OUT = process.env.OUT_DIR ?? new URL('./artifacts', import.meta.url).pathname
const viewports = [
  { w: 390, h: 844 },
  { w: 393, h: 852 },
  { w: 430, h: 932 },
]

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
for (const { w, h } of viewports) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 2 })
  await page.goto(BASE, { waitUntil: 'networkidle' })
  await page.waitForTimeout(800)
  await page.screenshot({ path: `${OUT}/full-${w}x${h}.png`, fullPage: true })
  await page.screenshot({ path: `${OUT}/fold-${w}x${h}.png` })
  await page.close()
}
await browser.close()
console.log('done')
