//connecting to the database
const { Sequelize } = require("sequelize");
//setting database name, username, and password
const sequelize = new Sequelize(
  "postgres://postgres:postgres@127.0.0.1:5432/registerdb"
);

module.exports = sequelize;