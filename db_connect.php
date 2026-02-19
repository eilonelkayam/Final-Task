<?php
$host = "localhost";
$user = "dorho2_Ebeez";
$pass = "DDOO1503!!";
$dbname = "dorho2_Final_Task"; 

// יצירת חיבור
$conn = new mysqli($host, $user, $pass, $dbname);

// בדיקת חיבור
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// הגדרת קידוד לעברית תקינה
$conn->set_charset("utf8mb4");
?>
