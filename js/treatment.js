$(document).ready(function(){
	var currentTreatment = getUrlVars()["id"];
	if (currentTreatment != 1 && currentTreatment != 2){
		currentTreatment = 1;
	}
	$('.contentBox').hide();
	$('.bgimage').hide();
	$("#treatment"+currentTreatment).show();
	$("#bgimage"+currentTreatment).show();

	$(".treatmentLink").click(function(){
		if (currentTreatment != $(this).attr('id')){
			currentTreatment = $(this).attr('id');
			changeContent();
		}
		$(".nav-collapse").collapse('hide');
		$(".dropdown-toggle").dropdown('toggle');
	});

	$("#leftscroll").click(function(){
		if (currentTreatment > 1) {
			currentTreatment--;
			changeContent();
		}
	});
	$("#rightscroll").click(function(){
		if (currentTreatment < 2) {
			currentTreatment++;
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
	        $("#leftscroll").click();
	    }
	  	else if (e.keyCode == 39) {
	  		$("#rightscroll").click();
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
			$("#treatment"+currentTreatment).show("fade",200);
		});
		$('.bgimage:visible').hide(0,function(){
			$("#bgimage"+currentTreatment).show("fade",400);
		});
	}
});