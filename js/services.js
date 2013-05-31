$(document).ready(function(){
	var currentService = getUrlVars()["id"];
	if (currentService != 1 && currentService != 2 && currentService != 3 && currentService != 4){
		currentService = 1;
	}
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
		if (currentService > 1) {
			currentService--;
			$('.contentBox:visible').hide("fade",200,function(){
				$("#service"+currentService).show("fade",200);
			});
		}
	});
	$("#rightscroll").click(function(){
		if (currentService < 4) {
			currentService++;
			$('.contentBox:visible').hide("fade",200,function(){
				$("#service"+currentService).show("fade",200);
			});
		}
	});
});