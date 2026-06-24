const express = require('express');
const router = express.Router();
const { register, login, getMe, updateProfile, toggleWishlist, addAddress } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.put('/profile', protect, updateProfile);
router.post('/wishlist/:productId', protect, toggleWishlist);
router.post('/addresses', protect, addAddress);

module.exports = router;