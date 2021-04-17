const Users = require("../models/users.model");
const seq = require("../config/sequelize.config");

exports.successConnection = function(req, res) {
  //res.json('connection successful');
  //res.render('successConnection');
  Users.findAll({
      attributes: [
          'id',
      ],
      where: {
          id: req.user.id
      }
  })
      .then(results => res.json(results))
      .catch(error => res.status(400).json(error));
};

exports.succesCreation = function(req, res){
  res.json('successCreation');
};

exports.takenEmail = function(req, res){
  res.status(400).json('takenEmail');
};

exports.errorConnection = function(req, res){
  res.status(400).json('email/password incorrect');
};

exports.notConnected = function(req, res){
  res.status(401).json('notConnected');
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
      res.json('endConnection');
  });

};

exports.deleteOne = function(req, res) {
  Users.destroy({
      where:{
          mail: req.body.mail
      },
      force: true
  })
  .then(results => res.send("account deleted."))
  .catch(error => res.status(400).send("Error while deleting an account : ", error));
};