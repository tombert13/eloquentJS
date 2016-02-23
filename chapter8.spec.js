var chapter8 = require('./chapter8.js');
var expect = require('chai').expect;

describe('chapter 8', function (){
	it('trying "strict mode"', function (){
		var res = chapter8.canYouSpotTheProblem();
		expect(res).to.be.equal(10);
	}) 
})