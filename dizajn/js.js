$(document).ready(function(){
if($.browser.msie && $.browser.version < 7){$("#zaglavlje").css("background-image","none"); // ie6 transparency international, jeba ih bilgejts
$("#naslov").css("padding-left","40px");}

if(window.location.pathname.length>2){
$('ul#navigacija>li>a[href$="'+location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1)+'"]').addClass("aktivna");
$('div#podnozje>a[href$="'+location.pathname.substring(1).substring(location.pathname.substring(1).lastIndexOf("/")+1)+'"]').addClass("trenutna");}
$.emajl();

// testis zona

$("#slideShow").nivoSlider({pauseTime:4500});
$("#brodovi").nivoSlider({pauseTime:4500});
});
jQuery.extend({	// stare metode prebacene u $.namespace
emajl: function(){  // <a class="emajl" href="user_nameATdomain">tekst linka</a> >>> mailto:user_name@domain
$("a.emajl").each(function(){
$(this).attr("href",$(this).attr("href").replace(/([^A]+)AT([\w]+)/,"mailto:$1@$2"));
if(!$(this).text()) $(this).text($(this).attr("href").substr(7));
});}
// testis zona, dodaj zarez prije nove funkcije


});