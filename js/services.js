/*------AUTHOR: ONMEDIA.CO------*/

/*------Ready fucntion for document------*/
$(document).ready(function(){
	/*------Local Variables for ready function-----*/
	var currentService = getUrlVars()["id"];
	
	/*------Initial state for divs------*/
	if (currentService != 1 && currentService != 2 && currentService != 3 && currentService != 4){
		currentService = 1;
	}
	$('.contentBox').hide();
	$('.bgimage').hide();
	$("#service"+currentService).show();
	$("#bgimage"+currentService).show();
	
	/*------Click fucntion for each services link------*/
	$(".serviceLink").click(function(){
		if (currentService != $(this).attr('id')){
			currentService = $(this).attr('id');
			changeContent();
		}
		$(".nav-collapse").collapse('hide');
		$(".dropdown-toggle").dropdown('toggle');
	});
	
	/*------Click fucntion for left scroll button-----*/
	$("#leftscroll").click(function(){
		if (currentService > 1) {
			currentService--;
			changeContent();
		}
	});
	
	/*------Click fucntion for right scroll button-----*/
	$("#rightscroll").click(function(){
		if (currentService < 4) {
			currentService++;
			changeContent();
		}
	});
	
	/*------Hover for Arrow button-----*/
	$(".arrow").hover(function(){                                                  //Hover ON for Arrow button
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + 'Rollover.png'));
	},
	function(){																	   //Hover OFF for Arrow button
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

	/*------Function to change contect of services page-----*/
	function changeContent() {
		$('.contentBox:visible').hide("fade",200,function(){
			$("#service"+currentService).show("fade",200);
		});
		$('.bgimage:visible').hide(0,function(){
			$("#bgimage"+currentService).show("fade",400);
		});
	}
});