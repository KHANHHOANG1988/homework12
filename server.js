// Dependencies
const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
// DB Connection 
require('dotenv/config');
const connectDB = require("./config/connectDB.js");

// Models
const db = require("./models");
// App
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
let PORT = process.env.PORT || 8080;

// Routes
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.get("/exercise", (req,res) => {
      res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
  });
  
  app.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'stats.html'));
  });


// connect to DB
connectDB()

// Start server 
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});