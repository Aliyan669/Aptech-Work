<?php

$servername = "localhost";
$username = "Username";
$password = "Password";
$database = "Database_name";

// Create Connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check Connection
if ($conn) {
    echo "Database Connected Successfully";
} else {
    echo "Database Not Connected";
}

?>