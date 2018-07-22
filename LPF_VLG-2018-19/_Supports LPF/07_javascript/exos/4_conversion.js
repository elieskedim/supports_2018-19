var tempC = prompt("Température en Celsius :");
console.log("1 Celsius vaut " + ((1 * 1.8) + 32) + " Farhenheit.");
document.write("<h4>Résultat :<br />1 Celsius vaut " + ((1 * 1.8) + 32) + " Farhenheit.</h4>");
console.log(tempC + " Celsius = " + ((tempC * 1.8 + 32) + " Farhenheit.");
document.write("<h4>" + tempC + " Celsius = " + ((tempC * 1.8) + 32) + " Farhenheit.</h4>");


var tempF = (tempC * 1.8) + 32;
console.log("1 Farhenheit vaut " + ((1 * 1.8) + 32) + " Celsius.");
document.write("<h4>1 Farhenheit vaut " + ((1 * 1.8) + 32) + " Celsius.</h4>");
console.log(tempF + " Farhenheit = " + ((tempF - 32) / 1.8) + " Celsius.");
document.write("<h4>" + tempF + " Farhenheit = " + ((tempF - 32) / 1.8) + " Celsius.</h4>");
