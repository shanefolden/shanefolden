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
  //console.log(divHeights +" divheights")
  //console.log(topmar+" calculated margin")
  //console.log(screenHeight+" screen height")

  //document.getElementById("jsgod").style.marginTop = topmar+"px";
  //console.log(document.getElementById("jsgod").style.marginTop)

}
