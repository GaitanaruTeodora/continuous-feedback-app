const express = require("express");
const Access = require("../models/access");
const router = express.Router();

// Endpoint 1 (GET). - returneaza toate activitatile sub forma de json
router.get("/access", async (req, res) => {
  try {
    const access = await Access.findAll();
    res.status(200).json(access);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Endpoint 2. (GET) - returneaza o activitate dupa id-ul specificat + afisare feedback
// router.get("/activities/:id", (req, res) => {
//   var res1 = "";
//   Activity.findByPk(req.params.id, { raw: true }).then((result) => {
//     if (result) {
//       res1 = result;
//     } else {
//       res.status(404).send("Activitatea nu a fost gasita");
//     }
//     Feedback.findAll(
//       { raw: true },
//       { where: { idActivitate: req.params.id } }
//     ).then((result) => {
//       res1["feedback"] = result;
//       res.status(200).json(res1);
//     });
//   });
// });

// Endpoint 3 (POST). - permite adaugarea unei activitati noi.
router.post("/addAccess", async (req, res) => {
  if (!req.body.grupa) {
    return res.send("Introduceti denumirea activitatii!");
  }
  if (!req.body.cod) {
    return res.send("Introduceti codul de acces al activitatii!");
  }
  try {
    const access = await Access.create(req.body);
    return res.status(200).json(access);
  } catch (err) {
    return res.status(500).json(err);
  }
});


module.exports = router;
