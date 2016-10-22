$(function () {

    $(window).scroll(function () {
        //navbar-fixed-top

        var navbar = $("#top-navbar");
        
        if ($(window).scrollTop() >= 60) {
            if(!navbar.hasClass('navbar-fixed-top')) {    
                navbar.addClass('navbar-fixed-top');
            }
        }
        else {
            if(navbar.hasClass('navbar-fixed-top')) {
                navbar.removeClass('navbar-fixed-top');
            }
        }
    });

});