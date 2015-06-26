// Script to highlight current page
$(function(){

	// for each link in the navigation
	$('.main-nav a').each(function() {
	
		// if the link of the current page is the same as the link in the window
		if ($(this).prop('href') == window.location.href) {
		
			// add the class ".current-page" to the link in the navigation
			$(this).addClass('current-page');
		}
	});
});