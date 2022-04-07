<?php

$conn = new mysqli("localhost", "root", "root", "Project");
if ($conn->connect_error) {
    die("Ошибка: " . $conn->connect_error);
}

$Name = $_GET['email'];
$Password = $_GET['pass'];

$sql = "SELECT * FROM student WHERE Login = '$Name' AND Password = '$Password'";

$id_student = array();

if ($result = $conn->query($sql)) {
    $i = 0;

    foreach ($result as $row) {

        $id_student[$i] = $row["Id_student"];
        $i++;
    }
    if(count($id_student)>0){
        echo "Вы авторизировались";
    }else{
        echo "Неверные данные для входа";

    }
}



