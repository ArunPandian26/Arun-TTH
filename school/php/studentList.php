<?php    
    require_once 'config.php'; 
 
  $sql = "SELECT student_name,roll_no,id_student FROM tbl_student_tran where class_no='".$_GET['id']."' " ;
  $result = $conn->query($sql);
  $rowcount=mysqli_num_rows($result);
  //printf("Result set has %d rows.\n",$rowcount);
 if($rowcount==0){
     //echo "inside";
     $sql = "SELECT student_name,roll_no,id_student FROM tbl_student_master where class_no='".$_GET['id']."' " ;
       $result = $conn->query($sql);
     $list = array();
    if ($result->num_rows > 0) {    
        
       
        while($row = $result->fetch_assoc()) {
             $myObj = new stdClass();           
            $myObj->studentname =$row['student_name'];
            $myObj->rollno = $row['roll_no'];
            $myObj->studentId = $row['id_student'];            
            $list[] = $myObj;
   

    }
//        $myJSON = json_encode(array ($arr));
//echo $myJSON; 
     
$myJSON = json_encode($list);
echo $myJSON; 

    } else {

    }
 }
else{
     //echo "out";
     $sql = "SELECT student_name,roll_no,id_student,class_no,score,comments FROM tbl_student_tran where class_no='".$_GET['id']."' " ;
       $result = $conn->query($sql);
     $list = array();
    if ($result->num_rows > 0) {    
        
       
        while($row = $result->fetch_assoc()) {
             $myObj = new stdClass();           
            $myObj->studentname =$row['student_name'];
            $myObj->rollno = $row['roll_no'];
            $myObj->studentId = $row['id_student'];
            $myObj->classno = $row['class_no'];
            $myObj->score = $row['score'];
            $myObj->comments = $row['comments'];            
            $list[] = $myObj;

    }
        $myJSON = json_encode($list);
echo $myJSON; 

    } else {

    }
}



?>