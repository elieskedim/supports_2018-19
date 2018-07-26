/**
 * Tous Console OUVERTE !!
 * 
 */

 /**
  * BASES - AFFICHAGES
  */

/* Insertion d'un paragraphe 'Bonjour tout le monde !'
           sans les guillemets à l'emplacement exact de la balise <script> */
document.write('<p>Bonjour tout le monde !</p>');

// Affichage d'une popup avec le message souhaité.
window.alert('Bonjour tout le monde !');

console.log('Bonjour tout le monde !'); // Affichage dans la console de développement du message souhaité.

/**
 * VARIABLES & CONSTANTES
 */
// Déclaration d'une variable.
var uneVariable;

// Affectation d'une valeur à la variable.
uneVariable = 'Bonjour tout le monde !';

// Affichage du contenu de la variable directement dans la page HTML.
document.write(uneVariable);

var prenom;
prenom = 'Houda';
prenom = 'Mila';

alert(prenom);

// Déclaration d'une constante et affectation immédiate d'une valeur.
const UNE_CONSTANTE = 'Ceci est une constante !';

// La ligne de code ci-dessous est une erreur car on NE PEUT PAS modifier une constante.
// UNE_CONSTANTE = 'Modification de la constante';

// Affichage du contenu de la constante directement dans la page HTML.
document.write(UNE_CONSTANTE);

// Déclaration d'une constante.
const TVA = 20.0;

// Déclaration de trois variables.
var montantHT;
var montantTTC;
var montantTVA;

// Affectation d'une valeur à une variable.
montantHT = 100;

// Incrémentation d'une variable.
montantHT++;  // Identique à monMontantHT = monMontantHT + 1;

/* A partir de cette ligne monMontantHT vaut 101. */


// Décrémentation d'une variable.
montantHT--; // Identique à monMontantHT = monMontantHT - 1;

/* A partir de cette ligne monMontantHT vaut 100 de nouveau. */

/**
 * OPERATIONS ARITHMETIQUES
 */
// Opérations arithmétiques sur des variables et constantes.
montantTVA = montantHT * TVA / 100;
montantTTC = montantHT + montantTVA;

// Affichage du résultat directement dans la page HTML.
document.write(montantTTC);

/**
 * EXO
 */
/*
 * Demander à l'utilisateur de saisir quelque chose dans une popup,
 * lorsque la popup se referme le résultat sera affecté à la variable.
 */
prenom = window.prompt('Comment vous appelez-vous ?');

// Affichage du contenu de la variable dans un paragraphe HTML.
document.write('<p>');
document.write(prenom);
document.write('</p>');

/**
 * CONCATENATION
 */
// Déclaration de deux variables.
var age;
var prenom;

// Affectation d'une valeur à une variable.
prenom = 'Tom';

/*
 * Concaténation d'un nombre avec une chaîne de caractères.
 * Le + ici est compris comme une concaténation car la valeur ' ans' n'est pas un nombre.
 *
 * Affectation du résultat à une variable.
 */
age = 30 + ' ans';

// La variable age vaut maintenant la chaîne de caractères '30 ans'.

/*
 * Affichage de deux paragraphes directement dans la page HTML.
 *
 * Les chaînes de caractères sont concaténées avec le +
 */
document.write("<p>Bonjour, je m'appelle " + prenom + '</p>');
document.write("<p>J'ai " + age + '</p>');

/*
 * On utilise des guillemets doubles pour certaines chaînes de caractères car elles
 * contiennent un ou plusieurs caractères de guillemets simples.
 */

 /**
  * PROMPT => gérer les données de Type NUMBER - Integer & Float
  */
// Déclaration de trois variables.
var nombre1;
var nombre2;
var somme;


/*
 * Affectation de la saisie de l'utilisateur aux variables.
 *
 * Les deux variables sont donc de type String.
 */
nombre1 = window.prompt('Veuillez saisir un premier nombre :');
nombre2 = window.prompt('Veuillez saisir un deuxième nombre :');

/*
 * window.prompt() a renvoyé une chaîne de caractères même si on a saisi un nombre.
 * On doit donc convertir nos variables en nombres avant de pouvoir les additionner.
 *
 * La fonction parseInt() ou parseFloat() convertit une variable de type String en une variable de type Number.
 */
nombre1 = parseInt(nombre1);
nombre2 = parseInt(nombre2);


/*
 * Addition des deux variables.
 *
 * Ce n'est PAS une concaténation car les deux variables sont de type Number.
 */
somme = nombre1 + nombre2;


// Affichage du résultat directement dans la page HTML.
document.write(somme);

/**
 * TABLEAUX ou ARRAYS
 */
// Déclaration de deux variables.
var jourDimanche;
var monTableau;


// Affectation d'un tableau vide à une variable.
monTableau = new Array();   // syntaxe longue

// La syntaxe raccourcie est : monTableau = [];


// Affectation de valeurs au tableau.
monTableau[0] = 'Lundi';
monTableau[1] = 'Mardi';
monTableau[2] = 'Mercredi';
monTableau[3] = 'Jeudi';
monTableau[4] = 'Vendredi';
monTableau[5] = 'Samedi';
monTableau[6] = 'Dimanche';

// La syntaxe raccourcie est : monTableau = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

// Affectation d'une valeur à la variable.
jourDimanche = 6;


/*
 * Affichage du contenu d'une partie du tableau directement dans la page HTML.
 *
 * La variable jourDimanche est utilisée comme un indice dans le tableau monTableau.
 */
document.write('Le premier jour de la semaine est le ' + monTableau[0] + ' ');
document.write('et le dernier jour de la semaine est le ' + monTableau[jourDimanche] + '.');