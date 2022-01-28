const express = require('express');
const siteController = require('../controllers/site');

const router = express.Router();

router.get('/', siteController.getHome);

module.exports = router;