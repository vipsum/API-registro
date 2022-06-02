const express = require("express");
//getting express methods
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let dbRegister = [];

app.post("/register", (req, res) => {
  const { name, surname, gender, birthDate, dni } = req.body;
  const person = {
    name: name,
    surname: surname,
    gender: gender,
    birthDate: birthDate,
    dni: dni,
  };

  dbRegister.push(person);

  res.send("Register succesfully added");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/find", (req, res) => {
  const {dni} = req.query;
  const persona = dbRegister.filter((persona) => persona.dni == dni);
  res.send(persona);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
