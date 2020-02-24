'use strict';

var IETestApp = angular.module('IETestApp', ['ui.bootstrap', 'ui.bootstrap.tpls']) //, 'ngAnimate'
.controller('IETestApp', ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {
    $scope.a = 0;
    $scope.b = 0;
    $scope.answer = function (a, b) {
        $scope.sum = a + b;
    };

    //Load Modal
    $scope.OpenCheckListModal = function () {
        var modalInstance = $uibModal.open({

            templateUrl: 'spa/views/popupView.html',
            controller: 'popupController',
            windowClass: 'modal-dialogTop',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

    };
}]);

