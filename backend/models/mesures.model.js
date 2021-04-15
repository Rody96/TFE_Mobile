
module.exports = (sequelize, Sequelize) => {
  const Users = require("./users.model")(sequelize, Sequelize);
  const Mesures = sequelize.define("mesures", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    temperature: {
      type: Sequelize.FLOAT,
      allowNull:false
    },
    ppm: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    humidity: {
      type: Sequelize.INTEGER,
      allowNull:false
    },
    userId:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: 'id'
    }
  }
  });

  return Mesures;
};