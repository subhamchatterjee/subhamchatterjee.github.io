$(document).ready(function() {
    var $navButton = $('.nav-button');
    var $navbar = $('.navbar');
    $navButton.click(function() {
        if($navbar.hasClass('active')) {
            $navbar.removeClass('active');
            $navButton.removeClass('getdown');
            console.log("hiding navbar");
            $('.navicon').removeClass('fa-times').addClass('fa-bars');
        }
        else {
            $navbar.addClass('active');
            $navButton.addClass('getdown');
            $('.nav').css('background-color', '#303030');
            $('.navicon').addClass('fa-times').removeClass('fa-bars');
        }
    });
    $('.type-heading').click(function() {
        if(!($(this).hasClass('active'))) {
            $('.type-heading').each(function() {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            if($(this).hasClass('skills')) {
                var SCREEN_WIDTH = $(window).width();
                $('.container').addClass('animate');
                $('.container').css('transform', 'translateX(-' + SCREEN_WIDTH + 'px)');
                $('.skills-body').addClass('active');
                $('.bio-body').removeClass('active');
                $('.value').each(function(){
                    $(this).animate({
                        width: $(this).attr('data-percent')
                    },3000);
                });
            }
            else {
                $('.container').addClass('animate');
                $('.container').css('transform', 'translateX(0px)');
                $('.skills-body').removeClass('active');
                $('.bio-body').addClass('active');
            }
        }
    });
});

$(window).resize(function() {
    if($('.skills').hasClass('active')) {
        var SCREEN_WIDTH = $(window).width();
        $('.container').removeClass('animate');
        $('.container').css('transform', 'translateX(-' + SCREEN_WIDTH + 'px)');
    }
});