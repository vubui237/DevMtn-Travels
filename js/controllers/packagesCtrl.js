angular.module("devmtnTravel").controller("packagesCtrl", function($scope, $stateParams, mainSrv) {
    $scope.info = mainSrv.pullCurrentCountry($stateParams.country);
   if($stateParams.country==="") {
       $scope.info = mainSrv.packageInfo;
   }
    $scope.poop = 'items.id'
    
})