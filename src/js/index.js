+function ($) {
    $(document).ready(function () {
	$(window).on("scroll", function () {
	    var fromTop = $(window).scrollTop();
	    $('body').toggleClass("down", (fromTop > 90));
	});
	$("#navToggler").on('click', function () {
	    $('#top-menu-nav').slideToggle('slow');
	});
    });
}(jQuery);
