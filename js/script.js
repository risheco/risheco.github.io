

$(function () {
    sizeAbsoluteElements() ;

    var one = document.getElementById("one") ;
    var two = document.getElementById("two") ;
    var three = document.getElementById("three") ;
    var four = document.getElementById("four") ;
    var five = document.getElementById("five") ;
    var six = document.getElementById("six") ;
    var seven = document.getElementById("seven") ;
    var eight = document.getElementById("eight") ;
    var nine = document.getElementById("nine") ;

    var animFlag = true ;
    var animFlagWeb = true;
    var animFlagRishe = true ;

    $('#mobile').flowtype({
        minimum   : 200,
        maximum   : 1600,
        minFont   : 12,
        maxFont   : 70,
        fontRatio : 30,
        lineRatio : 1.45
    });
    $('#web').flowtype({
        minimum   : 200,
        maximum   : 1600,
        minFont   : 12,
        maxFont   : 70,
        fontRatio : 30,
        lineRatio : 1.45
    });
    $("#header").flowtype({
        minFont : 25 ,
        maxFont : 60
    }) ;
//
//    $("#mobileText>div").flowtype({
//        minFont   : 18,
//        maxFont   : 50
//    });
//    $("#webText>div").flowtype({
//        minFont   : 18,
//        maxFont   : 50
//    }) ;

    $(window).resize(function () {
        draw() ;
        sizeAbsoluteElements() ;

    }) ;

    $(window).scroll(function () {
        console.log(window.scrollY) ;
        if (window.scrollY > 150 && animFlag ) {
            TweenMax.to(one ,.75 , {left : "22%" , opacity:1 }) ;
            TweenMax.to(two ,.75 , {left : "22%" , opacity:1 }) ;
            TweenMax.to(four ,.75 , {left : "28%" , opacity:1 }) ;
            TweenMax.to(five ,.75 , {left : "28%" , opacity:1 }) ;
            TweenMax.to(six ,.75 , {top : "15%" , opacity:1 }) ;
            TweenMax.to(seven ,.75 , {left : "21%" , opacity:1 }) ;
            TweenMax.to(eight ,.75 , {left : "48%" , opacity:1 }) ;
            TweenMax.to(nine ,.75 , {top : "66%" , opacity:1 }) ;
            animFlag = false
        }

        if (window.scrollY> 420 && animFlagWeb){
            $("#html").addClass("animated fadeInDown") ;
            $("#css").addClass("animated fadeInUp") ;
            $("#opera").addClass("animated fadeInLeft") ;
//            TweenMax.to($("#html") , 1 , { left : "0px" , opacity: 1}) ;
//            TweenMax.top($("#css") , 1 ,  { right : "0px" , opacity: 1 }) ;
            animFlagWeb = false ;
        }

//        if (window.scrollY > 1400 && animFlagRishe){
//            $("#rishe h1").addClass("animated zoomInDown") ;
//            $("#rishe h1").css("opacity" , 1 ) ;
//            animFlagRishe = false
//        }
    }) ;



}) ;

