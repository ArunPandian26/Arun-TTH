<?php    
    require_once 'config.php';
//echo $_GET['staffId'];
  $sql = "SELECT student_name,roll_no,id_student,score,comments FROM tbl_student_tran where id_staff='".$_GET['staffId']."' AND class_no='".$_GET['staffclass']."' " ;
  $result = $conn->query($sql);
   $list = array();
    if ($result->num_rows > 0) {    
        
       
        while($row = $result->fetch_assoc()) {
            $myObj = new stdClass();           
            $myObj->studentname =$row['student_name'];
            $myObj->rollno = $row['roll_no'];
            $myObj->stdId = $row['id_student'];
            $myObj->score = $row['score']; 
            $myObj->comments = $row['comments']; 
            $list[] = $myObj;
          }
        $myJSON = json_encode($list);
        echo $myJSON; 

    } else {

    }
?>