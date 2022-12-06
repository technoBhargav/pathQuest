$(document).ready(function () {
  $('.tools_int_btn').click(function(){
    $('.tools_section').toggleClass('rights');
   
    $('.pqscale > .container').toggleClass('blur');
   
    var $this = $(this);
    $this.toggleClass('btn_togg');
    if($this.hasClass('btn_togg')){
        $this.text('close '); 
        $('html, body').scrollTop($('.pqscale').offset().top);
    } else {
       $this.text('Tool Integrations');    
    }  
  });
  $('.rtl-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    centerPadding: '0px',
    fade: true,
    autoplay: true,
  });
  $('.rtl-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
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
    adaptiveHeight: false,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fa fa-arrow-next" aria-hidden="true"></i></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 1366,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 1500,
        settings: {
          centerMode: true,
          slidesToShow: 3,
          centerPadding: '40px',
        }
      }
    ]
  });
  $('.testimonial-slider').slick({
      autoplay: true,
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
    arrows: false,
    dots: false,
    infinite: false,
  });
  $('#newname-left').click(function () {
    $('.centername_slider').slick('slickPrev');
  });
  $('#namenew-right').click(function () {
    $('.centername_slider').slick('slickNext');
  });
  $(".centerdetail_sider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".centername_slider",
  });
}); 


