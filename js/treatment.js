/*------AUTHOR: ONMEDIA.CO------*/

/*------Ready function for document------*/
$(document).ready(function(){
	/*------Local Variables for ready function-----*/
	var currentTreatment = getUrlVars()["id"];
	
	/*------Initial state for divs------*/
	if (currentTreatment != 1 && currentTreatment != 2 && currentTreatment != 3){
		currentTreatment = 1;
	}
	$('.contentBox').hide();
	$('.bgimage').hide();
	$("#treatment"+currentTreatment).show();
	$("#bgimage"+currentTreatment).show();
	
	/*------Click function for each treatment link------*/
	$(".treatmentLink").click(function(){
		if (currentTreatment != $(this).attr('id')){
			currentTreatment = $(this).attr('id');
			changeContent();
		}
		$(".nav-collapse").collapse('hide');
		$(".dropdown-toggle").dropdown('toggle');
	});
	
	/*------Click function for left scroll button-----*/
	$("#leftscroll").click(function(){
		if (currentTreatment > 1) {
			currentTreatment--;
			changeContent();
		}
	});
	
	/*------Click function for right scroll button-----*/
	$("#rightscroll").click(function(){
		if (currentTreatment < 3) {
			currentTreatment++;
			changeContent();
		}
	});
	
	/*------Hover for Arrow button-----*/
	$(".arrow").hover(function(){													 //Hover ON for Arrow button
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + 'Rollover.png'));
	},
	function(){																		 //Hover OFF for Arrow button
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + '.png'));
	});
	
	/*------Detect any key pressed from keyboard-----*/
	$(document).keydown(function(e){
	    /*------Detect if key pressed is left arrow-----*/
		if (e.keyCode == 37) { 
	        $("#leftscroll").click();
	    }
		/*------Detect if key pressed is right arrow-----*/
	  	else if (e.keyCode == 39) {
	  		$("#rightscroll").click();
	  	}
	  	return e;
	});
	
	/*------Function to get URL VARS-----*/
	function getUrlVars() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
	}
	
	/*------Function to change content of services page-----*/
	function changeContent() {
		$('.contentBox:visible').hide("fade",200,function(){
			$("#treatment"+currentTreatment).show("fade",200);
		});
		$('.bgimage:visible').hide(0,function(){
			$("#bgimage"+currentTreatment).show("fade",400);
		});
	}
});