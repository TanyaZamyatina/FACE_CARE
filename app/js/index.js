$(".header-search").hide();

$(".search").on("click", function(){
    $(".header-search").slideToggle();
});

$(".mobile-menu").hide();

$(".menu").on("click", function(){
    $(".mobile-menu").slideToggle();
});

$(document).ready(function(){
    if (window.matchMedia('(max-width: 1000px)').matches) {
        $('#slider').slick({
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: '<div class="arrowPrev"><i class="fa-solid fa-arrow-left"></i></div>',
            nextArrow: '<div class="arrowNext"><i class="fa-solid fa-arrow-right"></i></div>',
        });
    } else
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

$(function($){
    $('#tel').mask("+7 (999) 999-9999");
});