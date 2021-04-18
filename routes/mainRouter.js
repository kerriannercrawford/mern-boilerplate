const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.get, (req, res) => {
  res.status(200).json({});
});

module.exports = router;
