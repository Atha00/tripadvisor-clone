// const $ = document;

// le listener DOMContentLoaded permet de s'asurer que tous les noeuds du DOM sont accessibles (on fait l'appel)
document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  // Etape 1 : récupérer le noeud sur lequel on veut agir
  const hearts = document.querySelectorAll(".heart");
  console.log(hearts); //  [div.heart, div.heart, div.heart, div.heart, div.heart, div.heart, div.heart, div.heart]
  // Etape 2 : déposer un "écouteur d'évènement" dessus
  hearts.forEach((singleHeart) => {
    singleHeart.addEventListener("click", () => {
      // Etape 3 : faire notre tambouille
      if (singleHeart.classList.contains("red") === true) {
        singleHeart.classList.remove("red"); // nécessite d'avoir déclaré une classe "red" dans le CSS
      } else {
        singleHeart.classList.add("red"); // nécessite d'avoir déclaré une classe "red" dans le CSS
      }
    });
  });
});
