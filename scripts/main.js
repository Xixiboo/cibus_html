$(document).ready(function(){

    // Afficher le bouton menu quand la taille de l'écran change
    $('header nav').before('<div class="nav_handler button"><span>menu</span></div>') // before permet de rajouter du HTML avant la balise nav

    $('header .nav_handler').on('click', function(){
        $('header nav').slideToggle(); //Javascript rajoute un "none" qui est là pour quand le menu n'apparait pas et l'enleve quand on appuie
    }); 
    

    $(window).load(function() {
        $('.flexslider').flexslider({
        animation: "slide"
        });
    });

});