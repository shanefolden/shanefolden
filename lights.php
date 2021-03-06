<!doctype html>
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <title>Shane Folden</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel = "stylesheet" href = "sfolden.css">
  <link rel="shortcut icon" href="boatlogo.png" type="image/x-icon">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  <title>Hello, world!</title>
</head>
<body class = "mainBack">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">
        <img src="logo.svg" width="30" height="30">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link" href="about.html">About Me</a>
        </li>
        <li class="nav-item  ">
          <a class="nav-link" href="projects.html">Projects</a>
        </li>
        <li class="nav-item active  ">
          <a class="nav-link" href="lights.html">Lights Form</a>
        </li>



      </ul>
      <form class="form-inline my-2 my-lg-0 active">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link " href="contact.html">Contact</a>
          </li>
        </ul>



      </form>
    </div>
  </nav>

  <div style="text-align: center">



  <h1 class = "lightsTitle">Enter a message to be displayed on my wall</h1>
  <h4 class = "littit2">Sorry guys, the form is down while I'm on break, I had to unplug everything</h4>
  <form id="display" action="https://formspree.io/footballshane@gmail.com" method="POST">
      <div class="form-group conpadL">
    <textarea name="name" class="form-control setConMargL"style="color: black"placeholder = "Enter your name (optional)"rows="1" cols="40"  maxlength="50"></textarea><br>
  </div>
  <div class="form-group conpadL">
    <textarea name="message" class = "form-control setConMargL" placeholder = "Enter message here:"rows="3" cols="40"  maxlength="100" ></textarea><br>
    </div>
    <input type="submit"  class ="btn btn-secondary newbutt lightsub"value="Send">
  </form>

<h6></h6>

   <iframe style: "margin-bottom: 20px;"
   src="https://player.twitch.tv/?channel=shanefolden29"
   frameborder="0"
   allowfullscreen="true"
   scrolling="no"
   height="322"
   width="570">
 </iframe>
<!-- <a class " href="https://www.twitch.tv/supercarlos297?tt_content=text_link&tt_medium=live_embed" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline; text-align: center" >Watch live video from supercarlos297 on www.twitch.tv</a>
-->

</div>
<div class="" style = "height: 40px">

</div>




  <!-- Optional JavaScript -->
<!--  <script src="lights.js"></script> -->
  <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</body>
</html>
