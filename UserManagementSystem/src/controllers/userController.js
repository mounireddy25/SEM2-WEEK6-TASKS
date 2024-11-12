const userService = require('../services/userService');

// Register a user
async function register(req, res) {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Login a user
async function login(req, res) {
  try {
    const { username, password } = req.body;
    const { token } = await userService.loginUser(username, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Update user role (admin)
async function updateRole(req, res) {
  try {
    const { username, role } = req.body;
    const updatedUser = await userService.updateRole(username, role);
    res.status(200).json({ message: 'User role updated', user: updatedUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = { register, login, updateRole };
