const { Op } = require("sequelize");
const Person = require("../models/Person");

const addPerson = async (req, res) => {
  const { name, surname, gender, birthDate, dni } = req.body;
  try {
    const person = await Person.create({
      name: name,
      surname: surname,
      gender: gender,
      birthDate: birthDate,
      dni: dni,
    });

    res.json(person);
  } catch (error) {
    res.json({ error: error.errors[0].message });
  }
};

const updatePerson = async (req, res) => {
  const { dni, gender } = req.body;
  const person = await Person.update(
    { gender: gender },
    {
      where: { dni: dni },
    }
  );
  res.json(person);
};

const findPersonDni = async (req, res) => {
  const { dni } = req.query;
  const person = await Person.findOne({ where: { dni: dni } });

  res.json(person);
};

const findPersonSurname = async (req, res) => {
  const { surname } = req.query;
  const person = await Person.findAll({
    where: { surname: { [Op.startsWith]: surname } },
  });

  res.json(person);
};

module.exports = { addPerson, updatePerson, findPersonDni, findPersonSurname };
