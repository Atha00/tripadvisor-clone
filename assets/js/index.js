// votre page est représentée par la variable `document`
// const $ = document
// la methode addEventListener sert à poser un écouteur, dont le type sera précisé en 1er argument :
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  // TOUT le Javascript sera contenu dans cette callback
  // querySelector prend en argument la sélection permettant de sélectionner les noeuds qui nous interessent

  // n'oubliez pas de stocker le résulat dans une variable :
  const hearts = document.querySelectorAll(".heart");
  //   console.log(hearts); //  [div.heart, div.heart, div.heart, div.heart, div.heart, div.heart, div.heart, div.heart]

  //   const heart = document.querySelector(".heart");
  //   console.log(heart); // <div class="heart"><i class="fa-regular fa-heart"></i></div>
  // querySelectorAll vous donnera un tableau d'élements (un tableau de noeud)

  // querySelector vous donnera une seule variable (un noeud)

  // on peut poser un écouteur sur chacun des éléments du tableau avec forEach :
  hearts.forEach((element) => {
    element.addEventListener("click", () => {
      // cette fonction s'exécutera à chaque click sur notre élément de classe heart
      if (element.classList.contains("red")) {
        // element.classList.add("black");
        element.classList.remove("red");
      } else {
        element.classList.add("red");
      }
    });
  });
});
