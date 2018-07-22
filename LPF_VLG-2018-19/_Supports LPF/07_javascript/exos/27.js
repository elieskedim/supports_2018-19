function openTab(evt) {
    console.log('salut');
    // Déclarer les variables
    var i, tabcontent, tablinks;
    var cityName = this.dataset.city;
    // Selectionner TOUS les éléments class="tabcontent" puis les cacher
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // GSelectionner TOUS les éléments class="tablinks" puis retirer la class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Montrer la tab courante, puis ajouter la class "active" au bouton
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



var tabs = document.querySelectorAll('button.tablinks');
for(var i=0; i<tabs.length; i++) {
    tabs[i].addEventListener('click', openTab);
}
