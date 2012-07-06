$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#social").css("opacity","0.5");
 
// ON MOUSE OVER
$("#social").hover(function () {
 
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