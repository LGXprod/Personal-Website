/* eslint-disable no-undef */
var slideShow = $("#slideshow").children();
var i = 1;

slideShow.filter("#slide" + (i-1)).css({"display" : "inline-block"});

const unselectedDot = {
    
}

const selectedDot = {
    "border-style": "solid",
    "border-color": "#1b262c",
    "border-width": "0.25vw"
}

for (var x = 0; x < $("#nav-controls").children().length; x++) {
    // eslint-disable-next-line no-loop-func
    $("#dot" + x).click((event) => {
        clearInterval(autoSlide);
        hideAllSlides();

        var slideNum = event.target.id[event.target.id.length-1];
        // var prevSlideNum;

        // for (var slide of slideShow) {
        //     if (slide.className === "panel selected") {

        //     }
        // }

        // if (prevSlideNum > slideNum) { // slide moves left
        //     console.log("Move left");
        // }

        for (var y = 0; y < $("#nav-controls").children().length; y++) {
            $("#dot" + y).css({"border-width": "0"})
        }

        $(event.target).css(selectedDot);

        // slideShow.filter("#slide" + slideNum).css({"display" : "inline-block", "position": "relative", "right": "100vw"}).animate({"left": "0"});
        slideShow.filter("#slide" + slideNum).css({"display" : "inline-block"})
        slideShow.filter("#slide" + slideNum).addClass("selected");
    });
}

function hideAllSlides() {
    for (var slideNum in slideShow) {
        slideShow.filter("#slide" + slideNum).css({"display" : "none"});
    }
}

const autoSlide = setInterval(() => {
    slideShow.filter("#slide" + (i-1)).css({"display" : "none"});
    slideShow.filter("#slide" + (i-1)).removeClass("selected");

    if (i < slideShow.length) {
        // slideShow.filter("#slide" + i).css({"display" : "inline-block", "position": "relative", "right": "100vw"}).animate({"left": "0"});
        slideShow.filter("#slide" + i).css({"display" : "inline-block"});
        slideShow.filter("#slide" + i).addClass("selected");
    } else {
        i = -1;
    }

    i++;
}, 4000);

