console.log("Calling before definitions:");

try {
  console.log("add(2,3):", add(2, 3)); // works
} catch (e) {
  console.log("Error calling add before definition:", e.message);
}

try {
  console.log("Multiply(2,3):", Multiply(2, 3)); // fails
} catch (e) {
  console.log("Error calling Multiply before definition:", e.message);
}

function add(a, b) {
  return a + b;
}

const Multiply = function(a, b) {
  return a * b;
};

console.log("\nCalling after definitions:");
console.log("add(5,7):", add(5, 7));
console.log("Multiply(5,7):", Multiply(5, 7));


