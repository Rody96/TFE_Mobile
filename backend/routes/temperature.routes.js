module.exports = app => {
const mesures = require("../controller/mesures.controller");
var router = require("express").Router();

  //Create new temperature
  router.post('/add', mesures.addTemperatureMeasure);
  //Search one temperature
  router.get("/:id", mesures.findOneTemperatureMeasure);

  app.use('/api/temperature', router);
}