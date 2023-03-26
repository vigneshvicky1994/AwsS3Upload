const { getDownloadUrlFromS3 } = require('../services/downloadService');

const getDownloadUrl = async (req, res, next) => {
  try {
    const imageUrlKey = req.query.imageUrlKey;
    const signedUrl = await getDownloadUrlFromS3(imageUrlKey);
    res.status(200).json({ signedUrl });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDownloadUrl };
