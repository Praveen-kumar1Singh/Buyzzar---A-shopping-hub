const mongoose = require("mongoose");

async function connectDB() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        console.error("❌ MONGODB_URI is undefined. Please check your .env file.");
        process.exit(1);
    }

    try {
        const conn = await mongoose.connect(uri);
        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("❌ Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;
