// JavaScript Document

$(document).ready(function() {
	//$('.contentContainer').hide();	
	//$('.contentBox').hide();
	
	var currentContainerView="";
	var currentParentDiv = $(this).parent().attr('id');
	
	$('.coach img').hover(function(){
		var isCoachMoving=false;
		var currentImageId=$(this).attr('id');
		$(this).css('cursor','pointer');
		if(currentContainerView != currentParentDiv)
		if(currentImageId<=3){
			$(this).parent().stop(true,true).animate({left: '+=1%'},500,function(){
				isCoachMoving=true;					
			});
		}
		if(currentImageId>3) {
			$(this).parent().stop(true,true).animate({left: '-=1%'},500,function(){
				isCoachMoving=true;		
			});
		}		
	},function(){
		$(this).css('cursor','default');
		var currentImageId=$(this).attr('id');
		if(currentImageId<=3){
				$(this).parent().stop(true,true).animate({left: '-=1%'},300,function(){
					isCoachMoving = false;					
				});
			}
			if(currentImageId>3){
				$(this).parent().stop(true,true).animate({left: '+=1%'},300,function(){
				isCoachMoving = false;				
				});
			}	
	});
	var coachBio = Array();
	coachBio[0]="<h1><span style='font-size:28px;'><span class='orangeText'>GREG</span> NOSEWORTHY</span></h1><p>Greg believes that strength training provides unparalleled opportunities for physical and mental growth.  Overcoming the challenges posed by strength training inspires Greg, and he brings his passion to his clients.</p><p>Growing up, Greg struggled to picture his future career.  Shortly after graduating he was overweight and underactive, until he began weight training.  Transforming his own life encouraged him to help others.</p><p>Greg is committed to continuing to learn and grow.  He brings his knowledge and experience to his clients, including the 2011 Pre Novice Pairs National Figure Skating Champions.  His strengths vary from physique transformation, athletic performance , and comprehensive injury rehab.</p><ul><li>PICP Level 2 Strength Coach</li><li>Biosignature&#153; Level 1</li><li>Can-Fit-Pro Personal Training Specialist</li><li>ISSN Sports Nutrition Specialist</li></ul>";
	coachBio[1]="<h1><span class='orangeText'>JACOB</span> LAY</h1><p>Jacob firmly believes that a healthy psychology and internal awareness are the essential components of any type of training. Over the last 10 years he has been actively involved in the health and fitness industry as an athlete, trainer, practitioner and teacher.</p><p>Jacob has participated in the Training in Power Academy, an energy based meditation system. Jacob joined the faculty as a teacher of the foundational program last year and currently studies at an advanced level in multiple programs, including the Master Warrior program.</p><p>As a personal trainer and strength coach he is experienced and certified to help you obtain your goals in weight loss, structural balance, muscle gain and functional strength.</p><p><span style='font-weight:bold;'>Education and Certifications:</span><ul><li>Poliquin International Certification Program (P.I.C.P.) Level I and II Strength Coach (June 2012), Poliquin Performance</li><li>Upper Body Strength Certification, Ido Portal</li><li>Modified Strongman and Energy Systems Training, Eoin Lacey</li><li>Level 7 Training in Power Practitioner and Teacher, TIP Academy</li><li>Year 7 Master Warriors, TIP Academy</li><li>Traditional Chinese Medicine Practitioner, Dipl.TCM</li><li>BioSignature&#153; Practitioner, Poliquin Performance</li><li>Flexibility Highways &#8211; Dynamic Myofascial Training System, Chuck Wolf</li><li>Personal Training Specialist, CanFit Pro</li><li>First Aid and CPR certified</li></ul>";
	coachBio[2]="<h1><span class='orangeText'>ADENA</span> CLARFIELD</h1><p>Adena is a big proponent of strength training, healthy eating and targeted supplementation.  These three initiatives have dramatically improved her health.</p><p>As a child Adena faced one illness after another &#8211; regular bouts of strep throat, sinus infections, and mononucleosis.  Since she began building muscle and utilizing BioSignature&#153;, she is stronger, healthier and happier.</p><p>The improvements to her quality of life motivated Adena, together with her husband Ben, to open Reach Personal Training.  Her goal is to empower others to feel as good as they possibly can.</p>";
	coachBio[3]="<h1><span class='orangeText'>BEN</span> CLARFIELD</h1><p>Ben believes that achieving goals is dependent on both physical and mental strength. Ben helps his clients lose fat, rehabilitate injuries, build muscle and improve their strength. Ben is a Level II P.I.C.P. regional strength coach and BioSignature practitioner. Ben has trained with Charles Poliquin, one of the top strength coaches in the world, at the Eleiko Institute in Sweden and at the Poliquin Strength Institute in Rhode Island.</p><p>Ben has always participated in physical activity. A native of Kenya, Ben played rugby, ran track and field, played semi-professional basketball, achieved Dan ranking in WTF Taekwondo, travelled to Japan to train in Taijitsu, and is a former IDF soldier.</p><p>Ben moved back to Canada for university and injured his knee playing basketball. This experience taught him the process of rehabilitation and inspired him to help others.</p><span style='font-weight:bold;'>Education and Certifications:</span><ul><li>Poliquin International Certification Program (P.I.C.P.) Level I and II Strength Coach, Poliquin Performance</li><li>Poliquin Instant Muscle Strengthening Technique (PIMST), Poliquin Performance</li><li>Upper Body Strength Certification, Ido Portal</li><li>Modified Strongman and Energy Systems Training, Eoin Lacey</li><li>Internship with Preston Greene -Head Strength and Conditioning Coach of the University of Florida Gators Men&#39;s Basketball Team</li><li>John Broz Weightlifting Seminar</li><li>BioSignature&#153; Practitioner, Poliquin Performance</li><li>Personal Training Specialist, CanFit Pro</li><li>Masters Medieval Philosophy at the University of Toronto</li></ul>";
	coachBio[4]="<h1><span class='orangeText'>HEATHER</span> CLAUS</h1><p>Clients who work with Heather receive a program customized to fit their lifestyle and needs. Heather&#39;s motto is work from the inside out to achieve your goals. She loves training clients and is a natural healer. The combination of the two is her yin and yang.</p><p>She has been in the fitness field for eleven years &#8211; personal training, educating, teaching pilates and group fitness. Her experience includes BioSignature Modulation, nutrition, strength training and flexibility/mobility.</p><p>Heather is also a fascial stretch therapist. With a background in pilates and rehab she took a stretch basics course and continued to become a certified as a Level II Fascial Stretch Therapist.</p><p>As a mother, Heather understands the challenges and the benefits of exercise and nutrition for the whole family. Heather became a personal trainer to share her passion for health with people, and give them the tools and inspiration to accomplish their fitness goals.</p><span style='font-weight:bold;'>Education and Certifications:</span><ul><li>Poliquin International Certification Program (P.I.C.P) Level I and II Strength Coach, Poliquin Performance</li><li>BioSignature&#153; Practitioner, Poliquin Performance</li><li>Biosignature&#153; CE, Poliquin Performance</li><li>FAT Tool, Poliquin Performance</li><li>Fascial Stretch Therapist Level 1 and 2, Stretch To Win</li><li>Stretch Basics, Darby Training Systems</li><li>Functional Assessment Exercise Progression, Darby Training Systems</li><li>Active Isolated Stretching, Stretching Canada</li><li>NeuroKinetic Therapy, Level 1, NKT</li><li>The Forum and Seminars, Landmark Education</li><li>Nutritionist, Precision Nutrition</li><li>Certified Pilates Mat and Integrated Movement Therapist, Second Wine Pilates</li></ul>";
	
	$('.coach img').click(function(){
		var currentImageId = $(this).attr('id');
		var currentParentDiv = $(this).parent().attr('id');
		
		if(currentContainerView != currentParentDiv){
			$('.contentContainer:visible').hide();		
			if($('#cont'+currentImageId).css('display')=='none'){
				$('#cont'+currentImageId).show('fold',400,function(){
					$(this).find(".contentBox").mCustomScrollbar("update");	
				});
			}
			else{
				$('#cont'+currentImageId).hide('fold',400);			
			}
		}
		else{
			$('#cont'+currentImageId).toggle('fold',400,function(){
				$(this).find(".contentBox").mCustomScrollbar("update");		
			});
			
		}
		currentContainerView = currentParentDiv;
		
								
		/*var currentLeft=$(this).parent().offset().left;
		var currentImageId=$(this).attr('id');
		var currentParentDiv = $(this).parent().attr('id');
		if(currentContainerView == currentParentDiv){
			$('.contentContainer').toggle('fold',400);
		}		
		if(currentContainerView != currentParentDiv){
			if(currentImageId==1){
				$('.contentBox').hide();
				$('.contentContainer').hide('fold',400,function(){
					$('.contentContainer').animate({left:currentLeft+150},200,function(){
						$('.contentBox').html(coachBio[currentImageId-1]);
						$('.contentContainer').show('fold',600,function(){
							$(".contentBox").show();
							$(".contentBox").mCustomScrollbar({theme:"dark"});								
						});						
					});					
				});
			}
			if((currentImageId>1)&& (currentImageId<5)){
				$('.contentBox').hide();
				$('.contentContainer').hide('fold',400,function(){
					$('.contentContainer').animate({left:currentLeft},200,function(){
						$('.contentBox').html(coachBio[currentImageId-1]);
						$('.contentContainer').show('fold',600,function(){
							$(".contentBox").show();
							$(".contentBox").mCustomScrollbar({theme:"dark"});								
						});						
					});					
				});
			}
			if(currentImageId==5){
				$('.contentBox').hide();
				$('.contentContainer').hide('fold',400,function(){
					$('.contentContainer').animate({left:currentLeft-70},200,function(){
						$('.contentBox').html(coachBio[currentImageId-1]);
						$('.contentContainer').show('fold',600,function(){
							$(".contentBox").show();
							$(".contentBox").mCustomScrollbar({theme:"dark"});								
						});						
					});					
				});
			}
			currentContainerView = currentParentDiv;
		}*/
	});
	/*$(window).resize(function() {
		$('.contentContainer').hide('fold',1000);        
    });*/
	$('.mCSB_container').css('padding-right','20px');    
});