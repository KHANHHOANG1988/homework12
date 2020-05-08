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
// Set the port of our application, process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;