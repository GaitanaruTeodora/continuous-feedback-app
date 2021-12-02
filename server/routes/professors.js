const express = require("express");
const Activity = require("../models/professor");

const router = express.Router();

//GET - toti profesorii
router.get("/professors", async (req, res) => {
    try{
        const professors  = await Professor.findAll();
        res.status(200).json(professors);
        }catch(err){
          return res.status(500).json(err);
        }
  });
  
  //GET - cautare profesor dupa id-ul corespunzator
router.get("/professors/:id", async (req, res) => {
    const professor = await Professor.findOne({
        where: {id:req.params.id},
      });
      // console.log(professor);
      if (professor) {
        return res.status(200).json(professor);
      } else {
      }        return res.status(404).json({error:`Profesorul cu id ${req.params.id} nu exista!`});

  });
  
  //POST - adauga un profesor
  router.post("/students/addProfessor", async (req, res) => {
    if (!req.body.nume) {
      return res.send("Nu exista nume!");
    }
    if (!req.body.prenume) {
      return res.send("Nu exista prenume!");
    }
  
    try{
        const newProfessor = await Professor.create(req.body);
        return res.status(200).json(newProfessor);
    }catch(err){
        return res.status(500).json(err);
    }
  
  });
  
   //PUT - modifica un profesor
  router.put('/professors/modifProf/:id', async (req, res) => {
  
    const professor = await Professor.findByPk(req.params.id);
    if(professor){
      return res.status(200).json(await professor.update(req.body));
    }else{
      return res.status(404).json({error:`Profesorul cu id ${req.params.id} nu exista!`});
    }
  
  });
  
  module.exports = router;