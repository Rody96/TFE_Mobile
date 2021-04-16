
module.exports = (sequelize, Sequelize) => {
  const Users = require("./users.model")(sequelize, Sequelize);
  const Temperature = sequelize.define("temperature", {
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
    userId:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: 'id'
    }
  }
  });

  return Temperature;
};