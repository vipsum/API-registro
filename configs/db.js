//connecting to the database
const { Sequelize } = require("sequelize");
//setting database name, username, and password
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres:postgres@127.0.0.1:5432/registerdb", (process.env.DATABASE_URL) ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  } : {});

module.exports = sequelize;
