$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('nav').removeClass('open');
  } else {
    $(this).addClass('active');
    $('nav').addClass('open');
  }
});
