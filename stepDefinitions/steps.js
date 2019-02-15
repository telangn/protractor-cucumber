const Globals = require('../utilities/Globals');
const { Given, When, Then } = require('cucumber');

// Chai
const globals = new Globals();
const expect = globals.expect;


Given('I am on web page with title {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

Given('I navigate to page with url {string}', function (url) {
    return browser.get(url);
});

When('I perform a google search with text {string}', function (string) {
    var google = require('../pageObjectModels/googlePOM');
    return google.executeGoogleSearch(string);
});

When('I click on element with locator {string}', function (locator) {
    var element = $(locator);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element), 3000);
    return element.click();
});

When('I scroll to element with locator {string}', function (locator) {
    var element = $(locator);
    return browser.actions().mouseMove(element).perform();
});

Then('element with locator {string} is displayed', function (locator) {
    var element = $(locator);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(element), 3000);
    return expect($(locator).isDisplayed()).to.eventually.equal(true);
});

Then('element with locator {string} has text value of {string}', function (locator, string) {
    var element = $(locator);
    return expect(element.getText()).to.eventually.equal(string);
});