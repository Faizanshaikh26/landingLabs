// controllers/authLogin.js
import User from '../models/LoginPage.js';
import { generateToken, verifyToken } from '../utils/jwt.js';

export const login = async (req, res) => {
  try {
    // If user already has a valid token cookie, prevent multiple logins
    if (req.cookies?.token) {
      try {
        verifyToken(req.cookies.token);
        return res.status(200).json({ msg: 'Already logged in!' });
      } catch {
        // Token invalid or expired: continue login process
      }
    }

    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ error: 'Username and password are required' });

    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({ error: 'Invalid username or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(401).json({ error: 'Invalid username or password' });

    const token = generateToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      // secure: true, // uncomment on production with HTTPS
    });

    return res.json({ msg: 'Login successful' });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ error: 'Login failed, please try again' });
  }
};
