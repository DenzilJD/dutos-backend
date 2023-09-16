const express = require('express');
const { addProducts, allProducts, updateProducts, addCategory, allCategory } = require('../Controllers/productsControllers');
const { protect } = require('../Middleware/authMiddleware');

const router = express.Router();
router.route('/add').post(protect, addProducts);
router.route('/add-category').post(protect, addCategory);
router.route('/update').post(protect, updateProducts);
router.route('/all').get(protect, allProducts);
router.route('/all-category').get(protect, allCategory);

module.exports = router;