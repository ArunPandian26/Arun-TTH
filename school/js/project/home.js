'use strict';

app.controller('homeCtrl',['$scope','$location','$route','$rootScope','$http','$window',
  function ($scope,$location,$route,$rootScope,$http,$window) {
    
      $scope.init=function(){
          
          var staffId = localStorage.getItem("staff_iD");
          var staffNm = localStorage.getItem("staff_Name");
         $scope.SName= localStorage.getItem("staff_Name");
          if(staffNm ==null || staffNm==undefined || staffNm==""){              
              $location.path('/login');
          }else{
                  $scope.errorMsg=false;
                  $scope.showUpdate=false;
                  $scope.error=false;
                  $scope.errorSelect="Please Select Value";
     
          $scope.studClass=[{class:"Secondary 5 A"},{class:"Secondary 5 B"},{class:"Secondary 6 A"},{class:"Secondary 6 B"},{class:"Secondary 7 A"},{class:"Secondary 7 B"},{class:"Secondary 8 A"},{class:"Secondary 8 B"},{class:"Secondary 9 A"},{class:"Secondary 9 B"},{class:"Secondary 10 A"},{class:"Secondary 10 B"}];
     
     /* $http({
            method  : 'GET',
            url     : "php/subjectList.php",
            data    : '',
            headers : {'Content-Type':'application/json'} 
          }).success(function (success) {
          $scope.subject=success;
          
          }).error(function (data) {
          });*/
          }
      }
      
      $scope.studVal=function(id){         
/*          var split=id.split(',');
          var Id=split[0];
          var Name=split[1];*/
          localStorage.setItem("selectedClass", id);
          var Id=id;
           $scope.sel_class=localStorage.getItem("selectedClass");
         /* var sub_Nm=localStorage.getItem("subjectNm");
          $scope.sel_class=localStorage.getItem("selectedClass");
          alert(sub_Nm+"ss"+$scope.sel_class);*/
          /*if(sub_Nm !="" && sub_Nm!=null && sub_Nm!=undefined && $scope.sel_class !="" && $scope.sel_class!=null && $scope.sel_class!=undefined)*/
          if($scope.sel_class !="" && $scope.sel_class!=null && $scope.sel_class!=undefined){
           $http({
            method  : 'GET',
            url     : "php/studentList.php?id="+Id+"",
            data    : '',
            headers : {'Content-Type':'application/json'} 
          }).success(function (success) {
               $scope.showUpdate=true;
               $scope.studentData=success;
               $scope.len= $scope.studentData.length;
               console.log($scope.len);
              
          }).error(function (data) {
               console.log('error')
          }); 
          }
          else{
             
          }
      }
      
      $scope.update=function(data){ 
         
          var selValue = localStorage.getItem("selectedVal");
          var selClass = localStorage.getItem("selectedClass"); 
          var staffId = localStorage.getItem("staff_iD");
          /*var sub_nm = localStorage.getItem("subjectNm");*/
         
         if(selValue=="Respect") {
           
          if(data.length>=0){
              $scope.update_Data=[];
              $scope.error_data=[];
              $scope.keepGoing = true;
              angular.forEach(data,function(v,k){ 
                 
                /*  if(v.score !="" && v.score!=undefined && v.comments !="" && v.comments !=undefined)*/
                  if(((v.score !="" && v.score !=undefined)&&(v.comments==""|| v.comments==undefined))|| ((v.score =="" || v.score ==undefined)&&(v.comments!=""&& v.comments!=undefined))){
                     /* alert('score or comment is empty'+v.rollno);*/
                      // $scope.error_data.push(v.studentname);
                       $("#test"+v.rollno).append("<b style='color:orange'>Score Or Comment is Empty</b>");
                       $scope.errorMsg=true;
                       $scope.keepGoing = false;
                       var body = $("html, body");
                       body.stop().animate({scrollTop:0}, 800, 'swing', function() {                    
                });
                  }else if(((v.score !="" && v.score!=undefined) && (v.comments !="" && v.comments !=undefined))||((v.score =="" || v.score==undefined) && (v.comments =="" || v.comments ==undefined)) ){
                  console.log("if score OR BOTH EMPTY");   
                  var obj={};
                  obj.s_Class=selClass;
                  /*obj.s_sub=sub_nm;*/
                  obj.std_id=v.studentId;
                  obj.std_Roll=v.rollno;
                  obj.std_Name=v.studentname;
                  obj.value='1';                  
                  obj.std_score=v.score;                  
                  obj.comments=v.comments;                                 
                  obj.status='A';
                  obj.id_staff	=staffId;
                  
                  $scope.update_Data.push(obj)
                 // console.log($scope.update_Data);
                  }              
                  else{
                       console.log('else score');
                       $scope.errorMsg=true;
                       $scope.keepGoing = false;
                       var body = $("html, body");
                       body.stop().animate({scrollTop:0}, 800, 'swing', function() {                    
                });
                  }
             })              
              
          }
console.log($scope.error_data);
             //  console.log($scope.update_Data);
     if($scope.keepGoing) {
           $http({
            method  : 'POST',
            url     : "php/studentUpdate.php?staffid="+staffId+"&&class="+selClass+"",
            data    : $scope.update_Data,
            headers : {'Content-Type':'application/json'} 
          }).success(function (success) {
               
              $location.path('/studentdetails');
              
          }).error(function (data) {
               
          });  
     }
    }
          else{
             
              $scope.errorSelect="Please Select Value";
              //$(window).scrollTop(0);
              var body = $("html, body");
                body.stop().animate({scrollTop:0}, 800, 'swing', function() {                    
                });
              $scope.error=true;
          }
         
      }
      
      $scope.selectedValue=function(val){
           if(val=="Respect") {
               $scope.error=false;
          localStorage.setItem("selectedVal", val);
           }else{
               localStorage.setItem("selectedVal", "undefined");
               $scope.error=true;
           }
      }
      $scope.logout=function(){
          $window.localStorage.clear();
          $location.path('/login');
      }
      
      $scope.redirect=function(){
          $location.path('/home');
      }
     /* $scope.subjectVal=function(data){          
          localStorage.setItem("subjectNm",data);
          var selClass = localStorage.getItem("selectedClass"); 
          $scope.studVal(selClass);
      }*/
  }])
