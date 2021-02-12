// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    myFunction();
    
})




function myFunction() {

    if (links.classList.contains("show-links")){

        var element1 = document.getElementById("myUl");
        element1.classList.remove("show-links");

    }


    else {
    var element = document.getElementById("myUl");
    element.classList.add("show-links");
}}