require('dotenv').config();

const {
  MONGOURI,
  TOKEN_SALT,
  PORT,
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  GEO_NAMES_USER,
} = process.env;

module.exports = {
  PORT,
  MONGOURI,
  TOKEN_SALT,
  CLOUDINARY_URL,
  CLOUDINARY_CLOUD,
  CLOUDINARY_KEY,
  CLOUDINARY_SECRET,
  GEO_NAMES_USER,
};
