const express = require('express');
const { protect } = require('../Middleware/authMiddleware');
const { addOrder, updateOrder, allOrder } = require('../Controllers/orderControllers');

const router = express.Router();
router.route('/add').post(protect, addOrder);
router.route('/update').post(protect, updateOrder);
router.route('/all').get(protect, allOrder);

module.exports = router;