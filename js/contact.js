// JavaScript Document
$(document).ready(function(){
	/*$('#form1').submit(function(){
		// submit the form
		$(this).ajaxSubmit({
			//target: "#response",
			success: function(responseText, statusText, xhr, $form) {
				$('#form1').slideUp("fast");
				$("#response").append('<div id="tickCont"></div><br />');
				$("#response").append('<div style="position:relative; font-size:18px;">'+responseText+'</div>');
				$("#response").hide().slideDown("fast");
		    }
	    });
		return false;
	
		// return false to prevent normal browser submit and page navigation 
					
	});*/
	$('#form1').validate({
		rules: {
               "name":{
                   required: true,
				   minlength:2
               },
			   "inputEmail":{
                   required: true,
				   email: true
               },
			   "mailMessage":{
                   required: true
				}   
       },
       messages: {
            "name": {
                required: "<br />&nbsp;&nbsp;Please enter your full name",
				minlength: jQuery.format("At least {0} characters required")
            },
			"inputEmail": {
                required: "<br />&nbsp;&nbsp;Please enter your e-mail address",
				email: "<br />&nbsp;&nbsp;Please enter a valid e-mail address"
            },
			"mailMessage": {
                required: "<br /><br />&nbsp;&nbsp;Please send us a note"
            }
       },
	    submitHandler: function(form) {
      		$('#form1Submit').attr('value','Submitting...');
			$(form).ajaxSubmit({
				//target: "#response",
				success: function(responseText, statusText, xhr, $form) {
					$('#form1').slideUp("fast");
					$("#response").append('<div id="tickCont"></div><br />');
					$("#response").append('<div >'+responseText+'</div>');
					$("#response").hide().slideDown("fast");
					$('#form1').reset();		
				}
	    	});
			return false;
		}	
	   	
	});
});