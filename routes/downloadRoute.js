const express = require('express');
const { getDownloadUrl } = require('../controllers/downloadController');
const router = express.Router();

router.get('/', getDownloadUrl);

module.exports = router;
