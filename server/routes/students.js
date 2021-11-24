const express = require("express");
const Student = require("../classes/Student");
const { students } = require("../db");
const router = express.Router();

const checkStudId = (req, res, next) => {
  if (req.params.id && isNaN(req.params.id)) {
    res.status(400).json({ error: "Id-UL NU ESTE CORESPUNZATOR" });
  } else {
    next();
  }
};

//GET - toti studentii
router.get("/students", (req, res) => {
  res.status(200).json(students);
});

//POST - adauga un student
router.post("/students/addStudent", (req, res) => {
  if (!req.body.id) {
    return res.send("Nu exista id!");
  }
  if (!req.body.nume) {
    return res.send("Nu exista nume!");
  }
  if (!req.body.prenume) {
    return res.send("Nu exista prenume!");
  }
  if (!req.body.grupa) {
    return res.send("Nu exista grupa!");
  }

  let newStudent = new Student(
    req.body.id,
    req.body.nume,
    req.body.prenume,
    req.body.grupa
  );
  students.push(newStudent);
  console.log(newStudent);
  return res.json(students);
});

//GET - un student cu id-ul corespunzator
router.get("/students/:id", checkStudId, (req, res) => {
  const student = students.find((s) => s.id === Number(req.params.id));
  console.log(student);
  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ error: "Nu exista studentul cu id-ul cautat!" });
  }
});

module.exports = router;
