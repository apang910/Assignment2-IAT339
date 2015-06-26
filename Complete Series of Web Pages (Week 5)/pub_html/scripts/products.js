$(document).ready(function(){
	$(".filter1").addClass("active-tab");
	
	// when a tab is pressed
	$(".filter1").click(function(){		
		$(".filter1-products").animate({left: "0"});
		$(".filter2-products").animate({left: "100%"});
		$(".filter3-products").animate({left: "200%"});
		$(".filter1-info").animate({left: "0"});
		$(".filter2-info").animate({left: "100%"});
		$(".filter3-info").animate({left: "200%"});
		$(".filter1").addClass("active-tab");
		$(".filter2").removeClass("active-tab");
		$(".filter3").removeClass("active-tab");
	});
	
	$(".filter2").click(function(){
		$(".filter1-products").animate({left: "-100%"});
		$(".filter2-products").animate({left: "0"});
		$(".filter3-products").animate({left: "100%"});		
		$(".filter1-info").animate({left: "-100%"});
		$(".filter2-info").animate({left: "0"});
		$(".filter3-info").animate({left: "100%"});
		$(".filter2").addClass("active-tab");
		$(".filter1").removeClass("active-tab");
		$(".filter3").removeClass("active-tab");
	});
	
	$(".filter3").click(function(){
		$(".filter1-products").animate({left: "-200%"});
		$(".filter2-products").animate({left: "-100%"});
		$(".filter3-products").animate({left: "0"});
		$(".filter1-info").animate({left: "-200%"});
		$(".filter2-info").animate({left: "-100%"});
		$(".filter3-info").animate({left: "0"});
		$(".filter3").addClass("active-tab");
		$(".filter2").removeClass("active-tab");
		$(".filter1").removeClass("active-tab");
	});
});