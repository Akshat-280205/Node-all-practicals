# Practical-4-node-js
Todo REST API - Practical 4

Author: Akshat Singh
Student ID: Gf202344124
Course: BCA - Third Year

What this project does:
A simple Todo API using Node.js and Express that can create and view todo items.

Requirements:
- Node.js
- Express and body-parser packages

Setup:
1. Install dependencies: npm install express body-parser
2. Run the server: node app.js
3. Server starts on http://localhost:3000

API Endpoints:

1. Create Todo (POST):
   URL: http://localhost:3000/todos
   Body: {"title": "Your task here"}

2. View All Todos (GET):
   URL: http://localhost:3000/todos

How to Test:
1. Start server with: node app.js
2. Use requests.http file in VS Code (REST Client extension)
3. Or test in browser: http://localhost:3000/todos

Files:
- app.js: Main server code
- requests.http: Test requests

Expected Output:
- POST creates new todo and returns it with ID
- GET returns array of all todos
- Validation error if title is missing
