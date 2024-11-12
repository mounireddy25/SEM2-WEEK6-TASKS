const User = require('../models/userModel');

// Create new user
async function createUser(userData) {
  const user = new User(userData);
  await user.save();
  return user;
}

// Find user by username
async function findUserByUsername(username) {
  return await User.findOne({ username });
}

// Update user details (like roles)
async function updateUserRole(username, role) {
  return await User.findOneAndUpdate({ username }, { role }, { new: true });
}

module.exports = { createUser, findUserByUsername, updateUserRole };
