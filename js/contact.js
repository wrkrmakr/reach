/*------AUTHOR: ONMEDIA.CO------*/

/*------Ready fucntion for document------*/
$(document).ready(function(){
	/*------Local Variables for ready()------*/	
	var map;
	var myLatlng = new google.maps.LatLng(43.674463,-79.397993);
	
	/*------Initialising Google Maps API------*/	
	function initialize() {
		var mapOptions = {
			zoom: 14,
			center: new google.maps.LatLng(43.671783,-79.397163),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById('map'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			optimized:true
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);
	/*------Validate form using AJAX------*/	
	$('#form1').validate({
		/*------Define rules for form fields------*/
		rules: {
				"name":{
                   required: true,
				   minlength:2
               },
			   "inputEmail":{
                   required: true,
				   email: true
               },
			   "mailMessage":{
                   required: true
				}   
       },
	   /*------Custom messages for form fields------*/
       messages: {
            "name": {
                required: "<br />&nbsp;&nbsp;&nbsp;Please enter your full name",
				minlength: jQuery.format("<br />&nbsp;&nbsp;&nbsp;At least {0} characters required")
            },
			"inputEmail": {
                required: "<br />&nbsp;&nbsp;&nbsp;Please enter your e-mail address",
				email: "<br />&nbsp;&nbsp;&nbsp;Please enter a valid e-mail address"
            },
			"mailMessage": {
                required: "<br /><br />&nbsp;&nbsp;&nbsp;Please send us a note"
            }
       },
	   /*------Submit Handler for form data------*/
	    submitHandler: function(form) {
      		$('#form1Submit').attr('value','Submitting...');
			$(form).ajaxSubmit({
				//target: "#response",
				success: function(responseText, statusText, xhr, $form) {
					$('#form1').slideUp("fast");
					$("#response").append('<div id="tickCont"></div><br />');
					$("#response").append('<div >'+responseText+'</div>');
					$("#response").hide().slideDown("fast");
					$('#form1').reset();		
				}
	    	});
			return false;
		}	
	});
});