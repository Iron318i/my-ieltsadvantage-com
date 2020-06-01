+function ($) {
    $(document).ready(function () {
	$(window).on("scroll", function () {
	    var fromTop = $(window).scrollTop();
	    $('body').toggleClass("down", (fromTop > 90));
	});
    });
}(jQuery);
