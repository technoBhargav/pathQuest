$(document).ready(function () {
  $('.rtl-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '0px',
    fade: true,
    autoplay: true,
  });
  $('.rtl-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    asNavFor: '.rtl-slider',
    centerMode: true,
    focusOnSelect: true,
    prevArrow: false,
    nextArrow: false,
  });
  $('.empower_future').slick({
    centerMode: true,
    centerPadding: '120px',
    slidesToShow: 2,
    arrows: true,
    autoplay: true,
    dots: false,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="/assets/image/next-grey.png" alt=""></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="/assets/image/prev-grey.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 600,
        settings: {

          centerMode: true,
          slidesToShow: 1,
          centerPadding: '40px',
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
      autoplay: false,
      autoplaySpeed: 1000,
      centerPadding: '50px',
      speed: 600,
      draggable: true,
      autoplay: true,
      infinite: true,
      asNavFor: '.slider_dots',
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      fade: true,
  });
  $('.slider_dots').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonial-slider',
    arrows: false,
    autoplay: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
  });
$(".centername_slider").slick({
  variableWidth: true,
  slidesToScroll: 1,
  asNavFor: ".centerdetail_sider",
  focusOnSelect: true,
  arrows: true,
  autoplay: true,
  dots: false,
  infinite: true,
  nextArrow:
    '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="/assets/image/blueprev-grey.png" alt=""></div>',
  prevArrow:
    '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="/assets/image/bluenext-grey.png" alt=""></div>',
});
$(".centerdetail_sider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".centername_slider",
});
}); 