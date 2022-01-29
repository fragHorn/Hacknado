const express = require('express');
const siteController = require('../controllers/site');

const router = express.Router();

router.get('/', siteController.getHome);
router.post('/recycle/pickup', siteController.postRecyclePickup)
router.get('/reuse', siteController.getReuse);
router.post('/reuse', siteController.postReuse);
router.get('/data-info', siteController.getDataInfo);

module.exports = router;