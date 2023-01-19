const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const authRouter = require('./routes/authRoute');
const servicesRouter = require('./routes/servicesRoute');
const newsRouter = require('./routes/newsRoute');

const noticesRouter = require('./routes/noticesRoute');
const userRouter = require('./routes/userRoute');
const { swaggerUi, swaggerDocument } = require('./services/swagger/swagger');
const ctrlWrapper = require('./helpers/ctrlWrapper');
const getLocation = require('./controllers/geoNameControllers/getLocation');

const app = express();

const statitDir = path.join(__dirname, 'public');

app.use(logger('short'));
app.use(cors());
app.use(express.json());
app.use(express.static(statitDir));

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/location', ctrlWrapper(getLocation));

app.use('/auth', authRouter);
app.use('/services', servicesRouter);
app.use('/news', newsRouter);
app.use('/notices', noticesRouter);
app.use('/user', userRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
