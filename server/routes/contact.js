import express from 'express';
import { addContact, addQuickContact, getContacts, getQuickContacts } from '../controllers/contact.js';

const router = express.Router();

router.post('/contacts', addContact);
router.get('/contacts', getContacts);
router.post('/quick-contacts', addQuickContact);
router.get('/quick-contacts', getQuickContacts);

export default router;
