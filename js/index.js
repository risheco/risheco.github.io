$(window).ready(setTimeout(function () {
    $(".loading").fadeOut(600);
    $(".content").css({"display": "block"});
}, 6000));

$('html, body').animate({
    scrollTop: 0
}, 0);
function hoverLeft() {
    $("#web").removeClass("decreaseWidth");
    $("#web").addClass("increaseWidth");
    $("#app").removeClass("increaseWidth");
    $("#app").addClass("decreaseWidth");
};
function hoverRight() {
    $("#app").removeClass("decreaseWidth");
    $("#app").addClass("increaseWidth");
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
$("#goToIntro").prop("checked", true);
$(".goDownBtn").scrollTop(sectionHeight);
$(document).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
        $(".goTopBtn").fadeIn();
    }
    else {
        $(".goTopBtn").fadeOut();
    }
});
$('#goTopBtn').click(function () {
    $("#goToIntro").prop("checked", true);
    $('.sectionChanger').removeClass('blue');
});
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target[0].id == "solutions") {
                $("#goToSolutions").prop("checked", true);
                $('.sectionChanger').removeClass('blue');
            }
            else if (target[0].id == "members") {
                $("#goToMembers").prop("checked", true);
                $('.sectionChanger').removeClass('blue');
            }
            else if (target[0].id == "about") {
                $("#goToAbout").prop("checked", true);
                $('.sectionChanger').addClass('blue');
            }
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(function () {
    $('#goToIntro').click(function () {
        $('html, body').animate({
            scrollTop: $('#intro').offset().top
        }, 1000);
        $("#goToIntro").prop("checked", true);
        $('.sectionChanger').removeClass('blue');
    });
    $('#goToSolutions').click(function () {
        $('html, body').animate({
            scrollTop: $('#solutions').offset().top
        }, 1000);
        $("#goToSolutions").prop("checked", true);
        $('.sectionChanger').removeClass('blue');
    });
    $('#goToMembers').click(function () {
        $('html, body').animate({
            scrollTop: $('#members').offset().top
        }, 1000);
        $("#goToMembers").prop("checked", true);
        $('.sectionChanger').removeClass('blue');
    });
    $('#goToAbout').click(function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 1000);
        $("#goToAbout").prop("checked", true);
        $('.sectionChanger').addClass('blue');
    });
});




