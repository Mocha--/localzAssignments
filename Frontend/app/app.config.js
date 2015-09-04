/**
 * public/app/app.config.js
 */
/* global format */

"use strict"

/*
this module is for app configuration
 */
angular
    .module("app.config", [])
    /*
    enable String.format
     */
    .config([
        function() {
            format.extend(String.prototype)
        }
    ])
    /*
    enable authInterceptor
     */
    // .config(["$httpProvider",
    //     function($httpProvider) {
    //         $httpProvider.interceptors.push("authInterceptor")
    //     }
    // ])
