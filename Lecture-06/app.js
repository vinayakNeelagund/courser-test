(function () {
'use strict';
var x= "hello";
angular.module('myFirstapp',[])
.controller('MyFirstController',function($scope){

 $scope.name="vinayak hi"
$scope.myFunction=function(){

  return  "my name is king tiger";
};
});

})();
