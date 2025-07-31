import express from 'express';

import { getAllCareers, addCareer } from '../controllers/career.js';
import { attachmentsMulter } from '../middlewares/multer.js';


const router = express.Router();

router.post('/addCareer', addCareer);
router.get('/getCareer', getAllCareers);

export default router;

