const db = require("../models/workout");

module.exports = function (app) {

    //get all workouts
    app.get("/api/workouts", (req, res) => {
        // console.log(res);
        db.Workout.find({}).then(dbWorkout => {
            dbWorkout.forEach(workout => {
                var total = 0;
                workout.exercise.forEach(e => {
                    total += e.duration;
                });
                workout.totalDuration = total;
            });
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    // continue exercise
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
};