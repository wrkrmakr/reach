$(document).ready(function(){
	$(".contentBox").mCustomScrollbar({theme:"dark"});
	$(".bgimage, #logo, #homeCarousel").click(function(){
		$(".nav-collapse").collapse('hide');
	});
});