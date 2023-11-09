$("#list-content .card .card-button").click(function(){
    $("section#detail").slideDown();
    $("#list-overlay").fadeIn();
});

$("#list-overlay").click(function(){
    $("section#detail").slideUp();
    $("#list-overlay").fadeOut();
});