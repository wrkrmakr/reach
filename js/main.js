$(document).ready(function(){
	$(".contentBox").mCustomScrollbar({theme:"dark"});
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