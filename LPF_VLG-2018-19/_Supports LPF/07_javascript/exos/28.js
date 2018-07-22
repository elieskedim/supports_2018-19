function accordion(evenement) {
    var cible = $(this);
    if(cible.find("ul").is(':hidden')) {
        cible.find( "ul" ).slideDown();
        cible.addClass('selected');
    }
    else {
        cible.find( "ul" ).slideUp();
        cible.removeClass('selected');
    }
}

$( "li.title" ).on('click', accordion);
