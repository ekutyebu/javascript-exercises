const add = function(a, b) {
	let calculation = a + b;
  return calculation;
};

const subtract = function(a, b) {
	let calculation = a - b;
  return calculation;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  array = array.reduce((product, current) => product * current);
  return array;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
