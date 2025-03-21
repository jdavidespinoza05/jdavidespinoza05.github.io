const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreLinks = document.getElementById("moreLinks");

learnMoreBtn.addEventListener("click", function () {
    moreLinks.classList.toggle("show"); // Alternar la clase sin modificar "display"
});