var db = require("../models");

module.exports = function(app) {


app.post("/api/api")

app.post("/api/exercise" ({ body }, res) => {
    User.create(body)
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });)

app.post("/api/index" ({ body }, res) => {
    User.create(body)
      .then(dbIndex => {
        res.json(dbIndex);
      })
      .catch(err => {
        res.json(err);
});

app.get("/api/stats"(req, res) => {
    db.stat.find({})
      .then(dbStat => {
        res.json(dbStat);
      })
      .catch(err => {
        res.json(err);
      });
});

app.get("/api/workout" (req, res) => {
    db.workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});