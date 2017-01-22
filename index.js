    $(document).ready(function(){
      $('.carousel').carousel();
      $('.parallax').parallax();
    });

    function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}