// public/app/app.js

"use strict"

/*
frontend app, the most top module
gathering all sub modules
 */
angular
    .module("localzApp", [
        "app.router",
        "app.config",
        "app.restapi",
        "app.components",
        "app.shared"
    ])
