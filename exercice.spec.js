var exercice = require('./exercice.js');
var ancestry = require('./ancestry.js');
var parsedAncestry = JSON.parse(ancestry);
var expect = require('chai').expect;

var array = ['1', '2', '3', '4', '5', '6'];
var inversedArray = ['7', '6', '5', '4', '3', '2', '1'];
var array2 = ['1', '2', '3'];
var list = {
	value: '1',
	rest: {
		value: '2',
		rest: {
			value: '3',
			rest: null
		}
	}
};
var list2 = {
	value: '2',
	rest: {
		value: '3',
		rest: null
	}
};
var arrayOfArrays = [['1','2','3','4'],['5','6','7']];


describe('exercice', function () {
	it('should successfully reverse an array', function () {
		var res = exercice.reverseArray(array);
		expect(res).to.be.deep.equal(['6', '5', '4', '3', '2', '1']);
	})
	it('should successfully re-reverse an array', function () {
		var res = exercice.reverseArrayInPlace(inversedArray);
		expect(res).to.be.deep.equal(['1', '2', '3', '4', '5', '6', '7']);
	})
	it('should successfully transform an array into a nested list', function () {
		var res = exercice.arrayToList(array2);
		//console.log(res);
		expect(res).to.be.deep.equal({
			value: '1',
			rest: {
				value: '2',
				rest: {
					value: '3',
					rest: null
				}
			}
		})
	})
	it('should successfully transform a nested list into an array', function () {
		var res = exercice.listToArray(list);
		//console.log(res);
		expect(res).to.be.deep.equal(['1', '2', '3'])
	})
	it('should successfully return new list with elem at top and arg list nested', function () {
		var res = exercice.prepend('1', list2);
		//console.log(res);
		expect(res).to.deep.equal({
			value: '1',
			rest: {
				value: '2',
				rest: {
					value: '3',
					rest: null
				}
			}
		})
	})
	it('should successfully return the value of the element at the position', function () {
		var res = exercice.nth(list, 2);
		expect(res).to.be.equal('3')
	})
	it('should successfully flatten an array',function(){
		var res = exercice.flatten(arrayOfArrays);
		expect(res).to.deep.equal(['1','2','3','4','5','6','7']);
	})
	it('should successfully return the average lifetime expectancy by century', function(){
		var res = exercice.lifeExpectancy(parsedAncestry);
		//console.log(parsedAncestry);
		console.log(res);
		expect(res).to.deep.equal(
			{
				16: 43.5,
				17: 51.2,
				18: 52.8,
				19: 54.8,
				20: 84.7,
				21: 94,
			}
		);
	})

})
