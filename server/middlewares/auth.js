// middlewares/auth.js
import { verifyToken } from '../utils/jwt.js';

const authMiddleware = (req, res, next) => {
  const token = req.cookies?.token;
  if (!token) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  try {
    const decoded = verifyToken(token);
    req.user = decoded; // Contains userId inside decoded.id
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

export default authMiddleware;
