// import mongoose from "mongoose";




// export const connectDb = async (url) => {
//     await mongoose.connect(url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }).then(() => {
//         console.log('Connected to MongoDB');
//     }).catch(err => {
//         console.error('MongoDB connection error:', err);
//     });
// }


import mongoose from "mongoose";

let isConnected = false; // global flag

export async function connectDb() {
  if (isConnected) return;

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false, // prevent mongoose buffering on cold starts
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    throw err;
  }
}
