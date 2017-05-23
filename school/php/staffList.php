<?php    
    require_once 'config.php';  
$sql = "SELECT id_staff, staff_name from staff";
$result = $conn->query($sql);
$list = array();
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $myObj = new stdClass();
        $myObj->id =$row['id_staff'];
        $myObj->StaffName = $row['staff_name'];
//        echo "id: " . $row["id"]. " - Name: " . $row["StaffName"]. "<br>";
        $list[] = $myObj;
    }
$myJSON = json_encode($list);
echo $myJSON; 
} else {
    echo "0 results";
}
$conn->close();
?>