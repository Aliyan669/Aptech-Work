<?php

// Connect Database
$localserver = 'localhost';
$username = 'root';
$password = '';
$database = 'form_data';

// Create connection
$conn = mysqli_connect($localserver, $username, $password, $database);

// Check connection
if ($conn) {
    echo 'Database Connected';
} else {
    echo 'Database Not Connected';
}

// Data Send to Database
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "INSERT INTO `data` (`username`, `email`, `password`) VALUES ('$name', '$email', '$password')";

    if (!empty($name) && !empty($email) && !empty($password)) {
        echo "<b> Name: </b> " . $name . "<b> Email: </b>" . $email . "<b> Password: </b>" . $password;
    } else {
        echo "Please Fill the Form";
    }

    if ($conn->query($sql) == TRUE) {
        echo "<h1> Record Succesfully Added </h1>";
    } else {
        echo "Error" . $sql . "<br>" . $conn->error;
    }

}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Handling</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="stylesheet" href="style.css">

    <style>
        .my-container {
            width: 45%;
            margin: 0px auto;
        }
    </style>
</head>

<body>
    <div class="my-container mt-5">
        <h1 class="text-center m-4">Form Handling with Datbase</h1>
        <form method="post" action="form_handling.php">
            <div class="mb-3">
                <label class="form-label">User Name</label>
                <input type="text" name="username" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" name="email" class="form-control">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" name="password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

</html>