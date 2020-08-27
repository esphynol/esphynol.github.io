//jQuery(function ($) {

//    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

//    (function () {
//        $('#preloader').delay(200).fadeOut('slow');
//    }());



    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

//    $('.left-col-block, .right-col-block').theiaStickySidebar();

//}); // JQuery end




<script language=javascript>
//change 1 to another integer to alter the scroll speed. Greater is faster
var speed=1
var downspeed= 2
var stopspeed= 0
var currentpos=0
var alt = 0
var curpos1 = 100
var curpos2 = 1
function initialize(){
 startit()
}
function goup(e) {
 speed = stopspeed
}
function godown(e) {
 speed = downspeed
}
function scrollwindow(){
 if (document.all) {
  temp=document.body.scrollDown;
 }
 else {
  temp=window.pageYOffset;
 }
 if (alt==0) {
  alt=1;
  curpos2 = temp;
 }
 else {
  alt=0;
  curpos1 = temp;
 }
 if ((curpos1==curpos2) && (speed > 0)) {
  currentpos = 0;
  curpos1 = 100;
 }
 else {
  if (document.all) {
   currentpos=document.body.scrollDown+speed;
  }
  else {
	currentpos=window.pageYOffset+speed;
  }
 }
 if (speed > 0) { window.scrollTo(0,currentpos); }
 setTimeout("scrollwindow()", 20);
}
function startit(){
 setTimeout("scrollwindow()", 20)
}
window.onload=initialize
document.onmousedown = goup;
document.ondblclick = godown;

</script> 