// Smooth Scrolling 

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        // Get Section Id 
        var dest = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(dest).offset().top - 55 // Getting an offset value of section
        }, 1250, "easeInOutExpo");
    });
});

// Home Animation On Page Load
$(window).on("load", function () {
    $("#home-heading").addClass("animated fadeInDown");
    $("#home-flex-1").addClass("animated fadeInLeft");
    $("#home-flex-2").addClass("animated fadeInLeft");
    $("#home-flex-3").addClass("animated fadeInLeft");
    $("#home-card-form").addClass("animated fadeInRight");
});