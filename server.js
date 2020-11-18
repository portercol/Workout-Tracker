// Require npm packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');

// Require in the 'dotenv' package to use the environment variable
require('dotenv').config();

// Set up PORT to run on whatever is available OR 3000
const PORT = process.env.PORT || 3000

// Create Express server
const app = express();

// Use logger middleware
app.use(logger("dev"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve static content for the app
app.use(express.static(__dirname + "/public"));

// Connect to mongodb
mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );  

// Routes

// Require api-routes
require("./routes/api-routes")(app)

// index HTML route loads index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"))
});
// exercise HTML route loads exercise.html
app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
});
// stats HTML route loads stats.html
app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
});

// Create server listener on PORT #
app.listen(PORT, () => {
    console.log(`App running on local host ${PORT}`);
});