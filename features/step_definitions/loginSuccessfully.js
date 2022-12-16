const {When,Then,Given,Before,After} = require('@cucumber/cucumber');
const {expect} = require('chai');
const {Builder} = require('selenium-webdriver');
const {By, until} = require('selenium-webdriver');

let driver;

Before(() => {
    driver = new Builder()
    .forBrowser('firefox')
    .build();
})

After(() => {
    setTimeout(() => driver.close(), 4000);
})

Given('Access to login page', () => {
    driver.get('http://localhost:8000/admin/login/');
})

When('Insert correct username', () => {
    driver.findElement(By.id('id_username')).sendKeys('admin');
})

When('Insert correct password', {timeout:60*1000}, () => {
    driver.findElement(By.id('id_password')).sendKeys('admin_password');
})

When('Submit form', {timeout:60 * 1000}, () => {
    const el = driver.findElement(By.css("input[type=submit]"));
    driver.executeScript("arguments[0].click();", el);
})

Then('Redirected to admin page', {timeout:60*1000}, () => {
    driver.wait(until.urlIs('http://localhost:8000/admin/'))
        .then((res) => (expect(res).equals(true)));
})
