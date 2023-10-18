AOS.init();

var chevronContainer = document.querySelector(".chevron");

var sectionCible = document.getElementById("down");

chevronContainer.addEventListener("click", function() {

    sectionCible.scrollIntoView();
});
