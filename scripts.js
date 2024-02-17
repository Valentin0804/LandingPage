
// Agregar un evento de clic a todos los enlaces del menú de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        // Obtener el destino de la sección desde el atributo href del enlace
        const targetId = this.getAttribute('href').substring(1);
        // Desplazarse suavemente hasta el elemento de destino utilizando scrollIntoView
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

