<?php

$recepient = "xortica87@gmail.com";
$sitename = "villapini.ru";

$name = trim($_POST["fname"]);
$email = trim($_POST["email"]);
$text = trim($_POST["message"]);
$message = "Имя: $name \nEmail: $email \nСообщение: $text";

$pagetitle = "New order from site \"$sitename\"";
if($name!=""&&$email!=""&&$text!=""){
    mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
}
?>

