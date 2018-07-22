/*
1 On selectionne les éléments HTML et on les stock dans des variables réutilisable plus tard dans notre code
*/
var buttonElement = document.getElementById('myButton');
var list = document.getElementById('dropdown-list');

/* 3 On déclare les fonctions qui seront appelées lorsqu'un évènement est déclenché */
function showDropdown() {
    if(list.style.display=='block') {
        list.style.display='none';
    }
    else {
        list.style.display='block';
    }
}

function hideDropdown(e) {
    console.log(e.target);
    if(e.target !=buttonElement) {
        list.style.display='none';
    }
}


/* 2 on pose nos écouteurs d'évènements sur nos éléments HTML (Le bouton)*/
buttonElement.addEventListener('click', showDropdown);
document.addEventListener('click', hideDropdown);
document.addEventListener('keyup', showDropdown);
