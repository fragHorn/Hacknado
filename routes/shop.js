const express = require('express');
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/products', shopController.getProducts);
router.post('/products/:productId', shopController.postDetails);
router.post('/cart', shopController.postCart);
router.get('/cart', shopController.getCart);
router.get('/delete-item/:prodId', shopController.getDeleteItem);

module.exports = router;
