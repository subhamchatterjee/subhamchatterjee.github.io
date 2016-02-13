function next(e) {
    if ($('.active').hasClass('one')) {
        $('html,body').animate({
        scrollTop: $("#work_two").offset().top},
        'slow');
        $('.one').removeClass('active');
        $('.two').addClass('active');
        document.getElementById('prev').style.display = "block";
    }
    else if ($('.active').hasClass('two')) {
        $('html,body').animate({
        scrollTop: $("#work_three").offset().top},
        'slow');
        $('.two').removeClass('active');
        $('.three').addClass('active');
        document.getElementById('next').style.display = "block";
    }
    else if ($('.active').hasClass('three')) {
        $('html,body').animate({
        scrollTop: $("#work_four").offset().top},
        'slow');
        $('.three').removeClass('active');
        $('.four').addClass('active');
        document.getElementById('next').style.display = "none";
    }
}

function prev(e) {
    if ($('.active').hasClass('four')) {
        $('html,body').animate({
        scrollTop: $("#work_three").offset().top},
        'slow');
        $('.four').removeClass('active');
        $('.three').addClass('active');
        document.getElementById('next').style.display = "block";
    }
    else if ($('.active').hasClass('three')) {
        $('html,body').animate({
        scrollTop: $("#work_two").offset().top},
        'slow');
        $('.three').removeClass('active');
        $('.two').addClass('active');
        document.getElementById('next').style.display = "block";
    }
    else if ($('.active').hasClass('two')) {
        $('html,body').animate({
        scrollTop: $("#work_one").offset().top},
        'slow');
        $('.two').removeClass('active');
        $('.one').addClass('active');
        document.getElementById('prev').style.display = "none";
    }
}