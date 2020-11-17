// Require in the model folder with the Workout model within
const db = require("../models");

module.exports = function (app) {

    // Get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    // Continue exercise
    app.put("/api/workouts/:id", (req, res) => {

        // Find workout using ID and update it
        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });

    // Create new workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

    // Get stats from workouts
    app.get("/api/workouts/range", (req, res) => {
        // Finding a workout and returning the stats
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });
    });

};