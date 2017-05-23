<?php    
    require_once 'config.php';

  echo $_GET['class'];
 $contentType = explode(';', $_SERVER['CONTENT_TYPE']); // Check all available Content-Type
$rawBody = file_get_contents("php://input"); // Read body
//$data = array(); // Initialize default data array
$staff_Id=$_GET['staffid'];
$staff_class=$_GET['class'];
//echo $staff_class;
if(in_array('application/json', $contentType)) { // Check if Content-Type is JSON
  $data = json_decode($rawBody,true); // Then decode it
     $sql = "SELECT * FROM tbl_student_tran where id_staff='$staff_Id' AND class_no='$staff_class'";
    $result = $conn->query($sql);
    $rowcount=mysqli_num_rows($result);
    //printf("Result set has %d rows.\n",$rowcount);
   
   if($rowcount==0){
       foreach ($data as $row) {
     /* echo $row['s_Class'];
      echo $row['std_id'];
      echo $row['std_Roll'];
      echo $row['std_Name'];
      echo $row['std_score'];
      echo $row['comments'];
      echo $row['status'];
      echo $row['id_staff']. '<br/>';*/
      $class=$row['s_Class'];
      $Name=$row['std_Name'];
      $stdId=$row['std_id'];
      $stdRoll=$row['std_Roll'];
      $score=$row['std_score'];
      $value=$row['value'];
      $comments=$row['comments'];
      $status=$row['status'];
      $staffId=$row['id_staff'];
      /*$subject=$row['s_sub'];*/
           //echo $Name."<br/>";
         /* $date = date('Y-m-d H:i:s');
           echo $date;*/
          $sql = "INSERT INTO tbl_student_tran (student_name,roll_no,id_staff,class_no,score,value,status,comments,updated_date)VALUES ('$Name','$stdRoll','$staffId','$class','$score','$value','$status','$comments',now())";
           if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
       }
        echo "Insert Data";
       
   }else{
 foreach ($data as $row) {
     /* echo $row['s_Class'];
      echo $row['std_id'];
      echo $row['std_Roll'];
      echo $row['std_Name'];
      echo $row['std_score'];
      echo $row['comments'];
      echo $row['status'];
      echo $row['id_staff']. '<br/>';*/
      $class=$row['s_Class'];
      $Name=$row['std_Name'];
      $stdId=$row['std_id'];
      $stdRoll=$row['std_Roll'];
      $score=$row['std_score'];
      $value=$row['value'];
      $comments=$row['comments'];
      $status=$row['status'];
      $staffId=$row['id_staff'];
      /*$subject=$row['s_sub'];*/
           $sql = "UPDATE tbl_student_tran SET student_name='$Name',roll_no='$stdRoll',id_staff='$staffId',class_no='$class',score='$score',value='$value',status='$status',comments='$comments',updated_date=now() where id_student='$stdId'";
                   if ($conn->query($sql) === TRUE) {
                    echo "Record updated successfully";
                } else {
                    echo "Error updating record: " . $conn->error;
                }
   }
        echo "Update Data";
   }
        
} 
      
 else {
  parse_str($data, $data); // If not JSON, just do same as PHP default method
}

/*header('Content-Type: application/json; charset=UTF-8');
echo json_encode(array( // Return data
  'data' => $data
));*/




?>