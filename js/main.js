$(document).ready(function () {
    // Text animation class toggle
    $(".spongy").mouseover(function () {
        $(this).toggleClass("sponge");
    });
    $(".elegantshadow").mouseover(function () {
        $(this).toggleClass("sponge2");
    });
    
    // Button animation class toggle
    $(".btn").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
        $(this).removeClass("btn_animate");  
    });
    $(".btn").hover(function () {
        $(this).addClass("btn_animate");        
    });
    $(".btn2").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function () {
        $(this).removeClass("btn_animate2");  
    });
    $(".btn2").hover(function () {
        $(this).addClass("btn_animate2");        
    });
    window.onload = deviceCheck();
    window.onload = init();
});

function mob_nav() {
    if(jQuery("#mob_nav").hasClass("active")) {
        jQuery("#mob_nav").hide().removeClass("active");
        jQuery(".fa-close").addClass("fa-navicon").removeClass("fa-close");
    } 
    else {
        jQuery("#mob_nav").css('display','table').addClass("active");
        jQuery(".fa-navicon").addClass("fa-close").removeClass("fa-navicon");
    }
}

function deviceCheck() {
    if(mob==true) {
        var btns = document.getElementsByClassName("btn");
        var btns2 = document.getElementsByClassName("btn2");
        var mob_btns = document.getElementsByClassName("mob_btn");
        var mob_btns2 = document.getElementsByClassName("mob_btn2");
        var i=0;
        while(btns[i]) {
            btns[i].remove();
            btns2[i].remove();
            document.getElementById("mob_nav_btn").style.display = "block";
            i=0;
        }
    }
}