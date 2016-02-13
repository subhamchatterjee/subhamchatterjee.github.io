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
});

function mob_nav() {
    if(jQuery("#mob_nav").hasClass("active")) {
        jQuery("#mob_nav").hide();
        jQuery("#mob_nav").removeClass("active");
        jQuery(".fa-close").addClass("fa-navicon").removeClass("fa-close");
    } 
    else {
        jQuery("#mob_nav").css('display','table');
        jQuery("#mob_nav").addClass("active");
        jQuery(".fa-navicon").addClass("fa-close").removeClass("fa-navicon");
    }
}