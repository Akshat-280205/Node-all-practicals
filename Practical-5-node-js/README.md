# Practical-5-node-js




1. Event Emitter → shows how to create and listen to custom events in Node.js.  
2. MongoDB Demo → shows how to connect Node.js to  MongoDB  and insert a user record.

---

  Files
- eventEmitter.js → Emits a "greet" event and listens to it.  
- mongo.js → Connects to MongoDB (in-memory), inserts a user, and shows the data.  
- package.json → Node.js project file.  
- node_modules/ → Installed dependencies.

---

 How to Run

1. Setup
Open terminal in the folder and run:
npm init -y
npm install mongodb mongodb-memory-server

 2. Run Event Emitter
node eventEmitter.js

 Output:  
Hello, Akshat!

 3. Run MongoDB Demo
node mongo.js

 Output (example):  
 Connected to in-memory MongoDB  
Inserted user with ID: 6512abcd1234ef5678  
All users: [ { _id: ..., name: 'Akshat', age: 21, email: 'Akshat@yahoo.com' } ]  
Stopped in-memory MongoDB  

---
 
- Created by **Akshat** (Roll No. **Gf202344124**) for **Node.js subject (3rd Year)**.  
