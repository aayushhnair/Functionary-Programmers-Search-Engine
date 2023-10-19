<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $comment = $_POST["comment"];

    $to = "avnxk3@gmail.com"; 
    $subject = "New Contact Form Submission";
    $message = "Name: $name\nEmail: $email\nComment: $comment";
\
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you for your message. We will contact you shortly.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    header("Location: contact.html"); \
?>
