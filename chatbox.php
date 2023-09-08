<?php
$host = "localhost"; 
$username = "root"; 
$password = "";
$database = "vent";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM data";
$result = $conn->query($sql);

if ($result) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }

    $result->free();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
