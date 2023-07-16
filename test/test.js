/*Here we requiring the module of selenium webdriver in order to open our browser correctly.*/
const { By, Key, Builder } = require("selenium-webdriver");
/*Here is where the cromedriver is located and that's why we are requiring it on the execution.*/
require("chromedriver")

/*We are creating a function called test_case that will contain our test scenario.*/
async function test_case(){
    /*We create oru variable let in order to create our driver builder variable that will build and execute the chrome browser.*/
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://google.com");

    await driver.findElement(By.name("q")).sendKeys("Hello, World", Key.ENTER);

    setInterval(function(){
        driver.quit();
    }, 5000);
}

test_case();