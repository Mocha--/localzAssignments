/**
 * frontend/app/shared/commonDirective.js
 */

'use strict'

angular
    .module('app.shared.commonDirective', [])
    .directive('toggleDetail', [
        function() {
            return {
                restrict: 'A',
                scope: false,
                link: function($scope, ele, attrs) {

                    $(ele).click(function(e) {
                        var tmp = $('#' + e.target.id + 'detail').css('display')
                        $('.collapse.detail').hide()
                        if (tmp == 'none') {
                            $('#' + e.target.id + 'detail').show()
                        }
                    })
                }
            }
        }
    ])
    .directive('bodyStyle', ['$state',
        function($state) {
            return {
                restrict: 'A',
                $scope: {},
                link: function(ele) {
                    console.log($state)
                    if ($state.$current.name == 'home') {
                        $('body').removeClass('skin-blue lockscreen')
                        $('body').addClass('lockscreen')
                    } else {
                        $('body').removeClass('skin-blue lockscreen')
                        $('body').addClass('skin-blue')
                    }
                }
            }
        }
    ])
    .directive('wrapperStyle', ['$state',
        function($state) {
            return {
                restrict: 'A',
                $scope: {},
                link: function(ele) {
                    if ($state.$current.name == 'home') {
                        $('#wrapper').removeClass('wrapper lockscreen-wrapper')
                        $('#wrapper').addClass('lockscreen-wrapper')
                    } else {
                        $('#wrapper').removeClass('wrapper lockscreen-wrapper')
                        $('#wrapper').addClass('wrapper')
                    }
                }
            }
        }
    ])
    .directive('menuActive', ['$state',
        function($state) {
            return {
                restrict: 'A',
                $scope: false,
                link: function($scope, ele) {
                    $scope.curState = $state.current.name
                    $scope.$watch('curState', function(newV) {
                        $(ele).css({
                            'border-left-color': ''
                        })
                        console.log($('#' + $scope.curState + 'Menu'))
                        $('#' + $scope.curState + 'Menu').css({
                            'border-left-color': '#3C8DBC'
                        })
                    })
                }
            }
        }
    ])
