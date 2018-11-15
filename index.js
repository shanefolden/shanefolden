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
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    document.getElementById("circle").style.width = 600-scroll+"px";
    document.getElementById("circle").style.height = 600-scroll+"px";
    document.getElementById("circle").style.top = 20+scroll+"px";
    document.getElementById("circle").style.left = 300+scroll/2+"px";



});
