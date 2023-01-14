require('dotenv').config();

const {
  MONGOURI,
  TOKEN_SALT,
  PORT,
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
} = process.env;

module.exports = {
  PORT,
  MONGOURI,
  TOKEN_SALT,
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
};
