/*
public/app/shared/title.js
 */

"use strict"

/*
this module is for html title
 */
angular
    .module("app.shared.title", [])
    .factory("title", ["$rootScope",
        function($rootScope) {
            return {
                set: function(title) {
                    $rootScope.title = title
                },

                get: function() {
                    return $rootScope.title
                }
            }
        }
    ])
