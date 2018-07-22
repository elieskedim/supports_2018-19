(function() {
  // "use strict";
  /*
  1- VARIABLES
  */
  // on cible le bouton
  var toggle = document.querySelector(".c-hamburger");
  // on cible le panneau glissant avec l'id #menu-panel
  var menu = document.querySelector('#menu-panel');

  /*
  2- FONCTION
  */
  // au clic de l'utilisateur sur le bouton hamburger, on déclenche 2 actions :
  // - animation du menu hamburger
  // - glissement du panneau menu vers la droite
  toggle.addEventListener("click", function(e) {
    e.preventDefault();
		this.classList.toggle('is-active');

    // on ajoute ici la class .show à la div#menu-panel
    // (et en css on fait un transform: translateX(0); )
    // écriture ternaire '? :'
   (this.classList.contains("is-active") === true) ? menu.classList.toggle("show"):menu.classList.remove("show");

  });

})();
