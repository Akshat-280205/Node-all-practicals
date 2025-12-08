
import fs from "fs";
import readline from "readline";
import { pipeline } from "stream";
import { promisify } from "util";


const pipelineAsync = promisify(pipeline);

async function processCSV() {
  const domainCount = {};

 
  const fileStream = fs.createReadStream("./data/users.csv");

 
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let isHeader = true;

 
  for await (const line of rl) {
    if (isHeader) {
      isHeader = false; 
      continue;
    }

    const parts = line.split(",");
    const email = parts[2];
    const domain = email.split("@")[1];

    
    domainCount[domain] = (domainCount[domain] || 0) + 1;
  }

  
  await fs.promises.writeFile("./out/domains.json", JSON.stringify(domainCount, null, 2));

  console.log("✅ Processing complete. Output written to out/domains.json");
}


processCSV().catch(err => console.error("❌ Error:", err));
