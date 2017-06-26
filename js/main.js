$(function() {
    var menuFirma = $("#firma-menu");
    var menuOferta = $("#oferta-menu");
    var menuKontakt = $("#kontakt-menu");

    $("#firma-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#o-firmie").offset().top
        }, 1500);
    });

    $("#oferta-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#oferta").offset().top
        }, 1500);
    });

    $("#kontakt-menu").click(function() {
        $('html, body').animate({
            scrollTop: $("#kontakt").offset().top
        }, 1500);
    });
});
