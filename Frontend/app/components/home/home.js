/**
 * frontend/app/components/home/home.js
 */

'use strict'

angular
    .module('app.components.home', [])
    .controller('homeCtrl', ['$scope', '$state',
        function($scope, $state) {
            $scope.loginClick = function() {
                $state.go('users')
            }
        }
    ])
