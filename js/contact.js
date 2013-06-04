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
                   required: true
               } 
       },
       messages: {
            "name": {
                required: "Please, enter a name"
            }
       },
	    submitHandler: function(form) {
      		$(form).ajaxSubmit({
				//target: "#response",
				success: function(responseText, statusText, xhr, $form) {
					$('#form1').slideUp("fast");
					$("#response").append('<div id="tickCont"></div><br />');
					$("#response").append('<div style="position:relative; font-size:18px;">'+responseText+'</div>');
					$("#response").hide().slideDown("fast");
				}
	    	});
			return false;
		}	
	   
		
	});
	
	/*$('#form1Submit').hover(function(){
		$(this).css('cursor','pointer');	
	},function(){
		$(this).css('cursor','default');			
	});*/

	/*$('#name').blur(function(){
		var name=$("#name").val();
		if ((name==null || name=="")){
			$('#nameResponse').html('*Name is required');
		}
		else if(name.length<2){
			$('#nameResponse').html('*Atleast two characters are required');				  
		}	
		else{
			$('#nameResponse').html('');				  
		}			
	});
	$('#inputEmail').blur(function(){
		var email=$("#inputEmail").val();
		var emailPattern=/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // email pattern
		if ((email==null || email=="")){
			$('#emailResponse').html('*E-mail is required');
		}
		else if(!(emailPattern.test(email))){
			$('#emailResponse').html('*E-mail address not valid'); 
		}
		else{
			$('#emailResponse').html('');				
		}
		  				
	});
	$('#message').blur(function(){
		var message=$("#message").val();	
		if ((message==null || message=="")){
			$('#messageResponse').html('*Message is required');
		}			
		else if(message.length<2){
			$('#messageResponse').html('*Atleast two characters are required');				  
		}
		else{
			$('#messageResponse').html('');				
		}
		  				
	});
	/*$('#name').focus(function(){
		$('#nameResponse').html('');
	});*/		
});