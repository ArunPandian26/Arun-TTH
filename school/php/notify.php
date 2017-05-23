<?php    
    require_once 'config.php';  
    //echo $_GET['notify'];

  $sql = "SELECT student_name,roll_no,class_no FROM tbl_student_master where id_student='".$_GET['notify']."'" ;  
  $result = $conn->query($sql);
  $sql1 = "SELECT * FROM tbl_student_master";
  $result1 = $conn->query($sql1);
  $rowcount=mysqli_num_rows($result1);
  
  //printf("Result set has %d rows.\n",$rowcount);
   //$list = array();
    if ($result->num_rows > 0) {    
        
       
        while($row = $result->fetch_assoc()) {
            $myObj = new stdClass();           
            $myObj->studentname =$row['student_name'];
            $myObj->rollno = $row['roll_no'];
            $myObj->stdId = $row['class_no'];
            $myObj->Length = $rowcount;
             $myJSON = json_encode($myObj);
             echo $myJSON;
            //$list[] = $myObj;
          }
       /* $myJSON = json_encode($list);
        echo $myJSON; */

    } else {

    }

?>