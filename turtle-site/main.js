$(document).ready(function () {
  $('#hero-slide').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    dotsClass:"vertical-dots",
  });

  $('#section-slide').slick({
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  });
});