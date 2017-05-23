'use strict';

var app = angular.module('myApp', [     
    'ngRoute',	

]).config(['$routeProvider','$httpProvider','$locationProvider',
function ($routeProvider,$httpProvider,$locationProvider) {
    
            
  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl',
    }).when('/login', {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl',
    }).when('/studentdetails', {
      templateUrl: 'views/studentdetail.html',
      controller: 'studentdetailsCtrl',
    }).when('/notification', {
      templateUrl: 'views/notify.html',
      /*controller: 'studentdetailsCtrl',*/
    })
     .otherwise({ 
      redirectTo: '/login' 
    });
    //$locationProvider.html5Mode(true);
}]);
            

