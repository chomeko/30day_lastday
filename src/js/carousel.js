$('.question__list-item').click(function() {
  var $answer = $(this).find('.question__list-item-a');

  if($answer.hasClass('open')) {
    $answer.removeClass('open');
    // slideUpメソッドで$answerを隠す
    $answer.slideUp();
    // 子要素のspanタグの中身をtextメソッドで書き換え
    $(this).find(".question__list-item-right").toggleClass('open').addClass('plus');
  } else {
    $answer.addClass('open');
    // slideDownメソッドで$answerを表示
    $answer.slideDown();
    // 子要素のspanタグの中身をtextメソッド書き換え
    $(this).find(".question__list-item-right").toggleClass('open').removeClass('plus');
  }
});