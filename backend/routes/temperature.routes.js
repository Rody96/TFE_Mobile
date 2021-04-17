const express = require('express');
const router = express.Router();
const controllerTemperature = require("../controllers/temperature.controller");

  //Create new temperature
  router.post('/add', controllerTemperature.addTemperatureMeasure);
  //Search one temperature
  router.get("/:id", controllerTemperature.findOneTemperatureMeasure);

  module.exports = router;