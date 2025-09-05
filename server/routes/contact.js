import express from 'express';
import { addContact, addLead, addQuickContact, getAllLeads, getContacts, getQuickContacts } from '../controllers/contact.js';

const router = express.Router();

router.post('/contacts', addContact);
router.get('/contacts', getContacts);
router.post('/quick-contacts', addQuickContact);
router.get('/quick-contacts', getQuickContacts);

router.post("/leads", addLead);
router.get("/leads", getAllLeads);

export default router;
