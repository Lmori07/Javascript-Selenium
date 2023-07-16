/*Here we requiring the module of selenium webdriver in order to open our browser correctly.*/
const { By, Key, Builder } = require("selenium-webdriver");
/*Here is where the cromedriver is located and that's why we are requiring it on the execution.*/
require("chromedriver")
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RatingPage {

openBrowser(){
    /*We create oru variable let in order to create our driver builder variable that will build and execute the chrome browser.*/
    let driver = await new Builder().forBrowser("chrome").build();

}


}

export default new RatingPage();