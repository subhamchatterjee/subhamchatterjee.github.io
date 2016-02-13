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
});