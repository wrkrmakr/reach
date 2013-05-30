$(document).ready(function(){
	var currentTreatment=1;
	$('.contentBox').hide();
	$("#treatment"+currentTreatment).show();

	$(".serviceLink").click(function(){
		if (currentTreatment != $(this).attr('id')) {
			currentTreatment = $(this).attr('id');
			$('.contentBox:visible').hide("fade",200,function(){
				$("#treatment"+currentTreatment).show("fade",200);
			});
		}
	});
});