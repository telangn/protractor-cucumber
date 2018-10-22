const Globals = require('../utilities/Globals');
const { Given, When, Then } = require('cucumber');

// Chai
const globals = new Globals();
const expect = globals.expect;


Given('I am on google page with title {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.equal(title);
});

When('I perform a search with text {string}', function (text) {
    var google = require('../pageObjectModels/googlePOM');
    return google.executeGoogleSearch(text);
});

Then('element with locator {string} is displayed', function (locator) {
    var element = $(locator);
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(element), 5000);
    
    return expect($(locator).isDisplayed()).to.eventually.equal(true);
});