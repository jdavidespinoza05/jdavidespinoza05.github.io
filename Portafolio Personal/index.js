const learnMoreBtn = document.getElementById("learnMoreBtn");
const moreLinks = document.getElementById("moreLinks");

learnMoreBtn.addEventListener("click", function() {
    if (moreLinks.classList.contains("show")) {
        moreLinks.classList.remove("show"); // Ocultar con animación
        setTimeout(() => {
            moreLinks.style.display = "none"; // Ocultar completamente después de la animación
        }, 500); // Tiempo igual al de la transición en CSS
    } else {
        moreLinks.style.display = "block"; // Mostrar antes de la animación
        setTimeout(() => {
            moreLinks.classList.add("show"); // Aplicar animación
        }, 10); // Pequeño retraso para que el display block funcione
    }
});