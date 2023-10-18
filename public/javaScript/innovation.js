AOS.init();

var chevronContainer = document.getElementById("chevronContainer");

var sectionCible = document.getElementById("down");

chevronContainer.addEventListener("click", function() {

    sectionCible.scrollIntoView();
});
