
/*jslint browser:true */

//if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {//alert('Hey just so you know my site is kinda broken on safari, chrome is a way better option');

//}



function fixPad() {
  var screenHeight = window.innerHeight, clientHeight = document.getElementById('adder').clientHeight, topmar = screenHeight - clientHeight;

  //console.log(document.getElementById("jsgod").style.marginTop)

}
// fixPad();
// var screenWidth = window.innerWidth, widthCheck = screenWidth / 2, cirWidth = parseInt($("#circle").css("width"));
// document.getElementById("circle").style.left = widthCheck - cirWidth / 2 + "px";

var other = anime({


})

anime({
  targets: 'div.cropimage',
  borderRadius: ['0%', '50%'],
  width: ['100%', '30%'],
  height: ['100%', '50%'],
  marginTop: ['0%', '50%'],
  marginBottom: ['0%', '20%'],

  marginRight:  ['0%', '35%'],
  marginLeft: ['0%', '35%'],


  delay: 1000,

  //psuedocode
  duration: 3000

  //console.log(width);
})

//anime();




// // resizes circle if page is resized
// window.addEventListener("resize", function (event) {
//
//   screenWidth = window.innerWidth;
//   widthCheck = screenWidth / 2;
//   cirWidth = parseInt($("#circle").css("width"));
//   document.getElementById("circle").style.left = widthCheck - cirWidth / 2 + "px";
//
//
// });
