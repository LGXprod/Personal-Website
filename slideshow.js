/* eslint-disable no-undef */

$(document).ready(function(){
    console.log("Slick initialized")
    $("#slideshow").slick({
        // appendArrows: null,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $(".prev"),
        nextArrow: $(".next")
    });
});