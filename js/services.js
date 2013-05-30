$(document).ready(function(){
	var currentService=1;
	$('.contentBox').hide();
	$("#service"+currentService).show();

	$(".serviceLink").click(function(){
		if (currentService != $(this).attr('id')){
			currentService = $(this).attr('id');
			$('.contentBox:visible').hide("fade",200,function(){
				$("#service"+currentService).show("fade",200);
			});
		}
	});
});