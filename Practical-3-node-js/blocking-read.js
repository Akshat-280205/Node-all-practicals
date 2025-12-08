
const fs = require('fs');

console.log(' FILE READING EXAMPLE ');
console.log('1. Program started...');

try {
    console.log('2. Reading file now...');
    
    const fileContent = fs.readFileSync('sample.txt', 'utf8');
    
    console.log('3. File loaded successfully!');
    console.log('4. Here is the content:');
    console.log('--------------------');
    console.log(fileContent);
    console.log('--------------------');
    
} catch (err) {
    console.error('File error:', err.message);
}

console.log('5. Program finished.');
console.log('6. All steps completed in sequence');

