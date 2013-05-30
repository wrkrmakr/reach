$(document).ready(function(){
	var currentTreatment = getUrlVars()["id"];
	if (currentTreatment != 1 && currentTreatment != 2 && currentTreatment != 3 && currentTreatment != 4){
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
});