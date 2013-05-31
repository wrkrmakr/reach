// JavaScript Document

$(document).ready(function() {
	$('#coach li img').hover(function(){
		//var currentImageId=$(this).attr('id');
		//console.log(currentImageId);
		if(currentImageId<=3){
			$(this).parent().animate({left: '+=25'},500);
		}
		if(currentImageId>3){
			$(this).parent().animate({right: '+=25'},500);
		}
	},function(){
		/*var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
			$(this).parent().animate({left: '-=25'},500);
		}
		if(currentImageId>3){
			$(this).parent().animate({right: '-=25'},500);
		}*/
		
	});
    
});