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
var arrayOfArrays = [['1', '2', '3', '4'], ['5', '6', '7']];

var ANCESTRY_FILE = "[\n  " + [
	'{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
	'{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
	'{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
	'{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
	'{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
	'{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
].join(",\n  ") + "\n]";
var ancestors = JSON.parse(ANCESTRY_FILE)
var bornDiedDate = [
				{ born: 1696, died: 1724 },
				{ born: 1602, died: 1642 },
				{ born: 1692, died: 1743 },
				{ born: 1695, died: 1762 },
				{ born: 1570, died: 1636 },
				{ born: 1762, died: 1807 }
];
var groupedDates = {
				'17': [{ born: 1602, died: 1642 }, { born: 1570, died: 1636 }],
				'18': [{ born: 1696, died: 1724 }, { born: 1692, died: 1743 }, { born: 1695, died: 1762 }],
				'19': [{ born: 1762, died: 1807 }]
};
var pairCenturyAge = [
	{ century: '17', age: 53 },
	{ century: '18', age: 48.7 },
	{ century: '19', age: 45 }
];



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
	it('should successfully flatten an array', function () {
		var res = exercice.flatten(arrayOfArrays);
		expect(res).to.deep.equal(['1', '2', '3', '4', '5', '6', '7']);
	})
	it('should successfully return one object with died and born per object', function () {
		var res = exercice.couple(ancestors);
		expect(res).to.deep.equal(
			[
				{ born: 1696, died: 1724 },
				{ born: 1602, died: 1642 },
				{ born: 1692, died: 1743 },
				{ born: 1695, died: 1762 },
				{ born: 1570, died: 1636 },
				{ born: 1762, died: 1807 }
			]
			)
	})

	it('should successfully return couple dates sorted by century', function () {
		var res = exercice.groupByCentury(bornDiedDate);
		//console.log(res);
		expect(res).to.deep.equal(
			{
				'17': [{ born: 1602, died: 1642 }, { born: 1570, died: 1636 }],
				'18': [{ born: 1696, died: 1724 }, { born: 1692, died: 1743 }, { born: 1695, died: 1762 }],
				'19': [{ born: 1762, died: 1807 }]
			}
			)
	})


	it('should successfully return the average lifetime expectancy by century', function () {
		var res = exercice.lifeExpectancy(groupedDates);
		//console.log(res);
		expect(res).to.deep.equal(
			{
				'17': 53,
				'18': 48.7,
				'19': 45
			}
			);
	})
	it('should successfully return with _.transform', function () {
		var res = exercice.withTransform(pairCenturyAge);
		console.log(res);
		expect(res).to.deep.equal(
			{
				'17': 53,
				'18': 48.7,
				'19': 45
			}
			);
	})
	it('should successfully return true if predicate in array, else false'), function(){
		var res = exercice.some([4,4,2,3],2);
		expect(res).to.be(true);
		var res = exercice.some([4,4,2,3],1);
		expect(res).to.be(false);
	}

})
