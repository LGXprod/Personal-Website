/* eslint-disable no-undef */

window.onload = function() {
    console.log("Home loaded");
}

$(document).ready(function() {
    $("#slideshow").slick({
        // appendArrows: null,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $(".leftArrow"),
        nextArrow: $(".rightArrow")
    });
});