
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  mail: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  password: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  firstName: {
      type: Sequelize.TEXT,
      allowNull: false
  },
  lastName: {
      type: Sequelize.TEXT,
      allowNull: false,
  },
  });

  return Users;
};