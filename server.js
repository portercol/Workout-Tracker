// Require npm packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// Set up PORT to run on whatever is available OR 3000
const PORT = process.env.PORT || 3000

// Create Express server
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve static content for the app
app.use(express.static(__dirname + "/public"));

// Routes
// index route loads index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});
// exercise route loads exercise.html
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
});
// stats route loads stats.html
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
});
// app.use(require("./routes/html-routes.js"));

// Create server listener on PORT #
app.listen(PORT, () => {
    console.log(`App running on local host ${PORT}`);
});