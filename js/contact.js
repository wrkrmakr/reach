// JavaScript Document
$(document).ready(function(){
	$(window).load(function(){
		
		$('#form1Submit').click(function(){
			var nameTest=$('#nameResponse').html();
			var emailTest=$('#emailResponse').html();
			var messageTest=$('#messageResponse').html();
			var nameTestValue=$("#name").val();
			var emailTestValue=$("#inputEmail").val();
			var messageTestValue=$("#message").val();
			
			if(((nameTest=='') || (nameTest=null)) && ((emailTest=='') || (emailTest=null)) &&((messageTest=='') || (messageTest=				     		null))&&((nameTestValue!='') || (nameTestValue!=null))&&(nameTestValue!='')&&(emailTestValue!='')&&(messageTestValue		            !='')){
				document.form1.submit();			
			}
			
			
		});
		$('#form1Submit').hover(function(){
			$(this).css('cursor','pointer');	
		},function(){
			$(this).css('cursor','default');			
		});
		$('#name').blur(function(){
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
});