var draw = function() {
    var canvas = document.getElementById("drawSpace");
    canvas.setAttribute("width" , $("#header").width() + 10 ) ;
    $("#footer").css("width" , $("#header").width() + 10  );
    var width =  $("#header").width()*(75/200) ;
    var ctx = canvas.getContext("2d") ;
    ctx.font = "22px Tahome bold" ;

    ctx.beginPath() ;
    ctx.fillStyle = "rgb(242, 241, 237)" ;
    ctx.fillRect(0,0,$("#header").width() + 10 ,1400);



    ctx.fillStyle = "#e8e7e3" ;
    ctx.strokeStyle = "#e8e7e3" ;
    ctx.lineWidth = 8 ;
    ctx.translate(canvas.width/2 , 0) ;
    ctx.beginPath() ;

    ctx.moveTo(-width , 900 ) ;
    ctx.arc(-width - 200  , 900 , 200 , 0 , Math.PI*2) ;
    ctx.fill() ;
    ctx.arc(-width-200 , 900 , 220 , 0 , Math.PI*2) ;
    ctx.stroke() ;

    ctx.beginPath() ;
    ctx.moveTo(width , 1200 ) ;
    ctx.arc(width+150 , 1200 , 150 , 0 , Math.PI*2) ;
    ctx.fill();
    ctx.arc(width+150 , 1200 , 170 , 0 , Math.PI*2) ;
    ctx.stroke() ;

    ctx.beginPath() ;
    ctx.fillStyle = "#414042" ;
    ctx.strokeStyle = "#414042" ;
    ctx.moveTo(0,0 ) ;
    ctx.lineWidth = 8 ;
    ctx.lineTo(0 , 300 ) ;
    ctx.lineTo(-width , 300) ;
    ctx.lineTo(-width , 350) ;
    ctx.moveTo(-width+20 , 370 ) ;
//    ctx.fillText("1" , -width-5 , 378) ;
    ctx.arc(-width , 370 , 20 , 0 , Math.PI*2) ;
    ctx.moveTo(-width , 390 ) ;
    ctx.lineTo(-width , 600 ) ;
    ctx.lineTo(width , 600 ) ;
    ctx.lineTo(width , 650 ) ;
    ctx.moveTo(width+20 , 670 ) ;
//    ctx.fillText("2" , width-5 , 675) ;
    ctx.arc(width , 670 , 20 , 0 , Math.PI*2) ;
    ctx.moveTo(width , 690 ) ;
    ctx.lineTo(width , 900) ;
    ctx.lineTo(0 , 900) ;
    ctx.lineTo(0 ,1000 ) ;

    // random drawing
    ctx.arc(10 , 1000 , 10 ,  Math.PI , Math.PI/2 , true ) ;
    ctx.lineTo(200 , 1010) ;
    ctx.quadraticCurveTo( 220 , 1010 , 220 , 1030) ;
    ctx.lineTo(220 , 1200) ;
    ctx.moveTo(220 , 1220) ;
    ctx.lineTo(220 , 1300) ;
    ctx.quadraticCurveTo(220 , 1320 , 240 , 1320 ) ;
    ctx.lineTo(300  ,1320 ) ;
    ctx.quadraticCurveTo(320 , 1320 , 320 , 1300 ) ;
    ctx.lineTo(320 , 1230) ;
    ctx.quadraticCurveTo(320 , 1210, 300 , 1210) ;
    ctx.lineTo(100 , 1210 ) ;
    ctx.moveTo(80 , 1210 ) ;
    ctx.lineTo(-150 , 1210 ) ;
    ctx.arc(-150 , 1210 , 50 , Math.PI , 3*Math.PI) ;
    ctx.moveTo(-200 , 1210 ) ;
    ctx.lineTo(-300 , 1210 ) ;
    ctx.quadraticCurveTo(-320 , 1210 , -320 , 1190 ) ;
    ctx.lineTo(-320 , 1130) ;
    ctx.quadraticCurveTo(-320 , 1110 , -300 , 1110 ) ;
    ctx.lineTo(70 , 1110) ;
    ctx.quadraticCurveTo(90 , 1110 , 90 , 1130 ) ;
    ctx.lineTo(90 , 1300 ) ;
    ctx.quadraticCurveTo(90 , 1320 , 70 , 1320 ) ;
    ctx.lineTo(20 , 1320 ) ;
    ctx.quadraticCurveTo(0 ,1320 , 0 ,1340 ) ;
    ctx.lineTo(0 ,1400) ;

    ctx.stroke() ;

    ctx.strokeStyle = "#E8E7E3" ;
    ctx.lineWidth = 4 ;
    ctx.beginPath();
    ctx.moveTo(-width , 80 ) ;
    ctx.lineTo(-20 , 80 )  ;
    ctx.moveTo(width , 80) ;
    ctx.lineTo(20 , 80) ;

    ctx.stroke() ;

    ctx.fillStyle = "rgb(242, 241, 237)" ;
    ctx.fillRect(-210 , 1200 ,20 , 6) ;
    ctx.fillRect(-210 , 1214 ,20 , 6) ;
    ctx.fillRect(-110 , 1200 ,20 , 6) ;
    ctx.fillRect(-110 , 1214 ,20 , 6) ;
} ;


var sizeAbsoluteElements = function () {
    var headWidth =  $("#header").width() ;
    var absoluteWidth =headWidth*(75/100) ;

    var mobile = $("#mobile") ;
    var mobileText = $("#mobileText") ;
    mobile.css("width" , (absoluteWidth-20)) ;
    mobile.css("left" , (headWidth/8) + 35 ) ;
    mobileText.css("left" , (headWidth/8) + 5 ) ;
    mobileText.css("width" , absoluteWidth/2) ;

    var web = $("#web") ;
    var webText = $("#webText") ;
    web.css("width" , (absoluteWidth-20)) ;
    web.css("right" , (headWidth/8) +5 ) ;
    webText.css("right" ,(headWidth/8) + 15 ) ;
    webText.css("width" , absoluteWidth/2) ;

} ;



