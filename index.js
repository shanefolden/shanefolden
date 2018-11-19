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

  var screenWidth = window.innerWidth;
  var widthCheck = screenWidth/2
  var cirWidth = parseInt( $("#circle").css("width"));
  document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";






window.addEventListener("resize", function (event) {
  console.log("weve resized chief")
  screenWidth = window.innerWidth;
  widthCheck = screenWidth/2
  cirWidth = parseInt( $("#circle").css("width"));
  document.getElementById("circle").style.left = widthCheck-cirWidth/2+"px";


});

window.addEventListener("scroll", function (event) {
  console.log("this is it chief")


    var scroll = this.scrollY;
    var screenWidth2 = window.innerWidth;
    var widthCheck2 = screenWidth/2
    var cirWidth2 = parseInt( $("#circle").css("width"));
    if(scroll<400)
    {
      document.getElementById("circle").style.width = 2500-5*scroll+"px";
      document.getElementById("circle").style.height = 2500-5*scroll+"px";
      document.getElementById("circle").style.top = -1000+3.5*scroll+"px";

      document.getElementById("circle").style.left = widthCheck2-cirWidth2/2+"px";
    }
    else if(scroll <435)
    {
      var newscroll = scroll-400;
      document.getElementById("circle").style.width = 500-3*newscroll+"px";
      document.getElementById("circle").style.height = 500-3*newscroll+"px";
      document.getElementById("circle").style.top = -1000+3.5*scroll+"px";

      document.getElementById("circle").style.left = widthCheck2-cirWidth2/2+"px";

    }

    if(scroll>435)
    {
      var newScroll = (scroll-435);
      var element = document.getElementById("plx");

      element.classList.remove("parallax-window");
      document.getElementById("circle").style.top = -1000+3.5*435+newScroll/2+"px";
      document.getElementById("circle").style.width = 420+"px";
      document.getElementById("circle").style.height = 420+"px";
      document.getElementById("circle").style.left = widthCheck2-cirWidth2/2+"px";


    }
    if(scroll>530)
    {
        var newScroll = (scroll-530);
        document.getElementById("plx").classList.add("classAdder")
        document.getElementById("heckers").classList.add("there")

        document.getElementById("circle").style.top = 522.5+(520-435)+"px";
        document.getElementById("circle").style.width = 420+"px";
        document.getElementById("circle").style.height = 420+"px";
        document.getElementById("circle").style.left = widthCheck2-cirWidth2/2+"px";

    }

    if(scroll<530)
    {
      document.getElementById("plx").classList.remove("classAdder")
      document.getElementById("heckers").classList.remove("there")
    }
    if(scroll==0)
    {
      document.getElementById("circle").style.width = 2500+"px";
      document.getElementById("circle").style.height = 2500+"px";
      document.getElementById("circle").style.top = -1500+"px";
      document.getElementById("circle").style.left = widthCheck2-cirWidth2/2+"px";

    }
});
