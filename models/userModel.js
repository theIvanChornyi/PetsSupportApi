const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {
  emailRegExp,
  passwordRegExp,
  userNameRegExp,
  phoneRegExp,
} = require('../helpers/regExpressions');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: emailRegExp,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: 7,
      maxLength: 32,
      match: passwordRegExp,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxLength: 100,
      match: userNameRegExp,
    },
    phone: {
      type: String,
      required: [true, 'Name is required'],
      minLength: 13,
      maxLength: 13,
      match: phoneRegExp,
      unique: true,
    },
    avatarURL: {
      type: String,
      default:
        'https://res.cloudinary.com/dhvghdefz/image/upload/v1673788106/fyozbxljckpwabwesg16.png',
    },
    location: {
      type: String,
      required: [true, 'Name is required'],
    },
    birthday: {
      type: Date,
      default: Date.now,
    },
    pets: Array,
    notice: Array,
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.pre('save', async function () {
  if (this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
});
const User = mongoose.model('user', userSchema);

module.exports = User;
