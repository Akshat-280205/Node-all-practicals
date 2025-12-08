# Practical 12 – Middleware Pipeline Architecture
**Name:** Akshat Singh  
**Roll No:** GF202344124  
**Course:** BCA Full Stack – Final Year  

---

##  Objective
To create a **robust middleware pipeline** in Node.js using Express that demonstrates:
- X-Request-Id correlation  
- High-precision response timing  
- Safe JSON body parsing with size limits  
- Restricted CORS configuration  
- Per-route schema validation  
- Centralized error handler (RFC 7807 format)  
- A working endpoint to verify middleware order  

---

##  Steps to Execute
1. Open **VS Code** and navigate to your folder named **Practical 12**.  
2. Run the following command to initialize Node:
   ```bash
   npm init -y
   ```
3. Install the required packages:
   ```bash
   npm install express cors uuid joi
   ```
4. Create a file named **server.js** inside the folder.  
5. Paste the provided middleware pipeline code in that file.  
6. Start the server:
   ```bash
   node server.js
   ```
7. Test it in PowerShell:
   ```bash
   curl -Uri http://localhost:3000/echo -Method POST -Body '{"name":"Akshat"}' -ContentType "application/json"
   ```

---

##  Expected Output
- The response will include:
  - A **unique X-Request-Id**
  - **Response time (X-Response-Time-ms)**
  - JSON body confirming the request was processed  
- Centralized error messages follow the **RFC 7807** “problem+json” format.

---

##  Learning Outcome
- Understood the **importance of middleware order** in Express.  
- Implemented **error-safe**, **performance-tracked**, and **validated** request handling.  
- Demonstrated how modern backend systems handle cross-cutting concerns.
