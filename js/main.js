$(document).ready(function(){
	$(".contentBox").mCustomScrollbar({theme:"dark"});
	$(".bgimage, #logo, #homeCarousel, #coach").click(function(){
		$(".nav-collapse").collapse('hide');
	});
});