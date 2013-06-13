/*------AUTHOR: ONMEDIA.CO------*/

/*------Ready fucntion for document------*/
$(document).ready(function() {
	/*------Local Variables for ready()------*/	
	var currentContainerView="";
	var currentParentDiv = $(this).parent().attr('id');
	
	/*------Hover for each coach image------*/
	$('.coach img').hover(function(){                           //Hover ON for each coach
		
		/*------Local Variables for hover()------*/
		var isCoachMoving=false;
		var currentImageId=$(this).attr('id');
		
		$(this).css('cursor','pointer');
		
		if(currentContainerView != currentParentDiv)
		if(currentImageId<=3){									//Move first three coaches to one direction
			$(this).parent().stop(true,true).animate({left: '+=1%'},500,function(){
				isCoachMoving=true;					
			});
		}
		if(currentImageId>3) {									//Move other coaches to other direction
			$(this).parent().stop(true,true).animate({left: '-=1%'},500,function(){
				isCoachMoving=true;		
			});
		}		
	},function(){												//Hover OFF for each coach
		$(this).css('cursor','default');
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){									//Move first three coaches to opposite direction
				$(this).parent().stop(true,true).animate({left: '-=1%'},300,function(){
					isCoachMoving = false;					
				});
			}
			if(currentImageId>3){								//Move other coaches to opposite direction
				$(this).parent().stop(true,true).animate({left: '+=1%'},300,function(){
				isCoachMoving = false;				
				});
			}	
	});	
	/*------Click for each coach image------*/
	$('.coach img').click(function(){
		/*------ Local Variables for click()------*/
		var currentImageId = $(this).attr('id');
		var currentParentDiv = $(this).parent().attr('id');
		
		if(currentContainerView != currentParentDiv){
			$('.contentContainer:visible').hide();
					
			if($('#cont'+currentImageId).css('display')=='none'){
				$('#cont'+currentImageId).show('fold',400,function(){
					$(this).find(".contentBox").mCustomScrollbar("update");	
				});
			}
			else{
				$('#cont'+currentImageId).hide('fold',400);			
			}
		}
		else{
			$('#cont'+currentImageId).toggle('fold',400,function(){
				$(this).find(".contentBox").mCustomScrollbar("update");		
			});			
		}
		currentContainerView = currentParentDiv;
	});
	$('.mCSB_container').css('padding-right','20px');    
});