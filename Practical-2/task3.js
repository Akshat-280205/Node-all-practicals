// Define an object with two methods: one normal function and one arrow function
const obj = {
  name: "MyObject",

  // Normal function method
  normalFunc: function() {
    console.log("normalFunc this:", this);
  },

  // Arrow function method
  arrowFunc: () => {
    console.log("arrowFunc this:", this);
  }
};

console.log("Calling methods as object properties:\n");
obj.normalFunc(); // Case 1
obj.arrowFunc();  // Case 2

console.log("\nCalling methods detached from object:\n");
const detachedNormal = obj.normalFunc;
const detachedArrow = obj.arrowFunc;

detachedNormal(); // Case 3
detachedArrow();  // Case 4
