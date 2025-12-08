// Higher order function: accepts another function (operation) as argument
function calculate(operation, a, b) {
  return operation(a, b);
}

// Some operations to pass in:
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// Arrow function for multiplication
const multiply = (x, y) => x * y;

// Using the higher order function with different operations:
console.log("Addition:", calculate(add, 10, 5));        // 15
console.log("Subtraction:", calculate(subtract, 10, 5)); // 5
console.log("Multiplication:", calculate(multiply, 4, 5)); // 20

// You can also pass inline arrow functions directly:
console.log("Division:", calculate((x, y) => x / y, 20, 4)); // 5
console.log("Exponent:", calculate((x, y) => x ** y, 2, 3)); // 8
