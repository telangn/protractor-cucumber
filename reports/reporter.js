const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
    theme: 'bootstrap',
    jsonFile: path.resolve(__dirname, './json/cucumber_report.json'),
    output: path.resolve(__dirname, './html/cucumber_report.html'),
    reportSuiteAsScenarios: true,
    launchReport: false,
    screenshotsDirectory: path.resolve(__dirname,'./screenshots/'),
    storeScreenshots: true,
    metadata: {
        "App Version": "0.1.0",
        "Test Environment": "PROD",
        "Browser": "Chrome",
        "Platform": "Ubuntu"
    }
};

class Reporter {
    static createHTMLReport() {
        console.log(options.jsonFile);
        reporter.generate(options);
    };
}

module.exports = Reporter;
