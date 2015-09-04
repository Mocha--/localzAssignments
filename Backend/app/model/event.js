/**
 * backend/app/model/event.js
 */

'use strict'

// ============================
// call packages
// ============================
var mongoose = require("mongoose")

// ============================
// schema
// ============================
var eventSchema = new mongoose.Schema({
    eventId: {
        type: 'String',
        default: '',
    },

    customerId: {
        type: 'String',
        default: '',
        required: true
    },

    eventDateTime: {
        type: 'String',
        default: ''
    },

    triggeredLocation: {
        type: 'String',
        default: ''
    },

    triggerType: {
        type: 'String',
        default: ''
    }
})

module.exports = mongoose.model("Event", eventSchema)
