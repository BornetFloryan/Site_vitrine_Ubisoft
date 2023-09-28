let dots = document.querySelectorAll(".dot");
const dotTexte = document.querySelectorAll(".dotText");

window.onload = () => {
  deflautDotPosition();
};

function deflautDotPosition() {
  for (let i = 0; i < dotTexte.length; i++) {
    dotTexte[i].style.left = -dotTexte[i].offsetWidth / 2 + 8 + "px";
  }
}


console.log("créé par : IMMER Alex")