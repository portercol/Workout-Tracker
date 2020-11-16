const db = require("../models/workout");

module.exports = function (app) {

    //get all workouts
    app.get("/api/workouts", (req, res) => {
        console.log(res);
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


};