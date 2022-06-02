const sequelize = require("../configs/db");
const { DataTypes } = require("sequelize");

const Person = sequelize.define("Person", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  surname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  dni: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
});

Person.sync();

module.exports = Person;
