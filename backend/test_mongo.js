require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    console.log("Attempting to connect to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ SUCCESS: Successfully connected to MongoDB Atlas!");
    
    // Quick test to see if we can query the Users collection
    const User = require('./models/User');
    const userCount = await User.countDocuments();
    console.log(`📊 Database Status: Found ${userCount} registered users in the database.`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ ERROR: Failed to connect to MongoDB Atlas.", error.message);
    process.exit(1);
  }
}

testConnection();
