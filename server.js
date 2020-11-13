// Require npm packages
const express = require('express');
const mongoose = require('mongoose');

// Set up PORT to run on whatever is available OR 3000
const PORT = process.env.PORT || 3000

// Create Express server
const app = express();

// Parse request body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Serve static content for the app
app.use(express.static("public"));

// // routes
// app.use(require("./public/api.js"));

// Create server listener on PORT #
app.listen(PORT, () => {
    console.log(`App running on local host ${PORT}`);
});