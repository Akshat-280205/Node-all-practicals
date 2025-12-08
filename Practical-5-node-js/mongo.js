
const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

async function main() {
  
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();


  const client = new MongoClient(uri);
  await client.connect();
  console.log(' Connected to in-memory MongoDB');

  try {
   
    const db = client.db('testdb');
    const users = db.collection('users');

   
    const result = await users.insertOne({
      name: 'Akshat Singh',
      age: 21,
      email: 'akshat@yahoo.com'
    });
    console.log('Inserted user with ID:', result.insertedId.toString());

  
    const docs = await users.find().toArray();
    console.log('All users:', docs);
  } finally {
    
    await client.close();
    await mongod.stop();
    console.log('Stopped in-memory MongoDB');
  }
}

main();
