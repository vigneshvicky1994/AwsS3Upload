const express = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/uploadController');
const router = express.Router();

const upload = multer();

router.post('/', upload.single('image'), uploadImage);

module.exports = router;
