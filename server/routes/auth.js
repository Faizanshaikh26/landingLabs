// routes/auth.js
import express from 'express';
import { login } from '../controllers/authLogin.js';
import { register } from '../controllers/authRegistration.js';

const router = express.Router();

// Registration Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// Logout Route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ msg: 'Logged out successfully' });
});

export default router;
