// JavaScript Document
$(document).ready(function(){
	$(window).load(function(){
		
		$('#form1Submit').click(function(){
			document.form1.submit();	
		});
		$('#form1Submit').hover(function(){
			$(this).css('cursor','pointer');	
		},function(){
			$(this).css('cursor','default');			
		});	
		
	});
});