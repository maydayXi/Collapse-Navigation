$(function () {
	
	$navToggle = $('.nav-toggle');
	$nav 			 = $('.nav');
	$closeBtn	 = $('.closebtn');
	var duration = 500;

	// open nav
	$navToggle.on('click', function () {
		$nav.stop(true).animate({
			width: "20%"
		}, duration);
	});

	// close nav
	$closeBtn.on('click', function () {
		$nav.stop(true).animate({
			width: 0
		}, duration);
	});

});