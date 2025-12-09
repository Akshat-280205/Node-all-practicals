
const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

async function main() {
  
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log(" Temporary MongoDB started");

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db("college");
  const collection = db.collection("students");

  
  await db.createCollection("students");
  console.log("📘 Collection 'students' created (DDL)");

  
  await collection.insertOne({ name: "Akshat", roll: 101, course: "BCA" });
  console.log(" Record inserted");

  await collection.updateOne({ name: "Akshat" }, { $set: { course: "Full Stack" } });
  console.log(" Record updated");

  const record = await collection.findOne({ name: "Akshat" });
  console.log(" Record found:", record);

  await collection.deleteOne({ roll: 101 });
  console.log(" Record deleted");


  console.log(" DCL: Simulating user creation (in-memory only)");
  const fakeUsers = [];
  fakeUsers.push({ username: "xyx", role: "readWrite" });
  console.log(" User added:", fakeUsers);

  await client.close();
  await mongod.stop();
  console.log(" In-memory MongoDB stopped and connection closed");
}

main().catch(console.error);
