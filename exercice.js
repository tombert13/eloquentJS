var _ = require('lodash');

function reverseArray(array) {
	newArray = [];
	array.forEach(function (elem, idx) {
		newArray[(array.length) - 1 - idx] = elem
	})
	return newArray
}

function reverseArrayInPlace(array) {
	for (var i = 0; i < array.length / 2; i++) {
		var tmp = array[i];
		array[i] = array[(array.length) - 1 - i];
		array[(array.length) - 1 - i] = tmp;
	}
	return array;
}

function arrayToList(array) {

	if (array.length == 0) {
		return null;
	}
	return {
		value: array[0],
		rest: arrayToList(array.slice(1))
	}
}

function listToArray(list) {
	var arr = [];
	for (var obj = list; obj; obj = obj.rest) {
		arr.push(obj.value);
	}
	return arr;
}

function prepend(elem, list) {
	return {
		value: elem,
		rest: list
	}
}

function nth(list, n) {
	if (!list)
		return undefined;
	else if (n == 0)
		return list.value;
	else
		return nth(list.rest, n - 1);
}

exports.reverseArray = reverseArray;
exports.reverseArrayInPlace = reverseArrayInPlace;
exports.arrayToList = arrayToList;
exports.listToArray = listToArray;
exports.prepend = prepend;
exports.nth = nth;

//////////////////////////////////////
/*
function forEach(array, action) {//(array2, consol.log)
	for (var i = 0; i < array.length; i++) {
		action(array[i]);
	}
}
*/

/*
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function (number) {
	sum += number;
});
console.log(sum);
*/

function flatten(array) {
	return array.reduce(function (flat, current) {
		return flat.concat(current);
	}, []);
}

function century(dieDate) {
	return Math.ceil(dieDate / 100);
}

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}

function couple(ancestry) {
	return ancestry.map(function (person) {
		return {
			born: person.born,
			died: person.died
		}
	})
}

function groupByCentury(bornDiedDate) {
	return _.groupBy(bornDiedDate, function (value) {
		return century(value.died);
	})
}

function lifeExpectancy(groupedDates) {

	var tmp = _.map(groupedDates, function (value, key) {
		return {
			century: key,
			age: _.round(average(_.map(value, function (elem, key) {
				return elem.died - elem.born;
			})), 1)
		}

	})

	var res = _.fromPairs(
		_.map(tmp, function (obj) {
			return [obj.century, obj.age]
		})
		)
	return res;
}

function withTransform(pairCenturyAge) {
	return _.transform(pairCenturyAge, function (result, value, key) {
		result[value.century] = value.age;
	}, {})
}

function some(array, predicate) {
	for (var i = 0; i < array.length; i++) {
		if (predicate == array[i]) return true
	}
	return false; 
}
	
function every(array, predicate){
	for (var i = 0; i < array.length; i++){
		if (!(predicate==array[i])) return false
	}
	return true;
}



exports.flatten = flatten;
exports.couple = couple;
exports.groupByCentury = groupByCentury;
exports.lifeExpectancy = lifeExpectancy;
exports.withTransform = withTransform;
exports.some = some;
exports.every = every;

