const { Op } = require("sequelize");
const Person = require("../models/Person");

const addPerson = async (req, res) => {
  const { name, surname, gender, birthDate, dni } = req.body;

  const person = await Person.create({
    name: name,
    surname: surname,
    gender: gender,
    birthDate: birthDate,
    dni: dni,
  });

  res.send("Register succesfully added");
};

const updatePerson = async (req, res) => {
  const { dni, gender } = req.body;
  const person = await Person.update(
    { gender: gender },
    {
      where: { dni: dni },
    }
  );
  res.send(person);
};

const findPersonDni = async (req, res) => {
  const { dni } = req.query;
  const person = await Person.findOne({ where: { dni: dni } });

  res.send(person);
};

const findPersonSurname = async (req, res) => {
  const { surname } = req.query;
  const person = await Person.findAll({
    where: { surname: { [Op.startsWith]: surname } },
  });
  res.send(person);
};

module.exports = { addPerson, updatePerson, findPersonDni, findPersonSurname };
