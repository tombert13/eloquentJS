/*
function speak(line) {
	console.log("The " + this.type + " rabbit says '" + line + "'");
};

var whiteRabbit = {
	type: "white",
	mood: "happy",
	speak: speak
};

var fatRabbit = {
	type: "super fat",
	mood: "angry",
	speak: speak
};

whiteRabbit.speak("I'm white");

fatRabbit.speak("I'm fat");


speak.apply(fatRabbit, ["Burp !"]);//apply the speak function with fat rabbit as 'this' value, and 
//speak arguments has to be between brackets.

speak.call({ type: "old" }, "Oh my.");//calls the speak function with 'this' pointing to the 
//properties between curly braces. here the arguments doesn't
//need to be between brackets. 

function speakMore(line) {
	console.log("The " + this.type + " rabbit is " + this.mood + " and says " + line + ".");
};

speakMore.apply(whiteRabbit, ["Hello"]);

speakMore.call({ type: "super", mood: "spoiled", age: "12" }, 'I want more');


//constructors
function Rabbit(type) {
	this.type = type;
}

var killerRabbit = new Rabbit(" killer "); //killerRabbit = {type: "killer"}
var blackRabbit = new Rabbit(" black ");

console.log(killerRabbit.type);

Rabbit.prototype.speak = function (line) {
	console.log(" The " + this.type + " rabbit says '" +
		line + " '");
};

blackRabbit = {
	type: "black",
	prototype:{
		speak: speak
	}
}

blackRabbit.speak(" Doom ...");
// → The black rabbit says ' Doom ... '

var map = {};
function storeIn(key, value){
	map [key] = value;
}

storeIn('Tom', 'Bertrand');
storeIn('jean', 'dupont');


console.log(map);
*/

/*
A vector type
Write a constructor Vector that represents a vector in two-dimensional
space. It takes x and y parameters (numbers), which it should save to
properties of the same name.
Give the Vector prototype two methods, plus and minus, that take another
vector as a parameter and return a new vector that has the sum
or difference of the two vectors’ (the one in this and the parameter) x
and y values.
Add a getter property length to the prototype that computes the length
of the vector—that is, the distance of the point (x, y) from the origin (0,
0).*/

function Vector(x, y) {
	this.x = x,
	this.y = y
};

Vector.prototype.plus = function (vector) {
	return new Vector (this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function (vector) {
	return new Vector (this.x - vector.x, this.y - vector.y);
};

var vector1 = new Vector(2, 5);
var vector2 = new Vector(2, 8);

var res = vector1.plus(vector2);
console.log(res);
