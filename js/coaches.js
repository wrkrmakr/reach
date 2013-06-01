// JavaScript Document

$(document).ready(function() {
	$('.contentContainer').hide();	
	$('.coach img').hover(function(){
		var isCoachMoving=false;
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
			$(this).parent().stop(true,false).animate({left: '+=1%'},300,function(){
				isCoachMoving=true;					
			});
		}
		if(currentImageId>3) {
			$(this).parent().stop(true,false).animate({left: '-=1%'},300,function(){
				isCoachMoving=true;		
			});
		}
		
	},function(){
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
				$(this).parent().stop(true,false).animate({left: '-=1%'},100,function(){
					isCoachMoving = false;					
				});
			}
			if(currentImageId>3){
				$(this).parent().stop(true,false).animate({left: '+=1%'},100,function(){
				isCoachMoving = false;				
				});
			}		
	});
	var currentContainerView="";
	$('.coach img').click(function(){
		
		var currentLeft=$(this).parent().offset().left;
		var currentImageId=$(this).attr('id');
		var currentParentDiv = $(this).parent().attr('id');
		
		if(currentContainerView != currentParentDiv){
			if(currentImageId!=5){
				$('.contentContainer').hide('clip',400,function(){
					$('.contentContainer').css('left',currentLeft);
					$('.contentContainer').show('clip',1000);			
				});
			}
			if(currentImageId==5){
				$('.contentContainer').hide('clip',400,function(){
					$('.contentContainer').css('left',currentLeft-70);
					$('.contentContainer').show('clip',1000);			
				});
			}
			currentContainerView = currentParentDiv;
		}
		
			
	});
    
});