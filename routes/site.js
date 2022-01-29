const express = require('express');
const siteController = require('../controllers/site');

const router = express.Router();

router.get('/', siteController.getHome);
router.post('/recycle/pickup', siteController.postRecyclePickup)

module.exports = router;