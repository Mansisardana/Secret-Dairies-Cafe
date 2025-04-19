<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "order";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Sanitize input
$name = htmlspecialchars(trim($_POST["name"] ?? ''));
$drink = $_POST["drink"] ?? '';
$flavor = $_POST["flavour"] ?? '';
$size = $_POST["size"] ?? '';
$instructions = $_POST["instruction"] ?? '';
$sweetness = isset($_POST["sweetness"]) ? implode(", ", $_POST["sweetness"]) : 'No preference';
$milk = isset($_POST["milk"]) ? implode(", ", $_POST["milk"]) : 'No preference';

// Debug line (optional): print incoming POST data
// echo "<pre>"; print_r($_POST); echo "</pre>";

// Prepared statement
$stmt = $conn->prepare("INSERT INTO orders (name, drink, flavour, size, milk, sweetness, instruction) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $name, $drink, $flavor, $size, $milk, $sweetness, $instructions);

if ($stmt->execute()) {
    echo "<h2>✅ Order placed successfully, $name!</h2>";
} else {
    echo "❌ Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
