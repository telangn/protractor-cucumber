const Globals = require('../utilities/Globals');
const { Given, When, Then } = require('cucumber');
var wait = require('../utilities/waits');

// Chai
const globals = new Globals();
const expect = globals.expect;


Given('I am on web page with title {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Given('I navigate to page with url {string}', function (string) {
    return browser.get(string);
});

When('I perform a google search with text {string}', function (string) {
    var google = require('../pageObjectModels/googlePOM');
    return google.executeGoogleSearch(string);
});

When('I click on element with locator {string}', function (string) {
    browser.driver.sleep(1000);
    var element = $(string);
    if (wait.waitForElementClickable(element, 5000)) {
        return element.click();
    } else {
        throw new Error("Element was not clickable");
    }
});

When('I scroll to element with locator {string}', function (string) {
    var element = $(string);
    return browser.actions().mouseMove(element).perform();
});

Then('element with locator {string} is displayed', function (locator) {
    var element = $(locator);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element), 5000);
    return expect($(locator).isDisplayed()).to.eventually.equal(true);
});

Then('element with locator {string} has text value of {string}', function (locator, string) {
    var element = $(locator);
    return expect(element.getText()).to.eventually.equal(string);
});