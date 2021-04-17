const express = require('express');
const router = express.Router();
const controllerAirQuality = require("../controllers/airQuality.controller");

    //Create new temperature
    router.post('/add', controllerAirQuality.addAirQualityMeasure);
    //Search one temperature
    router.get("/:id", controllerAirQuality.findOneAirQualityMeasure);
  
    module.exports = router;