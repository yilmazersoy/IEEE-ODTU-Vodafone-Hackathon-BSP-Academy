$(document).ready(function(){
    var category;
    var city;

    $("#category-content .category").click(function(){
        category = $(this).attr("data");        
        $("section#category").fadeOut();
        $("section#city").fadeIn();
    });

    $("#city-content .city").click(function(){
        city = $(this).attr("data");
        $.ajax({
            
        });
        $("main").load("list.html", function(){

        });
    });

    $("#city-button a").click(function(){
        $("section#category").fadeIn();
        $("section#city").fadeOut();
    });
});