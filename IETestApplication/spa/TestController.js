'use strict';

// Mini get

IETestApp.controller('TestController', ['$scope', '$uibModalInstance', '$filter',
    function ($scope, $uibModalInstance, $filter) {

        $scope.displayErrors = function () {
            //Fill in the logic to display errors associated with each control.
        }



        $scope.ok = function () {
            $uibModalInstance.dismiss();


        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss();
        };



    }
]);


