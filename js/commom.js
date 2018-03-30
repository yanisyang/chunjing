$(function () {
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Touch|PlayBook|SymbianOS|Windows Phone|Nokia)/))) {
        var Swiper01 = new Swiper('.swiper-container01', {
            direction: 'vertical',
            speed: 500,
            pagination: '.swiper-pagination',
            //onlyExternal: true,
            //mousewheelControl: true,
            onSlideChangeStart: function (swiper) {
                $(".head-menu  a.active").removeClass('active');
                $('.head-menu ul').children('li').eq(swiper.activeIndex).children('a').addClass('active');
                if (swiper.activeIndex == 0) {
                    $('.head').removeClass('head-bg');
                } else {
                    $('.head').addClass('head-bg');
                }
            },
            onInit: function (swiper) {
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper);
            },
        });
    } else {
        var Swiper01 = new Swiper('.swiper-container01', {
            direction: 'vertical',
            speed: 500,
            //onlyExternal: true,
            mousewheelControl: true,
            onSlideChangeStart: function (swiper) {
                $(".head-menu  a.active").removeClass('active');
                $('.head-menu ul').children('li').eq(swiper.activeIndex).children('a').addClass('active');
                if (swiper.activeIndex == 0) {
                    $('.head').removeClass('head-bg');
                } else {
                    $('.head').addClass('head-bg');
                }
            },
            onInit: function (swiper) {
                swiperAnimateCache(swiper);
                swiperAnimate(swiper);
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper);
            },
        });
    }

    $(function () {
        var Index = GetRequest().Index;
        if (Index !== undefined) {
            Swiper01.slideTo(Index);
        }
    })

    $(".head-menu a").on('touchstart mousedown', function (e) {
        e.preventDefault()
        $(".head-menu  a.active").removeClass('active');
        $(this).addClass('active');
        if ($(this).parent('li').index() == 0) {
            $('.head').removeClass('head-bg');
        } else {
            $('.head').addClass('head-bg');
        }
        Swiper01.slideTo($(this).parent('li').index());
    });
    $(".head-menu a").click(function (e) {
        e.preventDefault()
    });
    $(".swiper01-next").on('touchstart mousedown', function (e) {
        e.preventDefault();
        Swiper01.slideNext();
    });
    $(".swiper01-next").click(function (e) {
        e.preventDefault();
    });
    $('.swiper-top').on('touchstart mousedown', function (e) {
        e.preventDefault();
        Swiper01.slidePrev();
    })
    $(".swiper-top").click(function (e) {
        e.preventDefault()
    });
    $('.swiper-bottom').on('touchstart mousedown', function (e) {
        e.preventDefault();
        Swiper01.slideNext();
    });
    $(".swiper-bottom").click(function (e) {
        e.preventDefault()
    });
});
var Swiper03 = new Swiper('.swiper-container03', {
    direction: 'vertical',
    loop: true,
    autoplay: 2000,
});
var SwiperBig = new Swiper('.swiper-container-big', {
    pagination: '.df_swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 5000,
    spaceBetween: 0,
    //effect: 'fade',
    autoplayDisableOnInteraction: false,
    //onSlideChangeStart: function (swiper) {
    //    var id = swiper.activeIndex;
    //    //alert(id);
    //    $('.webkit-play').on('click', function () {
    //        var video = $(this).data('video');
    //        var videoImg = $(this).data('img');
    //        console.log(id);
    //        if (video == undefined || videoImg == undefined || video == "" || videoImg == "") {
    //            alert('没有视频！');
    //        } else {
    //            example_video_1.poster = videoImg;
    //            example_video_1.src = video;
    //            example_video.src = video;
    //            $('#df_play' + id).css({ "display": "block" });
    //        }
    //    });
    //},
    onSlideChangeEnd: function (swiper)
    {
        //var vid = swiper.activeIndex;
        //alert(id);
        $('.webkit-play').on('click', function () {
        var video = $(this).data('video');
        var videoImg = $(this).data('img');
        console.log(swiper.activeIndex);
        //if (video == undefined || videoImg == undefined || video == "" || videoImg == "") {
        //    alert('没有视频！');
        //} else {
            //example_video_1.poster = videoImg;
            //example_video_1.src = video;
            //example_video.src = video;
            $('#df_play' + swiper.activeIndex).css({ "display": "block" });
        //}
    });
    }

});

if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Touch|PlayBook|SymbianOS|Windows Phone|Nokia)/))) {
    var Swiper04 = new Swiper('.swiper-container04', {
        nextButton: '.four-button-next',
        prevButton: '.four-button-prev',
        //autoplay: 5000,
        onSlideChangeStart: function () {
            $(".swiper04-main .team-left a.active").removeClass('active');
            $(".swiper04-main .team-left a").eq(Swiper04.activeIndex).addClass('active');
        },
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
        },
    });
}
else
{
    var Swiper04 = new Swiper('.swiper-container04', {
        onSlideChangeStart: function () {
            $(".swiper04-main .team-left a.active").removeClass('active');
            $(".swiper04-main .team-left a").eq(Swiper04.activeIndex).addClass('active');
        },
        //onInit: function (swiper) {
        //    swiperAnimateCache(swiper);
        //    swiperAnimate(swiper);
        //},
        //onSlideChangeEnd: function (swiper) {
        //    swiperAnimate(swiper);
        //},
    });
}

