function canYouSpotTheProblem() {
	'use strict';
	var counter;
	var i = 0;
	for (counter = 0; counter < 10; counter++) {
		i++;
	}
	return i;
}

function numberToString(n, base) {
	var result = "", sign = "";
	if (n < 0) {
		sign = "-";
		n = -n;
	}
	do {
		result = String(n % base) + result;
		n = Math.floor(n / base);
	} while (n > 0);
	return sign + result;
}
//console.log(numberToString(1325, 10));

function promptDirection(question) {
	var result = prompt(question, "");
	if (result.toLowerCase() == " left ") return " L ";
	if (result.toLowerCase() == " right ") return " R ";
	throw new Error(" Invalid direction : " + result);
}
function look() {
	if (promptDirection(" Which way ?") == " L ")
		return " a house ";
	else
		return " two angry bears ";
}
try {
	console.log(" You see ", look());
} catch (error) {
	console.log(" Something went wrong : " + error);
}


exports.canYouSpotTheProblem = canYouSpotTheProblem;