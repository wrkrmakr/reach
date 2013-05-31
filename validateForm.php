<?php
	$name=$_POST["name"];
	$email=$_POST["inputEmail"];
	
	$to = "nijjar.login@gmail.com";
	$subject = "From: ".$name."(".$email." )";
	$message = $_POST["message"];
	$from = $email;
	$headers = "From:" . $from;
	mail($to,$subject,$message,$headers);
	echo "Mail Sent.";
?> 