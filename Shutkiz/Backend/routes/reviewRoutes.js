const express = require('express');
const router = express.Router();
const { createReview, deleteReview } = require('../controllers/reviewController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/:productId', protect, createReview);
router.delete('/:productId/:reviewId', protect, admin, deleteReview);

module.exports = router;