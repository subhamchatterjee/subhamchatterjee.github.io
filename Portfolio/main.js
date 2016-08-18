$(document).ready(function() {
    var $navButton = $('.nav-button');
    var $navbar = $('.navbar');
    $navButton.click(function() {
        if($navbar.hasClass('active')) {
            hideNavbar();
        }
        else {
            showNavbar();
        }
    });
    
    
    if($('.banner-image').height() == 600) {
        console.log("boro chobi");
        $('.banner').addClass('background');
    }
    else $('.banner').removeClass('background');
    
    $('.navlink').click(function() {
        $('.navlink').each(function() {
            $(this).removeClass('active');
            console.log("removing active class");
        });
        $(this).addClass('active');
        hideNavbar();
    });
    
    $('.type-heading').click(function() {
        if(!($(this).hasClass('active'))) {
            $('.type-heading').each(function() {
                $(this).removeClass('active');
            });
            $(this).addClass('active');
            if($(this).hasClass('skills')) {
                var SCREEN_WIDTH = $(window).width();
                $('.container').addClass('animate').css('transform', 'translateX(-' + SCREEN_WIDTH + 'px)');
                $('.skills-body').addClass('active');
                $('.bio-body').removeClass('active');
                $('.value').each(function(){
                    $(this).animate({
                        width: $(this).attr('data-percent')
                    },3000);
                });
            }
            else {
                $('.container').addClass('animate').css('transform', 'translateX(0px)');
                $('.skills-body').removeClass('active');
                $('.bio-body').addClass('active');
            }
        }
    });
});

$(window).resize(function() {
    if($('.skills').hasClass('active')) {
        var SCREEN_WIDTH = $(window).width();
        $('.container').removeClass('animate').css('transform', 'translateX(-' + SCREEN_WIDTH + 'px)');
    }
    if($('.banner-image').height() == 600) {
        console.log("boro chobi");
        $('.banner').addClass('background');
    }
    else $('.banner').removeClass('background');
});

function showNavbar() {
    $('.navbar').addClass('active');
    $('.nav-button').addClass('getdown');
    $('.nav').css('background-color', '#303030');
    $('.navicon').addClass('fa-times').removeClass('fa-bars');
}

function hideNavbar() {
    $('.navbar').removeClass('active');
    $('.nav-button').removeClass('getdown');
    $('.navicon').removeClass('fa-times').addClass('fa-bars');
}