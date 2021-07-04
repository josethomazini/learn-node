const express = require('express');
const ImagesController = require('./controllers/ImagesController');

const routes = express.Router();

routes.post(
  '/images', ImagesController.storeFiles, ImagesController.store);

module.exports = routes;
