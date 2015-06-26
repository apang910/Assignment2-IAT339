$(document).ready(function(){
	$(".about").addClass("button-clicked");
	
	// when a tab is pressed
	$(".about").click(function(){		
		$(".hero-about").animate({left: "0"});
		$(".hero-history").animate({left: "100%"});
		$(".about-container").animate({left: "0"});
		$(".history-container").animate({left: "100%"});
		$(".about").addClass("button-clicked");
		$(".history").removeClass("button-clicked");
	});
	
	$(".history").click(function(){
		$(".hero-about").animate({left: "-100%"});
		$(".hero-history").animate({left: "0"});
		$(".about-container").animate({left: "-100%"});
		$(".history-container").animate({left: "0"});
		$(".history").addClass("button-clicked");
		$(".about").removeClass("button-clicked");
	});
});