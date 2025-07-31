import mongoose from "mongoose";




export const connectDb = async (url) => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => {
        console.error('MongoDB connection error:', err);
    });
}