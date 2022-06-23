const express = require("express");
const router = express.Router();
//requiring functions from controllers
const {
  addPerson,
  updatePerson,
  findPersonDni,
  findPersonSurname,
} = require("../controllers/peopleController");
//defining api routes // router.method(path, handler)
router.post("/register", addPerson);
router.post("/update", updatePerson);
router.get("/find", findPersonDni);
router.get("/findAll", findPersonSurname);

module.exports = router;
