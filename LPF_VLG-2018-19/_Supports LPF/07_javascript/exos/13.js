// alert('test');
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {// si i est pair
        document.write("<h4>" + i + " est pair</h4>");
    } else {// sinon si i est impair
        document.write("<h4>" + i + " est impair</h4>");
    }
}
document.write("<hr />");

var chiffre = parseInt(prompt("Choisir un nombre entier"));
var chiffreMax = (chiffre + 10);
while (chiffre <= chiffreMax) {
    if (chiffre % 2 === 0) {
        document.write("<h4>" + chiffre + " est pair</h4>");
    } else {
        document.write("<h4>" + chiffre + " est impair</h4>");
    }
    chiffre++;
}
document.write("<hr />");

var nbUser = parseInt(prompt("Ton chiffre ?"));
var nbUserMax = (nbUser + 10);
for (var tour = nbUser; tour < nbUserMax; tour++) {
    if (tour % 2 === 0) {
        document.write("<h4>" + tour + " est pair</h4>");
    } else {
        document.write("<h4>" + tour + " est impair</h4>");
    }
}
