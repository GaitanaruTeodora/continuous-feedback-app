const express = require("express");
const Student = require("../models/student");
const Professor = require("../models/professor");
const router = express.Router();


router.get("/users/:email/:parola", async (req, res, next) => {
    try {
        const student = await Student.findOne({
            where: {email: req.params.email, parola:req.params.parola},
          });
          if (student)
          {
            res.status(200).json(student);
          }
         
     
    } catch (error) {
      next(error)
    }
    try {
      const professor = await Professor.findOne({
          where: {email: req.params.email, parola:req.params.parola},
        });
        if (professor)
        {
          res.status(200).json(professor);
        }
        
   
  } catch (error) {
    next(error)
  }
  });
  
module.exports = router;
