

console.log("Using var:");
console.log(myVar); 
var myVar = "I am declared with var";
console.log(myVar); 

console.log("\nUsing let:");
try {
    console.log(myLet); 
} catch (error) {
    console.log("Error:", error.message);
}
let myLet = "I am declared with let";
console.log(myLet); 

console.log("\nUsing const:");
try {
    console.log(myConst); 
} catch (error) {
    console.log("Error:", error.message);
}
const myConst = "I am declared with const";

console.log(myConst); 
