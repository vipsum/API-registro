const express = require("express");
const router = express.Router();
const {
  addPerson,
  updatePerson,
  findPersonDni,
  findPersonSurname,
} = require("../controllers/peopleController");

router.post("/register", addPerson);
router.post("/update", updatePerson);
router.get("/find", findPersonDni);
router.get("/findAll", findPersonSurname);

module.exports = router;
