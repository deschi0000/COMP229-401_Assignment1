// IIFE -- Immediately Invoked Function Expression
// Dave von Deschwanden - 301303220 - 05.2023

(function(){

    function Start() 
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);

})();


$(() => {
    console.log("from the query!");

    // fade in the titles
    $("h1").animate({
        opacity: 1
    }, 1500)
    $("h3").animate({
        opacity: 1
    }, 2750)




})
