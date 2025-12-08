
const fs = require('fs');

console.log('=== NON-BLOCKING FILE READ DEMO ===');
console.log('1. Starting script execution...');

console.log('2. About to read file (NON-BLOCKING)...');


fs.readFile('sample.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error.message);
        return;
    }
    
    console.log('4. File read completed! (This runs when file is ready)');
    console.log('5. File contents:');
    console.log('-------------------');
    console.log(data);
    console.log('-------------------');
    console.log('6. This callback executed asynchronously!');
});

console.log('3. This runs IMMEDIATELY after starting file read');
console.log('7. Script main execution completed');
console.log('8. Notice: The file contents appear AFTER this message');

setTimeout(() => {
    console.log('9. Other work can happen while file is being read!');
}, 100);


