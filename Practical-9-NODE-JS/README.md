# Practical 9 - Node.js Dependency & License Scanner

## Student Information
Name: Akshat Singh  
Roll No: GF202344124  
Course: BCA Full Stack Development  
Year: Final Year

---

## Objective
To create a Node.js tool that scans the node_modules directory, builds a dependency graph, computes SHA-256 hashes for each package, and reports packages without a valid license.

---

## Steps to Run the Project

1. Open Visual Studio Code and open the folder named "Practical 9".

2. Initialize a new Node.js project:
   npm init -y

3. Install a few sample packages to create a node_modules folder:
   npm install express lodash

4. Create a new file named build-graph.js in the Practical 9 folder and paste the given JavaScript code into it.

5. Run the script in the terminal:
   node build-graph.js > dependency-graph.json

6. Check the output:
   - The file dependency-graph.json will show details of each package, its SHA-256 hash, and dependencies.
   - The terminal will list all packages missing license files.

---

## Example Output
Scanned 12 packages.
Packages missing license file or license field: 3
 - lodash@4.17.21
 - express@4.18.2

---

## Conclusion
This practical helped me understand how to work with the file system, hashing, JSON parsing, and license management in Node.js. It shows how to analyze dependencies and automate reporting using JavaScript.

---

## Tools Used
- Node.js
- Visual Studio Code
- JSON