$('.swiper04-main .team-left a').on('touchstart mousedown', function (e) {
    e.preventDefault();
    $(".swiper04-main .team-left a.active").removeClass('active');
    $(this).addClass('active');
    Swiper04.slideTo($(this).index());
});
$(".swiper04-main team-left a").click(function (e) {
    e.preventDefault()
});

if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Touch|PlayBook|SymbianOS|Windows Phone|Nokia)/)))
{
    var Swiper05 = new Swiper('.swiper-container05', {
        nextButton: '.five-button-next',
        prevButton: '.five-button-prev',
        //autoplay: 5000,
        onSlideChangeStart: function () {
            $(".swiper05-main .team-left a.active").removeClass('active');
            $(".swiper05-main .team-left a").eq(Swiper05.activeIndex).addClass('active');
            var mySwiperA = new Swiper('.team_main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                nextButton: '.team_i-coop-next',
                prevButton: '.team_i-coop-prev',
            });
        },
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.team_main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                nextButton: '.team_i-coop-next',
                prevButton: '.team_i-coop-prev',
            });
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.team_main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                nextButton: '.team_i-coop-next',
                prevButton: '.team_i-coop-prev',
            });
        },
    });
}
else
{
    var Swiper05 = new Swiper('.swiper-container05', {
        onSlideChangeStart: function () {
            $(".swiper05-main .team-left a.active").removeClass('active');
            $(".swiper05-main .team-left a").eq(Swiper05.activeIndex).addClass('active');
            var mySwiperA = new Swiper('.team_main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.team_i-coop-next',
                prevButton: '.team_i-coop-prev',
            });
        },
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.team_main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.team_i-coop-next',
                prevButton: '.team_i-coop-prev',
            });
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.team_main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.team_i-coop-next',
                prevButton: '.team_i-coop-prev',
            });
        },
    });
}

$('.swiper05-main .team-left a').on('touchstart mousedown', function (e) {
    e.preventDefault();
    $(".swiper05-main .team-left a.active").removeClass('active');
    $(this).addClass('active');
    Swiper05.slideTo($(this).index());
});
$(".swiper05-main .team-left a").click(function (e) {
    e.preventDefault()
});


if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Touch|PlayBook|SymbianOS|Windows Phone|Nokia)/))) {
    var Swiper06 = new Swiper('.swiper-container06', {
        nextButton: '.six-button-next',
        prevButton: '.six-button-prev',
        //autoplay: 5000,
        //onlyExternal: true,
        onSlideChangeStart: function () {
            $(".swiper06-main .team-left a.active").removeClass('active');
            $(".swiper06-main .team-left a").eq(Swiper06.activeIndex).addClass('active');
            var mySwiperA = new Swiper('.box2main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.i-coop-next',
                prevButton: '.i-coop-prev',
            });
        },
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.box2main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.i-coop-next',
                prevButton: '.i-coop-prev',
            });
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.box2main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.i-coop-next',
                prevButton: '.i-coop-prev',
            });
        },
    });
}
else
{
    var Swiper06 = new Swiper('.swiper-container06', {
        //onlyExternal: true,
        onSlideChangeStart: function () {
            $(".swiper06-main .team-left a.active").removeClass('active');
            $(".swiper06-main .team-left a").eq(Swiper06.activeIndex).addClass('active');
            var mySwiperA = new Swiper('.box2main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.i-coop-next',
                prevButton: '.i-coop-prev',
            });
        },
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.box2main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.i-coop-next',
                prevButton: '.i-coop-prev',
            });
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
            var mySwiperA = new Swiper('.box2main .swiper-container', {
                loop: true,
                autoplay: 3000,
                slidesPerView: 2,
                spaceBetween: 20,
                nextButton: '.i-coop-next',
                prevButton: '.i-coop-prev',
            });
        },
    });
}


$('.swiper06-main .team-left a').on('touchstart mousedown', function (e) {
    e.preventDefault();
    $(".swiper06-main .team-left a.active").removeClass('active');
    $(this).addClass('active');
    Swiper06.slideTo($(this).index());
});
$(".swiper06-main .team-left a").click(function (e) {
    e.preventDefault()
});
var CaeseSwiperSm = new Swiper('.swiper-container-cases-sm', {
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
});
var ProSwiperSm = new Swiper('.swiper-container-pro-sm', {
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
    paginationClickable: true,
    autoplayDisableOnInteraction: false,
    onInit: function (swiper) {
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd: function (swiper) {
        swiperAnimate(swiper);
    },
});
$(function () {
    $('.webkit').hover(function () {
        $(this).children('div').stop(true, true).slideToggle("slow");
    }, function () {
        $(this).children('div').stop(true, true).slideToggle("slow");
    });
    $('.online-con>div').hover(function () {
        $(this).children('div.online-modal').stop(true, true).slideToggle("slow");
    }, function () {
        $(this).children('div.online-modal').stop(true, true).slideToggle("slow");
    });
    $('div.index-cases-fixed .fixed-close').on('click', function () {
        $('div.index-cases-fixed').css({ "display": "none" });
    });
});


$(function () {
    $('div.index-cases-fixed .fixed-close01').on('click', function () {
        $('div.index-cases-fixed').css({ "display": "none" });
    });
});

function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
} 
