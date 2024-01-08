<?php

$recepient = "apiacademy01@gmail.com";
$siteName = "apiacademy.ru";

$name = trim($_POST["user_name"]);
$phone = trim($_POST["user_phone"]);
$mail = trim($_POST["user_email"]);
$text = trim($_POST["user_text"])

$message = "Имя: $name \nПочта: $mail \nТелефон: $phone \nСообщение: $text";

$pagetitle = "Заявка с сайта (форма контактов): \"$siteName";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>