var path = require("path");

const db = require("../models");

module.exports = function(app) {

  app.get("/api/config", (req, res) => {
      db.Workout.find({}).then((foundWorkouts) => {
          res.json({
              success: true,
              data: foundWorkouts,
          });
      });
  });
  //Find all workouts
  app.get("/api/workouts", (req, res) => {
      db.Workout.find({}).then((foundWorkouts) => {
          res.json(foundWorkouts);
      });
  });

  app.get("/api/workouts/range", (req, res) => {
      db.Workout.find({}).limit(7).then((foundWorkouts) => {
          res.json(foundWorkouts);
      });
  });
  //Update workout by pushing exercise into array.
  app.put("/api/workouts/:id", (req, res) => {
      const id = req.params.id;
      db.Workout.findByIdAndUpdate(id, {$push: {"exercises": req.body}},{"new": true}).then((updatedWorkout) => {
          res.json(updatedWorkout);
      });
  });
  //Create a new workout
  app.post("/api/workouts", (req, res) => {
      
      Workout.create(req.body).then(createdWorkout => {
          res.json(createdWorkout)
      }).catch(err => {
          console.log(err);
          res.json({
              error: true,
              data: null,
              message: "Unable to create new workout."
          });
      });
  });
};
