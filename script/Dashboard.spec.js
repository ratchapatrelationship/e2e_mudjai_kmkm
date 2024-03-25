const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://red-cms-dev-kmkm.mudjaicrm.com/login')
    await page.waitForTimeout(3000)
})

test('CRM Dashboard', async ({ page }) => {
    await expect(page).toHaveTitle('MUDJAI')
    await page.locator('(//button[@type="submit"])[1]').click()
    await page.waitForTimeout(2000)
    expect(await page.textContent('(//span[normalize-space()="DASHBOARD"])[1]')).toContain('DASHBOARD')
    await page.locator('(//span[normalize-space()="DASHBOARD"])[1]').click()
    await page.waitForTimeout(2000)
    await page.locator('(//span[normalize-space()="CRM"])[1]').click({force: true})
    await page.waitForTimeout(3000)
    expect(await page.textContent('(//div[contains(text(),"Monthly Sales")])[1]')).toContain('Monthly Sales')
})