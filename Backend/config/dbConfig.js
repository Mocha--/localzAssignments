/**
 * backend/app/config/dbConfig.js
 */

'use strict'

// =============================
// call packages
// =============================
var mongoose = require("mongoose")

// =============================
// define connection parameter
// =============================

var dbURI = "mongodb://localhost:27017/localz"
var options = {
    "user": "",
    "pass": ""
}

module.exports = {
    connect: function() {
        mongoose.connect(dbURI, options)
    }
}
