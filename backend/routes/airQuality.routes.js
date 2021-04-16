module.exports = app => {
  const mesures = require("../controller/mesures.controller");
  var router = require("express").Router();
  
    //Create new temperature
    router.post('/add', mesures.addAirQualityMeasure);
    //Search one temperature
    router.get("/:id", mesures.findOneAirQualityMeasure);
  
    app.use('/api/airquality', router);
  }