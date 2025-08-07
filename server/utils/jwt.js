// utils/jwt.js
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'change_this_secret_key';

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, SECRET, { expiresIn: '1d' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};
