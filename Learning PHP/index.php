<!-- Php Stand for (Hypertext Preprocessor) -->
<!-- PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages. -->
<!-- PHP is a widely-used, free, and efficient alternative to competitors such as Microsoft's ASP. -->
<!-- Php Released in 1995  & file extension (.php) -->

<!-- Install Wamp Server (Step by Step)
https://youtu.be/M2at7D-lciw?si=pCAPj-9sHDd16y5P -->

<!-- Install wamp or xampp go to the c drive select folder wamp ya xampp create www folder on wamp server & htdocs in xampp server only-->

<!-- php Syntax  -->
<!-- <?php
?> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learning PHP</title>
</head>

<body>
    <?php

    //  Echo & Print  Working on Print the Value on Browser
    echo "Learning PHP";
    // print "Learning PHP";
    
    //  Variables (Php Variables start with $ sign) 
    
    // $Name = "Aliyan Amir";
    // $age = 19;
    // echo "My Name is " . $Name . "Age is:" . $age;
    
    //  Concatination use (.)
    
    // Single Line Comment in Php  (//)
    
    // Multi Line Comment in Php  (/*  */)
    /* 
    Multi line comment
    */

    //  Datatypes  (String, Numbers, Float, Boolean, Array, Object, Null )
    
    // String
    // $Name = "Aliyan Amir";
    // echo "My Name is ". $Name;
    
    // Integer
    // $age = 19;
    // echo "My Age is " . $age;
    
    // Float
    // $price = 99.9;
    // echo "Product Price is ". $price;
    

    // Boolean
    // $condition = false;
    // if($condition){
    //     echo "<br/>Value is True <br/>";
    // }else{
    //     echo "<br/>Value is False <br/>";
    // }
    
    // Array in Php
    
    // Index Normal Array
    // $fruits = ["Apple", "Mango", "Pineapple"];
    // echo $fruits[0];
    
    // print_r (Print the Array Value Only with index Number) 
    // print_r($fruits);
    

    // Index Array
    // $fruits = array("Apple", "Mango","Pineapple");
    // echo $fruits[0];
    
    // implode (Loop on index and return the value) 
    // echo implode("</br>", $fruits);
    
    // Associative Array
    // $data = array("Name" => "Aliyan Amir" , "Age" => 19);
    // echo "My Name is " . $data["Name"]. " Age is " . $data["Age"];
    

    ?>
</body>

</html>