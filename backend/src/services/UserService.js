import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Service to find a user by username
export const findUser ByUsername = async (username) => {
  return await User.findOne({ username });
};

// Service to create a new user
export const createUser  = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser  = new User({ username, password: hashedPassword });
  return await newUser .save();
};
