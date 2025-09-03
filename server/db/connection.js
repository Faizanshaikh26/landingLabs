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

let isConnected = false; // track the connection state

export const connectDb = async (url) => {
    if (isConnected) {
        // already connected
        return;
    }

    if (!url) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: false, // important for serverless
        });

        isConnected = db.connections[0].readyState === 1;
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection error:", err);
        throw err;
    }
};
