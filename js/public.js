
var navClick = 0;
function nav() {
    navClick = $('.nav-btn').attr('data-nav');
    if(navClick == 0) {
        $('.nav-box').show('fast');
        $('.nav-btn').attr('data-nav',1)
    }else {
        $('.nav-box').hide('fast');
        $('.nav-btn').attr('data-nav',0)
    }
}
var navClick1 = 0;
function navIndex(self) {
    navClick1 = $(self).attr('data-nav');
    if(navClick1 == 0) {
        $(self).siblings('div.head-menu').show('fast');
        $(self).attr('data-nav',1)
    }else {
        $(self).siblings('div.head-menu').hide('fast');
        $(self).attr('data-nav',0)
    }
}
var navSpanClick = 0;
var searchSpanClick = 0;
function navSpan(self){
    navSpanClick = $(self).attr('data-navSpan');
    if(navSpanClick == 0) {
        $('.nav-span').parents('li').children('ul').hide('fast')
        $('.nav-span').attr('data-navSpan',0);
        $('.nav-span').css({"backgroundImage":"url('/templates/default/images/span-fade.png')"});
        $(self).parents('li').children('ul').show('fast');
        $(self).attr('data-navSpan',1)
        $(self).css({ "backgroundImage": "url('/templates/default/images/span-on.png')" });
    }else {
        $(self).parents('li').children('ul').hide('fast');
        $(self).attr('data-navSpan',0);
        $(self).css({ "backgroundImage": "url('/templates/default/images/span-fade.png')" });
    }
}
function init() {
    window_w = window.screen.availWidth;
    if(window_w > 640) {
        window_w = $(window).width();
    }
    resize(0, 640, window_w);
}
function resize(min_w, max_w, window_w) {
    font_size = Math.round((window_w/max_w * 6.25)*10000)/100;
    if(window_w >= min_w && window_w <= max_w) {
        $('html').css({'font-size': font_size + "%"});
    }else if(window_w > max_w) {
        $('html').css({'font-size': "625%"});
    }
}
init();
$(window).resize(function() {
    init();
});
function IsPC() {
    isPC = true;
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Touch|PlayBook|SymbianOS|Windows Phone|Nokia)/)))
    {    //跳到手机端
        isPC = true;

    }else{
        //跳到电脑端
        isPC = false;
    }
    return isPC;
}

var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.wrap($('<div></div>').css({position:'relative', zoom:'1', border:'none', background:'none', padding:'none', margin:'none'}));
            var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
            var holder = $('<span></span>').text(txt).css({position:'absolute', left:pos.left, top:pos.top, height:h, lienHeight:h, paddingLeft:paddingleft, color:'#aaa'}).appendTo(self.parent());
            self.focusin(function(e) {
                holder.hide();
            }).focusout(function(e) {
                if(!self.val()){
                    holder.show();
                }
            });
            holder.click(function(e) {
                holder.hide();
                self.focus();
            });
        });
    }
};
$(function () {
    $('.top-nav').on('click', function (e) {
        if ($(".top-nav span i.nav-down").hasClass('nav-click1')) {
            $(".top-nav span i.nav-down").addClass('nav-click2').removeClass('nav-click1');
        } else {
            $(".top-nav span i.nav-down").addClass('nav-click1').removeClass('nav-click2');
        }
        $(".top-nav ul").slideToggle("slow");
    });
    $('.toTop').on('click', function (event) {
        $('html,body').animate({ 'scrollTop': 0 }, 'slow');
    });
    $('.online-close').on('click', function () {
        if ($(this).hasClass('Close01')) {
            $(this).addClass('Close02').removeClass('Close01');
            $(this).siblings('div.online-txt').css("display","none");
        } else {
            $(this).addClass('Close01').removeClass('Close02');
            $(this).siblings('div.online-txt').css("display", "block");
        }
        });
    //$('.online-close').on('click',function(){
    //    $(this).parent('div.online').animate({right:'-0.6rem'},'slow');
    //});
});
$(window).scroll(function() {
    var top=window.scrollY;
    if(top>=300){
        $('.toTop').css({"display":"block"});
    }else{
        $('.toTop').css({"display":"none"});
    }
});


//资讯中心 加载更多
var lockSearch = false;
function ShowNextArticle() {
    var id = $("#id").val();
    var page = parseInt($("#page").val()) + 1;
    if (!lockSearch) {
        lockSearch = true;
        $.ajax({
            type: 'POST',
            url: 'Class.aspx?action=shownextarticle&rnd=' + Math.random(),
            data: 'page=' + page + '&id=' + id,
            success: function (data) {
                $("#page").val(page);
                $("#listComment").append(data);
                lockSearch = false;
            },
            error: function () {
                $("#listComment").append("加载错误，请联系管理员！");
                lockSearch = false;
            }
        });
    }
}
