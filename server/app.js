
import express from 'express';
import { connectDb } from './db/connection.js';
import dotenv from 'dotenv';
dotenv.config();
import contactRoutes from './routes/contact.js';
import ClientRoutes from '../server/routes/client/client.js';
// import AdminRoutes from '../server/routes/admin/admin.js';
import careerRoutes from './routes/career.js';
import appointmentRoutes from './routes/appointment.js';
import { v2 as cloudinary } from "cloudinary";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use('/api', contactRoutes);
app.use('/api/career',  careerRoutes);
app.use('/api',  appointmentRoutes);
app.use('/api/client',  ClientRoutes);
// app.use('/api/admin',  AdminRoutes);
app.get('/', (req, res) => {
  res.send('Landing Labs');
});

connectDb(process.env.MONGODB_URI)
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
