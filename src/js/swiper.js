$( function() {
  var swiper = new Swiper('.swiper__container', {
      speed: 400,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: true,
      //centeredSlides: true,
      slideToClickedSlide: true,
      slidesPerView: 2.6,
      loop: true,
      loopedSlides: 6,//loopとセットで画像数
      spaceBetween: 40,
      breakpoints: {
        1050: {
          slidesPerView: 2.2,
          spaceBetween: 40,
        },
        891: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        767: {
          slidesPerView: 1.27,
          spaceBetween: 24,
        },
        374: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
      },
  });
});