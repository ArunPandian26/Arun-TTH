'use strict';

app.controller('studentdetailsCtrl',['$scope','$location','$route','$rootScope','$http','$window',
  function ($scope,$location,$route,$rootScope,$http,$window) {
       $scope.init=function(){
           $scope.staffId = localStorage.getItem("staff_iD");
           $scope.staffNm = localStorage.getItem("staff_Name");

           if($scope.staffNm ==null ||  $scope.staffNm==undefined ||  $scope.staffNm==""){             
              $location.path('/login');
              }
           else{
               $scope.staffId = localStorage.getItem("staff_iD");
               $scope.staffNm = localStorage.getItem("staff_Name");
               $scope.staffCls = localStorage.getItem("selectedClass"); 
                      $http({
                            method  : 'GET',
                            url     : "php/studentDetail.php?staffId="+$scope.staffId+"&&staffclass="+$scope.staffCls+"",
                            data    : '',
                            headers : {'Content-Type':'application/json'} 
                          }).success(function (success) {
                          $scope.values=success;

                          }).error(function (data) {
                          });                     
             }
             }
      $scope.pageredirect=function(){
          localStorage.setItem("selectedVal","");
          localStorage.setItem("selectedClass","");
         /* localStorage.setItem("subjectNm","");*/
          $location.path('/home');
             }
       $scope.logout=function(){
          $window.localStorage.clear();
          $location.path('/login');
             }
        $scope.redirect=function(){           
          $location.path('/home');
            }
  }])