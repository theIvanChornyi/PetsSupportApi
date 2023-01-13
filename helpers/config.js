require('dotenv').config();

const { MONGOURI, TOKEN_SALT, PORT } = process.env;

module.exports = { PORT, MONGOURI, TOKEN_SALT };
