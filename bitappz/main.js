$(document).ready(function() {
    $('.search').focusin(function() {
        $(this).val('');
    });
    $('.search').focusout(function() {
        if($(this).val() == '') $(this).val('Search');
    });
    
    var itemWidth = $('.item').width();
    $('.left').click(function() {
        $('.items').css({
            'transition' : 'all 1.0s ease-in-out',
            'transform' : 'translateX(0px)'
        });
    });
    $('.right').click(function() {
        $('.items').css({
            'transition' : 'all 1.0s ease-in-out',
            'transform' : 'translateX(-' + itemWidth + 'px)'
        });
    });
    
    var $navButton = $('.nav-button');
    $navButton.click(function() {
        if($navButton.hasClass('active')) {
            console.log("remove search");
            $('.search').hide();
            $navButton.removeClass('active');
            $('.navbar').css('height', '60px');
        }
        else {
            console.log("add search");
            $navButton.addClass('active');
            $('.search').show();
            $('.navbar').css('height', '110px');
        }
    });
});
