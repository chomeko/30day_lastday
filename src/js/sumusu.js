$(function () {
  /* aタグをクリックしたら*/
  $('a[href^="#"]').click(function () {
    /* ヘッダーの高さ*/
    var adjust = -80;
    var speed = 500;
    /*クリックしたaタグのhref属性の値を取得*/
    var href = $(this).attr("href");
    /*hrefが'#'または空白の場合'html'をそれ以外なら変数hrefを代入*/
    var target = $(href == "#" || href == "" ? 'html' : href);
    /*変数ターゲットの位置をoffset().topで上から何pxか取得*/
    var position = target.offset().top + adjust;
    /* html,bodyはブラウザ毎に違うから*/
    /* アニメーション（{scrollTopに変数positionの位置},数値ミリ秒）*/
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    /* リンク内ページのURLに＃をつけない設定*/
    return false;
  });
});