// Créer un compteur de caractères "Twitter Like"

// L'utilisateur peut saisir un texte de 140 caractères dans un textarea#tweet-content
// Un paragraphe #counter-block affiche les caractères restants

// Comment procéder ?
// 1 Detecter l'evenement à chaque fois que l'utilisateur presse une touche
// 2 Dans la fonction lancée lorsque l'event est détecter calculer le nb de caractères restants et l'afficher dans le p#counter-block

// INDICATIONS
// -> Utiliser l'event keyup
// -> Utiliser la propriété elt.value pour récupérer la valeur d'un input ou d'un textarea
// -> Utiliser .length pour compter le nombre de caractères d'une chaîne de caractères
// -> Utiliser elt.textContent='' pour remplacer le contenu d'un élement HTML


// On selectionne l'element textarea et l'élement p#counterBlock
var textarea = document.querySelector('#tweetContent');
var blockCount = document.getElementById('counterBlock');

function count() {
    // la fonction count calcule la longueur de la chaîne de caractère contenue dans le textarea
    var count = 140-textarea.value.length;
    // et affche cette valeur dans la balise p#counterBlock grâce à innerHTML
    blockCount.innerHTML= count;

   // si le count descend sous 0 on ajoute la class red à la balise p#counterBlock
   if(count<0) {
    	blockCount.classList.add("red");
   }
   else if(count>=0) {
     	blockCount.classList.remove("red");
   }
   else{}
}

// on pose un écouteur d'évènement keyup sur le textarea.
// On déclenche la fonction count quand l'évènement se produit et au chargement de la page
textarea.addEventListener('keyup', count);
count();
