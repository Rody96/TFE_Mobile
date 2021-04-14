module.exports = app => {
const mesures = require("../controller/tutorial.controller");
var router = require("express").Router();

  //Create new temperature
  router.post('/new', mesures.createTemperature);
  //Search one temperature
  router.get("/:id", mesures.findOneTemperature);

  app.use('/api/mesures', router);
}