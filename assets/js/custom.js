$(document).ready(function(){
	$('.rtl-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
    // autoplay:true,
	});
	$('.rtl-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical: true,
	   asNavFor: '.rtl-slider',
	   centerMode: false,
	   focusOnSelect: true
	});
});