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
    centerPadding: '0px',
    margin: '0px',
    slidesToShow: 3,
    arrows: true,
    dots: false,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="/assets/image/next-grey.png" alt=""></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="/assets/image/prev-grey.png" alt=""></div>',
    responsive: [
      {
        breakpoint: 991,
        settings: {

          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {

          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
});