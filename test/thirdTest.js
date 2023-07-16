const { Builder, Key, By } = require('selenium-webdriver');
const Assert = require('assert');
const { describe, it } = require('mocha');
var should = require('chai').should();


//Describe block that is been used inn Mocha framework, this represent suite or
//E2E module of the application we are testing.
describe('Testing Todo app from lambdatest', () => {
    //It block that is also used in Mocha framework, this represent individual
    //test script.

    it('Add an element into TODO app and using node assertion', async () => {
        //First step is to open the browser.
        let driver = await new Builder().forBrowser('chrome').build()

        //Second step is to navigate to the URL we are performing the test.
        await driver.get('https://lambdatest.github.io/sample-todo-app/')

        //Third step is to actually do the test.
        await driver.findElement(By.id('sampletodotext')).sendKeys('sixth element')
        await driver.findElement(By.id('addbutton')).click()

        //Fifth step is to assert the data that we just put into the todo app.
        let lastElement = await driver.findElement(By.xpath('//li[last()]')).getText().then((value) => {
            return value
        })
        //Assertion comming from assertion package of nodo.js.
        Assert.strictEqual(lastElement, 'sixth element')

        //Fourth step is to close the browser.
        await driver.quit()
    })

    it('Add an element into TODO app and using chai assertion', async () => {
        //First step is to open the browser.
        let driver = await new Builder().forBrowser('chrome').build()

        //Second step is to navigate to the URL we are performing the test.
        await driver.get('https://lambdatest.github.io/sample-todo-app/')

        //Third step is to actually do the test.
        await driver.findElement(By.id('sampletodotext')).sendKeys('sixth element')
        await driver.findElement(By.id('addbutton')).click()

        //Fifth step is to assert the data that we just put into the todo app.
        let lastElement = await driver.findElement(By.xpath('//li[last()]')).getText().then((value) => {
            return value
        })
        //Assertion coming from chai module.
        lastElement.should.equal('sixth element')

        //Fourth step is to close the browser.
        await driver.quit()
    })
})










