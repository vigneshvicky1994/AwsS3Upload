const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  signatureVersion: 'v4',
  region: 'ap-south-1',
});

const getDownloadUrlFromS3 = async (imageUrlKey) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imageUrlKey,
    Expires: 60 * 5, // URL expiration time in seconds
  };

  const signedUrl = await s3.getSignedUrlPromise('getObject', params);

  return signedUrl;
};

module.exports = { getDownloadUrlFromS3 };
