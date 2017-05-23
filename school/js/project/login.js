'use strict';

app.controller('loginCtrl',['$scope','$location','$route','$rootScope','$http','$window',
  function ($scope,$location,$route,$rootScope,$http,$window) {
      
      $scope.test=function(){
        
           $window.localStorage.clear();
      }
      $scope.error=false;
      $scope.login=function(data){
          var obj={
              Email:data.email,
              Pwd:data.pwd
          }
          console.log(obj)
           $http({
            method  : 'POST',
            url     : "php/login.php",
            data    : obj,
            headers : {'Content-Type':'application/json'} 
          }).success(function (success) {
          
               if(success.value=='true'){
                   $scope.errormsg="userId and Password Not Matched";
                  
                   $scope.error=true;
               }
               else{
               $scope.error=false;
               $scope.userId=success.userId;
               $scope.staffName=success.StaffName;
               $scope.staffid=success.staffId;
               localStorage.setItem("staff_iD",$scope.staffid);
               localStorage.setItem("User_iD",$scope.userId);
               localStorage.setItem("staff_Name",$scope.staffName);
               $location.path('/home');
               }
              
          
          }).error(function (data) {
              
          });
      }
      
  }])