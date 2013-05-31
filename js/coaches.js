// JavaScript Document

$(document).ready(function() {
	$('.contentContainer').hide();	
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
				$(this).parent().stop(true,false).animate({left: '-=8'},100,function(){
					isCoachMoving = false;					
				});
			}
			if(currentImageId>3){
				$(this).parent().stop(true,false).animate({left: '+=8'},100,function(){
				isCoachMoving = false;				
				});
			}		
	});
	
	$('#coach li img').click(function(){
		var currentLeft=$(this).parent().offset().left;
		var currentRight=$(this).parent().offset().right;
		var currentImageId=$(this).attr('id');
				
		$('.contentContainer').hide('clip',400,function(){
			if(currentImageId!=5){
				$('.contentContainer').css('left',currentLeft);
				$('.contentContainer').show('clip',1000);
			}
			else{
				$('.contentContainer').css('right',currentRight);
				$('.contentContainer').show('clip',1000);
				
			}
		});
		
			
	});
    
});