//リンククリック時のスクロール処理
$('a[href^="#"]').click(function(){
    // 移動先を50px下にずらす
    // var adjust = 50;
    // スクロールの速度
    var speed = 800; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });


//section [ PHOTOS ]
// 写真の切り替え処理
var src = "";
$(".small_image img").click(function(){
    src = $(this).attr("src");
    if($(this).hasClass("img_vertical")){
        $(".big_image img").fadeOut(
            function(){
                $(".big_image img").css("height","100%");
                $(".big_image img").attr('src',src);
                $(this).fadeIn();
            }
        );   
    }else {
        $(".big_image img").fadeOut(
            function(){
                $(".big_image img").css("height","auto");
                $(".big_image img").attr('src',src);
                $(this).fadeIn();
            }
        );
    }
});


//背景色切り替え処理
let winScrollTop = 0,startPos = 0,scroll = 0;
let main = $(".main_visual").height();
let prof = $(".profile").height();
let epi = $(".episode").height();
let work = $(".work").height();
let photo = $(".photos").height();
var windowSize = $(window).width();
$(window).scroll(function(){
    if(windowSize <= 480) {
        var scrollTop = window.pageYOffset ;   //スクロール量を取得
        if(scrollTop > 0) {
            $('body').css('background-color', '#000');
            $('body').css('transition', '1.3s');
        }
        if (scrollTop > main +60 ) {
            $('body').css('background-color', '#1c3036');
            $('body').css('transition', '1.3s');
        }
        if(scrollTop > main + prof+60) {
            $('body').css('background-color', '#1C3622');
            $('body').css('transition', '1.3s');
        }
        if(scrollTop > main + prof + epi+120) {
            $('body').css('background-color', '#1C2936');
            $('body').css('transition', '1.3s');
        }
        if(scrollTop > main + prof + epi + work+560) {
            $('body').css('background-color', '#000');
            $('body').css('transition', '1.3s');
                
        }
    }
    else {
        var scrollTop = window.pageYOffset ;   //スクロール量を取得
        if(scrollTop > 0) {
            $('body').css('background-color', '#000');
            $('body').css('transition', '1.3s');
        }
        if (scrollTop > main) {
            $('body').css('background-color', '#1c3036');
            $('body').css('transition', '1.3s');
        }
        if(scrollTop > main + prof) {
            $('body').css('background-color', '#1C3622');
            $('body').css('transition', '1.3s');
        }
        if(scrollTop > main + prof + epi) {
            $('body').css('background-color', '#1C2936');
            $('body').css('transition', '1.3s');
        }
        if(scrollTop > main + prof + epi + work) {
            $('body').css('background-color', '#000');
            $('body').css('transition', '1.3s');
        }
    }
    
});
    

//スマホメニュー展開処理
$('.btn').click(function(){
    $(".btn").fadeOut(200,function(){
        $(".close_btn").fadeIn(500);
    });
    $('.g_nav_sp').fadeIn(500);
    $('.header_sp').css({
        "background-color": "#000",
        "opacity": ".9"
    });
});
$('.close_btn').click(function(){
    $(".close_btn").fadeOut(200,function(){
        $(".btn").fadeIn(500);
    });
    $('.g_nav_sp').fadeOut(1);
    $('.header_sp').css({
        "background-color": "unset",
        "opacity": "unset"
    });
});
$('.g_nav_sp a').click(function(){
    $(".close_btn").fadeOut(200,function(){
        $(".btn").fadeIn(500);
    });
    $('.g_nav_sp').fadeOut(1);
    $('.header_sp').css({
        "background-color": "unset",
        "opacity": "unset"
    });
});
$('.header_sp .logo a').click(function(){
    $(".close_btn").fadeOut(200,function(){
        $(".btn").fadeIn(500);
    });
    $('.g_nav_sp').fadeOut(1);
    $('.header_sp').css({
        "background-color": "unset",
        "opacity": "unset"
    });
});
