/**
 * frontend/app/app.restapi.js
 */

"use strict"

/*
this module is for restapi
api url should be recorded here
 */
angular
    .module("app.restapi", [])
    /*
    when nginx reverse proxy
     */
    //.constant("HOST", "http://localhost")
    /*
    when npm start, listen to 8080 port
    */
    .constant("HOST", "http://localhost:8080")
    //.constant("HOST", "http://www.brilliantcs.com.au:80")
    .factory('apiUrl', ['HOST',
        function(HOST) {
            return {
                users: function() {
                    return '{host}/api/users'.format({
                        host: HOST
                    })
                },

                user: function(params) {
                    return '{host}/api/user/{id}'.format({
                        host: HOST,
                        id: params._id
                    })
                },

                events: function() {
                    return '{host}/api/events'.format({
                        host: HOST
                    })
                },

                event: function(params) {
                    return '{host}/api/event/{id}'.format({
                        host: HOST,
                        id: params._id
                    })
                }
            }
        }
    ])
    .factory('restapi', ['$http', 'apiUrl',
        function($http, apiUrl) {
            return {
                users: {
                    get: function(params) {
                        return $http.get(apiUrl.users(), {
                            params: params
                        })
                    },

                    post: function(params) {
                        return $http.post(apiUrl.users(), params)
                    }
                },

                user: {
                    get: function(params) {
                        return $http.get(apiUrl.user(params))
                    },

                    put: function(params) {
                        return $http.put(apiUrl.user(params), params)
                    }
                },

                events: {
                    get: function(params) {
                        return $http.get(apiUrl.events(), {
                            params: params
                        })
                    },

                    post: function(params) {
                        return $http.post(apiUrl.events(), params)
                    }
                },

                event: {
                    get: function(params) {
                        return $http.get(apiUrl.event(params))
                    },

                    put: function(params) {
                        return $http.get(apiUrl.event(params), params)
                    }
                }
            }
        }
    ])
