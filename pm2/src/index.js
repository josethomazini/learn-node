const express = require('express');
const dotenv = require('dotenv');
const ip = require('ip');

const getLogger = require('./configs/pino');
const logger = getLogger(__filename);

const app = express();

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
});

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send(`On ${process.env.NODE_ENV} mode!`);

  for (let i = 0; i < 100000; i++) {
    logger.info(`info message ${i}`);
  }
});

app.listen(PORT, () => {
  logger.info(`Server listening on http://${ip.address()}:${PORT}`);
});
