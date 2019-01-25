// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function higherOrderFunction(cb) {}

function consume(arg1, arg2, cb) {
	return cb(arg1, arg2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greeting= (a,b) => `Hello ${a} ${b}, nice to meet you!`

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// a nested function can access other local function, variables that are in the same scope
// a nested function is a closure , it means a nested function can inherit the variabiles and function of its parent/containing function
// a nested function can be retuned

// Explanation:

const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";

	function nestedFunction() {
		console.log(internal);
	}
	nestedFunction();
}
myFunction();

// constant external has a global scope so any function can see it;

// internal constant has a block scope , it visibile just in myFunction();

//nestedFunction() its a closure -  can inherit the variabiles from outer function (myFunction()) , 
//nestedFunction() it has acces to outer functions variabiles