const Globals = require('../utilities/Globals');
const { Given } = require('cucumber');

// Chai
const globals = new Globals();
const expect = globals.expect;


Given('I am on google page with title {string}', function (title) {
    return expect(browser.getTitle()).to.eventually.equal(title);
});