// src/config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_PORT,
    MONGO_DBNAME,
  } = process.env;

  const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DBNAME}?authSource=admin`;
  const test_uri = `mongodb://root:QuvYrM99HPDpZ1VrRibYqaQ8@172.21.51.235:27017`;

  try {
    await mongoose.connect(test_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
