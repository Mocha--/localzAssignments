/**
 * backend/app/router/eventRouter.js
 */

'use strict'

// =====================================
// call packages
// =====================================
var express = require("express")

// =====================================
// call models
// =====================================
var Event = require('./../model/event')


var eventRouter = express.Router()

eventRouter
    .route('/events')
    .post(function(req, res) {
        var event = new Event(req.body)
        event.eventId = event._id
        event.save(function(err) {
            if (err) {
                console.log(err)
            } else {
                res.status(201)
                    .send({
                        event: event
                    })
            }
        })
    })
    .get(function(req, res) {
        console.log(req.query)
        Event.find(req.query, function(err, events) {
            if (err) {
                console.log(err)
            } else {
                res.send({
                    events: events
                })
            }
        })
    })

eventRouter
    .route('/event/:eventId')
    .get(function(req, res) {
        Event.findOne({
            '_id': req.params.eventId
        }, function(err, event) {
            if (err) {
                console.log(err)
            } else {
                res.send({
                    event: event
                })
            }
        })
    })
    .put(function(req, res) {

    })

module.exports = eventRouter
