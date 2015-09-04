/**
 * backend/server.js
 */

// use strict mode
"use strict"

// ==================================
// BASE SETUP
// ==================================
var app = require("./config/serverConfig").app
var PORT = require("./config/serverConfig").port
var db = require("./config/dbConfig")

// ==================================
// connect to database
// ==================================
db.connect()

// ==================================
// load middleware
// ==================================



// ==================================
// load routers
// ==================================
var userRouter = require('./app/router/userRouter')
var eventRouter = require('./app/router/eventRouter')


// ==================================
// apply middlewares
// ==================================



// ==================================
// apply routers
// ==================================
app.use('/api', userRouter)
app.use('/api', eventRouter)



// test path
app.get("/test", function(req, res) {
    res.send({
        "msg": "hehehe"
    })
})

app.get("/api/test", function(req, res) {
    res.send({
        "msg": "authentication succeeds!"
    })
})

app.listen(PORT, function() {
    console.log("Listen to port {}".format(PORT))
})
