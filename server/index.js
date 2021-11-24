"use strict"

const express = require("express");
const activityRouter = require("./routes/activities");
const studentsRouter = require("./routes/students");
const feedbacksRouter = require("./routes/feedbacks");

const app = express();
app.use(express.json());

// Middlewares pentru rute
app.use("/api", activityRouter);
app.use("/api", studentsRouter);
app.use("/api",feedbacksRouter);

app.listen(3000,()=>{
    console.log("server started on port 3000");
});