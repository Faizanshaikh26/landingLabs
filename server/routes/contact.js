import express from 'express';
import { addContact, getContacts } from '../controllers/contact.js';

const router = express.Router();

router.post('/contacts', addContact);
router.get('/contacts', getContacts);

export default router;
