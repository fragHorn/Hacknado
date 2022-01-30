const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/products', shopController.getProducts);
router.post('/products/:productId', shopController.postDetails);
router.post('/cart');
router.get('./cart');

module.exports = router;
