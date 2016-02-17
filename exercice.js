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

function lifeExpectancy(ancestry) {
	var lifeTime = ancestry.map(function (person) {
		return {
			born: person.born,
			died: person.died
		}
	});
	var centuries = lifeTime.map(function (person) {
		return century(person.died);
	}).
	return centuries;
}

function century(dieDate) {
	return Math.ceil(dieDate / 100)
}

function average(array) {
	function plus(a, b) { return a + b; }
	return array.reduce(plus) / array.length;
}


//exports.forEach = forEach;
exports.flatten = flatten;
exports.lifeExpectancy = lifeExpectancy;