const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-south-1',
});

const uploadImageToS3 = async (image, name) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${name}.jpeg`,
    Body: image,
    ContentType: 'image/jpeg',
  };

  const { Location: imageUrl, Key: imageKey, ContentType: contentType } = await s3.upload(params).promise();

  const response = {
    imageUrl,
    imageKey,
    contentType,
  };

  return response;
};

module.exports = { uploadImageToS3 };
