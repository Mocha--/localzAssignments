/**
 * frontend/app/components/nav/nav.js
 */

'use strict'

angular
    .module('app.components.nav', [])
    .controller('navCtrl', ['$scope', '$state',
        function($scope, $state) {
            $scope.username = 'Admin'

            $scope.logoutClick = function() {
            	$state.go('home')
            }
        }
    ])
