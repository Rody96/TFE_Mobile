module.exports = (sequelize, Sequelize) => {
  const Mesures = sequelize.define("mesures", {
    temperature: {
      type: Sequelize.FLOAT
    },
  });

  return Mesures;
};