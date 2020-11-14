module.exports = function(app) {
    // index route loads index.html
    app.get("/", (req, res) => {
        res.sendFile("./index.html")
    });
    // exercise route loads exercise.html
    app.get("/exercise", (req, res) => {
        res.sendFile("./exercise.html")
    });
    // stats route loads stats.html
    app.get("/stats", (req, res) => {
        res.sendFile("./stats.html")
    });
};