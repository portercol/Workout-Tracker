const db = require("../models/workout");

module.exports = function (app) {

    //get all workouts
    app.get("/api/workouts", (req, res) => {
        console.log(res);
    });


};