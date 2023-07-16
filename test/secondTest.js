const {Builder, By} = require('selenium-webdriver')
const Assert = require('assert')

async function secondTest(){
    //First step is to open the browser, we setup the browser we are going to be using
    //for this testing and build it.
    let driver = await new Builder().forBrowser("chrome").build()
    
    //Second step is to navigate to the URL we are performing the test, in this case
    //using the method get we are passing the url we want to navigate into.
    await driver.get("https://rahulshettyacademy.com/angularpractice/")

    //Third step is to actually do the test.
    await driver.findElement(By.name('name')).sendKeys('Jose Osvaldo Morillo Villar')
    await driver.findElement(By.name('email')).sendKeys('test1@prueba.com')
    await driver.findElement(By.id('exampleInputPassword1')).sendKeys('Prueba@1234.')
 
    //Fourth step is to close the browser.
    await driver.quit()
}

//VERY IMPORTANT IN ORDER TO CALL THIS FUNCTION IT NEEDS TO BE DONE AT THE END OF
//FILE, IF THE FUNCTION IS NOT CALL NOTHING WILL HAPPEND.
secondTest()