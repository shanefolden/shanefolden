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
    if(scroll<400)
    {
      document.getElementById("circle").style.width = 2500-5*scroll+"px";
      document.getElementById("circle").style.height = 2500-5*scroll+"px";
      document.getElementById("circle").style.top = -1000+3.5*scroll+"px";

      document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";
    }
    else if(scroll <435)
    {
      var newscroll = scroll-400;
      document.getElementById("circle").style.width = 500-3*newscroll+"px";
      document.getElementById("circle").style.height = 500-3*newscroll+"px";
      document.getElementById("circle").style.top = -1000+3.5*scroll+"px";

      document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";

    }

    if(scroll>435)
    {
      var newScroll = (scroll-435);
      var element = document.getElementById("plx");

      element.classList.remove("parallax-window");
      document.getElementById("circle").style.top = -1000+3.5*435+newScroll/2+"px";
      document.getElementById("circle").style.width = 420+"px";
      document.getElementById("circle").style.height = 420+"px";
      document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";

    }
    if(scroll==0)
    {
      document.getElementById("circle").style.width = 2500+"px";
      document.getElementById("circle").style.height = 2500+"px";
      document.getElementById("circle").style.top = -1500+"px";

      document.getElementById("circle").style.left = -600+"px";

    }

    console.log(scroll);




});
