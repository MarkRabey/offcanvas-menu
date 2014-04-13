$(document).ready(function() {
	$('#nav-toggle').on('click',function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-expanded');
	});
});