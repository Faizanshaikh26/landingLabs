
import express from 'express';
import { connectDb } from './db/connection.js';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from 'cors';
import contactRoutes from './routes/contact.js';
import ClientRoutes from '../server/routes/client/client.js';
// import AdminRoutes from '../server/routes/admin/admin.js';
import careerRoutes from './routes/career.js';
import appointmentRoutes from './routes/appointment.js';
import authRoutes from './routes/auth.js';
import authMiddleware from './middlewares/auth.js';
import { v2 as cloudinary } from "cloudinary";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',  // your frontend URL
  credentials: true                 // allow cookies to be sent
}));


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.use('/api', contactRoutes);
app.use('/api/career',  careerRoutes);
app.use('/api',  appointmentRoutes);
app.get('/', (req, res) => {
  res.send('Landing Labs');
});

app.get('/protected', authMiddleware, (req, res) => {
  res.json({ msg: `Hello user with ID ${req.user.id}` });
});

app.post('/protected', authMiddleware, (req, res) => {
  // You can process POST data here from req.body
  res.json({ msg: `Posted data received for user ${req.user.id}`, data: req.body });
});

connectDb(process.env.MONGODB_URI)
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
