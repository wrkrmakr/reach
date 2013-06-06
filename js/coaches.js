// JavaScript Document

$(document).ready(function() {
	$('.contentContainer').hide();	
	var currentContainerView="";
	var currentParentDiv = $(this).parent().attr('id');
	
	$('.coach img').hover(function(){
		var isCoachMoving=false;
		var currentImageId=$(this).attr('id');
		if(currentContainerView != currentParentDiv)
		if(currentImageId<=3){
			$(this).parent().stop(true,true).animate({left: '+=1%'},500,function(){
				isCoachMoving=true;					
			});
		}
		if(currentImageId>3) {
			$(this).parent().stop(true,true).animate({left: '-=1%'},500,function(){
				isCoachMoving=true;		
			});
		}		
	},function(){
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
				$(this).parent().stop(true,true).animate({left: '-=1%'},300,function(){
					isCoachMoving = false;					
				});
			}
			if(currentImageId>3){
				$(this).parent().stop(true,true).animate({left: '+=1%'},300,function(){
				isCoachMoving = false;				
				});
			}		
	});
	var coachBio = Array();
	coachBio[0]="<h1><span class='orangeText'>GREG</span></h1><style='font-size:18px'>Greg believes that strength training provides unparalleled opportunities for physical and mental growth.  Overcoming the challenges posed by strength training inspires Greg, and he brings his passion to his clients.";
	coachBio[1]="<h1><span class='orangeText'>JACOB</span> LAY</h1>Jacob firmly believes that a healthy psychology and internal awareness are the essential components of any type  	of training. ";
	coachBio[2]="<h1><span class='orangeText'>ADENA</span> CLARFIELD</h1>Adena firmly believes that a healthy psychology and internal awareness are the essential components of any type  	of training. ";
	coachBio[3]="<h1><span class='orangeText'>BEN</span> CLARFIELD</h1>Ben believes that achieving goals is dependent on both physical and mental strength.  ";
	coachBio[4]="<h1><span class='orangeText'>HEATHER</span></h1>Clients who work with Heather receive a program customized to fit their lifestyle and needs.  ";
	
	$('.coach img').click(function(){		
		var currentLeft=$(this).parent().offset().left;
		var currentImageId=$(this).attr('id');
		var currentParentDiv = $(this).parent().attr('id');
		
		if(currentContainerView != currentParentDiv){
			if(currentImageId==1){
				$('.contentContainer').hide('fold',400,function(){
					$('.contentContainer').animate({left:currentLeft+150},200,function(){
						$('.contentContainer').show('fold',1000);						
					});
					$('.contentBox').html(coachBio[currentImageId-1]);
				});
			}
			if((currentImageId>1)&& (currentImageId<5)){
				$('.contentContainer').hide('fold',400,function(){
					$('.contentContainer').animate({left:currentLeft},200,function(){
						$('.contentContainer').show('fold',1000);						
					});
					$('.contentBox').html(coachBio[currentImageId-1]);
				});
			}
			if(currentImageId==5){
				$('.contentContainer').hide('fold',400,function(){
					$('.contentContainer').animate({left:currentLeft-70},200,function(){
						$('.contentContainer').show('fold',1000);						
					});
					$('.contentBox').html(coachBio[currentImageId-1]);
				});
			}
			currentContainerView = currentParentDiv;
		}
		
			
	});
	$(window).resize(function() {
		$('.contentContainer').hide('clip',1000);        
    });
    
});