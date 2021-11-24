const express = require("express");
const Activity = require("../classes/Activity");
const { activities } = require("../db");
const router = express.Router();

// Endpoint 1 (GET). - returneaza toate activitatile sub forma de json
router.get("/activities", (req, res) => {
  res.status(200).json(activities);
});

// Endpoint 2. (GET) - returneaza o activitate dupa id-ul specificat.
const checkActivityId = (req, res, next) => {
  if (req.params.id && isNaN(req.params.id)) {
    res.status(400).json({ error: "Id-ul specificat nu a fost gasit" });
  } else {
    next();
  }
};

router.get("/activities/:id", checkActivityId, (req, res) => {
  const activity = activities.find((a) => a.id === Number(req.params.id));
  console.log(activity);
  if (activity) {
    res.status(200).json(activity);
  } else {
    res.status(404).send("Activitatea nu a fost gasita");
  }
});

// Endpoint 3 (POST). - permite adaugarea unei activitati noi.
router.post("/addActivity", (req, res) => {
  if (!req.body.id) {
    return res.send("Introduceti id-ul activitatii!");
  }
  if (!req.body.denumire) {
    return res.send("Introduceti denumirea activitatii!");
  }
  if (!req.body.codAcces) {
    return res.send("Introduceti codul de acces al activitatii!");
  }
  let newActivity = new Activity(
    req.body.id,
    req.body.denumire,
    req.body.descriere,
    req.body.data,
    req.body.durata,
    req.body.dataIncepere,
    req.body.codAcces
  );

  activities.push(newActivity);
  console.log(newActivity);
  return res.json(activities);
});

// Endpoint 4 (PUT). - permite modificarea unei activitati.
router.put("/modifActivity/:activityId", (req, res) => {
  if (!req.body.id) {
    return res.send("Introduceti id-ul activitatii!");
  }
  if (!req.body.denumire) {
    return res.send("Introduceti denumirea activitatii!");
  }
  if (!req.body.codAcces) {
    return res.send("Introduceti codul de acces al activitatii!");
  }

  let activityModif = activities.find((x) => x.id == req.params.activityId);
  activityModif.denumire = req.body.denumire;
  activityModif.descriere = req.body.descriere;
  activityModif.data = req.body.data;
  activityModif.dataIncepere = req.body.dataIncepere;
  activityModif.codAcces = req.body.codAcces;
  return res.json(activityModif);
});

// Endpoint 5.(DELETE) - permite stergerea unei activitati.
router.delete("/deleteActivity/:activityId", (req, res) => {
  const filteredArr = activities.filter((x) => x.id != req.params.activityId);
  res.send(
    "Activitatea cu id-ul " + req.params.activityId + " a fost stearsa!"
  );
  console.log(filteredArr);
});

module.exports = router;
