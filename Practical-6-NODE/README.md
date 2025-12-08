# Practical-6-NODE
Practical 6 – Node & ReactJS Development
Name: Akshat Singh
Student ID: GF202344124
Course: BCA FULLSTACK, Final Year

Q1. Server with Dynamic Imports
Created a Node.js server using top-level await and dynamic import.

The server listens for requests and dynamically loads modules.

Q2. Streams & Domain Counter
Used Node.js streams, readline, and pipeline to process a large users.csv.

Counted users per email domain and wrote output to out/domains.json without loading all data into memory.

Q3. Logger with EventEmitter & File Rotation
Made a logger using EventEmitter, writing logs to console and a file.

Implemented file rotation: when log.txt exceeds ~50KB, a new file is created.

How to Run
Install Node.js (v16+ recommended).

Clone/download this folder.

Make sure package.json has "type": "module".

Place your CSV as data/users.csv.

Run:

node server.mjs for server

node index.js for CSV domain counter

node testLogger.js for logger test

End of Practical 6 Submission
