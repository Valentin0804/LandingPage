// Función para mostrar u ocultar el botón según la posición de desplazamiento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var button = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

// Función para desplazar la página hacia arriba cuando se hace clic en el botón
document.getElementById("scrollTopButton").addEventListener("click", function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});
