const express = require("express");
const Activity = require("../models/activity");
const Feedback = require("../models/feedback");
const router = express.Router();

// Endpoint 1 (GET). - returneaza toate activitatile sub forma de json
router.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Endpoint 2. (GET) - returneaza o activitate dupa id-ul specificat + afisare feedback
router.get("/activities/:id", (req, res) => {
  var res1 = "";
  Activity.findByPk(req.params.id, { raw: true }).then((result) => {
    if (result) {
      res1 = result;
    } else {
      res.status(404).send("Activitatea nu a fost gasita");
    }
    Feedback.findAll(
      { raw: true },
      { where: { idActivitate: req.params.id } }
    ).then((result) => {
      res1["feedback"] = result;
      res.status(200).json(res1);
    });
  });
});

// Endpoint 3 (POST). - permite adaugarea unei activitati noi.
router.post("/addActivity", async (req, res) => {
  if (!req.body.denumire) {
    return res.send("Introduceti denumirea activitatii!");
  }
  if (!req.body.codAcces) {
    return res.send("Introduceti codul de acces al activitatii!");
  }
  try {
    const newActivity = await Activity.create(req.body);
    return res.status(200).json(newActivity);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// Endpoint 4 (PUT). - permite modificarea unei activitati.
router.put("/modifActivity/:activityId", async (req, res) => {
  if (!req.body.id) {
    return res.send("Introduceti id-ul activitatii!");
  }
  if (!req.body.denumire) {
    return res.send("Introduceti denumirea activitatii!");
  }
  if (!req.body.codAcces) {
    return res.send("Introduceti codul de acces al activitatii!");
  }
  const activity = await Activity.findByPk(req.params.id);
  if (activity) {
    return res.status(200).json(await activity.update(req.body));
  } else {
    return res
      .status(404)
      .json({ error: `Activitatea cu id ${req.params.id} nu exista!` });
  }
});

// Endpoint 5.(DELETE) - permite stergerea unei activitati.
router.delete("/deleteActivity/:activityId", async (req, res) => {
  const activity = await Activity.findByPk(req.params.id);
  if (activity) {
    return res.status(200).json(await activity.destroy());
  } else {
    return res
      .status(404)
      .json({ error: `Activitatea cu id ${req.params.id} nu exista! ` });
  }
});

module.exports = router;
