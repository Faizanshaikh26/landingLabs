import mongoose from 'mongoose';

export const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit the process if DB connection fails
  }
};
