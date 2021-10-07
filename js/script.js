"use strict";

$(document).ready(function() {

    // Toggle search dropdown menu

    $(".search-form > a").click(function(){
        $(".search-dropdown-menu").toggleClass("visible");
        
    });

    //Display Humberger Menu

    $('#sidebarCollapse').on('click', function () {
        $('.humberger-menu').addClass('menu-active');
    });

    //Close Humberger Menu

    $('.close i').on('click', function () {
        $('.humberger-menu').removeClass('menu-active');
    });

});


// close seach menu on window click
$(document).on("click", function(event){
    var $trigger = $(".search-form > a");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".search-dropdown-menu").removeClass("visible");
    }            
});


