"use strict"

const express = require("express");
const sequelize = require("./config/sequelize");
const app = express();
app.use(
    express.urlencoded({
      extended: true,
    })
  );
app.use(express.json());

const activityRouter = require("./routes/activities");
const studentsRouter = require("./routes/students");
const feedbacksRouter = require("./routes/feedbacks");
const professorsRouter = require("./routes/professors");
const Activity = require("./models/activity");
const Feedback = require("./models/feedback");
const Professor = require("./models/professor");

// Middlewares pentru rute
app.use("/api", activityRouter);
app.use("/api", studentsRouter);
app.use("/api",feedbacksRouter);
app.use("/api",professorsRouter);

//Relatii intre entitati
Activity.hasMany(Feedback);
Feedback.belongsTo(Activity);

Professor.hasMany(Activity);
Activity.belongsTo(Professor);


app.listen(3000,()=>{
    console.log("server started on port 3000");
});