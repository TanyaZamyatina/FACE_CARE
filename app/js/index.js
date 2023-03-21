$(".header-search").hide();

$(".search").on("click", function(){
    $(".header-search").slideToggle();
});

$(document).ready(function(){
    $('#slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="arrowPrev"><i class="fa-solid fa-arrow-left"></i></div>',
        nextArrow: '<div class="arrowNext"><i class="fa-solid fa-arrow-right"></i></div>',
    });
});

$(".up-btn").on("click", function() {
	$("html, body").animate({
		scrollTop: 0
	}, 'slow');
});