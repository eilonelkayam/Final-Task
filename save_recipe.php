<?php
include 'db_connect.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
    $name = $_POST['recipe-name'];
    $cuisine = $_POST['cuisine'];
    $ingredients = $_POST['ingredients'];
    $instructions = $_POST['instructions'];
    $image = $_POST['image-url'];
    $email = $_POST['chef-email'];

    
    $sql = "INSERT INTO recipes (recipe_name, cuisine, ingredients, instructions, image_url, chef_email)
            VALUES ('$name', '$cuisine', '$ingredients', '$instructions', '$image', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "success";
    } else {
        echo "error: " . $conn->error;
    }
}
$conn->close();
?>
