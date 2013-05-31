$(document).ready(function(){
	$(window).load(function(){
		$(".contentBox").mCustomScrollbar({theme:"dark"});
		$('#form1Submit').click(function(){
			document.form1.submit();	
		});
		$('#form1Submit').hover(function(){
			$(this).css('cursor','pointer');	
		},function(){
			$(this).css('cursor','default');			
		});	
		$('#coach li').hover(function(){
			console.log('Hi');	
					
		});	
	});
});