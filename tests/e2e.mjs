import { chromium } from 'playwright'

const BASE = process.env.BASE_URL ?? 'http://localhost:5173'

const OUT = process.env.OUT_DIR ?? new URL('./artifacts', import.meta.url).pathname
const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {})
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 })
const results = []
const ok = (name, cond) => {
  results.push(`${cond ? 'PASS' : 'FAIL'}  ${name}`)
  if (!cond) process.exitCode = 1
}

await page.goto(BASE, { waitUntil: 'networkidle' })

// 1. Section order in the DOM
const order = await page.$$eval('main > section, header, footer', () => [])
const ids = await page.evaluate(() => {
  const labels = []
  document.querySelectorAll('main > section').forEach((s) => {
    labels.push(s.id || s.getAttribute('aria-label') || s.getAttribute('aria-labelledby') || '?')
  })
  return labels
})
ok(
  `section order: ${ids.join(' → ')}`,
  JSON.stringify(ids) ===
    JSON.stringify([
      'top',
      'Key benefits',
      'book',
      'fleet',
      'why',
      'how',
      'testimonial-title',
      'trust-title',
      'whatsapp-title',
    ]),
)

// 2. Hamburger menu toggles and is keyboard-operable
const burger = page.getByRole('button', { name: 'Open menu' })
await burger.focus()
await page.keyboard.press('Enter')
ok('menu opens via keyboard', await page.locator('#mobile-menu').isVisible())
await page.screenshot({ path: `${OUT}/menu-open.png` })
const fleetLink = page.locator('#mobile-menu a', { hasText: 'Fleet' })
ok('menu contains nav links', (await fleetLink.count()) === 1)
await page.getByRole('button', { name: 'Close menu' }).click()
ok('menu closes', !(await page.locator('#mobile-menu').isVisible()))

// 3. Empty submit shows all four validation errors
await page.locator('#book button[type=submit]').click()
await page.waitForTimeout(200)
const alerts = await page.locator('#book [role=alert]').allTextContents()
ok(`empty submit → 4 errors (${alerts.length})`, alerts.length === 4)

// 4. Return-before-pickup is rejected
await page.fill('#pickup-date', '2026-08-10')
await page.fill('#return-date', '2026-08-05')
await page.locator('#book button[type=submit]').click()
const dateErr = await page.locator('#return-date-error').textContent()
ok('return-before-pickup rejected', /on or after/.test(dateErr ?? ''))

// 5. Bad phone rejected
await page.fill('#return-date', '2026-08-12')
await page.selectOption('#preferred-car', 'mustang-gt')
await page.fill('#whatsapp-number', 'abc')
await page.locator('#book button[type=submit]').click()
const phoneErr = await page.locator('#whatsapp-number-error').textContent()
ok('invalid phone rejected', /valid phone/.test(phoneErr ?? ''))

// 6. Valid submit → confirmation + WhatsApp popup with prefilled enquiry
await page.fill('#whatsapp-number', '+971501234567')
await page.evaluate(() => {
  window.__openedUrl = null
  const orig = window.open
  window.open = (url, ...rest) => {
    window.__openedUrl = String(url)
    return null // don't actually navigate (external hosts are proxy-blocked here)
  }
})
await page.locator('#book button[type=submit]').click()
await page.waitForTimeout(200)
const popupUrl = await page.evaluate(() => window.__openedUrl ?? '')
ok(
  `valid submit opens wa.me enquiry (${popupUrl.slice(0, 60)}…)`,
  popupUrl.startsWith('https://wa.me/971564477471?text=') &&
    decodeURIComponent(popupUrl).includes('Ford Mustang GT') &&
    decodeURIComponent(popupUrl).includes('2026-08-10'),
)
ok('confirmation message shown', await page.locator('#book [role=status]').isVisible())
await page.locator('#book').screenshot({ path: `${OUT}/form-confirmed.png` })

// 7. Key CTAs point at WhatsApp number
const hrefs = await page.$$eval('a[href^="https://wa.me/971564477471"]', (as) => as.length)
ok(`WhatsApp CTAs present (${hrefs})`, hrefs >= 6)

// 8. Tab order reaches header CTA and hamburger
await page.reload({ waitUntil: 'networkidle' })
await page.keyboard.press('Tab') // logo link
await page.keyboard.press('Tab') // BOOK A CAR
const focused = await page.evaluate(() => document.activeElement?.textContent?.trim())
ok(`keyboard reaches header CTA (focused: ${focused})`, focused === 'BOOK A CAR')

// 9. Landmarks + heading structure
const h1s = await page.locator('h1').count()
ok('exactly one h1', h1s === 1)
const labels = await page.locator('#book label').allTextContents()
ok(
  `form labels present: ${labels.join(', ')}`,
  ['Pickup date', 'Return date', 'Preferred car', 'WhatsApp number'].every((l) => labels.includes(l)),
)

// 10. Desktop sanity screenshot
const desktop = await browser.newPage({ viewport: { width: 1280, height: 900 } })
await desktop.goto(BASE, { waitUntil: 'networkidle' })
await desktop.screenshot({ path: `${OUT}/desktop-1280.png`, fullPage: true })
await desktop.close()

console.log(results.join('\n'))
await browser.close()
