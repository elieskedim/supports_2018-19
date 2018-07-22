var jour = prompt("Quel jour sommes-nous ?");
if (jour === "lundi") {/* ... lundi ... */
    document.write("Demain nous serons mardi...");
} else if (jour === "mardi") {/* ... mardi ... */
    document.write("Demain nous serons mercredi...");
} else if (jour === "mercredi") {/* ... mercredi ... */
    document.write("Demain nous serons jeudi...");
} else if (jour === "jeudi") {/* ... jeudi ... */
    document.write("Demain nous serons vendredi...");
} else if (jour === "vendredi") {/* ... vendredi ... */
    document.write("Bon week-end");
} else if (jour === "samedi") {/* ... samedi ... */
    document.write("Demain nous serons dimanche...");
} else if (jour === "dimanche") {/* ... dimanche ... */
    document.write("Bon courage ;-)");
} else {/* ... autres cas ... */
    document.write("Jour inconnu...");
}
