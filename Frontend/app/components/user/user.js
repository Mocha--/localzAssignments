/**
 * frontend/app/components/user/user.js
 */

'use strict'

angular
    .module('app.components.user', [])
    .controller('userCtrl', ['$scope', 'restapi', '$state',
        function($scope, restapi, $state) {
            restapi
                .users
                .get()
                .success(function(res) {
                    $scope.users = res.users
                })

            $scope.editClick = function(user) {
                restapi
                    .user
                    .put(user)
                    .success(function(res) {
                        console.log(res)
                        alert('success!')
                    })
            }

            $scope.openDetailClick = function(user) {
                restapi
                    .events
                    .get({
                        customerId: user.customerId
                    })
                    .success(function(res) {
                        console.log(res)
                        $scope.events = res.events
                    })
            }

            $scope.newEventClick = function(user) {
                $scope.newEvent = {
                    dateTime: '',
                    location: '',
                    type: '',
                    customerId: user.customerId
                }
            }

            $scope.newEventSubmit = function() {
                restapi
                    .events
                    .post({
                        eventDateTime: $scope.newEvent.dateTime,
                        triggeredLocation: $scope.newEvent.location,
                        triggerType: $scope.newEvent.type,
                        customerId: $scope.newEvent.customerId
                    })
                    .success(function(res) {
                        console.log(res)
                        restapi
                            .events
                            .get({
                                customerId: $scope.newEvent.customerId
                            })
                            .success(function(res) {
                                console.log(res)
                                $scope.events = res.events
                            })
                    })
            }

            $scope.newUserClick = function() {
                $scope.newUser = {
                    firstName: '',
                    lastName: '',
                    mobile: '',
                    email: '',
                    location: ''
                }
            }

            $scope.newUserSubmit = function() {
                restapi
                    .users
                    .post($scope.newUser)
                    .success(function(res) {
                        console.log(res)
                        $scope.users.push(res.user)
                    })
            }
        }
    ])
