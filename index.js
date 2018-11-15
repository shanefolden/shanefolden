setPhoto();
setPhoto();
setPhoto();
setPhoto();
setPhoto();
setPhoto();
setPhoto();
setPhoto();

function setPhoto()
{
  var min=0;
  var max=2;
  var random =Math.floor(Math.random() * (+max - +min)) + +min;
  console.log("Random Number Generated : " + random );
}


fixPad();
function fixPad(){


  var screenHeight = window.innerHeight;
  var clientHeight = document.getElementById('adder').clientHeight;

var topmar = screenHeight-clientHeight;

  //console.log(document.getElementById("jsgod").style.marginTop)

}

window.addEventListener("resize", function (event) {
  var screenWidth = window.innerWidth;
  var widthCheck = screenWidth/2
  var cirWidth = parseInt( $("#circle").css("width"));
  document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";

});

window.addEventListener("scroll", function (event) {


    var scroll = this.scrollY;
    var screenWidth = window.innerWidth;
    var widthCheck = screenWidth/2
    var cirWidth = parseInt( $("#circle").css("width"));
    if(scroll<520)
    {
      document.getElementById("circle").style.width = 2500-4*scroll+"px";
      document.getElementById("circle").style.height = 2500-4*scroll+"px";
      document.getElementById("circle").style.top = -200+1.45*scroll+"px";
      
      document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";
    }

    if(scroll>520)
    {
      var newScroll = (scroll-521);
      var element = document.getElementById("plx");

      element.classList.remove("parallax-window");
      document.getElementById("circle").style.top = -200+1.45*521+newScroll/2+"px";
      document.getElementById("circle").style.width = 420+"px";
      document.getElementById("circle").style.height = 420+"px";
      document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";

    }






});
