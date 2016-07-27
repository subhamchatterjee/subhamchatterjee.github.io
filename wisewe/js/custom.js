/* Mobile Nav-icon */
$(document).ready(function(){
    $('#nav-icon').click(function(){
		if($('#icon').hasClass('fa-bars') == 1) {
			$('#icon').removeClass('fa-bars');
			$('#icon').addClass('fa-times');
		}
		else {
			$('#icon').removeClass('fa-times');
			$('#icon').addClass('fa-bars');
		}
        $('#nav>ul').toggleClass('show');
    });
});

/* Window Scroller */
$(window).on('scroll',function(){

    stop = Math.round($(window).scrollTop());
    if (stop > 450) {
        $('#header').addClass('past-top');
    } else {
        $('#header').removeClass('past-top');
    }
});