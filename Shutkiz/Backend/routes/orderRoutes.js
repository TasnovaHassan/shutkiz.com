const express = require('express');
const router = express.Router();
const {
  createOrder, getMyOrders, getOrder,
  getAllOrders, updateOrderStatus, getDashboardStats,
} = require('../controllers/orderController');
const { protect, admin, optionalAuth } = require('../middleware/authMiddleware');

router.post('/', optionalAuth, createOrder);
router.get('/my', protect, getMyOrders);
router.get('/admin/all', protect, admin, getAllOrders);
router.get('/admin/stats', protect, admin, getDashboardStats);
router.get('/:id', protect, getOrder);
router.put('/:id/status', protect, admin, updateOrderStatus);

module.exports = router;