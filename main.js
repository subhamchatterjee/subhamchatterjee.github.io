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
        $('.banner').addClass('background');
    }
    else $('.banner').removeClass('background');
    
    $('.navlink').click(function() {
        $('.navlink').each(function() {
            $(this).removeClass('active');
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
                showSkills();
            }
            else {
                showBio();
            }
        }
    });
    
    $('.next').click(function() {
        var $anchor = $(this).parent('div').next('div').find('a.anchor');
        console.log($anchor);
        $('html,body').animate({scrollTop: $anchor.offset().top},'slow');
    });
    
    $('.navlink').click(function() {
        var name = $(this).attr('name');
        
        if(name == 'bio' || name == 'skills') {
            $('html,body').animate({scrollTop: $('.about').offset().top},'slow');
        }
        else {
            var $anchors = $('body').children('div').each(function() {
                if($(this).hasClass(name)) {
                    $anchor = $(this);
                }
            });
            $('html,body').animate({scrollTop: $anchor.offset().top},'slow');
        }
    });
    
    $('#skills').click(function() {
        $('.bio').removeClass('active');
        $('.skills').addClass('active');
        showSkills();
    });
    
    
    $('#bio').click(function() {
        if($('.skills').hasClass('active')) {
            $('.bio').addClass('active');
            $('.skills').removeClass('active');
        }
        showBio();
    });
    
    $('.work').hover(function() {
        $(this).find('.work-text').toggleClass('active');
    });
});


$(window).resize(function() {
    if($('.skills').hasClass('active')) {
        var SCREEN_WIDTH = $(window).width();
        $('.container').removeClass('animate').css('transform', 'translateX(-' + SCREEN_WIDTH + 'px)');
    }
    if($('.banner-image').height() == 600) {
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

function showBio() {
    $('.container').addClass('animate').css('transform', 'translateX(0px)');
    $('.skills-body').removeClass('active');
    $('.bio-body').addClass('active');
}

function showSkills() {
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