const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig);

sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.mesures = require("./mesures.model")(sequelize,Sequelize);
db.users = require("./users.model")(sequelize, Sequelize);

module.exports = db;