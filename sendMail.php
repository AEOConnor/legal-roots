<?php

// This basically says we want to use functions and objected defined in the PHPMailer module
use PHPMailer\PHPMailer\PHPMailer;

// These requires say run these files before we run this one (so they define all the functions and stuff we will need)
require __DIR__ . '/vendor/Exception.php';
require __DIR__ . '/vendor/PHPMailer.php';
require __DIR__ . '/vendor/SMTP.php';

// Okay, first we're just going make sure the request is coming from you and not someone random

// Here we're just saying only let people hit this file with a POST request (no GET, PATCH, etc...)
$method = $_SERVER['REQUEST_METHOD'];
if ($method !== 'POST') {
    http_response_code(400);
    echo "Sorry, only post requests allowed!";
    exit;
}

// Now we're going to get the post body from the request
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

if (empty($json_obj['api_key']) || $json_obj['api_key'] !== "super secret password") {
    http_response_code(400);
    echo "Sorry, wrong or absent api key!";
    exit;
}

// We create a new mailer object, and store it in a variable
// (variables in php are just words that start with "$", no need for var/let/const)
$mail = new PHPMailer();

// Here we just configure the request
$mail->IsSMTP();
$mail->SMTPAuth = true; // enable SMTP authentication
$mail->SMTPSecure = "tls"; // sets the prefix to the servier (might need ssl, or something else)
$mail->Host = "smtp.google.com"; // sets the SMTP server
$mail->Port = 587; // set the SMTP port

// The credentials for your user account go here
$mail->Username = "oconnor.alannae@gmail.com"; // email username
$mail->Password = "Phoebe208!"; // email password

// Configure the email itself here
$mail->From = "oconnor.alannae@gmail.com";
$mail->FromName = "Alanna O'Connor";
$mail->Subject = "An email from php!";
$mail->Body = "Hi,<br>This is the HTML BODY<br>"; //HTML Body
$mail->AltBody = "This is the body when user views in plain text format"; //Text Body

$mail->WordWrap = 50; // set word wrap

// Where we sending this email!?
$mail->AddAddress("oconnor.alannae@gmail.com", "Alanna O'Connor");
$mail->AddReplyTo("hello@alannaoconnor.com", "Alanna!");
// $mail->AddAttachment("/path/to/file.zip"); // attachment
// $mail->AddAttachment("/path/to/image.jpg", "new.jpg"); // attachment

// If false, your html will render as plain text
$mail->IsHTML(true); // send as HTML

if (!$mail->Send()) { // What to do if the email fails
    echo "<p>" . time() . "</p>";
    echo "<p>" . "Mailer Error: " . $mail->ErrorInfo . "</p>";
} else { // What to do if the email succeeds
    echo "<p>" . time() . "</p>";
    echo "<p>" . "Message has been sent" . "</p>";
}
