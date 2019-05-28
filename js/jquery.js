$(function(){
    /* window scroll */
    
    var asidebtn = $('#aside .menubtn ul.btn li');
    
    asidebtn.click(function(){
        var index = $(this).index();
        var section = $('section').eq(index);
        var offset = section.offset().top;
        
        $('body, html').animate({
            "scrollTop" : offset
        }, 500);
    });
    
    $('.scrollclick').click(function(){
        var section2offset = $('#section2').offset().top;
        
        $('body, html').animate({
            "scrollTop" : section2offset
        }, 500);
    });
    
    $(window).scroll(function(){
        var winscl = $(window).scrollTop();
        if( winscl >= $('#section2').offset().top -150){
            $('.section2top .number').addClass('active');
            $('.section2top .section2text').addClass('active');
            $('.section2bottom .dogcat').addClass('active');
    }
        
        if(winscl >= $('#section4').offset().top -150){
            $('.section4wrap ul li').eq(0).addClass('active');
        }
        if(winscl >= $('#section4').offset().top){
            $('.section4wrap ul li').eq(1).addClass('active');
        }
        if(winscl >= $('#section4').offset().top +150){
            $('.section4wrap ul li').eq(2).addClass('active');
        }
        if(winscl >= $('#section4').offset().top +300){
            $('.section4wrap ul li').eq(3).addClass('active');
        }
        if(winscl >= $('#section4').offset().top +450){
            $('.section4wrap ul li').eq(4).addClass('active');
        }
        if(winscl >= $('#section4').offset().top +600){
            $('.section4wrap ul li').eq(5).addClass('active');
        }
        
    });
    
    
    
    
    /* aside icon hover */
    
    
    $('#aside .menubtn ul li').mouseenter(function(){
       $('#aside .menubtn ul li').removeClass('active');
       $(this).addClass('active');
    });
    $('#aside .menubtn ul li').mouseleave(function(){
        $('#aside .menubtn ul li').removeClass('active');
    });
    $('#aside .menubtn ul.triger li').mouseenter(function(){
        $('#aside').animate({right:'0px'}, 300);
        $('#aside .menubtn ul.triger li').animate({
            height: '5rem'
        }, 400);
    });
    $('#aside').mouseleave(function(){
       $(this).stop().animate({right:'-90px'}, 300);
        $('#aside .menubtn ul.triger li').animate({
            height: '2rem'
        }, 400);
    });
    
    /* section1 */
    
    var count = 0;
    var timer = 0;
    var mainli = $('.frame ul li');
    
    mainli.first().show();
    $('.frame ul li.main1 .mainimg').addClass('active');
    
    timer = setInterval(main, 7000);
    
    function main(){
        count++;
        if(count==4){
            count=0;
        }
        mainli.children('div').removeClass('active');
        mainfade();
    }
    
    function mainfade(){
        mainli.fadeOut(300);
        mainli.eq(count).fadeIn(300, function(){
            mainli.eq(count).find('.mainimg').addClass('active');
        });
        
    }
    
    $('.prenex .next').click(function(){
       count++;
        if(count==4){
            count=0;
        }
        mainli.fadeOut(300);
        mainli.eq(count).fadeIn(300, function(){
            mainli.eq(count).find('.mainimg').addClass('active');
        });
        
    });
    $('.prenex .pre').click(function(){
       count--;
        if(count==0){
            count=0;
        }
        mainli.fadeOut(300);
        mainli.eq(count).fadeIn(300, function(){
            mainli.eq(count).find('.mainimg').addClass('active');
        });
        
    });
    
    $('.prenex .pre a').mouseenter(function(){
        $('.prenex .pre a span.bar1').css('transform', 'rotate(45deg)');
        $('.prenex .pre a span.bar2').css('transform', 'rotate(-45deg)');
    });
    $('.prenex .pre a').mouseleave(function(){
        $('.prenex .pre a span.bar1').css('transform', 'rotate(0deg)');
        $('.prenex .pre a span.bar2').css('transform', 'rotate(0deg)');
    });
    $('.prenex .next a').mouseenter(function(){
        $('.prenex .next a span.bar1').css('transform', 'rotate(-45deg)');
        $('.prenex .next a span.bar2').css('transform', 'rotate(45deg)');
    });
    $('.prenex .next a').mouseleave(function(){
        $('.prenex .next a span.bar1').css('transform', 'rotate(0deg)');
        $('.prenex .next a span.bar2').css('transform', 'rotate(0deg)');
    });

    
    /* section2 */
    
    
    /* section3 */
    
    $('.section3top .product > div > div').mouseover(function(){
        $('.section3top .product > div > div .proinfo').stop().animate({
            'bottom' : '-120px'
        }, 300);
        $(this).find('.proinfo').stop().animate({
            'bottom' : '0px'
        }, 300);
    });
    $('.section3top .product > div > div').mouseleave(function(){
        $('.section3top .product > div > div .proinfo').stop().animate({
            'bottom' : '-120px'
        }, 300);
    });
    
    $('.section3top .product > div').hide().first().show();
    
    $('.section3top .product ul li').eq(0).click(function(){
        $('.section3top .product ul li').removeClass('on');
        $(this).addClass('on');
        $('.section3top .product > div').hide();
        $('.section3top .product > div').eq(0).show();
    });
    $('.section3top .product ul li').eq(1).click(function(){
        $('.section3top .product ul li').removeClass('on');
        $(this).addClass('on');
        $('.section3top .product > div').hide();
        $('.section3top .product > div').eq(1).show();
    });
    
    
    /* section4 */
    
    
})

  