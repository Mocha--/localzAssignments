/**
 * backend/app/config/serverConfig.js
 */

'use strict'

// ==============================
// call packages
// ==============================

var express = require("express")
var bodyParser = require("body-parser")
var cors = require("cors")

// ==============================
// app config
// ==============================

// instance of an express application
var app = express()

// use body-parser
// bodyparser can get the params from POST request
app.use(bodyParser.urlencoded({
    "extended": true
}))
app.use(bodyParser.json())

// enable CORS
app.use(cors())

// ====================================
// extend prototype
// ====================================
require("./prototype").extend()


// which port the server will listen to
var PORT = 8080

module.exports = {
    "app": app,
    "port": PORT
}
