<?php    
    require_once 'config.php';
$rawBody = file_get_contents("php://input");
$data = json_decode($rawBody,true);
/*print_r($data); */
$email= $data['Email'];
$pwd=$data['Pwd'];
 $sql  = "SELECT * FROM tbl_teacher_master where user_Id='$email' AND password='$pwd'";
 $result = $conn->query($sql);
     $rowcount=mysqli_num_rows($result);
    /* printf("Result set has %d rows.\n",$rowcount);*/
if($rowcount==0){
    /*$msg="UserId or Password Not Matched";
    echo $msg;*/
     $myObj = new stdClass();
     $myObj->value ='true'; 
     $myJSON = json_encode($myObj);
     echo $myJSON;
}
else{
    while($row = $result->fetch_assoc()) {
        $myObj = new stdClass();
        $myObj->userId =$row['user_Id']; 
        $myObj->StaffName = $row['staff_name'];
        $myObj->staffId = $row['id_staff']; 
        $myJSON = json_encode($myObj);
        echo $myJSON;
    }
 
}



?>