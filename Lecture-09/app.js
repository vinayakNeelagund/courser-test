// (function () {
//   'use strict';
//
// angular.module('DIApp',[]).controller('DIController',DIController);
//
// DIController.$inject=['$scope','$filter'];
//
// function DIController($scope,$filter,$injector) {
//   $scope.name="vinayak";
//
//   $scope.upper=function () {
//     var upCase= $filter('uppercase');
//     $scope.name=upCase($scope.name);
\//
//   };
// }
// function AnnonateMe(name,job,blah) {
//   return "Blah";
// }
// })();
!function(){"use strict";function n(n,e,r){n.name="vinayak",n.upper=function(){var r=e("uppercase");n.name=r(n.name)}}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter"]}();
