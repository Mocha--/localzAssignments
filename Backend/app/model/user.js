/**
 * backend/app/model/user.js
 */

'use strict'

// ============================
// call packages
// ============================
var mongoose = require("mongoose")

// ============================
// schema
// ============================
var userSchema = new mongoose.Schema({
    customerId: {
        type: 'String',
        default: '',
    },

    firstName: {
        type: 'String',
        default: ''
    },

    lastName: {
        type: 'String',
        default: ''
    },

    email: {
        type: 'String',
        default: ''
    },

    mobile: {
        type: 'String',
        default: ''
    },

    location: {
        type: 'String',
        default: ''
    }
})

module.exports = mongoose.model("User", userSchema)
