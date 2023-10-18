AOS.init();

var chevronContainer = document.getElementById("containerChev");

var sectionCible = document.getElementById("down");

chevronContainer.addEventListener("click", function() {

    sectionCible.scrollIntoView();
});
