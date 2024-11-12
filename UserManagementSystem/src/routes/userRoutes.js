const express = require('express');
const userController = require('../controllers/userController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', userController.register); // Register new user
router.post('/login', userController.login); // Login user
router.put('/update-role', authMiddleware, adminMiddleware, userController.updateRole); // Admin can update user roles

module.exports = router;
