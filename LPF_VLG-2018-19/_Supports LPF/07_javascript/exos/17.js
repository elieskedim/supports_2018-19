// boucle FOR
console.log("FOR");
var diese = "";

for (var i = 1; i < 8; i++) {
    diese += "#";
    console.log(diese);
}

// boucle WHILE
console.log("WHILE");
var ligne = "";
var i = 1;
while (i <= 7) {
    ligne = ligne + "#";
    // Autre possibilité avec l'opérateur +=
    //ligne += "#";
    console.log(ligne);
    i++;
}
