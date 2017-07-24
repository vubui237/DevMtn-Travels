angular.module("devmtnTravel").controller("bookedCtrl", function($scope, $stateParams, mainSrv) {
    // $scope.booked = function(ids) {
    //     $scope.info = mainSrv.packageInfo;
    //     for(var i=0;i<$scope.info.length;i++) {
    //         if($scope.info[i].id == ids) {
    //             $scope.currentCity = $scope.info[i];
    //         }
    //     }
    // }
    // $scope.booked($stateParams.id);
        $scope.currentCity = mainSrv.pullCurrentCity($stateParams.id);
})