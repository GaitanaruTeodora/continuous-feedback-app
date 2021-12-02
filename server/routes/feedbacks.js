const express = require("express");
const Activity = require("../models/activity");
const Feedback = require("../models/feedback");
const router = express.Router();

//GET - toate feedback-urile
router.get("/feedbacks", async (req, res, next) => {
  try {
    const feedbacks = await Feedback.findAll();
    if (feedbacks.length > 0) {
      res.status(200).json(feedbacks);
    } else {
      res.status(404).send("Nu exista feedback-uri");
    }
  } catch (error) {
    next(error);
  }
});

// GET - Feedback-ul activitatii cu id corespunzator
router.get("/feedbacks/:idActivitate",  async (req, res, next) => {
  try {
    const feedbacks = await Feedback.findAll({ where: { idActivitate: req.params.idActivitate } });
    if (feedbacks.length > 0) {
      res.status(200).json(feedbacks);
    } else {
      res.status(404).send("idActiviate: " + req.params.idActivitate + " nu a fost gasit!");
    }
  } catch (error) {
    next(error);
  }

});

//POST - adauga feedback
router.post("/feedbacks/addFeedback", async (req, res) => {
  try {
    let result = await Feedback.create(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Feedback-ul nu a fost adaugat");
  }
});

module.exports = router;
