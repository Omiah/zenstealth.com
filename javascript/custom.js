$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#block2 a").css("opacity","0.5");
 
// ON MOUSE OVER
$("#block2 a").hover(function () {
 
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "fast");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "fast");
});
});

$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#block3 a").css("opacity","0.5");
 
// ON MOUSE OVER
$("#block3 a").hover(function () {
 
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "fast");
},
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.5
}, "fast");
});
});