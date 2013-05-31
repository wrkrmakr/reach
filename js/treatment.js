$(document).ready(function(){
	var currentTreatment = getUrlVars()["id"];
	if (currentTreatment != 1 && currentTreatment != 2 && currentTreatment != 3){
		currentTreatment = 1;
	}
	$('.contentBox').hide();
	$("#treatment"+currentTreatment).show();

	$(".treatmentLink").click(function(){
		if (currentTreatment != $(this).attr('id')){
			currentTreatment = $(this).attr('id');
			$('.contentBox:visible').hide("fade",200,function(){
				$("#treatment"+currentTreatment).show("fade",200);
			});
		}
	});

	function getUrlVars() {
	    var vars = {};
	    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
	        vars[key] = value;
	    });
	    return vars;
	}
	$(".arrow").hover(function(){
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + 'Rollover.png'));
	},
	function(){
		$(this).attr('src', ('img/Arrows/' + $(this).attr('id') + '.png'));
	});

	$("#leftscroll").click(function(){
		if (currentTreatment > 1) {
			currentTreatment--;
			$('.contentBox:visible').hide("fade",200,function(){
				$("#treatment"+currentTreatment).show("fade",200);
			});
		}
	});
	$("#rightscroll").click(function(){
		if (currentTreatment < 3) {
			currentTreatment++;
			$('.contentBox:visible').hide("fade",200,function(){
				$("#treatment"+currentTreatment).show("fade",200);
			});
		}
	});
});