module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.PASSWORD,
  PORT:3306,
  DB: "test",
  dialect: "mariadb",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};