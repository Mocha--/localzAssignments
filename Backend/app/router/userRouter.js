/**
 * backend/app/router/userRouter.js
 */

'use strict'

// =====================================
// call packages
// =====================================
var express = require("express")

// =====================================
// call models
// =====================================
var User = require('./../model/user')


var userRouter = express.Router()

userRouter
    .route('/users')
    .post(function(req, res) {
        var user = new User(req.body)
        user.customerId = user._id
        user.save(function(err) {
            if (err) {
                console.log(err)
            } else {
                res.status(201)
                    .send({
                        user: user
                    })
            }
        })
    })
    .get(function(req, res) {
        User.find(req.query, function(err, users) {
            if (err) {
                console.log(err)
            } else {
                res.send({
                    users: users
                })
            }
        })
    })

userRouter
    .route('/user/:userId')
    .get(function(req, res) {
        User.findOne({
            '_id': req.params.userId
        }, function(err, user) {
            if (err) {
                console.log(err)
            } else {
                res.send({
                    user: user
                })
            }
        })
    })
    .put(function(req, res) {
        User.findOne({
            '_id': req.params.userId
        }, function(err, user) {
            if (err) {
                console.log(err)
            } else {
                for (var key in req.body) {
                    user[key] = req.body[key]
                }
                user.save(function(err) {
                    if (err) {
                        console.log(err)
                    } else {
                        res.send({
                            user: user
                        })
                    }
                })
            }
        })
    })

module.exports = userRouter
