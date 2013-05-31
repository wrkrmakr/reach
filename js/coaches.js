// JavaScript Document

$(document).ready(function() {
	
	$('#coach li img').hover(function(){
		var isCoachMoving=false;
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
			$(this).parent().stop(true,false).animate({left: '+=8'},300,function(){
				isCoachMoving=true;					
			});
		}
		if(currentImageId>3) {
			$(this).parent().stop(true,false).animate({left: '-=8'},300,function(){
				isCoachMoving=true;		
			});
		}
		
	},function(){
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
				$(this).parent().stop(true,false).animate({left: '-=8'},300,function(){
					isCoachMoving = false;					
				});
			}
			if(currentImageId>3){
				$(this).parent().stop(true,false).animate({left: '+=8'},300,function(){
				isCoachMoving = false;				
				});
			}
		
	});
    
});