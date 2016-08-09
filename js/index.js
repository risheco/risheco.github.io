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
    // $("#web.web-content").removeClass("scaled");
};