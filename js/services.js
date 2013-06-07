$(document).ready(function(){
	var currentService = getUrlVars()["id"];
	if (currentService != 1 && currentService != 2 && currentService != 3 && currentService != 4){
		currentService = 1;
	}
	$('.contentBox').hide();
	$('.bgimage').hide();
	$("#service"+currentService).show();
	$("#bgimage"+currentService).show();

	$(".serviceLink").click(function(){
		if (currentService != $(this).attr('id')){
			currentService = $(this).attr('id');
			changeContent();
		}
	});

	$("#leftscroll").click(function(){
		if (currentService > 1) {
			currentService--;
			changeContent();
		}
	});

	$("#rightscroll").click(function(){
		if (currentService < 4) {
			currentService++;
			changeContent();
		}
	});

	$(".arrow").hover(function(){
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + 'Rollover.png'));
	},
	function(){
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + '.png'));
	});

	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	        if (currentService > 1) {
				currentService--;
				changeContent();
			}
	    }
	  	else if (e.keyCode == 39) {
	  		if (currentService < 4) {
				currentService++;
				changeContent();
			}
	  	}
	  	return e;
	});

	function getUrlVars() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
	}

	function changeContent() {
		$('.contentBox:visible').hide("fade",200,function(){
			$("#service"+currentService).show("fade",200);
		});
		$('.bgimage:visible').hide(0,function(){
			$("#bgimage"+currentService).show("fade",400);
		});
	}
});