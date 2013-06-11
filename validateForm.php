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
	$messageFromForm = $_POST["mailMessage"];                          //Actual Message
	
	//Format the email
	$to = "nijjar.login@gmail.com";
	$subject = "Mail From: ".$name." ( ".$email." )";          //Subject Line
	$from = $email ;
	$headers = "From: " . strip_tags($email) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($email) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$message = '<html><body>';
	$message .= '<table rules="all" style="border-color: #000;" cellpadding="10"> <caption style="font-weight: bold;">Inquiry Message</caption>';
	$message .= "<tr style='background: #eee;'><td><strong>From: </strong> </td><td>" . $name . "</td></tr>";
	$message .= "<tr><td><strong>Sender`s email: </strong> </td><td>" . $email . "</td></tr>";
	$message .= "<tr><td><strong>Message: </strong> </td><td>" .$messageFromForm . "</td></tr>";
	
	//Send mail	
	mail($to,$subject,$message,$headers);
	die( "We have received your e-mail. You will receive a reply shortly.<br /><br />");
?>