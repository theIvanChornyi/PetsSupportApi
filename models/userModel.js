const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: 7,
      maxLength: 32,
      match: /^\S*$/,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      maxLength: 100,
      match: /^[a-zA-Z]+$/,
    },
    phone: {
      type: String,
      required: [true, 'Name is required'],
      minLength: 13,
      maxLength: 13,
      match: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
      unique: true,
    },
    avatarURL: {
      type: String,
      default: '',
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

// email*
// password*
// name*
// location*
// phone*
// birthday*
// token*
// avatar*
// pets
// notice
