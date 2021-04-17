const Temperature = require("../models/temperature.model");

exports.addTemperatureMeasure = (req, res) => {
  // Validate request
  if (!req.body.temperature) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Temperature
  const temperature = {
    temperature: req.body.temperature,
    userId: req.body.userId,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Temperature.create(temperature)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the temperature."
      });
    });
};

exports.findOneTemperatureMeasure = (req, res) => {
  const id = req.params.id;

  Temperature.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Temperature with id=" + id
      });
    });
};