
/*jslint browser:true */

if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {alert('Hey just so you know my site is kinda broken on safari, chrome is a way better option');

};



function fixPad() {
  var screenHeight = window.innerHeight, clientHeight = document.getElementById('adder').clientHeight, topmar = screenHeight - clientHeight;

  //console.log(document.getElementById("jsgod").style.marginTop)

}
fixPad();
var screenWidth = window.innerWidth, widthCheck = screenWidth / 2, cirWidth = parseInt($("#circle").css("width"));
document.getElementById("circle").style.left = widthCheck - cirWidth / 2 + "px";

window.addEventListener("resize", function (event) {

  screenWidth = window.innerWidth;
  widthCheck = screenWidth / 2;
  cirWidth = parseInt($("#circle").css("width"));
  document.getElementById("circle").style.left = widthCheck - cirWidth / 2 + "px";


});










window.addEventListener("scroll", function (event) {
  var scroll = this.scrollY, screenWidth2 = window.innerWidth, widthCheck2 = screenWidth2 / 2;
  var cirWidth2 = parseInt($("#circle").css("width"));
  if (scroll < 400) {
    document.getElementById("circle").style.top = -1000 + 3.5 * scroll + "px";

    document.getElementById("circle").style.left = widthCheck2 - cirWidth2 / 2 + "px";
    document.getElementById("circle").style.width = 2500 - 5 * scroll + "px";
    document.getElementById("circle").style.height = 2500 - 5 * scroll + "px";

  }
  else if (scroll < 435)
   {
    var newscroll = scroll - 400;
    document.getElementById("circle").style.top = -1000 + 3.5 * scroll + "px";

    document.getElementById("circle").style.left = widthCheck2 - cirWidth2 / 2 + "px";
    document.getElementById("circle").style.width = 500 - 3 * newscroll + "px";
    document.getElementById("circle").style.height = 500 - 3 * newscroll + "px";


  }

  if (scroll > 435)
  {
    var newScroll = (scroll - 435);
    var element = document.getElementById("plx");

    element.classList.remove("parallax-window");
    document.getElementById("circle").style.left = widthCheck2 - cirWidth2 / 2 + "px";
    document.getElementById("circle").style.top = -1000 + 3.5 * 435 + newScroll / 2 + "px";
    document.getElementById("circle").style.width = 420 + "px";
    document.getElementById("circle").style.height = 420 + "px";

  }
  if (scroll > 530) {
    var newScroll = (scroll - 530);
    document.getElementById("plx").classList.add("classAdder");
    document.getElementById("heckers").classList.add("there");

    document.getElementById("circle").style.left = widthCheck2 - cirWidth2 / 2 + "px";

    document.getElementById("circle").style.top = 522.5 + (520 - 435) + "px";
    document.getElementById("circle").style.width = 420 + "px";
    document.getElementById("circle").style.height = 420 + "px";

  }

  if (scroll < 530) {
    document.getElementById("plx").classList.remove("classAdder");
    document.getElementById("heckers").classList.remove("there");
  }
  if (scroll == 0) {

    var screenWidth3 = window.innerWidth;
    var widthCheck3 = screenWidth3 / 2;
    var cirWidth3 = parseInt($("#circle").css("width"));
    document.getElementById("circle").style.top = -1000 + "px";
    document.getElementById("circle").style.left = widthCheck3 - cirWidth3 / 2 + "px";
    document.getElementById("circle").style.width = 2500 + "px";
    document.getElementById("circle").style.height = 2500 + "px";


  }
});
