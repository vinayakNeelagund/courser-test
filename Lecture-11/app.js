(function () {
  'use strict';

angular.module('MsgApp',[]).controller('MsgController',MsgController);

//DIController.$inject=['$scope','$filter'];

function MsgController($scope) {
  $scope.name="vinayak";
$scope.stateOfBeing="hungry";
$scope.Vinayak=function () {
  $scope.stateOfBeing="hungry";
};
$scope.sayMessage=function () {
  return "hello this vinayak";
};

$scope.feedVinayak=function () {
  $scope.stateOfBeing="fed";
};
}

})();
