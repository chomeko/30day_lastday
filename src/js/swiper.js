$( function() {
  var swiper = new Swiper('.swiper-container', {
      speed: 400,
      autoplay:true,
      loop: true,
      centeredSlides: true,
      slideToClickedSlide: true,
      slidesPerView: 2,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1180: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      },
  } );
} );