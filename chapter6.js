/*A vector type
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

/*Another cell
Implement a cell type named StretchCell(inner, width, height) that conforms
to the table cell interface described earlier in the chapter. It should
wrap another cell (like UnderlinedCell does) and ensure that the resulting
cell has at least the given width and height, even if the inner cell would
naturally be smaller.*/

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
  return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
};

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]