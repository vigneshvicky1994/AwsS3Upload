const { uploadImageToS3 } = require('../services/uploadService');

const uploadImage = async (req, res, next) => {
  try {
    const image = req.file.buffer;
    const originalname = req.file.originalname;
    console.log(originalname);
    const imageUrl = await uploadImageToS3(image, originalname);
    res.status(200).json({ imageUrl });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadImage };
