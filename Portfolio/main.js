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
    
    $('#skills').click(function() {
        $.fn.gotoAnchor = function(anchor) {
            location.href = '#about';
        }
        $('#about').gotoAnchor();
        $('.bio').removeClass('active');
        $('.skills').addClass('active');
        showSkills();
    });
    
    
    $('#bio').click(function() {
        $.fn.gotoAnchor = function(anchor) {
            location.href = '#about';
        }
        $('#about').gotoAnchor();
        if($('.skills').hasClass('active')) {
            $('.bio').addClass('active');
            $('.skills').removeClass('active');
        }
        showBio();
    });
    
    var jiffiImages = ["jiffi.png", "jiffi2.png", "jiffi_mob.png", "jiffi_mob2.png"];
    var radiobeatsImages = ["radiobeats.png", "radiobeats2.png", "radiobeats3.png"];
    var scoringtoolImages = ["scoringtool.png", "scoringtool_mob.png"];
    var wiseweImages = ["wisewe.png", "wisewe2.png", "wisewe_mob.png"];
    var sellprojectsImages = ["sellprojects.png", "sellprojects2.png", "sellprojects_mob.png"];
    var f4pImages = ["f4p.png", "f4p2.png", "f4p3.png"];
    var githubissuesImages = ["githubissues.png", "githubissues2.png", "githubissues3.png", "githubissues4.png"];;
    var bitappzImages = ["bitappz.png", "bitappz2.png", "bitappz_mob.png"];
    
    showImages("Jiffi/", jiffiImages, $('#jiffi-image'));
    showImages("Radiobeats/", radiobeatsImages, $('#radiobeats-image'));
    showImages("ScoringTool/", scoringtoolImages, $('#scoringtool-image'));
    showImages("Wisewe/", wiseweImages, $('#wisewe-image'));
    showImages("SellProjects/", sellprojectsImages, $('#sellprojects-image'));
    showImages("F4P/", f4pImages, $('#f4p-image'));
    showImages("GithubIssues/", githubissuesImages, $('#githubissues-image'));
    showImages("Bitappz/", bitappzImages, $('#bitappz-image'));
    
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

function showImages(imagesFolder, images, $div) {
    var i = 0;
    $div.css("background-image", "url(Images/Screenshots/" + imagesFolder + images[i] + ")");
    setInterval(function () {
        i++;
        if (i == images.length) {
            i = 0;
        }
        $div.fadeOut("fast", function () {
            $(this).css("background-image", "url(Images/Screenshots/" + imagesFolder + images[i] + ")");
            $(this).fadeIn("fast");
        });
    }, 3000);
}