// JavaScript Document
$(document).ready(function(){
	$(window).load(function(){
		
		$('#form1Submit').click(function(){
			
			
			//document.form1.submit();
		});
		$('#form1Submit').hover(function(){
			$(this).css('cursor','pointer');	
		},function(){
			$(this).css('cursor','default');			
		});
		$('#name').blur(function(){
			var name=$("#name").val();
			if ((name==null || name==""))
			  {
				$('#nameResponse').html('*Name can`t be Empty');
			  }
			  else if(name.length<2){
				$('#nameResponse').html('*Atleast two characters are required');				  
			  }	
			 else{
				 $('#nameResponse').html('');				  
				 
				 
				 }			
		});
		$('#inputEmail').blur(function(){
			var name=$("#inputEmail").val();
			if ((name==null || name==""))
			  {
				$('#emailResponse').html('*E-mail can`t be Empty');
			  }
			  				
		});
		/*$('#name').focus(function(){
			$('#nameResponse').html('');
		});*/
					
	});
});