/*------AUTHOR: ONMEDIA.CO------*/

/*------Ready fucntion for document------*/
$(document).ready(function(){
	/*------Load fucntion for window------*/
	$(window).load(function(){
		$('#homeCarousel').carousel({
			interval: 3000
    	});
	});
	// Find matches
	var mql = window.matchMedia("(orientation: portrait)");

	// If there are matches, we're in portrait
	if(mql.matches) {  
		// Portrait orientation
		isPortrait();
	} else {
		// Landscape orientation
		isLandscape();
	}

	// Add a media query change listener
	mql.addListener(function(m) {
		if(m.matches) {
			// Changed to portrait
			isPortrait();
		}
		else {
			// Changed to landscape
			isLandscape();
		}
	});

	function isPortrait() {
		console.log("portrait");
		$("#home1").attr("src","img/About/home-Image-1-768.jpg");
		$("#home2").attr("src","img/About/home-Image-2-768.jpg");
		$("#home3").attr("src","img/About/home-Image-4-768.jpg");
	}

	function isLandscape() {
		console.log("landscape");
		$("#home1").attr("src","img/About/home-Image-1.jpg");
		$("#home2").attr("src","img/About/home-Image-2.jpg");
		$("#home3").attr("src","img/About/home-Image-4.jpg");
	}
});