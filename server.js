const mongoose = require('mongoose');
const app = require('./app');
require('dotenv').config();

const { PORT } = process.env ?? 3000;

const { MONGOURI } = process.env;

const contactsDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const connection = await mongoose.connect(MONGOURI);
    console.log('Database connection successful');
    return connection;
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const start = async () => {
  await contactsDB();
  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
};

start();
