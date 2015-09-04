/**
 * frontend/app/components/event/event.js
 */

'use strict'

angular
    .module('app.components.event', [])
    .controller('eventCtrl', ['$scope', 'restapi',
        function($scope, restapi) {
            restapi
                .events
                .get()
                .success(function(res) {
                    $scope.events = res.events
                })

            $scope.customerIdClick = function(event) {
                $scope.openedUser = {}
                restapi
                    .user
                    .get({
                        _id: event.customerId
                    })
                    .success(function(res) {
                        $scope.openedUser = res.user
                    })
            }
        }
    ])
    .filter('moment', function() {
        return function(input) {
            return moment(input, 'DD-MM-YYYY HH:mm:ss')
        }

    })
