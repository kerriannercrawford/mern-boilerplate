const { Collection } = require('mongoose');

// rename to model from /models
const schemaModel = require('../models/mainModel');

const mainController = {};

mainController.get = (req, res, next) => {
  next();
};

module.exports = mainController;
