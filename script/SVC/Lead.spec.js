import { randomTextEN, randomNumber } from '../../Function';
const { test, expect } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
    await page.goto('https://red-cms-dev-kmkm.mudjaicrm.com/login')
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle('MUDJAI')
    await page.locator('(//button[@type="submit"])[1]').click()
})


test('Lead List', async ({ page }) => {
    await page.waitForTimeout(2000)
    await page.locator('(//span[normalize-space()="Lead"])[1]').click({force: true})
    await page.waitForTimeout(2000)
    expect(await page.textContent('(//div[@class="v-card-title"])[1]')).toContain('Lead List')
})

test('Add Lead', async ({ page }) => {
    await page.waitForTimeout(2000)
    await page.locator('(//span[normalize-space()="Lead"])[1]').click({force: true})
    await page.waitForTimeout(2000)
    await page.locator('(//span[normalize-space()="Add Lead"])[1]').click()
    await page.waitForTimeout(2000)
    expect(await page.textContent('(//div[contains(text(),"Lead information")])[1]')).toContain('Lead information')
    await page.getByLabel('Name', { exact: true }).fill(randomTextEN(5))
    await page.waitForTimeout(1000)
    await page.getByLabel('Last Name', { exact: true }).fill(randomTextEN(5))
    await page.waitForTimeout(1000)
    await page.getByLabel('Phone', { exact: true }).fill(randomNumber(10))
    await page.waitForTimeout(1000)
    await page.getByLabel('Email', { exact: true }).fill(randomTextEN(5) + '@gmail.com')
    await page.waitForTimeout(1000)
    await page.getByLabel('Line ID', { exact: true }).fill(randomTextEN(5))
    await page.waitForTimeout(1000)
    await page.locator('(//*[name()="path"][@fill="currentColor"])[36]').click()
    await page.locator('text=Online').click()
    await page.waitForTimeout(2000)
    await page.getByLabel('Channel Name').fill(randomTextEN(5))
    await page.waitForTimeout(1000)
    await page.locator('(//span[normalize-space()="Submit"])[1]').click({force: true})
    await page.waitForTimeout(1000)
    expect(await page.textContent('(//div[@class="v-card-title"])[1]')).toContain('Lead List')
    await page.waitForTimeout(1000)
})

test.only('View Lead', async ({ page }) => {
    await page.waitForTimeout(2000)
    await page.locator('(//span[normalize-space()="Lead"])[1]').click({force: true})
    await page.waitForTimeout(2000)
    await page.locator('(//*[name()="svg"][@role="img"])[36]').first().click()
    await page.waitForTimeout(2000)
    await page.locator('text=View').click()
    await page.waitForTimeout(1000)
    await page.getByText('Contract History').click()
    expect(await page.textContent('(//h6[normalize-space()="Lead information"])[1]')).toContain('Lead information')
    await page.locator('(//span[contains(text(),"Contact History")])[1]]').click()
    expect(await page.textContent('(//span[contains(text(),"Contact History")])[1]')).toContain('Contract History')
    await page.locator('(//span[contains(text(),"Branch")])[1]').click()
    expect(await page.textContent('(//span[contains(text(),"Branch")])[1]')).toContain('Branch')
})