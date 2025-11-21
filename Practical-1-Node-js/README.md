Simple Node.js HTTP Server

Author: Akshat Singh
Student ID: Gf202344124
Course: BCA - Third Year

Project Description

A basic HTTP server built with Node.js that demonstrates fundamental server creation using the built-in http module. The server responds to all requests with a "Hello, World!" message.

Features

- Creates a simple HTTP server on port 3000
- Responds with plain text "Hello, World!" message
- Uses only Node.js built-in modules (no external dependencies)
- Demonstrates basic HTTP request/response handling

Requirements

- Node.js (version 12.0.0 or higher)
- No additional packages or dependencies needed

How to Run

1. Open terminal/command prompt in the project directory

2. Start the server:
   node AkshatGf202344124.js

3. Open your web browser and navigate to:
   http://localhost:3000

4. Expected Result:
   - Browser displays: "Hello, World!"
   - Terminal shows: "Server running at http://localhost:3000/"

How to Stop the Server

Press Ctrl + C in the terminal to stop the server.

File Structure

project-folder/
├── AkshatGf202344124.js    # Main server file
├── README.md               # This documentation file
└── package.json           # Project configuration (optional)

Code Explanation

The server implementation:
- Uses Node.js built-in http module
- Creates server that listens on port 3000
- Sets HTTP response headers (status 200, content-type: text/plain)
- Responds to all GET requests with "Hello, World!" message
- Logs server startup message to console

Testing Instructions

1. Run the command: node AkshatGf202344124.js
2. Verify terminal shows: "Server running at http://localhost:3000/"
3. Open browser to http://localhost:3000
4. Confirm page displays "Hello, World!"
5. Test multiple browser refreshes to ensure consistent response

Assignment Details

- Subject: Node.js Web Development
- Assignment: Basic HTTP Server Implementation
- Date: September 2025
- Submission: GitHub Repository

Contact

Student: Akshat Singh
Program: Bachelor of Computer Applications (BCA)
Year: Third Year


