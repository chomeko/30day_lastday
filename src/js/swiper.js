$( function() {
  var swiper = new Swiper('.swiper-container', {
      speed: 400,
      autoplay:true,
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  } );
} );