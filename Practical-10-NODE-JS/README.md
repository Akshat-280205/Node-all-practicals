# Mutual TLS (mTLS) Secure Server with Certificate Auto-Reload

###  Author
**Name:** Akshat Singh  
**Roll No:** GF202344124  
**Course:** BCA Full Stack (Final Year)

---

##  About the Project
This Node.js project demonstrates how to set up a **Mutual TLS (mTLS)** server that:  
- Authenticates **both client and server** using TLS certificates.  
- Automatically **reloads certificates** without needing to restart the server.  

---

##  Features
-  Client certificate authentication (mutual TLS)  
-  Auto-reload of SSL certificates using `fs.watch()`  
-  Built using Node.js core `https` module  

---

##  Setup Steps
1. **Create a folder** in VS Code (e.g., `mtls-server`).  
2. Inside the folder, create a file named `mtls-server.js`.  
3. Paste your Node.js code inside it.  
4. Place your certificate files in the same folder:  
   - `server-cert.pem`  
   - `server-key.pem`  
   - `ca-cert.pem`  
5. Run the server using:
   ```bash
   node mtls-server.js
   ```
6. The server will start on **https://localhost:8443**.  
   Any certificate change will automatically reload without restart.

---

##  File Structure
```
mtls-server/
│
├── mtls-server.js
├── server-cert.pem
├── server-key.pem
├── ca-cert.pem
└── README.md
```

---

## Notes
- The client must also present a valid certificate signed by the same CA.  
- Useful for secure internal APIs or corporate systems.  

---

##  Technologies Used
- Node.js  
- HTTPS Module  
- File System Watcher (`fs.watch`)  

---


> This project helped me understand real-world certificate handling and secure system setup.  
> – **Akshat Singh**
