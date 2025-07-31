import express from 'express';
import { addAppointment, getAppointments } from '../controllers/appointment.js';


const router = express.Router();

router.post('/appointment', addAppointment);
router.get('/appointment', getAppointments);

export default router;
