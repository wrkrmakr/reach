<?php
	//Clean the values
	foreach($_POST as $key => $value) {
	  if(ini_get('magic_quotes_gpc'))
	  	$_POST[$key] = stripslashes($_POST[$key]);
	    $_POST[$key] = htmlspecialchars(strip_tags($_POST[$key]));
	}
	//Putting form values in variables for easy reference 
	$name=$_POST["name"];
	$email=$_POST["inputEmail"];
	$message = $_POST["mailMessage"];                          //Actual Message
	
	//Format the email
	$to = "nijjar.login@gmail.com";
	$subject = "Mail From: ".$name." ( ".$email." )";          //Subject Line
	$from = $email ;
	$headers = "From: " . strip_tags($email) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	
	//Send mail	
	mail($to,$subject,$message,$headers);
	die( "We had recieved your e-mail. You will receive a reply shortly.");
?>