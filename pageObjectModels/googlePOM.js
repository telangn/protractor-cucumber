var google = function() {

	this.searchBar = "input[name='q']";
	this.searchBtn = "div > div.FPdoLc.VlcLAe > center > input[type='submit']:nth-child(1)";
	this.luckySearchBtn = "div > div.UUbT9 > div.aajZCb > div > center > input[type='submit']:nth-child(2)";

	this.enterFieldValue = function(value) {
		$(this.searchBar).click();
		$(this.searchBar).clear();
		$(this.searchBar).sendKeys(value);
		$('body').sendKeys(protractor.Key.ESCAPE);
	};

	this.regularSearch = function() {
		$(this.searchBtn).click();
	};

	this.luckySearch = function() {
		$(this.luckySearchBtn).click();
	};

	this.executeGoogleSearch = function(value) {
		this.enterFieldValue(value);
		this.regularSearch();
	};

	this.executeLuckySearch = function(value) {
		this.enterFieldValue(value);
		this.luckySearch();
	};
};
module.exports = new google();