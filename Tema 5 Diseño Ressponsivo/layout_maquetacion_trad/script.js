document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    var menuContent = document.querySelector('.menu-content');

    // Agrega un evento de clic al botón de hamburguesa
    menuBtn.addEventListener('click', function() {
        // Alternar la visibilidad del contenido del menú
        menuContent.classList.toggle('hidden');
        // Ocultar el botón de hamburguesa cuando se despliega el menú
        menuBtn.classList.toggle('hidden');
    });

    // Agrega un evento de clic al documento para cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        var isClickInsideMenu = menuContent.contains(event.target); // Verifica si el clic ocurrió dentro del menú
        var isClickInsideMenuBtn = menuBtn.contains(event.target); // Verifica si el clic ocurrió dentro del botón de menú
        if (!isClickInsideMenu && !isClickInsideMenuBtn) { // Si el clic no ocurrió dentro del menú ni dentro del botón de menú
            menuContent.classList.add('hidden'); // Oculta el menú
            menuBtn.classList.remove('hidden'); // Muestra el botón de menú
        }
    });
});
