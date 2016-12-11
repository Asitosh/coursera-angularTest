(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.lunchMenu = "";

  $scope.checkLunch = function () {
    if($scope.lunchMenu==""){
      $scope.message ="Please enter data first";
    }else {
      if($scope.lunchMenu.split(",").length>0&&$scope.lunchMenu.split(",").length<=3){
        $scope.message ="Enjoy!";
      }else {
        $scope.message ="Too much!";
      }
    }
    //console.console.log("fucYOU");
  };


}

})();
