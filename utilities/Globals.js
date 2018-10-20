const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

class Globals {
	constructor() {
		this.expect = chai.expect;
		chai.use(chaiAsPromised);
	}
}

module.exports = Globals;