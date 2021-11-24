const express = require("express");
const Feedback = require("../classes/Feedback");
const { feedbacks } = require("../db");
const router = express.Router();

//GET - tate feedback-urile
router.get("/feedbacks", (req, res) => {
  res.status(200).json(feedbacks);
});

//GET - Feedback-ul activitatii cu id corespunzator
router.get("/feedbacks/:idActivitate", (req, res) => {
  const feedback = feedbacks.find(
    (f) => f.idActivitate === Number(req.params.idActivitate)
  );
  console.log(feedback);
  if (feedback) {
    res.status(200).json(feedback);
  } else {
    res
      .status(404)
      .send(
        "Activitatea cu id-ul " + req.params.idActivitate + " nu a fost gasita!"
      );
  }
});

//POST - adauga feedback
router.post("/feedbacks/addFeedback", (req, res) => {
  if (!req.body.data) {
    return res.send("Nu exista data!");
  }
  if (!req.body.idActivitate) {
    return res.send("Nu exista id-ul activitatii!");
  }
  if (!req.body.emoji) {
    return res.send("Nu exista emoji!");
  }

  let feedback = new Feedback(
    req.body.data,
    req.body.idActivitate,
    req.body.emoji
  );
  feedbacks.push(feedback);
  console.log(feedback);
  return res.json(feedbacks);
});

module.exports = router;
