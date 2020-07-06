//移动端版本兼容

var jsVer = 15;
var phoneWidth = parseInt(window.screen.width);
var phoneScale = phoneWidth / 640;

var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)) {
    var version = parseFloat(RegExp.$1);
    // andriod 2.3
    if (version > 2.3) {
        document.write('<meta name="viewport" content="width=640, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
        // andriod 2.3以上
    } else {
        document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
    }
    // 其他系统
} else {
    document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}

//移动端版本兼容 end
$(function() {

    var swiper = new Swiper('.swiper-container', {
        swiper:true,
        loop : true,
        autoplay:2000,//1秒切换一次,
        autoplayDisableOnInteraction: false,
        effect: 'coverflow',
        slidesPerView: 'auto',
        loopedSlides: 3,
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 5,
            slideShadows: true
        }
    });

    // //视频
    // var url;
    // var video = $("#video");
    // var videoPop = $("#videoPop");
    // $(".video_top_box").on("click", function() {
    //     // url=$(this).attr('v-url');
    //     // video.attr('src', url);
    //     // videoPop.show();
    //     // video.get(0).play();

    var music = document.getElementById("music");    
    var player = document.getElementById("video");
    $('.btn-play').click(function(){
        $(this).hide();
        $('#video').show();
        $('#video')[0].play();
        music.pause();
        $(".btn-music").css("background","url(../images/btn-pause.png)");
    })
    $('.btn-music').click(function(){
    if(music.paused){    
        music.play();    
        $(".btn-music").css("background","url(../images/btn-music.png)"); 
        if(!player.paused){
            music.pause();
            $(".btn-music").attr("background","url(../images/btn-pause.png)"); 
    }   
    }else{    
        music.pause();    
        $(".btn-music").css("background","url(../images/btn-pause.png)");    
    } 
    })


   

$('.content4 li').click(function(){
    var idx=$(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.swi-box').eq(idx).show().siblings('.swi-box').hide();
})

    new WOW().init();

});