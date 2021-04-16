
module.exports = (sequelize, Sequelize) => {
  const Users = require("./users.model")(sequelize, Sequelize);
  const AirQuality = sequelize.define("airQuality", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ppm: {
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

  return AirQuality;
};