'use strict';

app.controller('headerCtrl',['$scope','$location','$route','$rootScope','$http',
  function ($scope,$location,$route,$rootScope,$http) {
      $scope.headerinit=function(){
           $scope.logouticon=false;
         $scope.stafId = localStorage.getItem("staff_iD");
          alert($scope.stafId);
           /*if($scope.stafId !="" || $scope.stafId !=undefined || $scope.stafId !=null){
                $scope.logouticon=true;
              
          }else{
               $scope.logouticon=false;
          }*/
      }
      $scope.logout=function(){
          
      }
      
  }])