const mongoose = require('mongoose');

const favoriteModel = new mongoose.Schema(
  {
    id: {
      type: Array,
        },
    favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'favorite',
    },
  },
  { versionKey: false }
);


const Favorite = mongoose.model('favorite', favoriteModel);

module.exports = Favorite;
