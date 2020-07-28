const db = require("../models");
const router = require("express").Router();


router.get("/api/config", (req, res) => {
    db.Workout.find({}).then((foundWorkouts) => {
        res.json({
            success: true,
            data: foundWorkouts,
        });
    });
});
//Find all workouts
router.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then((foundWorkouts) => {
        res.json(foundWorkouts);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7).then((foundWorkouts) => {
        res.json(foundWorkouts);
    });
});

//Update workout by pushing exercise into array.
router.put("/api/workouts/:id", (req, res) => {
    const id = req.params.id;
    db.Workout.findByIdAndUpdate(id, {$push: {"exercises": req.body}},{"new": true}).then((updatedWorkout) => {
        res.json(updatedWorkout);
    }).catch(err => {
        console.log(err);
        res.json({
            error: true,
            data: null,
            message: "Unable to create new workout."
        });
    });
});

//Create a new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body).then(createdWorkout => {
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

module.exports = router;