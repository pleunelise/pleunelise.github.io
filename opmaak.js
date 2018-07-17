//var basketball = document.getElementById("basketball");
//basketball.onclick = verplaatsBasketball;
setInterval (verplaatsBasketball, 10);
function bigImg(x) {
    x.style.height = "35px";
    x.style.width = "35px";
}

function normalImg(x) {
    x.style.height = "25px";
    x.style.width = "25px";
}

var kleur1 = "#A0C6F0";
var kleur2 = "#D4E6FB";
function myFunction() {
  var footer = document.getElementById("footer");
  var body = document.getElementById("body");
  var h1 = document.getElementById("h1");
  footer.style.background = kleur2;
  body.style.background = kleur1;
  h1.style.color = kleur2;
}

function changeColor() {
  var footer = document.getElementById("footer");
  var body = document.getElementById("body");
  var h1 = document.getElementById("h1");
  footer.style.background = kleur1;
  body.style.background = kleur2;
  h1.style.color = kleur1;
}

var topBasketball = 20;
var leftBasketball = 20;
function verplaatsBasketball(){
  //alert("hoi");
  var basketball = document.getElementById("basketball");
  basketball.style.top = topBasketball + "px";
  topBasketball = topBasketball + 1;
  var tekst = document.getElementById("tekst");
  var random = Math.random() * tekst.getClientRects()[0].width
  leftBasketball = random;
  if (tekst.getClientRects()[0].height < topBasketball) {
    topBasketball = 0;
    basketball.style.left = leftBasketball + "px";
  }
}
/* var kleur = document.getElementById("colorFooter");
kleur.addEventListener("click", veranderKleur);

function veranderKleur() {
  var kleuren = ['#D4E6FB', '#74A7E0', '#ADA6F2', '#47CEA5', '#D0FBEE', '#A0C6F0'];
  var i;
  for (i = 0; i < kleuren.length; i++) {
      document.getElementById("colorFooter").style.background = kleuren;
    }
}
*/
