const express = require("express");
const Student = require("../models/student");
const router = express.Router();

//GET - toti studentii
router.get("/students", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    if (students.length > 0) {
      res.status(200).json(students);
    } else {
      res.status(404).send("Nu exista studenti!");
    }
  } catch (error) {
    next(error);
  }
});

//GET - cautare student dupa id-ul corespunzator
router.get("/students/:id",(req, res) => {
  Student.findByPk(req.params.id).then((result) => {
    if(result) {
        res.status(200).json(result)
    } else {
        res.status(404).send('Nu exista studentul cu id-ul cautat!')
    }
})
});

//POST - adauga un student
router.post("/students/addStudent", async (req, res) => {
  if (!req.body.nume) {
    return res.send("Nu exista nume!");
  }
  if (!req.body.prenume) {
    return res.send("Nu exista prenume!");
  }
  if (!req.body.grupa) {
    return res.send("Nu exista grupa!");
  }
 try{
  const newStudent = await Student.create(req.body);
  return res.status(200).json(newStudent);
}catch(err){
  return res.status(500).json(err);
}

});

router.put('/students/modifStud/:id', (req, res) => {
    Student.findByPk(req.params.id).then((result) => {
      if(result) {
          result.update(req.body).then((result) => {
              res.status(201).json(result);
          }).catch((err) => {
              console.log(err);
              resizeBy.status(500).send('Database error');
          })
      } else {
          res.status(404).send('Studentul nu a fost gasit!');
      }
  }).catch((err) => {
      console.log(err);
      response.status(500).send('Database error');
  });

});

module.exports = router;
