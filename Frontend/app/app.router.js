/**
 * frontend/app/app.router.js
 */

"use strict"

/*
this module is for routes config
 */
angular
    .module("app.router", [
        "ui.router"
    ])
    .config(["$stateProvider",
        function($stateProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    views: {
                        // nav: {
                        //     templateUrl: ''
                        // },
                        container: {
                            templateUrl: 'app/components/home/home.html',
                            controller: 'homeCtrl'
                        }
                    }
                })
                .state("users", {
                    "url": "/users",
                    "views": {
                        "nav": {
                            "templateUrl": "app/components/nav/nav.html",
                            "controller": "navCtrl"
                        },
                        "container": {
                            "templateUrl": "app/components/user/user.html",
                            "controller": "userCtrl"
                        }
                    }
                })
                .state('events', {
                    url: '/events',
                    views: {
                        nav: {
                            templateUrl: 'app/components/nav/nav.html',
                            controller: 'navCtrl'
                        },

                        container: {
                            templateUrl: 'app/components/event/event.html',
                            controller: 'eventCtrl'
                        }
                    }
                })
        }
    ])
    .config(["$urlRouterProvider",
        function($urlRouterProvider) {
            /*
            if no routes match, direct the user to this url
             */
            $urlRouterProvider.otherwise("/")
        }
    ])
