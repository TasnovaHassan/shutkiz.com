const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, updateUserRole, toggleUserStatus } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.get('/', protect, admin, getAllUsers);
router.get('/:id', protect, admin, getUserById);
router.put('/:id/role', protect, admin, updateUserRole);
router.put('/:id/toggle', protect, admin, toggleUserStatus);

module.exports = router;