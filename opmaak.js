function bigImg(x) {
    x.style.height = "35px";
    x.style.width = "35px";
}

function normalImg(x) {
    x.style.height = "25px";
    x.style.width = "25px";
}

 var kleur = document.getElementById("colorFooter");
kleur.addEventListener("click", veranderKleur);

function veranderKleur() {
  var kleuren = ['#D4E6FB', '#74A7E0', '#ADA6F2', '#47CEA5', '#D0FBEE', '#A0C6F0'];
  var i;
  for (i = 0; i < kleuren.length; i++) {
      document.getElementById("colorFooter").style.background = kleuren;
    }
}
