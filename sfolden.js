


setLogoWidth();

function setLogoWidth()
{

  var screenWidth = window.innerWidth;
  var logoWidth = document.getElementById("logo").width;
  var innerMar = parseInt( $("#logo").css("marginLeft") );
  var width = 5*logoWidth + 8*innerMar;

  var space = (screenWidth-width)/2;
  space = space-9;
  document.getElementById("leftLogo").style.marginLeft = space+"px";
  document.getElementById("rightLogo").style.marginRight = space+"px";


  console.log(screenWidth);
  console.log(width);
  console.log(space);


}
