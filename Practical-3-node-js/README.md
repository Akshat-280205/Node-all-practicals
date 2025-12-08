# Practical-3-node-js
Node.js Fundamentals - Practical Assignment 3

Author: Akshat Singh
Student ID: Gf202344124
Course: BCA - Third Year
Subject: Node.js File Operations and Modules

Project Description

This repository demonstrates essential Node.js concepts through practical examples:
1. Module System (require/module.exports)
2. Blocking vs Non-Blocking File Operations
3. Asynchronous Programming with setTimeout
4. File System Operations and Error Handling

Requirements

- Node.js (version 12.0.0 or higher)
- No external dependencies required (uses built-in Node.js modules)

File Structure

Practical-3-node-js/
├── app.js              # Math operations demo using custom module
├── maths.js            # Custom math module with add/subtract functions
├── blocking-read.js    # Synchronous file reading demonstration
├── non-blocking-read.js # Asynchronous file reading demonstration
├── sample.txt          # Sample data file for file reading examples
├── settimeout.js       # setTimeout and async operations demo
└── README.md           # This documentation file

How to Run Each File

1. Math Module Demo:
   node app.js

2. Custom Math Module:
   This file is imported by app.js (no need to run separately)

3. Blocking File Read:
   node blocking-read.js

4. Non-Blocking File Read:
   node non-blocking-read.js

5. setTimeout Demo:
   node settimeout.js

Complete Demo (Run all files):
   node app.js && node blocking-read.js && node non-blocking-read.js && node settimeout.js

Detailed File Descriptions

1. app.js - Module Import/Export Demo
- Demonstrates how to import functions from custom modules
- Uses destructuring to import specific functions
- Shows practical usage of add() and subtract() operations
- Includes multiple test cases with different numbers

2. maths.js - Custom Module Creation
- Exports reusable mathematical functions (add, subtract)
- Demonstrates proper module.exports syntax
- Shows how to create modular, reusable code
- Functions can be imported and used in other files

3. blocking-read.js - Synchronous File Operations
- Uses fs.readFileSync() for blocking file operations
- Demonstrates try-catch error handling
- Shows sequential execution flow
- Program waits until file is completely read before continuing

4. non-blocking-read.js - Asynchronous File Operations
- Uses fs.readFile() with callback for non-blocking operations
- Demonstrates callback-based error handling
- Shows concurrent execution capabilities
- Program continues execution while file is being read
- Includes setTimeout to show other operations can run simultaneously

5. sample.txt - Student Data File
- Contains sample student information for file reading demos
- Includes name, student ID, course details, grades, and project status
- Used by both blocking and non-blocking file reading examples

6. settimeout.js - Asynchronous Programming Demo
- Demonstrates setTimeout for delayed execution
- Shows asynchronous callback execution
- Simulates real-world scenarios like API calls or database queries
- Illustrates non-blocking behavior with user data fetching

Expected Output Examples

Running app.js:
=== Math Operations Demo ===
10 + 5 = 15
10 - 5 = 5
Additional examples:
20 + 15 = 35
50 - 25 = 25

Running blocking-read.js:
=== BLOCKING FILE READ EXAMPLE ===
1. Program started...
2. Reading file now...
3. File loaded successfully!
4. Here is the content:
--------------------
[Student Information from sample.txt]
--------------------
5. Program finished.
6. All steps completed in sequence

Running non-blocking-read.js:
=== NON-BLOCKING FILE READ DEMO ===
1. Starting script execution...
2. About to read file (NON-BLOCKING)...
3. This runs IMMEDIATELY after starting file read
7. Script main execution completed
8. Notice: The file contents appear AFTER this message
4. File read completed! (This runs when file is ready)
5. File contents:
[Student Information from sample.txt]
6. This callback executed asynchronously!
9. Other work can happen while file is being read!

Running settimeout.js:
Fetching user data...
Data received
User: { name: 'John Doe', email: 'john@example.com' }

Key Learning Concepts

1. Node.js Module System
- Creating reusable modules with module.exports
- Importing modules with require()
- Destructuring imports for specific functions
- Code organization and modularity

2. Blocking vs Non-Blocking Operations
- Understanding synchronous vs asynchronous file operations
- Performance implications of blocking operations
- Event-driven, non-blocking I/O benefits
- When to use each approach

3. File System Operations
- Reading files with fs.readFileSync() and fs.readFile()
- Error handling in both synchronous and asynchronous contexts
- Working with text files and UTF-8 encoding
- Callback patterns in Node.js

4. Asynchronous Programming
- setTimeout for delayed execution
- Callback functions and their execution timing
- Understanding the Node.js event loop
- Concurrent execution capabilities

Testing Instructions

1. Ensure sample.txt exists in the same directory
2. Run each file individually to observe different behaviors
3. Compare output timing between blocking and non-blocking examples
4. Observe how non-blocking operations allow concurrent execution
5. Verify error handling works when sample.txt is missing

Performance Comparison

Blocking Operations:
- Program execution stops until operation completes
- Sequential, predictable execution order
- Simple to understand and debug
- Can cause performance bottlenecks in real applications

Non-Blocking Operations:
- Program continues execution while operation runs in background
- Concurrent execution possible
- Better performance for I/O intensive applications
- Requires understanding of callback patterns and event loop

Best Practices Demonstrated

1. Always use error handling (try-catch for sync, error parameter for async)
2. Use descriptive console messages to show execution flow
3. Organize code into reusable modules
4. Choose appropriate operation type based on use case
5. Include proper file encoding (utf8) when reading text files

Assignment Details

- Repository: Practical 3 node js
- Date: September 2025
- Focus: Node.js modules, file operations, and asynchronous programming
- Files: 6 total (5 JavaScript files + 1 data file)
- Concepts: Module system, I/O operations, async programming, error handling

Contact

Student: Akshat Singh
Program: Bachelor of Computer Applications (BCA)
Year: Third Year
Course: Node.js Development and File System Operations
