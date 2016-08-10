$(window).ready(setTimeout(function () {
    $(".loading").fadeOut(600);
    $(".content").css({"display": "block"});
}, 6000));

function hoverLeft() {
//     // alert('aaa');
//     $("#web").css({'width': '55%'});
//     $("#app").css({'width': '45%'});
//     $(".slant-container").css({"margin-left": "5%"});
    $("#web").removeClass("decreaseWidth");
    $("#web").addClass("increaseWidth");
    // $("#web.web-content").addClass("scaled");
    $("#app").removeClass("increaseWidth");
    $("#app").addClass("decreaseWidth");
    // $("#app.app-content").removeClass("scaled");
};
function hoverRight() {
//     // alert('aaa');
//     $("#app").css({'width': '55%'});
//     $("#web").css({'width': '45%'});
//     $(".slant-container").css({"margin-right": "5%"});
    $("#app").removeClass("decreaseWidth");
    $("#app").addClass("increaseWidth");
    // $("#app.app-content").addClass("scaled");
    $("#web").removeClass("increaseWidth");
    $("#web").addClass("decreaseWidth");
};


$("section#members ul.membersList li.member").on('mouseenter', function () {
    $(this).children(".memberInfo").stop().fadeIn();
});
$("section#members ul.membersList li.member").on('mouseleave', function () {
    $(this).children(".memberInfo").stop().hide();
});

var sectionHeight = $("section").height();
$("#goToIntro").attr("checked", true);
$(".goDownBtn").scrollTop(sectionHeight);

// $(document).on('scroll', function () {
//     if ($(document).scrollTop() < sectionHeight) {
//         $("#goToIntro").attr("checked", true)
//     }
//     else if ($(document).scrollTop() >= 1 * sectionHeight && $(document).scrollTop() < 2*sectionHeight) {
//         $("#goToSolutions").attr("checked", true)
//     }
//     else if ($(document).scrollTop() >= 2 * sectionHeight && $(document).scrollTop() < 3*sectionHeight ) {
//         $("#goToMembers").attr("checked", true)
//     }
//     else if ($(document).scrollTop() >= 3 * sectionHeight) {
//         $("#goToAbout").attr("checked", true)
//     }
//     else {
//         $("#goToIntro").attr("checked", true)
//     }
//     console.log($(document).scrollTop(), "?", sectionHeight);
// });

$(document).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
        $(".goTopBtn").fadeIn();
    }
    else {
        $(".goTopBtn").fadeOut();
    }
});

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});




