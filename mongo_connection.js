const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db('auth_profile');
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

function getDb() {
  if (!db) throw new Error('❌ Database not connected');
  return db;
}

module.exports = { connectToMongo, getDb };
