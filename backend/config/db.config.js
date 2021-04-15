module.exports = {
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.PASSWORD,
  dialect: 'mariadb',
  database: process.env.DATABASE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};