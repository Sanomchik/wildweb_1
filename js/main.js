$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [
  {
    breakpoint: 1250,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 1100,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 990,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  }
  ]
});
$('.single-items').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  responsive: [
  {
    breakpoint: 900,
    settings: {
      arrows: false
    }
  }
  ]
});
$('.phonestart-footer').keypress(function() {
  if(this.value.length == 2) {
    $('.phoneend-footer').focus();
  };
});
$('.phonestart-first').keypress(function() {
  if(this.value.length == 2) {
    $('.phoneend-first').focus();
  };
});
$('.submit-button-anchor').click(function(){
       $('html, body').animate({scrollTop:$('.footer-form-submit-button').position().top}, 2000);
});
$( ".submit-button-first a" ).click(function() {
  $( ".form-bg form" ).submit();
});
$( ".footer-form-submit-button a" ).click(function() {
  $( ".footer-form form" ).submit();
});