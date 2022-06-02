const express = require("express");
const { Op } = require("sequelize");
//getting express methods
const app = express();
const port = 3000;

const Person = require("./models/Person");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", async (req, res) => {
  const { name, surname, gender, birthDate, dni } = req.body;

  const person = await Person.create({
    name: name,
    surname: surname,
    gender: gender,
    birthDate: birthDate,
    dni: dni,
  });

  res.send("Register succesfully added");
});

app.post("/update", async (req, res) => {
  const {dni, gender} = req.body;
   const person = await Person.update({gender: gender},{
     where: {dni: dni} 
   });
   res.send(person);
});

app.get("/find", async (req, res) => {
  const { dni } = req.query;
  const person = await Person.findOne({where: {dni: dni} });

  res.send(person);
});

app.get("/findAll", async (req, res) => {
  const { surname } = req.query;
  const person = await Person.findAll({where: {surname: { [Op.startsWith]:surname}}});
  res.send(person);
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
