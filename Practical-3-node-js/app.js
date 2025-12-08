const { add, subtract } = require('./math');

console.log('=== Math Operations Demo ===');

const num1 = 10;
const num2 = 5;

const sum = add(num1, num2);
console.log(`${num1} + ${num2} = ${sum}`);


const difference = subtract(num1, num2);
console.log(`${num1} - ${num2} = ${difference}`);

console.log('Additional examples:');
console.log(`20 + 15 = ${add(20, 15)}`);
console.log(`50 - 25 = ${subtract(50, 25)}`);
