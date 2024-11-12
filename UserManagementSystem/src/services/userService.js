const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// JWT Secret Key
const JWT_SECRET = process.env.JWT_SECRET;

// Register a new user
async function registerUser(userData) {
  const existingUser = await userRepository.findUserByUsername(userData.username);
  if (existingUser) {
    throw new Error('Username already exists');
  }

  return await userRepository.createUser(userData);
}

// Login user
async function loginUser(username, password) {
  const user = await userRepository.findUserByUsername(username);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
  return { token };
}

// Update user role (admin only)
async function updateRole(username, role) {
  return await userRepository.updateUserRole(username, role);
}

module.exports = { registerUser, loginUser, updateRole };
