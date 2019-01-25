// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// function CuboidMaker(cuboidAtributes) {
// 	this.length = cuboidAtributes.length;
// 	this.width = cuboidAtributes.width;
// 	this.height = cuboidAtributes.height;
// }

// CuboidMaker.prototype.volume = function() {
// 	return this.length * this.width * this.height;
// };

// CuboidMaker.prototype.surfaceArea = function() {
// 	return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// };

//====================Refactor==================

class CuboidMarker {
	constructor(cuboidAtributes) {
		this.length = cuboidAtributes.length;
		this.width = cuboidAtributes.width;
		this.height = cuboidAtributes.height;
	}
	volume() {
		return this.length * this.width * this.height;
	}
	surfaceArea() {
		return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
	}
}

const cuboid2 = new CuboidMaker({
	length: 4,
	width: 5,
	height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
	constructor(props) {
		super(props);
		this.length = this.width = this.height; // in a cube all sides are equals
	}
	volume() {
		return this.length * 3;
    };
    surfaceArea(){
        return 6*(2*this.length);  // I'm not quite sure if this is correct :)
    }
}

const cube = new CubeMaker({
	length: 2,
	width: 2,
	height: 2,
});

console.log(cube.volume());
console.log(cube.surfaceArea())

