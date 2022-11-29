/* Scroll Down Start  */
$(document).ready(function(){
  $(".ct-btn-scroll").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
  $('.HomeBanner').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: false,
    prevArrow: false,
  });
  $('.client').slick({
    dots: true,
    speed: 1000,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: false,
    prevArrow: false,
  });
  $('.service_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    variableWidth: false,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    dots: false,
    speed: 500,
    infinite: true,
    autoplaySpeed: 5000,
    // autoplay: true,
    nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="/assets/image/next-grey.png" alt=""></div>',
    prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="/assets/image/prev-grey.png" alt=""></div>',
              responsive: [                        
              {
                breakpoint: 760,settings: {
                slidesToShow: 1,centerMode: true}
              },
              {
                breakpoint: 1154,settings: {
                slidesToShow: 3,centerMode: true}
              },
          ]
  });
  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
    {
    breakpoint: 768,
    settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
    }
    },
    {
    breakpoint: 480,
    settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
    }
    }
    ]
    });
    $('.insights-slider').slick({
      dots: true,
      speed: 1000,
      infinite: true,
      // autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: false,
      prevArrow: false,
    });
      $("#scroll_top").click(function(event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
      });
      $('.togg').click(function(){
        $(this).next('.dropdown-menu').toggleClass('show');
      });
      $('.navbar-toggler').click(function () { 
          $('body').toggleClass('overflow-hidden');
          $('.dropdown-menu').removeClass('show');
      });
    
});




         
$('input,textarea').val("");
$('.form-group input, .form-group textarea').focusout(function() {
  var text_val = $(this).val();
  if (text_val === "") {
    console.log("empty!");
    $(this).removeClass('has-value');
  } else {
    $(this).addClass('has-value');
  }
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll_top").style.display = "block";
  } else {
    document.getElementById("scroll_top").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
 

$('.count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 150) {
    $('#header').addClass("sticky-top");
  } else { 
    $('#header').removeClass("sticky-top");
  }
});

