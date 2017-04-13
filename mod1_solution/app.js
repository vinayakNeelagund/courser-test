(function () {
  'use strict';

var app=angular.module('Mod1_Assignment',[]);
var ctrl =app.controller('Module1Controller',Module1Controller);
ctrl.$inject=['$scope'];
function Module1Controller($scope) {

$scope.checkitem =   function () {
     if($scope.itemdata==null || $scope.itemdata.lenght==0 || $scope.itemdata.split(",")==""){
        $scope.display="Empty please Enter";
        $scope.color="red";
     }else{

console.log("before format"+ $scope.itemdata);
       var temp = $scope.itemdata.replace(",,",",");
console.log("after format"+ temp);

       var stringVal = temp.split(',');



// var temp[];
// for(var a=0 ; a<len ; a++ ){
// console.log("val in "+a+" is :"+stringVal[a]);
//
//     if (( stringVal[a] === undefined ||  stringVal[a] <= 0) ){
//
// console.log("epty val is "+a+"  count is :"+stringVal[a]);
// temp.push(a);
// count ++;
//     }else{
//
//     }






              if(stringVal.length<=3){
                    $scope.display="Enjoy ...";
                    $scope.color="green";

                  } else{
                      $scope.display="Too much ...";
                      $scope.color="red";
                    }
                  }
  };


}




})();

/*

(function () {
  'use strict';

var app=angular.module('Mod1_Assignment',[]);
var ctrl =app.controller('Module1Controller',Module1Controller);
ctrl.$inject=['$scope'];
function Module1Controller($scope) {

$scope.checkitem =   function () {
     if($scope.itemdata==null || $scope.itemdata.lenght==0 || $scope.itemdata.split(",")==""){
        $scope.display="Empty please Enter";
        $scope.color="red";
     }else{
       var string = $scope.itemdata.split(',');
              if(string.length<=3){
                    $scope.display="Enjoy ...";
                    $scope.color="green";

                  } else{
                      $scope.display="Too much ...";
                      $scope.color="red";
                    }
                  }
  };


}




})();


*/
